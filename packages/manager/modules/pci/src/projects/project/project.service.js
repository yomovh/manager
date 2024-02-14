import {
  URL_INFO,
  DISCOVERY_PROJECT_ACTIVATION_PAYLOAD,
  FULL_PROJECT_PLANCODE,
  PROJECT_ORDER_STATUS,
} from './project.constants';
import {
  ORDER_FOLLOW_UP_STEP_ENUM,
  ORDER_FOLLOW_UP_HISTORY_STATUS_ENUM,
  ORDER_FOLLOW_UP_STATUS_ENUM,
} from '../projects.constant';

export default class ProjectService {
  /* @ngInject */
  constructor($http, $q, iceberg, coreConfig) {
    this.project = {};
    this.$http = $http;
    this.$q = $q;
    this.iceberg = iceberg;
    this.coreConfig = coreConfig;
  }

  getProjectInfo() {
    return this.project;
  }

  getProjectOrder(projectId) {
    return this.$http
      .get(`/cloud/order/?planCode=${FULL_PROJECT_PLANCODE}`)
      .then(({ data: orders }) =>
        orders
          .sort(({ date: dateA }, { date: dateB }) => (dateB > dateA ? 1 : -1))
          .find(({ serviceName }) => serviceName === projectId),
      )
      .catch(() => null);
  }

  getProjectOrderStatus(projectId) {
    return this.getProjectOrder(projectId)
      .then(({ orderId }) =>
        this.$q
          .all([
            this.getVouchersCreditDetails(projectId),
            this.getOrderFollowUp(orderId),
          ])
          .then(([[voucher], followUp]) => ({
            ...PROJECT_ORDER_STATUS,
            orderId,
            ...(voucher && { voucher }),
            ...ProjectService.extractOrderStatusFromFollowUp(followUp),
          })),
      )
      .catch(() => ({ ...PROJECT_ORDER_STATUS }));
  }

  getOrderFollowUp(orderId) {
    return this.$http
      .get(`/me/order/${orderId}/followUp`)
      .then(({ data }) => data);
  }

  static extractOrderStatusFromFollowUp(followUp) {
    const { VALIDATING, DELIVERING } = ORDER_FOLLOW_UP_STEP_ENUM;
    const { DONE, ERROR } = ORDER_FOLLOW_UP_STATUS_ENUM;
    const {
      FRAUD_MANUAL_REVIEW,
      FRAUD_REFUSED,
      PAYMENT_INITIATED,
      PAYMENT_RECEIVED,
    } = ORDER_FOLLOW_UP_HISTORY_STATUS_ENUM;

    const result = {};
    const labels =
      followUp
        .find(({ step }) => step === VALIDATING)
        ?.history.map(({ label }) => label) || [];

    result.hasError = followUp.some(({ status }) => status === ERROR);
    result.isRefusedByAntiFraud = labels.includes(FRAUD_REFUSED);
    result.isManuallyReviewedByAntiFraud =
      !result.isRefusedByAntiFraud && labels.includes(FRAUD_MANUAL_REVIEW);
    result.isNotActivated =
      result.hasError ||
      result.isRefusedByAntiFraud ||
      result.isManuallyReviewedByAntiFraud;
    result.isActivating =
      !result.isNotActivated &&
      [PAYMENT_INITIATED, PAYMENT_RECEIVED].some((lb) => labels.includes(lb));
    result.isActivated = followUp.some(
      ({ step, status }) => step === DELIVERING && status === DONE,
    );

    return result;
  }

  getDocumentUrl(type) {
    const { ovhSubsidiary } = this.coreConfig.getUser();
    return URL_INFO[type][ovhSubsidiary] || URL_INFO[type].DEFAULT;
  }

  setProjectInfo(project = {}) {
    this.project = project;
  }

  getServiceInfo(serviceName) {
    return this.$http
      .get(`/cloud/project/${serviceName}/serviceInfos`)
      .then(({ data }) => data)
      .catch(() => ({}));
  }

  getCustomerRegions(serviceName, withPaginationMode = false) {
    const requestHeader = withPaginationMode
      ? {
          'X-Pagination-Mode': 'CachedObjectList-Pages',
          'X-Pagination-Size': 5000,
        }
      : null;
    return this.$http
      .get(`/cloud/project/${serviceName}/region`, {
        headers: requestHeader,
      })
      .then(({ data: regions }) => regions);
  }

  getStorageRegions(projectId, regionCapacity) {
    return this.getCustomerRegions(projectId, true).then((regions) => {
      return regions.filter(({ services }) =>
        services.find(({ name }) => name === regionCapacity),
      );
    });
  }

  getS3StorageRegions(projectId, regionCapacity) {
    return this.getCustomerRegions(projectId, true).then((regions) => {
      return regions.filter(({ services }) =>
        services.find(
          ({ name }) =>
            name === regionCapacity[0] || name === regionCapacity[1],
        ),
      );
    });
  }

  getVouchersCreditDetails(serviceName) {
    return this.iceberg(`/cloud/project/${serviceName}/credit`)
      .query()
      .expand('CachedObjectList-Pages')
      .execute(null, true)
      .$promise.then(({ data }) => data)
      .catch(() => []);
  }

  activateDiscoveryProject(serviceId, autoPay = true) {
    return this.$http.post(
      `/services/${serviceId}/upgrade/${FULL_PROJECT_PLANCODE}/execute`,
      {
        ...DISCOVERY_PROJECT_ACTIVATION_PAYLOAD,
        autoPayWithPreferredPaymentMethod: autoPay,
      },
    );
  }

  simulateActivateDiscoveryProject(serviceId) {
    return this.$http.post(
      `/services/${serviceId}/upgrade/${FULL_PROJECT_PLANCODE}/simulate`,
      DISCOVERY_PROJECT_ACTIVATION_PAYLOAD,
    );
  }

  claimVoucher(projectId, data) {
    return this.$http.post(`/cloud/project/${projectId}/credit`, data);
  }
}

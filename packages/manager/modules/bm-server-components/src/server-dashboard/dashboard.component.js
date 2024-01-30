import controller from './dashboard.controller';
import template from './dashboard.html';

export default {
  bindings: {
    statePrefix: '<',
    bandwidthInformations: '<',
    biosSettings: '<',
    changeOwnerAvailable: '<',
    currentActiveLink: '<',
    isMonitoringOptionsAvailable: '<',
    changeOwnerUrl: '<',
    eligibleData: '<',
    goToCommit: '<',
    goToCancelCommit: '<',
    goToCancelResiliation: '<',
    goToResiliation: '<',
    goToSgxIntroduction: '<',
    goToSgxManage: '<',
    goToMonitoringUpdate: '<',
    isCommitmentAvailable: '<',
    ola: '<',
    orderPrivateBandwidthLink: '<',
    orderPublicBandwidthLink: '<',
    resiliatePrivateBandwidthLink: '<',
    resiliatePublicBandwidthLink: '<',
    server: '<',
    serviceInfos: '<',
    specifications: '<',
    technicalDetails: '<',
    trackingPrefix: '<',
    trafficInformation: '<',
    user: '<',
    vrackInfos: '<',
    worldPart: '<',
    goToUpgrade: '<',
    terminateLink: '<',
    upgradeTask: '<',
    serverName: '<',
    goToNetboot: '<',
    goToNameEdit: '<',
    handleError: '<',
    handleSuccess: '<',
    nutanixCluster: '<',
    goToUpdateReverseDns: '<',
    goToDeleteReverseDns: '<',
    goToTrafficOrder: '<',
    goToTrafficCancel: '<',
    serverType: '<?',
  },
  controller,
  template,
  require: {
    dedicatedServer: '^serverMainPage',
  },
};

import { SLIDE_ANIMATION_INTERVAL, IMAGES } from './constants';
import { ORDER_FOLLOW_UP_POLLING_INTERVAL } from '../projects.constant';

export default class PciProjectUpdatingCtrl {
  /* @ngInject */
  constructor($interval, ProjectService) {
    this.$interval = $interval;
    this.ProjectService = ProjectService;

    this.slideIntervalId = null;
    this.pollIntervalId = null;
    this.image = null;
  }

  $onInit() {
    this.pollIntervalId = this.pollOrder();
    this.slideIntervalId = this.slideImages();
  }

  $onDestroy() {
    this.$interval.cancel(this.pollIntervalId);
    this.$interval.cancel(this.slideIntervalId);
  }

  pollOrder() {
    return this.$interval(() => {
      this.ProjectService.getProjectOrderStatus(this.projectId).then(
        ({ hasError, isNotActivated, isActivated, voucher }) => {
          const action = (() => {
            if (hasError) return () => this.onProjectUpdateFail();
            if (isNotActivated) return () => this.onProjectUpdateRefused();
            if (isActivated) return () => this.onProjectUpdated(voucher);
            return null;
          })();
          if (action) {
            this.$onDestroy();
            action();
          }
        },
      );
    }, ORDER_FOLLOW_UP_POLLING_INTERVAL);
  }

  slideImages() {
    let images;
    return this.$interval(() => {
      if (!images.length) images = [...IMAGES];
      this.image = images.shift();
    }, SLIDE_ANIMATION_INTERVAL);
  }
}

export const DISCOVER_LINK =
  'https://horizon.cloud.ovh.net/project/load_balancer';

export const TRACKING_CHAPTER_1 = 'PublicCloud';

export const TRACKING_NAME =
  'pci::projects::project::octavia-loadbalancer::detail';

const SUCCESS_BADGE_CLASS = 'oui-badge_success';
const WARNING_BADGE_CLASS = 'oui-badge_warning';
const ERROR_BADGE_CLASS = 'oui-badge_error';

export const PROVISIONING_STATUS_BADGES = {
  active: SUCCESS_BADGE_CLASS,
  deleted: SUCCESS_BADGE_CLASS,
  creating: WARNING_BADGE_CLASS,
  deleting: WARNING_BADGE_CLASS,
  updating: WARNING_BADGE_CLASS,
  error: ERROR_BADGE_CLASS,
};

export const OPERATING_STATUS_BADGES = {
  online: SUCCESS_BADGE_CLASS,
  offline: WARNING_BADGE_CLASS,
  degraded: WARNING_BADGE_CLASS,
  draining: WARNING_BADGE_CLASS,
  noMonitor: WARNING_BADGE_CLASS,
  error: ERROR_BADGE_CLASS,
};

export const REGEX = {
  ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
};

export default {
  DISCOVER_LINK,
  TRACKING_NAME,
  TRACKING_CHAPTER_1,
  PROVISIONING_STATUS_BADGES,
  OPERATING_STATUS_BADGES,
};

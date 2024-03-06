import CREDIT_CARD from './assets/credit_card.png';
import PAYPAL from './assets/paypal.png';
import BANK_ACCOUNT from './assets/bank_account.png';

export const DEFAULT_DISPLAY_PER_LINE = 3;

export const DEFAULT_SELECTED_PAYMENT_METHOD_TYPE = 'CREDIT_CARD';

export const PAYPAL_PAYMENT_METHOD = 'PAYPAL';

export const BANK_ACCOUNT_PAYMENT_METHOD = 'BANK_ACCOUNT';

export const SEPA_DIRECT_DEBIT_PAYMENT_METHOD = 'SEPA_DIRECT_DEBIT';

export const DEFAULT_ORDERED_PAYMENT_METHOD_TYPES = [
  DEFAULT_SELECTED_PAYMENT_METHOD_TYPE,
  PAYPAL_PAYMENT_METHOD,
  SEPA_DIRECT_DEBIT_PAYMENT_METHOD,
  BANK_ACCOUNT_PAYMENT_METHOD,
];

export const FALLBACK_IMAGES = {
  CREDIT_CARD,
  PAYPAL,
  BANK_ACCOUNT,
};

export const PAYMENTS_RUPAY_MESSAGE_FEATURE = 'payments:rupay-message';

export const CHARGES = 2;

export const SUBSIDIARIES_NEEDING_SEPA_INFORMATION = ['IE'];

export default {
  DEFAULT_DISPLAY_PER_LINE,
  DEFAULT_ORDERED_PAYMENT_METHOD_TYPES,
  DEFAULT_SELECTED_PAYMENT_METHOD_TYPE,
  FALLBACK_IMAGES,
  PAYMENTS_RUPAY_MESSAGE_FEATURE,
  CHARGES,
  SUBSIDIARIES_NEEDING_SEPA_INFORMATION,
};

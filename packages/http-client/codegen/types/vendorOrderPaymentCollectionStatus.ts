/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The payment collection's status.
 */
export type VendorOrderPaymentCollectionStatus = typeof VendorOrderPaymentCollectionStatus[keyof typeof VendorOrderPaymentCollectionStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const VendorOrderPaymentCollectionStatus = {
  canceled: 'canceled',
  not_paid: 'not_paid',
  awaiting: 'awaiting',
  authorized: 'authorized',
  partially_authorized: 'partially_authorized',
} as const;

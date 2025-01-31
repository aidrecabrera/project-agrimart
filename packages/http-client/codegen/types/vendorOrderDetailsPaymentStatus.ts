/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The order's payment status.
 */
export type VendorOrderDetailsPaymentStatus = typeof VendorOrderDetailsPaymentStatus[keyof typeof VendorOrderDetailsPaymentStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const VendorOrderDetailsPaymentStatus = {
  canceled: 'canceled',
  not_paid: 'not_paid',
  awaiting: 'awaiting',
  authorized: 'authorized',
  partially_authorized: 'partially_authorized',
  captured: 'captured',
  partially_captured: 'partially_captured',
  partially_refunded: 'partially_refunded',
  refunded: 'refunded',
  requires_action: 'requires_action',
} as const;

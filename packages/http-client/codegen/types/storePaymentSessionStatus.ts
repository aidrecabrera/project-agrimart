/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The payment session's status.
 */
export type StorePaymentSessionStatus = typeof StorePaymentSessionStatus[keyof typeof StorePaymentSessionStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StorePaymentSessionStatus = {
  authorized: 'authorized',
  captured: 'captured',
  canceled: 'canceled',
  pending: 'pending',
  requires_more: 'requires_more',
  error: 'error',
} as const;

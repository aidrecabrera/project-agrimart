/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The return's status.
 */
export type AdminReturnStatus = typeof AdminReturnStatus[keyof typeof AdminReturnStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminReturnStatus = {
  canceled: 'canceled',
  requested: 'requested',
  received: 'received',
  partially_received: 'partially_received',
} as const;

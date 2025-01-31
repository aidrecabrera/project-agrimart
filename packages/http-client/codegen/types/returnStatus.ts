/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The return's status.
 */
export type ReturnStatus = typeof ReturnStatus[keyof typeof ReturnStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ReturnStatus = {
  canceled: 'canceled',
  requested: 'requested',
  received: 'received',
  partially_received: 'partially_received',
} as const;

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The claim's reason.
 */
export type BaseClaimItemReason = typeof BaseClaimItemReason[keyof typeof BaseClaimItemReason];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BaseClaimItemReason = {
  missing_item: 'missing_item',
  wrong_item: 'wrong_item',
  production_failure: 'production_failure',
  other: 'other',
} as const;

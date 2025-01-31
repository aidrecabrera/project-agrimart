/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The sales channels to add or remove from the publishable API key.
 */
export type AdminPostApiKeysIdSalesChannelsBody = {
  /** The sales channels to add to the publishable API key. */
  add?: string[];
  /** The sales channels to remove from the publishable API key. */
  remove?: string[];
};

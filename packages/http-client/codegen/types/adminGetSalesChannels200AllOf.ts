/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The paginated list of sales channels.
 */
export type AdminGetSalesChannels200AllOf = {
  /** The total number of items. */
  count: number;
  /** The maximum number of items returned. */
  limit: number;
  /** The number of items skipped before retrieving the returned items. */
  offset: number;
};

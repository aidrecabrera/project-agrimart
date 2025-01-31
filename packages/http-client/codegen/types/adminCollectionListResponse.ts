/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCollection } from './adminCollection';

/**
 * The paginated list of product collections.
 */
export interface AdminCollectionListResponse {
  /** The list of product collections. */
  collections: AdminCollection[];
  /** The total number of items. */
  count: number;
  /** The maximum number of items returned. */
  limit: number;
  /** The number of items skipped before retrieving the returned results. */
  offset: number;
}

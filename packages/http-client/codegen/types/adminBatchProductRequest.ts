/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCreateProduct } from './adminCreateProduct';
import type { AdminBatchUpdateProduct } from './adminBatchUpdateProduct';

/**
 * The products to create, update, or delete.
 */
export interface AdminBatchProductRequest {
  /** The products to create. */
  create?: AdminCreateProduct[];
  /** The products to delete. */
  delete?: string[];
  /** The products to update. */
  update?: AdminBatchUpdateProduct[];
}

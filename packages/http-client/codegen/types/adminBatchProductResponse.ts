/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminProduct } from './adminProduct';
import type { AdminBatchProductResponseDeleted } from './adminBatchProductResponseDeleted';

/**
 * The details of the products created, updated, or deleted.
 */
export interface AdminBatchProductResponse {
  /** The created products */
  created: AdminProduct[];
  /** The deleted products' details. */
  deleted: AdminBatchProductResponseDeleted;
  /** The updated products. */
  updated: AdminProduct[];
}

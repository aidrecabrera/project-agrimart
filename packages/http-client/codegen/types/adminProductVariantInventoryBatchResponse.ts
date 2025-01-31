/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminProductVariantInventoryBatchResponseCreated } from './adminProductVariantInventoryBatchResponseCreated';
import type { AdminProductVariantInventoryBatchResponseDeleted } from './adminProductVariantInventoryBatchResponseDeleted';
import type { AdminProductVariantInventoryBatchResponseUpdated } from './adminProductVariantInventoryBatchResponseUpdated';

/**
 * The created, updated, and deleted associations between variants and inventory items.
 */
export interface AdminProductVariantInventoryBatchResponse {
  created: AdminProductVariantInventoryBatchResponseCreated;
  deleted: AdminProductVariantInventoryBatchResponseDeleted;
  updated: AdminProductVariantInventoryBatchResponseUpdated;
}

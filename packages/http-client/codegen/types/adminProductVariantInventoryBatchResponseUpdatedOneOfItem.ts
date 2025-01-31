/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminProductVariantInventoryBatchResponseUpdatedOneOfItemInventoryService } from './adminProductVariantInventoryBatchResponseUpdatedOneOfItemInventoryService';
import type { AdminProductVariantInventoryBatchResponseUpdatedOneOfItemProductService } from './adminProductVariantInventoryBatchResponseUpdatedOneOfItemProductService';

/**
 * An updated association between a product variant and an inventory item.
 */
export type AdminProductVariantInventoryBatchResponseUpdatedOneOfItem = {
  /** The inventory item's details. */
  inventoryService: AdminProductVariantInventoryBatchResponseUpdatedOneOfItemInventoryService;
  /** The product variant's details. */
  productService: AdminProductVariantInventoryBatchResponseUpdatedOneOfItemProductService;
};

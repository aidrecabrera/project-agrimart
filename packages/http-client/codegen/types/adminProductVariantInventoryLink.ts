/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminProductVariantInventoryLinkInventory } from './adminProductVariantInventoryLinkInventory';
import type { AdminProductVariantInventoryLinkProduct } from './adminProductVariantInventoryLinkProduct';

/**
 * The details of an association between a product variant and an inventory item.
 */
export interface AdminProductVariantInventoryLink {
  /** The inventory item's details. */
  Inventory: AdminProductVariantInventoryLinkInventory;
  /** The product variant's details. */
  Product: AdminProductVariantInventoryLinkProduct;
}

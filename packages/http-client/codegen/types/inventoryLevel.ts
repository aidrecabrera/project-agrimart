/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { InventoryLevelMetadata } from './inventoryLevelMetadata';

/**
 * The inventory level's details
 */
export interface InventoryLevel {
  /** The inventory level's available quantity. */
  available_quantity: number;
  /** The inventory level's ID. */
  id: string;
  /** The inventory level's incoming quantity. */
  incoming_quantity: number;
  /** The ID of the associated inventory item. */
  inventory_item_id: string;
  /** The ID of the associated location. */
  location_id: string;
  /** The inventory level's metadata, can hold custom key-value pairs. */
  metadata?: InventoryLevelMetadata;
  /** The inventory level's reserved quantity. */
  reserved_quantity: number;
  /** The inventory level's stocked quantity. */
  stocked_quantity: number;
}

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The inventory level's details.
 */
export type AdminPostInventoryItemsIdLocationLevelsBatchBodyCreateItem = {
  /** The inventory level's incoming quantity. */
  incoming_quantity?: number;
  /** The ID of the associated location. */
  location_id: string;
  /** The inventory level's stocked quantity. */
  stocked_quantity?: number;
};

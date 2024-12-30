/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Update a product variant's association with an inventory item.
 */
export type AdminPostProductsIdVariantsInventoryItemsBatchBodyUpdateItem = {
  /** The ID of the inventory item the variant is associated with. */
  inventory_item_id: string;
  /** The number of units a single quantity is equivalent to. For example, if a customer orders one quantity of the variant, Medusa checks the availability of the quantity multiplied by the value set for `required_quantity`. When the customer orders the quantity, Medusa reserves the ordered quantity multiplied by the value set for `required_quantity`. */
  required_quantity: number;
  /** The ID of the variant. */
  variant_id: string;
};

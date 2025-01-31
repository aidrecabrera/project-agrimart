/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The details of the line item to create.
 */
export interface StoreCreateReturnItem {
  /** The item's ID. */
  id: string;
  /** A note with more details about the returned item. */
  note?: string;
  /** The item's quantity. */
  quantity: number;
  /** The ID of the associated return reason. */
  reason_id?: string;
}

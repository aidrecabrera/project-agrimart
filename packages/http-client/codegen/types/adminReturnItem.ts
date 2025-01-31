/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminReturnItemMetadata } from './adminReturnItemMetadata';

/**
 * The return item's details.
 */
export interface AdminReturnItem {
  /** The received damaged quantity of the item, which isn't added to the stocked inventory quantity of the item. */
  damaged_quantity: number;
  /** The return item's ID. */
  id: string;
  /** The ID of the associated order item. */
  item_id: string;
  /** The return item's metadata, can hold custom key-value pairs. */
  metadata?: AdminReturnItemMetadata;
  /** A note about why the item was returned. */
  note?: string;
  /** The return item's quantity. */
  quantity: number;
  /** The ID of the return reason associated with the item. */
  reason_id?: string;
  /** The received quantity of the item. This quantity is added to the stocked inventory quantity of the item. */
  received_quantity: number;
  /** The ID of the return this return item belongs to. */
  return_id: string;
}

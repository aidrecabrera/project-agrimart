/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { BaseOrderItemDetailItem } from './baseOrderItemDetailItem';
import type { BaseOrderItemDetailMetadata } from './baseOrderItemDetailMetadata';

/**
 * The item's detail.
 */
export interface BaseOrderItemDetail {
  /** The date the detail was created. */
  created_at: string;
  /** The item's delivered quantity. */
  delivered_quantity: number;
  /** The item's fulfilled quantity. */
  fulfilled_quantity: number;
  /** the detail's ID. */
  id: string;
  item: BaseOrderItemDetailItem;
  /** the ID of the associated line item. */
  item_id: string;
  /** The item's metadata, can hold custom key-value pairs. */
  metadata: BaseOrderItemDetailMetadata;
  /** The item's quantity. */
  quantity: number;
  /** The item's quantity that's returned but damaged. So, it's not added to the underlying variant's stocked quantity. */
  return_dismissed_quantity: number;
  /** The item's quantity that's returned and added to the underlying variant's stocked quantity. */
  return_received_quantity: number;
  /** The item's quantity that's requested to be returned. */
  return_requested_quantity: number;
  /** The item's shipped quantity. */
  shipped_quantity: number;
  /** The date the detail was updated. */
  updated_at: string;
  /** The item's quantity that's removed from the order. */
  written_off_quantity: number;
}

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { BaseClaimItemMetadata } from './baseClaimItemMetadata';
import type { BaseClaimItemRawQuantity } from './baseClaimItemRawQuantity';
import type { BaseClaimItemReason } from './baseClaimItemReason';

/**
 * The claim item's details.
 */
export interface BaseClaimItem {
  /** The ID of the claim this item belongs to. */
  claim_id: string;
  /** The date the claim was created. */
  created_at?: string;
  /** The claim item's ID. */
  id: string;
  /** The ID of the item in the order. */
  item_id: string;
  /** The item's metadata, can hold custom key-value pairs. */
  metadata?: BaseClaimItemMetadata;
  /** The ID of the order this item belongs to. */
  order_id: string;
  /** The quantity claimed. */
  quantity: number;
  /** The quantity claimed. */
  raw_quantity: BaseClaimItemRawQuantity;
  /** The claim's reason. */
  reason: BaseClaimItemReason;
  /** The date the claim was updated. */
  updated_at?: string;
}

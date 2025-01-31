/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { RefundReasonMetadata } from './refundReasonMetadata';

/**
 * The refund reason's details.
 */
export interface RefundReason {
  /** The date the refund reason was created. */
  created_at: string;
  /** The refund reason's description. */
  description?: string;
  /** The refund reason's ID. */
  id: string;
  /** The refund reason's label. */
  label: string;
  /** The refund reason's metadata, can hold custom key-value pairs. */
  metadata: RefundReasonMetadata;
  /** The date the refund reason was updated. */
  updated_at: string;
}

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPostReturnsReqSchemaMetadata } from './adminPostReturnsReqSchemaMetadata';

/**
 * The return's details.
 */
export interface AdminPostReturnsReqSchema {
  /** The return's description. */
  description?: string;
  /** A note viewed only by admin users. */
  internal_note?: string;
  /** The ID of the location the items are returned to. */
  location_id?: string;
  /** The return's metadata, can hold custom key-value pairs. */
  metadata?: AdminPostReturnsReqSchemaMetadata;
  /** Whether to send the customer a notification about the created return. */
  no_notification?: boolean;
  /** The ID of the order the return belongs to. */
  order_id: string;
}

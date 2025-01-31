/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPostOrderClaimsReqSchemaMetadata } from './adminPostOrderClaimsReqSchemaMetadata';
import type { AdminPostOrderClaimsReqSchemaType } from './adminPostOrderClaimsReqSchemaType';

/**
 * The claim's details.
 */
export interface AdminPostOrderClaimsReqSchema {
  /** The claim's description. */
  description?: string;
  /** A note viewed only by admin users. */
  internal_note?: string;
  /** The claim's metadata, can hold custom key-value pairs. */
  metadata?: AdminPostOrderClaimsReqSchemaMetadata;
  /** The ID of the order the claim is created for. */
  order_id: string;
  /** The ID of the associated return reason. */
  reason_id?: string;
  /** The claim's type. */
  type: AdminPostOrderClaimsReqSchemaType;
}

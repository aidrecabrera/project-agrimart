/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPostClaimsShippingActionReqSchemaMetadata } from './adminPostClaimsShippingActionReqSchemaMetadata';

/**
 * The details to update in the shipping method.
 */
export interface AdminPostClaimsShippingActionReqSchema {
  /** The shipping method's custom amount. */
  custom_amount?: number;
  /** A note only viewed by admin users. */
  internal_note?: string;
  /** The claim's metadata, can hold custom key-value pairs. */
  metadata?: AdminPostClaimsShippingActionReqSchemaMetadata;
}

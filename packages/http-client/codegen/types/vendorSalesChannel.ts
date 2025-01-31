/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { VendorSalesChannelMetadata } from './vendorSalesChannelMetadata';

/**
 * The sales channel's details.
 */
export interface VendorSalesChannel {
  /** The date the sales channel was created. */
  created_at?: string;
  /** The sales channel's description. */
  description?: string;
  /** The sales channel's ID. */
  id?: string;
  /** Whether the sales channel is disabled. */
  is_disabled?: boolean;
  /** The sales channel's metadata, can hold custom key-value pairs. */
  metadata?: VendorSalesChannelMetadata;
  /** The sales channel's name. */
  name?: string;
  /** The date the sales channel was updated. */
  updated_at?: string;
}

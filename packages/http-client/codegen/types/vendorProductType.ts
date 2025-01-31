/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { VendorProductTypeMetadata } from './vendorProductTypeMetadata';

/**
 * A product type object with its properties
 */
export interface VendorProductType {
  /** The unique identifier of the product type. */
  id: string;
  /** An optional key-value map with additional details. */
  metadata?: VendorProductTypeMetadata;
  /** The value of the product type. */
  value: string;
}

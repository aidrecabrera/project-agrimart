/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCreateTaxRegionDefaultTaxRate } from './adminCreateTaxRegionDefaultTaxRate';
import type { AdminCreateTaxRegionMetadata } from './adminCreateTaxRegionMetadata';

/**
 * The tax region's details.
 */
export interface AdminCreateTaxRegion {
  /** The tax region's country code. */
  country_code: string;
  /** The tax region's default tax rate. */
  default_tax_rate?: AdminCreateTaxRegionDefaultTaxRate;
  /** The tax region's metadata, used to store custom key-value pairs. */
  metadata?: AdminCreateTaxRegionMetadata;
  /** The ID of the parent tax region. */
  parent_id?: string;
  /** The tax region's province code. */
  province_code?: string;
}

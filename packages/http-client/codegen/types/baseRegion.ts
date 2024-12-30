/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { BaseRegionCountry } from './baseRegionCountry';
import type { BaseRegionMetadata } from './baseRegionMetadata';
import type { AdminPaymentProvider } from './adminPaymentProvider';

/**
 * The region's details.
 */
export interface BaseRegion {
  /** The region's automatic taxes. */
  automatic_taxes?: boolean;
  /** The region's countries. */
  countries?: BaseRegionCountry[];
  /** The region's created at. */
  created_at?: string;
  /** The region's currency code. */
  currency_code: string;
  /** The region's ID. */
  id: string;
  /** The region's metadata. */
  metadata?: BaseRegionMetadata;
  /** The region's name. */
  name: string;
  /** The region's payment providers. */
  payment_providers?: AdminPaymentProvider[];
  /** The region's updated at. */
  updated_at?: string;
}

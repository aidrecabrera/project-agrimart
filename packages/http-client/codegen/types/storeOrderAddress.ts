/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StoreRegionCountry } from './storeRegionCountry';
import type { StoreOrderAddressMetadata } from './storeOrderAddressMetadata';

/**
 * An order address
 */
export interface StoreOrderAddress {
  /** The address's first line. */
  address_1?: string;
  /** The address's second line. */
  address_2?: string;
  /** The address's city. */
  city?: string;
  /** The address's company. */
  company?: string;
  country?: StoreRegionCountry;
  /** The address's country code. */
  country_code?: string;
  /** The date the address was created. */
  created_at: string;
  /** The ID of the customer this address belongs to. */
  customer_id?: string;
  /** The address's first name. */
  first_name?: string;
  /** The address's ID. */
  id: string;
  /** The address's last name. */
  last_name?: string;
  /** The address's metadata, can hold custom key-value pairs. */
  metadata: StoreOrderAddressMetadata;
  /** The address's phone. */
  phone?: string;
  /** The address's postal code. */
  postal_code?: string;
  /** The address's province. */
  province?: string;
  /** The date the address was updated. */
  updated_at: string;
}

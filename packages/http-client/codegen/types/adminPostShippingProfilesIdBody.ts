/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPostShippingProfilesIdBodyMetadata } from './adminPostShippingProfilesIdBodyMetadata';

/**
 * The properties to update in the shipping profile.
 */
export type AdminPostShippingProfilesIdBody = {
  /** The shipping profile's metadata. */
  metadata?: AdminPostShippingProfilesIdBodyMetadata;
  /** The shipping profile's name. */
  name?: string;
  /** The shipping profile's type. */
  type?: string;
};

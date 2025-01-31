/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPostFulfillmentSetsIdServiceZonesZoneIdBodyGeoZonesItemOneOfThreeMetadata } from './adminPostFulfillmentSetsIdServiceZonesZoneIdBodyGeoZonesItemOneOfThreeMetadata';

/**
 * A province geo zone.
 */
export type AdminPostFulfillmentSetsIdServiceZonesZoneIdBodyGeoZonesItemOneOfThree = {
  /** The geo zone's country code. */
  country_code: string;
  /** The ID of an existing geo zone. */
  id?: string;
  /** The geo zone's metadata. */
  metadata: AdminPostFulfillmentSetsIdServiceZonesZoneIdBodyGeoZonesItemOneOfThreeMetadata;
  /** The geo zone's province code. */
  province_code: string;
  /** The geo zone's type. */
  type: string;
};

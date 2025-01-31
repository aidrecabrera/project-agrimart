/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminShippingOptionData } from './adminShippingOptionData';
import type { AdminShippingOptionMetadata } from './adminShippingOptionMetadata';
import type { AdminShippingOptionPriceType } from './adminShippingOptionPriceType';
import type { AdminShippingOptionPrice } from './adminShippingOptionPrice';
import type { AdminFulfillmentProvider } from './adminFulfillmentProvider';
import type { AdminShippingOptionRule } from './adminShippingOptionRule';
import type { AdminShippingOptionServiceZone } from './adminShippingOptionServiceZone';
import type { AdminShippingProfile } from './adminShippingProfile';
import type { AdminShippingOptionType } from './adminShippingOptionType';

/**
 * The shipping option's details.
 */
export interface AdminShippingOption {
  /** The date the shipping option was created. */
  created_at: string;
  /** The shipping option's data, useful for the fulfillment provider handling fulfillments created from this option. */
  data: AdminShippingOptionData;
  /** The date the shipping option was deleted. */
  deleted_at: string;
  /** The shipping option's ID. */
  id: string;
  /** The shipping option's metadata, can hold custom key-value pairs. */
  metadata: AdminShippingOptionMetadata;
  /** The shipping option's name. */
  name: string;
  /** The shipping option's price type. If it's `flat`, the price is fixed and is set in the `prices` property. If it's `calculated`, the price is calculated on checkout by the associated fulfillment provider. */
  price_type: AdminShippingOptionPriceType;
  /** The shipping option's prices. If the `price_type` is `calculated`, this array will be empty since the price is calculated by the fulfillment provider during checkout. */
  prices: AdminShippingOptionPrice[];
  provider: AdminFulfillmentProvider;
  /** The ID of the provider handling fulfillments created from this shipping option. */
  provider_id: string;
  /** The shipping option's rules. */
  rules: AdminShippingOptionRule[];
  service_zone: AdminShippingOptionServiceZone;
  /** The ID of the service zone this option belongs to. */
  service_zone_id: string;
  /** The ID of the associated shipping option type. */
  shipping_option_type_id: string;
  shipping_profile: AdminShippingProfile;
  /** The ID of the associated shipping profile. */
  shipping_profile_id: string;
  type: AdminShippingOptionType;
  /** The date the shipping option was updated. */
  updated_at: string;
}

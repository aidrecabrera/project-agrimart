/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCreateShippingOptionData } from './adminCreateShippingOptionData';
import type { AdminCreateShippingOptionPriceType } from './adminCreateShippingOptionPriceType';
import type { AdminCreateShippingOptionPricesItem } from './adminCreateShippingOptionPricesItem';
import type { AdminCreateShippingOptionRule } from './adminCreateShippingOptionRule';
import type { AdminCreateShippingOptionType } from './adminCreateShippingOptionType';

/**
 * The shipping option's details.
 */
export interface AdminCreateShippingOption {
  /** The shipping option's data, useful for the fulfillment provider handling its processing. */
  data?: AdminCreateShippingOptionData;
  /** The shipping option's name. */
  name: string;
  /** The shipping option's price type. If `flat`, the shipping option has a fixed price set in `prices`. Otherwise, the shipping option's price is calculated by the fulfillment provider. */
  price_type: AdminCreateShippingOptionPriceType;
  /** The shipping option's prices. */
  prices: AdminCreateShippingOptionPricesItem[];
  /** The ID of the fulfillment provider handling this shipping option. */
  provider_id: string;
  /** The shipping option's rules. */
  rules?: AdminCreateShippingOptionRule[];
  /** The ID of the associated service zone. */
  service_zone_id: string;
  /** The ID of the associated shipping profile. */
  shipping_profile_id: string;
  type: AdminCreateShippingOptionType;
}

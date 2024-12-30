/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StorePostShippingOptionsIdCalculateBodyData } from './storePostShippingOptionsIdCalculateBodyData';

/**
 * The calculation's details.
 */
export type StorePostShippingOptionsIdCalculateBody = {
  /** The ID of the cart the shipping option is used in. */
  cart_id: string;
  /** Custom data that's useful for the fulfillment provider to calculate the price. */
  data?: StorePostShippingOptionsIdCalculateBodyData;
};

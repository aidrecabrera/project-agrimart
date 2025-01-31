/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StoreCartShippingMethodAdjustmentsItemAllOfShippingMethod } from './storeCartShippingMethodAdjustmentsItemAllOfShippingMethod';

/**
 * The adjustment's details.
 */
export type StoreCartShippingMethodAdjustmentsItemAllOf = {
  /** The adjustment's amount. */
  amount: number;
  /** The ID of the associated cart. */
  cart_id: string;
  /** The adjustment's code. */
  code?: string;
  /** The date the adjustment was created. */
  created_at: string;
  /** The adjustment's description. */
  description?: string;
  /** The adjustment's ID. */
  id: string;
  /** The ID of the applied promotion. */
  promotion_id?: string;
  /** The adjustment's provider ID. */
  provider_id?: string;
  /** The details of the method that the adjustment belongs to. */
  shipping_method: StoreCartShippingMethodAdjustmentsItemAllOfShippingMethod;
  /** The date the adjustment was updated. */
  updated_at: string;
};

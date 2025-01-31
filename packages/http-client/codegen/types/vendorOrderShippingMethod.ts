/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { VendorOrderShippingMethodData } from './vendorOrderShippingMethodData';
import type { VendorOrderShippingMethodMetadata } from './vendorOrderShippingMethodMetadata';

/**
 * The shipping method's details.
 */
export interface VendorOrderShippingMethod {
  /** The shipping method's amount. */
  amount?: number;
  /** The date the shipping method was created. */
  created_at?: string;
  /** The shipping method's data, useful for fulfillment provider handling its fulfillment. */
  data?: VendorOrderShippingMethodData;
  /** The shipping method's description. */
  description?: string;
  /** The taxes applied on the discount amount. */
  discount_tax_total?: number;
  /** The total discounts applied on the shipping method. */
  discount_total?: number;
  /** The shipping method's ID. */
  id?: string;
  /** Whether the shipping method's amount includes applied taxes. */
  is_tax_inclusive?: boolean;
  /** The shipping method's metadata, can hold custom key-value pairs. */
  metadata?: VendorOrderShippingMethodMetadata;
  /** The shipping method's name. */
  name?: string;
  /** The shipping method's total excluding taxes, including promotions. */
  original_subtotal?: number;
  /** The shipping method's total taxes excluding promotions. */
  original_tax_total?: number;
  /** The shipping method's total including taxes, excluding promotions. */
  original_total?: number;
  /** The ID of the shipping option this method was created from. */
  shipping_option_id?: string;
  /** The shipping method's total excluding taxes, including promotions. */
  subtotal?: number;
  /** The shipping method's tax total including promotions. */
  tax_total?: number;
  /** The shipping method's total including taxes and promotions. */
  total?: number;
  /** The date the shipping method was updated. */
  updated_at?: string;
}

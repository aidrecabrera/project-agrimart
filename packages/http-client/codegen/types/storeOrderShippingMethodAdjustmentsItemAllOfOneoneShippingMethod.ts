/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodAdjustmentsItem } from './storeOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodAdjustmentsItem';
import type { StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodData } from './storeOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodData';
import type { StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodDetail } from './storeOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodDetail';
import type { StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodMetadata } from './storeOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodMetadata';
import type { StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodTaxLinesItem } from './storeOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodTaxLinesItem';

/**
 * The adjustment's shipping method.
 */
export type StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethod = {
  /** The shipping method's adjustments. */
  adjustments?: StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodAdjustmentsItem[];
  /** The shipping method's amount. */
  amount: number;
  /** The shipping method's created at. */
  created_at: string;
  /** The shipping method's data. */
  data: StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodData;
  /** The shipping method's description. */
  description?: string;
  detail?: StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodDetail;
  /** The shipping method's discount tax total. */
  discount_tax_total: number;
  /** The shipping method's discount total. */
  discount_total: number;
  /** The shipping method's ID. */
  id: string;
  /** The shipping method's is tax inclusive. */
  is_tax_inclusive: boolean;
  /** The shipping method's metadata. */
  metadata: StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodMetadata;
  /** The shipping method's name. */
  name: string;
  /** The shipping method's order id. */
  order_id: string;
  /** The shipping method's original subtotal. */
  original_subtotal: number;
  /** The shipping method's original tax total. */
  original_tax_total: number;
  /** The shipping method's original total. */
  original_total: number;
  /** The shipping method's shipping option id. */
  shipping_option_id: string;
  /** The shipping method's subtotal. */
  subtotal: number;
  /** The shipping method's tax lines. */
  tax_lines?: StoreOrderShippingMethodAdjustmentsItemAllOfOneoneShippingMethodTaxLinesItem[];
  /** The shipping method's tax total. */
  tax_total: number;
  /** The shipping method's total. */
  total: number;
  /** The shipping method's updated at. */
  updated_at: string;
};

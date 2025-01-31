/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StoreOrderAddress } from './storeOrderAddress';
import type { StoreCustomer } from './storeCustomer';
import type { StoreOrderFulfillmentStatus } from './storeOrderFulfillmentStatus';
import type { StoreOrderFulfillment } from './storeOrderFulfillment';
import type { StoreOrderLineItem } from './storeOrderLineItem';
import type { StoreOrderMetadata } from './storeOrderMetadata';
import type { StorePaymentCollection } from './storePaymentCollection';
import type { StoreOrderPaymentStatus } from './storeOrderPaymentStatus';
import type { StoreOrderShippingMethod } from './storeOrderShippingMethod';
import type { BaseOrderSummary } from './baseOrderSummary';
import type { BaseOrderTransaction } from './baseOrderTransaction';

/**
 * The order's details.
 */
export interface StoreOrder {
  billing_address?: StoreOrderAddress;
  /** The date the order was created. */
  created_at: string;
  /** The order's currency code. */
  currency_code: string;
  customer?: StoreCustomer;
  /** The ID of the customer that placed the order. */
  customer_id: string;
  /** The total taxes applied on the discounted amount. */
  discount_tax_total: number;
  /** The order's discount total. */
  discount_total: number;
  /** The order's display ID. */
  display_id?: number;
  /** The email of the customer that placed the order. */
  email: string;
  /** The order's fulfillment status. */
  fulfillment_status: StoreOrderFulfillmentStatus;
  /** The order's fulfillments. */
  fulfillments?: StoreOrderFulfillment[];
  /** The total taxes applied on the gift card's amount. */
  gift_card_tax_total: number;
  /** The order's gift card total. */
  gift_card_total: number;
  /** The order's ID. */
  id: string;
  /** The order items' total excluding taxes, including promotions. */
  item_subtotal: number;
  /** The total taxes applied on the order's items, including promotions. */
  item_tax_total: number;
  /** The order items' total including taxes and promotions. */
  item_total: number;
  /** The order's items. */
  items: StoreOrderLineItem[];
  /** The order's metadata, can hold custom key-value pairs. */
  metadata?: StoreOrderMetadata;
  /** The order items' total excluding taxes, including promotions. */
  original_item_subtotal: number;
  /** The total taxes applied on the order items, excluding promotions. */
  original_item_tax_total: number;
  /** The order items' total including taxes, excluding promotions. */
  original_item_total: number;
  /** The order's shipping total excluding taxes, including promotions. */
  original_shipping_subtotal: number;
  /** The total taxes of the order's shipping excluding promotions. */
  original_shipping_tax_total: number;
  /** The order's shipping total including taxes, excluding promotions. */
  original_shipping_total: number;
  /** The order's total excluding taxes, including promotions. */
  original_subtotal: number;
  /** The total taxes of the order excluding promotions. */
  original_tax_total: number;
  /** The order's total including taxes, excluding promotions. */
  original_total: number;
  /** The order's payment collections. */
  payment_collections?: StorePaymentCollection[];
  /** The order's payment status. */
  payment_status: StoreOrderPaymentStatus;
  /** The ID of the associated region. */
  region_id: string;
  /** The ID of the sales channel the order was placed in. */
  sales_channel_id: string;
  shipping_address?: StoreOrderAddress;
  /** The order's shipping methods. */
  shipping_methods: StoreOrderShippingMethod[];
  /** The order's shipping total excluding taxes, including promotions. */
  shipping_subtotal: number;
  /** The total taxes of the order's shipping including promotions. */
  shipping_tax_total: number;
  /** The order's shipping total including taxes and promotions. */
  shipping_total: number;
  /** The order's total excluding taxes, including promotions. */
  subtotal: number;
  summary: BaseOrderSummary;
  /** The tax totals of the order including promotions. */
  tax_total: number;
  /** The order's total including taxes and promotions. */
  total: number;
  /** The order's transactions. */
  transactions?: BaseOrderTransaction[];
  /** The date the order was updated. */
  updated_at: string;
}

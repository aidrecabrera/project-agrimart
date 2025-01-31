/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { BaseCartLineItem } from './baseCartLineItem';

/**
 * The tax line's details
 */
export interface BaseLineItemTaxLine {
  /** The code the tax rate is identified by. */
  code: string;
  /** The date the tax line was created. */
  created_at: string;
  /** The tax line's description. */
  description?: string;
  /** The tax line's ID. */
  id: string;
  item: BaseCartLineItem;
  /** The ID of the item the tax line applies on. */
  item_id: string;
  /** The ID of the tax provider. */
  provider_id?: string;
  /** The rate to charge. */
  rate: number;
  /** The item's subtotal excluding taxes, including promotions. */
  subtotal: number;
  /** The ID of the associated tax rate. */
  tax_rate_id?: string;
  /** The item's total, including taxes and promotions. */
  total: number;
  /** The date the tax line was updated. */
  updated_at: string;
}

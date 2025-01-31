/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { UpdateVariantPriceRules } from './updateVariantPriceRules';

export interface UpdateVariantPrice {
  /** The amount of the price. */
  amount?: number;
  /** The currency code of the price. */
  currency_code?: string;
  /** The ID of the price to update. */
  id?: string;
  /**
   * The maximum quantity allowed to get this price.
   * @nullable
   */
  max_quantity?: number | null;
  /**
   * The minimum quantity required to get this price.
   * @nullable
   */
  min_quantity?: number | null;
  /** Additional rules that apply to the price. */
  rules?: UpdateVariantPriceRules;
}

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * A store currency.
 */
export type AdminUpdateStoreSupportedCurrenciesItem = {
  /** The currency's code. */
  currency_code: string;
  /** Whether the currency is the default in the store. */
  is_default?: boolean;
  /** Whether prices using this currency are tax inclusive. */
  is_tax_inclusive?: boolean;
};

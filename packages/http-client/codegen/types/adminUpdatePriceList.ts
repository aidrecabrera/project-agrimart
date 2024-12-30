/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminUpdatePriceListRules } from './adminUpdatePriceListRules';
import type { AdminUpdatePriceListStatus } from './adminUpdatePriceListStatus';
import type { AdminUpdatePriceListType } from './adminUpdatePriceListType';

/**
 * the details to update in a price list.
 */
export interface AdminUpdatePriceList {
  /** The price list's description. */
  description?: string;
  /** The date the price list ends. */
  ends_at?: string;
  /** The price list's rules. */
  rules?: AdminUpdatePriceListRules;
  /** The date the price list starts. */
  starts_at?: string;
  /** The price list's status. */
  status?: AdminUpdatePriceListStatus;
  /** The price list's title. */
  title?: string;
  /** The price list's type. */
  type?: AdminUpdatePriceListType;
}

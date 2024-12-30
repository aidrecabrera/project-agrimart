/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminGetOrdersCreatedAtNotOneOfAndItem } from './adminGetOrdersCreatedAtNotOneOfAndItem';
import type { AdminGetOrdersCreatedAtNotOneOfEq } from './adminGetOrdersCreatedAtNotOneOfEq';
import type { AdminGetOrdersCreatedAtNotOneOfNot } from './adminGetOrdersCreatedAtNotOneOfNot';
import type { AdminGetOrdersCreatedAtNotOneOfOrItem } from './adminGetOrdersCreatedAtNotOneOfOrItem';

/**
 * Filter by values not matching the conditions in this parameter.
 */
export type AdminGetOrdersCreatedAtNotOneOf = {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetOrdersCreatedAtNotOneOfAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetOrdersCreatedAtNotOneOfEq;
  /** Filter by whether a value for this parameter exists (not `null`). */
  $exists?: boolean;
  /** Filter to apply on full-text properties. */
  $fulltext?: string;
  /** Filter by values greater than this parameter. Useful for numbers and dates only. */
  $gt?: string;
  /** Filter by values greater than or equal to this parameter. Useful for numbers and dates only. */
  $gte?: string;
  /** Apply a case-insensitive `like` filter. Useful for strings only. */
  $ilike?: string;
  /** Filter by values in this array. */
  $in?: string[];
  /** Apply a `like` filter. Useful for strings only. */
  $like?: string;
  /** Filter by values less than this parameter. Useful for numbers and dates only. */
  $lt?: string;
  /** Filter by values less than or equal to this parameter. Useful for numbers and dates only. */
  $lte?: string;
  /** Filter by values not matching this parameter. */
  $ne?: string;
  /** Filter by values not in this array. */
  $nin?: string[];
  $not?: AdminGetOrdersCreatedAtNotOneOfNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetOrdersCreatedAtNotOneOfOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};

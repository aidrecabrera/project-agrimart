/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminGetTaxRegionsDeletedAtOneOfAndItem } from './adminGetTaxRegionsDeletedAtOneOfAndItem';
import type { AdminGetTaxRegionsDeletedAtOneOfEq } from './adminGetTaxRegionsDeletedAtOneOfEq';
import type { AdminGetTaxRegionsDeletedAtOneOfNot } from './adminGetTaxRegionsDeletedAtOneOfNot';
import type { AdminGetTaxRegionsDeletedAtOneOfOrItem } from './adminGetTaxRegionsDeletedAtOneOfOrItem';

/**
 * Apply filters on the tax region's deletion date.
 */
export type AdminGetTaxRegionsDeletedAtOneOf = {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetTaxRegionsDeletedAtOneOfAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetTaxRegionsDeletedAtOneOfEq;
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
  /** Filter by values not equal to this parameter. */
  $ne?: string;
  /** Filter by values not in this array. */
  $nin?: string[];
  $not?: AdminGetTaxRegionsDeletedAtOneOfNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetTaxRegionsDeletedAtOneOfOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};

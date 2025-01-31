/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminGetDraftOrdersStatusOneOfAndItem } from './adminGetDraftOrdersStatusOneOfAndItem';
import type { AdminGetDraftOrdersStatusOneOfEq } from './adminGetDraftOrdersStatusOneOfEq';
import type { AdminGetDraftOrdersStatusOneOfGt } from './adminGetDraftOrdersStatusOneOfGt';
import type { AdminGetDraftOrdersStatusOneOfGte } from './adminGetDraftOrdersStatusOneOfGte';
import type { AdminGetDraftOrdersStatusOneOfInItem } from './adminGetDraftOrdersStatusOneOfInItem';
import type { AdminGetDraftOrdersStatusOneOfLt } from './adminGetDraftOrdersStatusOneOfLt';
import type { AdminGetDraftOrdersStatusOneOfLte } from './adminGetDraftOrdersStatusOneOfLte';
import type { AdminGetDraftOrdersStatusOneOfNe } from './adminGetDraftOrdersStatusOneOfNe';
import type { AdminGetDraftOrdersStatusOneOfNinItem } from './adminGetDraftOrdersStatusOneOfNinItem';
import type { AdminGetDraftOrdersStatusOneOfNot } from './adminGetDraftOrdersStatusOneOfNot';
import type { AdminGetDraftOrdersStatusOneOfOrItem } from './adminGetDraftOrdersStatusOneOfOrItem';

/**
 * Filter by conditions on the status.
 */
export type AdminGetDraftOrdersStatusOneOf = {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetDraftOrdersStatusOneOfAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetDraftOrdersStatusOneOfEq;
  /** Filter by whether a value for this parameter exists (not `null`). */
  $exists?: boolean;
  /** Filter to apply on full-text properties. */
  $fulltext?: string;
  $gt?: AdminGetDraftOrdersStatusOneOfGt;
  $gte?: AdminGetDraftOrdersStatusOneOfGte;
  /** Apply a case-insensitive `like` filter. Useful for strings only. */
  $ilike?: string;
  /** Filter by values in this array. */
  $in?: AdminGetDraftOrdersStatusOneOfInItem[];
  /** Apply a `like` filter. Useful for strings only. */
  $like?: string;
  $lt?: AdminGetDraftOrdersStatusOneOfLt;
  $lte?: AdminGetDraftOrdersStatusOneOfLte;
  $ne?: AdminGetDraftOrdersStatusOneOfNe;
  /** Filter by values not in this array. */
  $nin?: AdminGetDraftOrdersStatusOneOfNinItem[];
  $not?: AdminGetDraftOrdersStatusOneOfNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetDraftOrdersStatusOneOfOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};

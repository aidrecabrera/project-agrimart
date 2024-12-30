/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminGetRegionsCreatedAtAndItem } from './adminGetRegionsCreatedAtAndItem';
import type { AdminGetRegionsCreatedAtEq } from './adminGetRegionsCreatedAtEq';
import type { AdminGetRegionsCreatedAtNot } from './adminGetRegionsCreatedAtNot';
import type { AdminGetRegionsCreatedAtOrItem } from './adminGetRegionsCreatedAtOrItem';
import type { AdminGetRegionsUpdatedAtAndItem } from './adminGetRegionsUpdatedAtAndItem';
import type { AdminGetRegionsUpdatedAtEq } from './adminGetRegionsUpdatedAtEq';
import type { AdminGetRegionsUpdatedAtNot } from './adminGetRegionsUpdatedAtNot';
import type { AdminGetRegionsUpdatedAtOrItem } from './adminGetRegionsUpdatedAtOrItem';
import type { AdminGetRegionsDeletedAtAndItem } from './adminGetRegionsDeletedAtAndItem';
import type { AdminGetRegionsDeletedAtEq } from './adminGetRegionsDeletedAtEq';
import type { AdminGetRegionsDeletedAtNot } from './adminGetRegionsDeletedAtNot';
import type { AdminGetRegionsDeletedAtOrItem } from './adminGetRegionsDeletedAtOrItem';
import type { AdminGetRegionsAndItem } from './adminGetRegionsAndItem';
import type { AdminGetRegionsOrItem } from './adminGetRegionsOrItem';

export type AdminGetRegionsParams = {
/**
 * Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
 */
fields?: string;
/**
 * The number of items to skip when retrieving a list.
 */
offset?: number;
/**
 * Limit the number of items returned in the list.
 */
limit?: number;
/**
 * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 */
order?: string;
/**
 * Search term to filter the region's searchable properties.
 */
q?: string;
id?: string | string[];
name?: string | string[];
/**
 * Filter by a region's creation date.
 */
created_at?: {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetRegionsCreatedAtAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetRegionsCreatedAtEq;
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
  $not?: AdminGetRegionsCreatedAtNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetRegionsCreatedAtOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};
/**
 * Filter by a region's update date.
 */
updated_at?: {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetRegionsUpdatedAtAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetRegionsUpdatedAtEq;
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
  $not?: AdminGetRegionsUpdatedAtNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetRegionsUpdatedAtOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};
/**
 * Filter by a region's deletion date.
 */
deleted_at?: {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetRegionsDeletedAtAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetRegionsDeletedAtEq;
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
  $not?: AdminGetRegionsDeletedAtNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetRegionsDeletedAtOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};
$and?: AdminGetRegionsAndItem[];
$or?: AdminGetRegionsOrItem[];
currency_code?: string | string[];
};

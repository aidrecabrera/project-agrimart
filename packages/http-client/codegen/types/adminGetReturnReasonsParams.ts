/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminGetReturnReasonsCreatedAtAndItem } from './adminGetReturnReasonsCreatedAtAndItem';
import type { AdminGetReturnReasonsCreatedAtEq } from './adminGetReturnReasonsCreatedAtEq';
import type { AdminGetReturnReasonsCreatedAtNot } from './adminGetReturnReasonsCreatedAtNot';
import type { AdminGetReturnReasonsCreatedAtOrItem } from './adminGetReturnReasonsCreatedAtOrItem';
import type { AdminGetReturnReasonsUpdatedAtAndItem } from './adminGetReturnReasonsUpdatedAtAndItem';
import type { AdminGetReturnReasonsUpdatedAtEq } from './adminGetReturnReasonsUpdatedAtEq';
import type { AdminGetReturnReasonsUpdatedAtNot } from './adminGetReturnReasonsUpdatedAtNot';
import type { AdminGetReturnReasonsUpdatedAtOrItem } from './adminGetReturnReasonsUpdatedAtOrItem';
import type { AdminGetReturnReasonsDeletedAtAndItem } from './adminGetReturnReasonsDeletedAtAndItem';
import type { AdminGetReturnReasonsDeletedAtEq } from './adminGetReturnReasonsDeletedAtEq';
import type { AdminGetReturnReasonsDeletedAtNot } from './adminGetReturnReasonsDeletedAtNot';
import type { AdminGetReturnReasonsDeletedAtOrItem } from './adminGetReturnReasonsDeletedAtOrItem';
import type { AdminGetReturnReasonsAndItem } from './adminGetReturnReasonsAndItem';
import type { AdminGetReturnReasonsOrItem } from './adminGetReturnReasonsOrItem';

export type AdminGetReturnReasonsParams = {
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
 * Search term to filter the return reason's searchable properties.
 */
q?: string;
id?: string | string[];
value?: string | string[];
label?: string | string[];
description?: string | string[];
parent_return_reason_id?: string | string[];
/**
 * Filter by a return reason's creation date.
 */
created_at?: {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetReturnReasonsCreatedAtAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetReturnReasonsCreatedAtEq;
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
  $not?: AdminGetReturnReasonsCreatedAtNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetReturnReasonsCreatedAtOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};
/**
 * Filter by a return reason's update date.
 */
updated_at?: {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetReturnReasonsUpdatedAtAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetReturnReasonsUpdatedAtEq;
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
  $not?: AdminGetReturnReasonsUpdatedAtNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetReturnReasonsUpdatedAtOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};
/**
 * Filter by a return reason's deletion date.
 */
deleted_at?: {
  /** Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters. */
  $and?: AdminGetReturnReasonsDeletedAtAndItem[];
  /** Filter arrays that contain all values of this parameter. */
  $contained?: string[];
  /** Filter arrays that contain some of the values of this parameter. */
  $contains?: string[];
  $eq?: AdminGetReturnReasonsDeletedAtEq;
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
  $not?: AdminGetReturnReasonsDeletedAtNot;
  /** Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters. */
  $or?: AdminGetReturnReasonsDeletedAtOrItem[];
  /** Filter arrays that have overlapping values with this parameter. */
  $overlap?: string[];
  /** Apply a regex filter. Useful for strings only. */
  $re?: string;
};
/**
 * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
 */
$and?: AdminGetReturnReasonsAndItem[];
/**
 * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
 */
$or?: AdminGetReturnReasonsOrItem[];
};

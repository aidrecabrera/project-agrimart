/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StoreGetOrdersAndItem } from './storeGetOrdersAndItem';
import type { StoreGetOrdersOrItem } from './storeGetOrdersOrItem';
import type { StoreGetOrdersStatusOneOfItem } from './storeGetOrdersStatusOneOfItem';

export type StoreGetOrdersParams = {
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
id?: string | string[];
$and?: StoreGetOrdersAndItem[];
$or?: StoreGetOrdersOrItem[];
status?: string | string | string | string | string | string | StoreGetOrdersStatusOneOfItem[];
};

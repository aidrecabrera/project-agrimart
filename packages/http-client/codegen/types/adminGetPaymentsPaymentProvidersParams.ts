/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminGetPaymentsPaymentProvidersAndItem } from './adminGetPaymentsPaymentProvidersAndItem';
import type { AdminGetPaymentsPaymentProvidersOrItem } from './adminGetPaymentsPaymentProvidersOrItem';

export type AdminGetPaymentsPaymentProvidersParams = {
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
id: string | string[];
/**
 * Filter by whether the payment provider is enabled.
 */
is_enabled?: boolean;
$and?: AdminGetPaymentsPaymentProvidersAndItem[];
$or?: AdminGetPaymentsPaymentProvidersOrItem[];
};

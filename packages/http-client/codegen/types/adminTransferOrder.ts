/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The details of the request to transfer the order.
 */
export interface AdminTransferOrder {
  /** The ID of the customer to transfer the order to. */
  customer_id: string;
  /** The description of the order transfer, which can be shown to the customer receiving the order transfer request. */
  description?: string;
  /** An internal note viewable only by admin users. */
  internal_note?: string;
}

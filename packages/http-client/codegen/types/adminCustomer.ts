/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCustomerAddress } from './adminCustomerAddress';
import type { AdminCustomerGroup } from './adminCustomerGroup';
import type { AdminCustomerMetadata } from './adminCustomerMetadata';

/**
 * The customer's details.
 */
export interface AdminCustomer {
  /** The customer's addresses. */
  addresses: AdminCustomerAddress[];
  /** The customer's company name. */
  company_name: string;
  /** The customer's creation date. */
  created_at?: string;
  /** The ID of the user that created this customer, if available. */
  created_by?: string;
  /** The ID of the address used as the default billing address. */
  default_billing_address_id: string;
  /** The ID of the address used as the default shipping address. */
  default_shipping_address_id: string;
  /** The customer's deletion date. */
  deleted_at?: string;
  /** The customer's email. */
  email: string;
  /** The customer's first name. */
  first_name: string;
  /** The customer's groups. */
  groups?: AdminCustomerGroup[];
  /** Whether the customer is registered. */
  has_account: boolean;
  /** The customer's ID. */
  id: string;
  /** The customer's last name. */
  last_name: string;
  /** The customer's metadata, used to store custom key-value pairs. */
  metadata?: AdminCustomerMetadata;
  /** The customer's phone. */
  phone?: string;
  /** The customer's update date. */
  updated_at?: string;
}

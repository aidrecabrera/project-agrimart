/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The shipping option rule's details.
 */
export interface AdminShippingOptionRule {
  /** The shipping option rule's attribute. */
  attribute: string;
  /** The date the shipping option rule was created. */
  created_at: string;
  /** The date the shipping option rule was deleted. */
  deleted_at: string;
  /** The shipping option rule's ID. */
  id: string;
  /** The shipping option rule's operator. */
  operator: string;
  /** The ID of the shipping option this rule is for. */
  shipping_option_id: string;
  /** The date the shipping option rule was updated. */
  updated_at: string;
  value: string;
}

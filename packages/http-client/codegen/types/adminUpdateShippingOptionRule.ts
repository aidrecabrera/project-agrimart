/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminUpdateShippingOptionRuleOperator } from './adminUpdateShippingOptionRuleOperator';
import type { AdminUpdateShippingOptionRuleValue } from './adminUpdateShippingOptionRuleValue';

/**
 * The properties to update in the shipping option rule.
 */
export interface AdminUpdateShippingOptionRule {
  /** The name of a property or table that the rule applies to. */
  attribute: string;
  /** The rule's ID. */
  id: string;
  /** The operator used to check whether a rule applies. */
  operator: AdminUpdateShippingOptionRuleOperator;
  value: AdminUpdateShippingOptionRuleValue;
}

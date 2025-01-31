/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCreatePromotionRule } from './adminCreatePromotionRule';
import type { AdminUpdatePromotionRule } from './adminUpdatePromotionRule';

/**
 * The target rules to create, update, or delete.
 */
export type AdminPostPromotionsIdTargetRulesBatchBody = {
  /** The target rules to create. */
  create?: AdminCreatePromotionRule[];
  /** The target rules to delete. */
  delete?: string[];
  /** The target rules to update. */
  update?: AdminUpdatePromotionRule[];
};

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCreatePromotionRule } from './adminCreatePromotionRule';
import type { AdminUpdatePromotionRule } from './adminUpdatePromotionRule';

/**
 * The rules to create, update, or delete.
 */
export type AdminPostPromotionsIdRulesBatchBody = {
  /** The rules to create. */
  create?: AdminCreatePromotionRule[];
  /** The rules to delete. */
  delete?: string[];
  /** The rules to update. */
  update?: AdminUpdatePromotionRule[];
};

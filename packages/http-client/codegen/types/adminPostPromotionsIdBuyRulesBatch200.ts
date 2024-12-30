/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPromotionRule } from './adminPromotionRule';
import type { AdminPostPromotionsIdBuyRulesBatch200Deleted } from './adminPostPromotionsIdBuyRulesBatch200Deleted';

/**
 * The result of the batch operations.
 */
export type AdminPostPromotionsIdBuyRulesBatch200 = {
  /** The created buy rules. */
  created: AdminPromotionRule[];
  /** The details of the deleted buy rules. */
  deleted: AdminPostPromotionsIdBuyRulesBatch200Deleted;
  /** The updated buy rules. */
  updated: AdminPromotionRule[];
};

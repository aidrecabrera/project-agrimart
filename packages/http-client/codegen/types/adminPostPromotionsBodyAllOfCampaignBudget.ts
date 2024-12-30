/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPostPromotionsBodyAllOfCampaignBudgetType } from './adminPostPromotionsBodyAllOfCampaignBudgetType';

/**
 * The campaign's budget which, when crossed, ends the campaign.
 */
export type AdminPostPromotionsBodyAllOfCampaignBudget = {
  /** The campaign budget's currency code. This can't be edited later. */
  currency_code: string;
  /** The budget's limit. */
  limit: number;
  /** The budget's type. This can't be edited later. Use `spend` to set a limit on the total amount discounted by the campaign's promotions. Use `usage` to set a limit on the total number of times the campaign's promotions can be used.
 */
  type: AdminPostPromotionsBodyAllOfCampaignBudgetType;
};

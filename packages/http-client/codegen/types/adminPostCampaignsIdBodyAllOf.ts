/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminPostCampaignsIdBodyAllOfBudget } from './adminPostCampaignsIdBodyAllOfBudget';
import type { AdminPostCampaignsIdBodyAllOfPromotionsItem } from './adminPostCampaignsIdBodyAllOfPromotionsItem';

/**
 * The campaign's details.
 */
export type AdminPostCampaignsIdBodyAllOf = {
  /** The campaign's budget. */
  budget?: AdminPostCampaignsIdBodyAllOfBudget;
  /** The campaign's identifier. */
  campaign_identifier?: string;
  /** The campaign's description. */
  description: string;
  /** The campaign's end date. */
  ends_at: string;
  /** The campaign's name. */
  name?: string;
  /** The campaign's promotions. */
  promotions?: AdminPostCampaignsIdBodyAllOfPromotionsItem[];
  /** The campaign's start date. */
  starts_at: string;
};

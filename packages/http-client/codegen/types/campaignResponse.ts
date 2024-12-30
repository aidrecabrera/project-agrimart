/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { CampaignResponseBudget } from './campaignResponseBudget';

/**
 * The campaign's details.
 */
export interface CampaignResponse {
  /** The campaign's budget. */
  budget: CampaignResponseBudget;
  /** The campaign's campaign identifier. */
  campaign_identifier: string;
  /** The campaign's currency. */
  currency: string;
  /** The campaign's description. */
  description: string;
  /** The campaign's ends at. */
  ends_at: string;
  /** The campaign's ID. */
  id: string;
  /** The campaign's name. */
  name: string;
  /** The campaign's starts at. */
  starts_at: string;
}

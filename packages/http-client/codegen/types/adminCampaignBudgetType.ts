/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The budget's type. `spend` means the limit is set on the total amount discounted by the campaign's promotions; `usage` means the limit is set on the total number of times the campaign's promotions can be used.

 */
export type AdminCampaignBudgetType = typeof AdminCampaignBudgetType[keyof typeof AdminCampaignBudgetType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminCampaignBudgetType = {
  spend: 'spend',
  usage: 'usage',
} as const;

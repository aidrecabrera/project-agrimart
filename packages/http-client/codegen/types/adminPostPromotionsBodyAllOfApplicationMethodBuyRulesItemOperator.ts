/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The operator used to check whether the buy rule applies on a cart. For example, `eq` means that the cart's value for the specified attribute must match the specified value.
 */
export type AdminPostPromotionsBodyAllOfApplicationMethodBuyRulesItemOperator = typeof AdminPostPromotionsBodyAllOfApplicationMethodBuyRulesItemOperator[keyof typeof AdminPostPromotionsBodyAllOfApplicationMethodBuyRulesItemOperator];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminPostPromotionsBodyAllOfApplicationMethodBuyRulesItemOperator = {
  gte: 'gte',
  lte: 'lte',
  gt: 'gt',
  lt: 'lt',
  eq: 'eq',
  ne: 'ne',
  in: 'in',
} as const;

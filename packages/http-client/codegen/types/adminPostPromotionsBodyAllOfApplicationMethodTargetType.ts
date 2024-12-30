/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The target type of the application method indicating whether the associated promotion is applied to the cart's items, shipping methods, or the whole order.
 */
export type AdminPostPromotionsBodyAllOfApplicationMethodTargetType = typeof AdminPostPromotionsBodyAllOfApplicationMethodTargetType[keyof typeof AdminPostPromotionsBodyAllOfApplicationMethodTargetType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminPostPromotionsBodyAllOfApplicationMethodTargetType = {
  order: 'order',
  shipping_methods: 'shipping_methods',
  items: 'items',
} as const;

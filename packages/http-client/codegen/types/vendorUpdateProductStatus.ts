/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The status of the product.
 */
export type VendorUpdateProductStatus = typeof VendorUpdateProductStatus[keyof typeof VendorUpdateProductStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const VendorUpdateProductStatus = {
  draft: 'draft',
  proposed: 'proposed',
  published: 'published',
  rejected: 'rejected',
} as const;

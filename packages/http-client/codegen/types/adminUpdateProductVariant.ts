/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminUpdateProductVariantMetadata } from './adminUpdateProductVariantMetadata';
import type { AdminUpdateProductVariantOptions } from './adminUpdateProductVariantOptions';
import type { AdminCreateProductVariantPrice } from './adminCreateProductVariantPrice';

/**
 * The properties to update of a product variant.
 */
export interface AdminUpdateProductVariant {
  /** Whether customers can order the variant even if it's not in stock. */
  allow_backorder?: boolean;
  /** The product variant's barcode. */
  barcode?: string;
  /** The product variant's EAN. */
  ean?: string;
  /** The product variant's height. */
  height?: number;
  /** The product variant's HS code. */
  hs_code?: string;
  /** The product variant's length. */
  length?: number;
  /** Whether the Medusa application manages the variant's inventory. If disabled, the product variant is always considered in stock. */
  manage_inventory?: boolean;
  /** The product variant's material. */
  material?: string;
  /** The product variant's metadata, can hold custom key-value pairs. */
  metadata?: AdminUpdateProductVariantMetadata;
  /** The product variant's MID code. */
  mid_code?: string;
  /** The product variant's options. */
  options?: AdminUpdateProductVariantOptions;
  /** The product variant's origin country. */
  origin_country?: string;
  /** The product variant's prices. */
  prices?: AdminCreateProductVariantPrice[];
  /** The product variant's SKU. */
  sku?: string;
  /** The product variant's title. */
  title?: string;
  /** The product variant's UPC. */
  upc?: string;
  /** The product variant's rank among its siblings. */
  variant_rank?: number;
  /** The product variant's weight. */
  weight?: number;
  /** The product variant's width. */
  width?: number;
}

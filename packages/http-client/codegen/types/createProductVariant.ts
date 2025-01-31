/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { CreateProductVariantInventoryItemsItem } from './createProductVariantInventoryItemsItem';
import type { CreateProductVariantMetadata } from './createProductVariantMetadata';
import type { CreateProductVariantOptions } from './createProductVariantOptions';
import type { CreateVariantPrice } from './createVariantPrice';

export interface CreateProductVariant {
  /** Whether the variant can be backordered. */
  allow_backorder?: boolean;
  /** The barcode of the variant. */
  barcode?: string;
  /** The EAN number of the variant. */
  ean?: string;
  /** The height of the variant. */
  height?: number;
  /** The HS code of the variant. */
  hs_code?: string;
  /** The inventory items of the variant. */
  inventory_items?: CreateProductVariantInventoryItemsItem[];
  /** The length of the variant. */
  length?: number;
  /** Whether Medusa should keep track of inventory for this variant. */
  manage_inventory?: boolean;
  /** The material composition of the variant. */
  material?: string;
  /** Additional metadata for the variant. */
  metadata?: CreateProductVariantMetadata;
  /** The MID code of the variant. */
  mid_code?: string;
  /** The options of the variant. */
  options?: CreateProductVariantOptions;
  /** The country of origin of the variant. */
  origin_country?: string;
  /** The prices of the variant. */
  prices?: CreateVariantPrice[];
  /** The unique SKU for the variant. */
  sku?: string;
  /** The title of the variant. */
  title?: string;
  /** The UPC number of the variant. */
  upc?: string;
  /** The rank of the variant. */
  variant_rank?: number;
  /** The weight of the variant. */
  weight?: number;
  /** The width of the variant. */
  width?: number;
}

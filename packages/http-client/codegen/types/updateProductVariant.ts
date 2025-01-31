/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { UpdateProductVariantMetadata } from './updateProductVariantMetadata';
import type { UpdateProductVariantOptions } from './updateProductVariantOptions';
import type { UpdateVariantPrice } from './updateVariantPrice';

export interface UpdateProductVariant {
  /** Whether the variant can be backordered. */
  allow_backorder?: boolean;
  /**
   * A generic GTIN field for the variant.
   * @nullable
   */
  barcode?: string | null;
  /**
   * The EAN number of the variant.
   * @nullable
   */
  ean?: string | null;
  /**
   * The height of the variant.
   * @nullable
   */
  height?: number | null;
  /**
   * The Harmonized System code of the variant.
   * @nullable
   */
  hs_code?: string | null;
  /** The ID of the variant to update. */
  id?: string;
  /**
   * The length of the variant.
   * @nullable
   */
  length?: number | null;
  /** Whether Medusa should keep track of the inventory of this variant. */
  manage_inventory?: boolean;
  /**
   * The material composition of the variant.
   * @nullable
   */
  material?: string | null;
  /**
   * An optional set of key-value pairs with additional information.
   * @nullable
   */
  metadata?: UpdateProductVariantMetadata;
  /**
   * The Manufacturer Identification code of the variant.
   * @nullable
   */
  mid_code?: string | null;
  /** The options of the variant. */
  options?: UpdateProductVariantOptions;
  /**
   * The country of origin of the variant.
   * @nullable
   */
  origin_country?: string | null;
  /** The prices of the variant. */
  prices?: UpdateVariantPrice[];
  /**
   * The unique SKU for the variant.
   * @nullable
   */
  sku?: string | null;
  /** The title of the variant. */
  title?: string;
  /**
   * The UPC number of the variant.
   * @nullable
   */
  upc?: string | null;
  /** The rank of the variant when presented in a list of variants. */
  variant_rank?: number;
  /**
   * The weight of the variant.
   * @nullable
   */
  weight?: number | null;
  /**
   * The width of the variant.
   * @nullable
   */
  width?: number | null;
}

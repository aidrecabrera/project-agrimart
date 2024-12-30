/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { VendorProductCategory } from './vendorProductCategory';
import type { VendorProductCollection } from './vendorProductCollection';
import type { VendorProductImage } from './vendorProductImage';
import type { VendorProductMetadata } from './vendorProductMetadata';
import type { VendorProductOption } from './vendorProductOption';
import type { VendorProductStatus } from './vendorProductStatus';
import type { VendorProductTag } from './vendorProductTag';
import type { VendorProductType } from './vendorProductType';
import type { VendorProductVariant } from './vendorProductVariant';

/**
 * A product object with its properties
 */
export interface VendorProduct {
  /** The associated product categories. */
  categories?: VendorProductCategory[];
  /**
   * The associated product collection.
   * @nullable
   */
  collection?: VendorProductCollection;
  /** The date with timezone at which the resource was created. */
  created_at: string;
  /**
   * The date with timezone at which the resource was deleted.
   * @nullable
   */
  deleted_at?: string | null;
  /**
   * A description of the product.
   * @nullable
   */
  description?: string | null;
  /** Whether the product can be discounted. */
  discountable?: boolean;
  /**
   * The ID of the product in an external system.
   * @nullable
   */
  external_id?: string | null;
  /** A unique handle for the product. */
  handle: string;
  /**
   * The height of the product.
   * @nullable
   */
  height?: number | null;
  /**
   * The HS Code of the product.
   * @nullable
   */
  hs_code?: string | null;
  /** The unique identifier of the product. */
  id: string;
  /** The associated product images. */
  images?: VendorProductImage[];
  /** Whether the product is a gift card. */
  is_giftcard?: boolean;
  /**
   * The length of the product.
   * @nullable
   */
  length?: number | null;
  /**
   * The material of the product.
   * @nullable
   */
  material?: string | null;
  /** An optional key-value map with additional details. */
  metadata?: VendorProductMetadata;
  /**
   * The MID Code of the product.
   * @nullable
   */
  mid_code?: string | null;
  /** The associated product options. */
  options?: VendorProductOption[];
  /**
   * The origin country of the product.
   * @nullable
   */
  origin_country?: string | null;
  /** The status of the product. */
  status?: VendorProductStatus;
  /**
   * The subtitle of the product.
   * @nullable
   */
  subtitle?: string | null;
  /** The associated product tags. */
  tags?: VendorProductTag[];
  /**
   * URL to the product's thumbnail.
   * @nullable
   */
  thumbnail?: string | null;
  /** The title of the product. */
  title: string;
  /**
   * The associated product type.
   * @nullable
   */
  type?: VendorProductType;
  /** The date with timezone at which the resource was last updated. */
  updated_at: string;
  /** The associated product variants. */
  variants?: VendorProductVariant[];
  /**
   * The weight of the product.
   * @nullable
   */
  weight?: number | null;
  /**
   * The width of the product.
   * @nullable
   */
  width?: number | null;
}

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StoreProductCategoryCategoryChildrenItem } from './storeProductCategoryCategoryChildrenItem';
import type { StoreProductCategoryMetadata } from './storeProductCategoryMetadata';
import type { StoreProductCategoryParentCategory } from './storeProductCategoryParentCategory';
import type { StoreProduct } from './storeProduct';

/**
 * The category's details.
 */
export interface StoreProductCategory {
  /** The category's children. */
  category_children: StoreProductCategoryCategoryChildrenItem[];
  /** The date the category was created. */
  created_at: string;
  /** The date the category was deleted. */
  deleted_at: string;
  /** The category's description. */
  description: string;
  /** The category's handle. */
  handle: string;
  /** The category's ID. */
  id: string;
  /** The category's metadata, can hold custom key-value pairs. */
  metadata?: StoreProductCategoryMetadata;
  /** The category's name. */
  name: string;
  parent_category: StoreProductCategoryParentCategory;
  /** The ID of the category's parent. */
  parent_category_id: string;
  /** The category's products. */
  products?: StoreProduct[];
  /** The category's rank. */
  rank: number;
  /** The date the category was updated. */
  updated_at: string;
}

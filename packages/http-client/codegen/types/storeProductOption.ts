/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { StoreProductOptionMetadata } from './storeProductOptionMetadata';
import type { StoreProductOptionProduct } from './storeProductOptionProduct';
import type { StoreProductOptionValue } from './storeProductOptionValue';

/**
 * The product option's details.
 */
export interface StoreProductOption {
  /** The date the product option was created. */
  created_at?: string;
  /** The date the product option was deleted. */
  deleted_at?: string;
  /** The option's ID. */
  id: string;
  /** The option's metadata, can hold custom key-value pairs. */
  metadata?: StoreProductOptionMetadata;
  product?: StoreProductOptionProduct;
  /** The ID of the product this option belongs to. */
  product_id?: string;
  /** The option's title. */
  title: string;
  /** The date the product option was updated. */
  updated_at?: string;
  /** The option's values. */
  values?: StoreProductOptionValue[];
}

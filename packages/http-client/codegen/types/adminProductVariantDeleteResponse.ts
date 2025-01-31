/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminProduct } from './adminProduct';

/**
 * The details of the product variant's deletion.
 */
export interface AdminProductVariantDeleteResponse {
  /** Whether the product variant was deleted. */
  deleted: boolean;
  /** The product variant's ID. */
  id: string;
  /** The name of the deleted object. */
  object: string;
  parent?: AdminProduct;
}

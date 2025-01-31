/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminOrderPreview } from './adminOrderPreview';
import type { AdminReturn } from './adminReturn';

/**
 * The details of a return and a preview of the order once the return is applied.
 */
export interface AdminReturnPreviewResponse {
  order_preview: AdminOrderPreview;
  return: AdminReturn;
}

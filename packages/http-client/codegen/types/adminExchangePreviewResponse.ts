/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminExchange } from './adminExchange';
import type { AdminOrderPreview } from './adminOrderPreview';

/**
 * A preview of the order once the exchange is applied.
 */
export interface AdminExchangePreviewResponse {
  exchange: AdminExchange;
  order_preview: AdminOrderPreview;
}

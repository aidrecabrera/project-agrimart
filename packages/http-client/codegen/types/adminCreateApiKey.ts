/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminCreateApiKeyType } from './adminCreateApiKeyType';

/**
 * The API key's details.
 */
export interface AdminCreateApiKey {
  /** The API key's title. */
  title: string;
  /** The API key's type. Use `secret` for a user's API key; Use `publishable` for Publishable API keys. */
  type: AdminCreateApiKeyType;
}

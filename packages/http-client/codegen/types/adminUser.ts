/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminUserMetadata } from './adminUserMetadata';

/**
 * The user's details.
 */
export interface AdminUser {
  /** The URL of the user's avatar. */
  avatar_url: string;
  /** The date the user was created. */
  created_at: string;
  /** The date the user was deleted. */
  deleted_at: string;
  /** The user's email. */
  email: string;
  /** The user's first name. */
  first_name: string;
  /** The user's ID. */
  id: string;
  /** The user's last name. */
  last_name: string;
  /** The user's metadata, can hold custom key-value pairs. */
  metadata: AdminUserMetadata;
  /** The date the user was updated. */
  updated_at: string;
}

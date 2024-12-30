/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { AdminTaxRateMetadata } from './adminTaxRateMetadata';
import type { AdminTaxRateRule } from './adminTaxRateRule';
import type { AdminTaxRegion } from './adminTaxRegion';

/**
 * The tax rate's details.
 */
export interface AdminTaxRate {
  /** The code the tax rate is identified by. */
  code: string;
  /** The date the tax rate was created. */
  created_at: string;
  /** The ID of the user that created the tax rate. */
  created_by: string;
  /** The date the tax rate was deleted. */
  deleted_at: string;
  /** The tax rate's ID. */
  id: string;
  /** Whether the tax rate should be combined with parent rates. */
  is_combinable: boolean;
  /** Whether this tax rate is the default in the tax region. */
  is_default: boolean;
  /** The tax rate's metadata, can hold custom key-value pairs. */
  metadata: AdminTaxRateMetadata;
  /** The tax rate's name. */
  name: string;
  /** The rate to charge. */
  rate: number;
  /** The tax rate's rules. */
  rules: AdminTaxRateRule[];
  tax_region: AdminTaxRegion;
  /** The ID of the tax region this rate belongs to. */
  tax_region_id: string;
  /** The date the tax rate was updated. */
  updated_at: string;
}

/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */
import type { WorkflowExecutionContextErrorsItemError } from './workflowExecutionContextErrorsItemError';

/**
 * The error's details.
 */
export type WorkflowExecutionContextErrorsItem = {
  /** The error's action. */
  action: string;
  /** The error's details. */
  error: WorkflowExecutionContextErrorsItemError;
  /** The error's handler type. */
  handlerType: string;
};

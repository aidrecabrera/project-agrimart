/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Medusa API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The compensation function's status.
 */
export type AdminWorkflowExecutionExecutionStepsCompensateStatus = typeof AdminWorkflowExecutionExecutionStepsCompensateStatus[keyof typeof AdminWorkflowExecutionExecutionStepsCompensateStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminWorkflowExecutionExecutionStepsCompensateStatus = {
  idle: 'idle',
  ok: 'ok',
  waiting_response: 'waiting_response',
  temp_failure: 'temp_failure',
  permanent_failure: 'permanent_failure',
} as const;

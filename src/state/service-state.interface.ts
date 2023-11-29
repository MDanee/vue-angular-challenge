export type HealthStatus = "UP" | "DOWN";

export interface ServiceStatusItem {
  readonly updatedAt: string;
  readonly healthStatus: HealthStatus;
}

export type ServiceStatusType =
  | "push"
  | "trx"
  | "login"
  | "registration"
  | "testService"
  | "transfer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ServiceStatusEmptyState {}

export interface ServiceStatusLoadingState {
  readonly isLoading: boolean;
}

export interface ServiceStatusFetchedState {
  readonly services: Record<ServiceStatusType, ServiceStatusItem>;
}

export type ServiceStatusState =
  | ServiceStatusEmptyState
  | ServiceStatusLoadingState
  | ServiceStatusFetchedState;

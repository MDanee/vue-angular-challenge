import {
  ServiceStatusState,
  ServiceStatusFetchedState,
  ServiceStatusLoadingState,
} from "./service-state.interface";

export const isResultState = (
  state: ServiceStatusState
): state is ServiceStatusFetchedState => "services" in state;

export const isLoadingState = (
  state: ServiceStatusState
): state is ServiceStatusLoadingState =>
  "isLoading" in state && state.isLoading;

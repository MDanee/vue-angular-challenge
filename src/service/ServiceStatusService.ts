import {
  ServiceStatusItem,
  ServiceStatusType,
} from "../state/service-state.interface";

export interface FetchServiceStatusResponse {
  readonly services: Record<ServiceStatusType, ServiceStatusItem>;
}

const API_URL =
  "https://dsp-health-upscale-api-upscale.azure-api.net/api/v0/system-status/health";

export class ServiceStatusService {
  async fetchServiceStatus$(): Promise<FetchServiceStatusResponse> {
    return (await fetch(API_URL)).json();
  }
}

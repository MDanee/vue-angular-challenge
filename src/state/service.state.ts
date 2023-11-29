import { defineStore } from "pinia";
import { ServiceStatusState } from "./service-state.interface";
import { ServiceStatusService } from "../service/ServiceStatusService";

const initialState: ServiceStatusState = {};

export const useServiceState = defineStore("service-status", {
  state: (): ServiceStatusState => initialState,
  actions: {
    async load() {
      this.$patch({
        isLoading: true,
      });
      console.log("loading", this.$state);
      const services = await new ServiceStatusService().fetchServiceStatus$();
      this.$patch({
        isLoading: false,
        ...services,
      });
      console.log("loaded", this.$state);
    },
  },
});

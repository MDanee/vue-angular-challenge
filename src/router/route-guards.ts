import { NavigationGuardWithThis } from "vue-router";
import { AuthenticationService } from "../service/AuthenticationService";
import {
  LOGIN_ROUTE_NAME,
  SERVER_STATUS_ROUTE_NAME,
} from "../constants/route-names.constants";

export const isAuthenticatedGuard: NavigationGuardWithThis<undefined> = () => {
  return new AuthenticationService().isAuthenticated()
    ? true
    : {
        name: LOGIN_ROUTE_NAME,
      };
};

export const isNotAuthenticatedGuard: NavigationGuardWithThis<
  undefined
> = () => {
  return !new AuthenticationService().isAuthenticated()
    ? true
    : {
        name: SERVER_STATUS_ROUTE_NAME,
      };
};

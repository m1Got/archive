import {
  props,
  emptyProps,
  createAction,
  createActionGroup,
} from "@ngrx/store";
import { IUser } from "src/app/core/types";

export const logoutAction = createAction("[Logout]");

export const updateUserAction = createActionGroup({
  source: "updateUser",
  events: {
    enter: props<{ name; surname; patronymic }>(),
    success: props<{ user: IUser }>(),
    failure: emptyProps(),
  },
});

export const getUserAction = createActionGroup({
  source: "getUser",
  events: {
    enter: emptyProps(),
    success: props<{ user: IUser }>(),
    failure: emptyProps(),
  },
});

export const loginAction = createActionGroup({
  source: "login",
  events: {
    enter: props<{ phone: string }>(),
    success: props<{ message: string }>(),
    failure: emptyProps(),
  },
});

export const confirmAction = createActionGroup({
  source: "confirm",
  events: {
    enter: props<{ phone: string; code: string }>(),
    success: props<{ user: IUser }>(),
    failure: props<{ errors: { [key: string]: string[] } }>(),
  },
});

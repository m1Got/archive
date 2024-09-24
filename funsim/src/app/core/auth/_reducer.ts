import { createFeature, createReducer, on } from "@ngrx/store";

import { IUser } from "src/app/core/types";
import {
  loginAction,
  logoutAction,
  confirmAction,
  getUserAction,
  updateUserAction,
} from "src/app/core/auth";

interface IAuthState {
  user: IUser | null;
  errors: any | null;
  message: string | null;
  isLoggedIn: boolean;
  getUserLoading: boolean;
  authSubmitting: boolean;
  updateUserSubmitting: boolean;
}

const initialState: IAuthState = {
  user: null,
  errors: null,
  message: null,
  isLoggedIn: false,
  getUserLoading: false,
  authSubmitting: false,
  updateUserSubmitting: false,
};

const authFeature = createFeature({
  name: "auth",
  reducer: createReducer(
    initialState,
    // ==== login ====
    on(loginAction.enter, (state) => ({ ...state, authSubmitting: true })),
    on(loginAction.success, (state, action) => ({
      ...state,
      message: action.message,
      authSubmitting: false,
    })),
    on(loginAction.failure, (state) => ({ ...state, authSubmitting: false })),
    // ==== confirm ====
    on(confirmAction.enter, (state) => ({ ...state, authSubmitting: true })),
    on(confirmAction.success, (state, action) => ({
      ...state,
      user: action.user,
      isLoggedIn: true,
      authSubmitting: false,
    })),
    on(confirmAction.failure, (state, action) => ({
      ...state,
      errors: action.errors,
      authSubmitting: false,
    })),
    // ==== getUser ====
    on(getUserAction.enter, (state) => ({ ...state, getUserLoading: true })),
    on(getUserAction.success, (state, action) => ({
      ...state,
      user: action.user,
      isLoggedIn: true,
      getUserLoading: false,
    })),
    on(getUserAction.failure, (state) => ({
      ...state,
      user: null,
      isLoggedIn: false,
      getUserLoading: false,
    })),
    // ==== logout ====
    on(logoutAction, (state) => ({ ...state, isLoggedIn: false })),
    // ==== updateUser ====
    on(updateUserAction.enter, (state) => ({
      ...state,
      updateUserSubmitting: true,
    })),
    on(updateUserAction.success, (state, action) => ({
      ...state,
      user: action.user,
      updateUserSubmitting: false,
    })),
    on(updateUserAction.failure, (state) => ({
      ...state,
      updateUserSubmitting: false,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectUser: user,
  selectErrors: authErrors,
  selectMessage: authMessage,
  selectIsLoggedIn: isLoggedIn,
  selectGetUserLoading: userLoading,
  selectAuthSubmitting: authSubmitting,
  selectUpdateUserSubmitting: updateUserSubmitting,
} = authFeature;

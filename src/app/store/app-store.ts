import { createStore, combineReducers, applyMiddleware } from "redux";
import { ROOT_REDUCER } from "./root-reducer";
import { InjectionToken } from "@angular/core";
import { ApplicationState } from '../store/application-state';
import { Store } from 'redux';
import thunk from 'redux-thunk';
import { logger, crashReporter } from "./middleware";

export function appStoreFactory() : Store<ApplicationState> {
  return createStore(
    combineReducers(ROOT_REDUCER), 
    applyMiddleware(thunk, logger, crashReporter)) as Store<ApplicationState>;
}

export const APP_STORE = new InjectionToken('appStore');
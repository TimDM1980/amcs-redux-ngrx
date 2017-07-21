import { createStore, combineReducers } from "redux";
import { ROOT_REDUCER } from "./root-reducer";
import { InjectionToken } from "@angular/core";
import { ApplicationState } from '../store/application-state';
import { Store } from 'redux';

export function appStoreFactory() : Store<ApplicationState> {
  return createStore(combineReducers(ROOT_REDUCER)) as Store<ApplicationState>;
}

export const APP_STORE = new InjectionToken('appStore');
import { 
    take,
    put,
    select
 } from "redux-saga/effects";
 import * as mutations from "./mutations"
 import uuid from 'uuid';

 export function* taskCreationSaga () {
     while (true) {
         const {groupId} = yield take(mutations.REQUEST_TASK_CREATION);
         console.log('got group id.. ', groupId) 
     }
 }
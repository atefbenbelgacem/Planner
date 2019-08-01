import { take, put, select } from "redux-saga/effects";
import uuid from "uuid";
import axios from "axios";
import { history } from "./history";

import * as mutations from "./mutations";

const url = "http://localhost:3000";

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerId = "U1";
    const taskId = uuid();
    yield put(mutations.createTask(groupId, taskId, ownerId));
    const { res } = yield axios.post(url + "/task/new", {
      task: {
        id: taskId,
        group: groupId,
        owner: ownerId,
        isComplete: false,
        name: "New Task"
      }
    });
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE
    ]);
    axios.post(url + "/task/update", {
      task: {
        id: task.taskId,
        group: task.groupId,
        name: task.name,
        isComplete: task.isComplete
      }
    });
  }
}

export function* userAuthSaga(){
  while(true){
    const {username, password} = yield take(mutations.REQUEST_AUTH_USER)
    try {
      const {data} = yield axios.post(url + '/authentication', {username, password})
      if(!data){
        throw new Error();
      }
      console.log('Authenticated...   ', data)
      yield put(mutations.setState(data.state))
      yield put(mutations.processAuthUser(mutations.AUTHENTICATED))
      history.push('/dashboard')
    } catch (error) {
      console.log("can't authenticate")
      yield put (mutations.processAuthUser(mutations.NOT_AUTHENTICATED))
    }
    
  }
  
}

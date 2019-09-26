export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const SET_TASK_COMPLETE = "SET_TASK_COMPLETE";
export const SET_TASK_GROUP = "SET_TASK_GROUP";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const REQUEST_AUTH_USER = "REQUEST_AUTH_USER";
export const PROCESSING_AUTH_USER = "PROCESSING_AUTH_USER";
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const SET_STATE = "SET_STATE";
export const SET_SESSION = 'SET_SESSION'
export const REFRECH_BROWSER = 'REFRECH_BROWSER'

export const requestTaskCreation = (groupId, ownerId) => ({
  type: REQUEST_TASK_CREATION,
  groupId,
  ownerId
});

export const createTask = (groupId, taskId, ownerId) => ({
  type: CREATE_TASK,
  taskId,
  groupId,
  ownerId
});

export const setTaskCompletion = (id, isComplete) => ({
  type: SET_TASK_COMPLETE,
  taskId: id,
  isComplete
});

export const setTaskName = (id, name) => ({
  type: SET_TASK_NAME,
  taskId: id,
  name
});

export const setTaskGroup = (id, groupId) => ({
  type: SET_TASK_GROUP,
  taskId: id,
  groupId
});

export const requestAuthUser = (username, password) => ({
  type: REQUEST_AUTH_USER,
  username,
  password
});

export const processAuthUser = (status = AUTHENTICATING, session = null) => ({
  type: PROCESSING_AUTH_USER,
  session,
  authenticated: status
});

export const setState = (state = {}) => ({
  type: SET_STATE,
  state
});
export const setSession = (session = {}) => ({
  type: SET_SESSION,
  session
});
export const refrechBrowser = () => ({
  type: REFRECH_BROWSER
});

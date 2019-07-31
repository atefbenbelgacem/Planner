export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASK_COMPLETE = 'SET_TASK_COMPLETE'
export const SET_TASK_GROUP = 'SET_TASK_GROUP'
export const SET_TASK_NAME = 'SET_TASK_NAME'

export const requestTaskCreation = (groupId) => ({
    type: REQUEST_TASK_CREATION,
    groupId
})

export const createTask = (groupId, taskId, ownerId) => ({
    type: CREATE_TASK,
    taskId,
    groupId,
    ownerId
})

export const setTaskCompletion = (id, isComplete) => ({
    type: SET_TASK_COMPLETE,
    taskId: id,
    isComplete
})

export const setTaskName = (id, name) => ({
    type: SET_TASK_NAME,
    taskId: id,
    name
})

export const setTaskGroup = (id, groupId) => ({
    type: SET_TASK_GROUP,
    taskId: id,
    groupId
})

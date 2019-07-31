import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";

const TaskDetails = ({
  id,
  comments,
  task,
  isComplete,
  groups,
  setTaskCompletion,
  setTaskGroup,
  setTaskName
}) => (
  <div>
    <div>
      <input onChange={setTaskName} value={task.name} />
    </div>
    <div>
      <button onClick={() => setTaskCompletion(id, !isComplete)}>
        {isComplete ? `Reopen` : `Complete`}
      </button>
    </div>

    <div>
      <select onChange={setTaskGroup} value={task.group}>
        {groups.map(group => (
          <option value={group.id} key={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>

    <div>
      <Link to="/dashboard">
        <button>Done</button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
    setTaskGroup(e) {
      dispatch(mutations.setTaskGroup(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    }
  };
};

export const ConnectTaskDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetails);

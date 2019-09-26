import React, {useEffect} from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";
import { refrechBrowser } from "../store/mutations";

export const Dashboard = ({ groups, loadState }) => {
    useEffect(() => {
        loadState()
    }, []);
  return (
    <div className="row">
      {groups.map(group => (
        <ConnectedTaskList
          id={group.id}
          name={group.name}
          key={group.id}
          className="col"
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadState() {
      console.log("loading the state from db");
      dispatch(refrechBrowser());
    }
  };
};

export const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

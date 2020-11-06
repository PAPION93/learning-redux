import React from "react";
import { connect } from "react-redux";
import { actionsCreators } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("ToDo: mapDispatchToProps");
  return {
    onBtnClick: () =>
      dispatch(actionsCreators.deleteToDo(parseInt(ownProps.id))),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);

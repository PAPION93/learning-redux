import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  console.log("ToDo");
  return (
    <li>
      <Link to={`/${id}`}> {text} </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("ToDo: mapDispatchToProps");
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);

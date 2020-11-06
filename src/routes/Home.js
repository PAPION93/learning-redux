import React, { useState } from "react";
import { connect } from "react-redux";
import { actionsCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    console.log("onSubmit");
    e.preventDefault();
    setText("");
    addToDo(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  console.log("Home: mapStateToProps");
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  console.log("Home: mapDispatchToProps");
  return {
    addToDo: (text) => dispatch(actionsCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "MINUS";

const addToDo = (text) => {
  console.log("addToDo");
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  console.log("reducer");
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionsCreators = {
  addToDo,
  deleteToDo,
};

export default store;

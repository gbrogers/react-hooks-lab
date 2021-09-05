import react, { useState } from "react";
export default function AddTodo(props) {
  const [userInput, setUserInput] = useState("");
  const { addTodo } = props;

  function handleAddTodo(e) {
    e.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input
        placeholder="Add a todo!"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  );
}

import styled from "styled-components";

import { useState } from "react";
import Check from "../Check/Check";

const AddTodo = ({ submitTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = event => {
    submitTodo(todoText);
    setTodoText("");
    event.preventDefault();
  };

  const handleChange = event => {
    setTodoText(event.target.value);
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <Check type="plus" />
      <SC.Body>
        <SC.Input
          type="text"
          value={todoText}
          placeholder="Memorize the dictionary"
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </SC.Body>
    </SC.Form>
  );
};

const SC = {};
SC.Form = styled.form`
  display: flex;
  align-items: center;
`;
SC.Body = styled.div`
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  width: 100%;
`;
SC.Input = styled.input`
  border: none;
  font-size: 18px;
  font-family: "Inconsolata", monospace;
  padding: 10px 0;

  ::placeholder {
    color: #e1e1e1;
  }
`;
SC.Icon = styled.div`
  border-radius: 100px;
  border: 2px solid #8000ff;
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export default AddTodo;

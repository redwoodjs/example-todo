import styled from "styled-components";

import Check from "src/components/Check";

const TodoItem = ({ id, body, status, updateTodo }) => {
  const onUpdate = () => {
    if (status === "off") {
      updateTodo({ variables: { id, status: "on" } });
    } else {
      updateTodo({ variables: { id, status: "off" } });
    }
  };

  const renderBody = () => {
    if (status === "on") {
      return <s>{body}</s>;
    } else {
      return body;
    }
  };

  return (
    <SC.Item>
      <SC.Target onClick={onUpdate}>
        <Check type={status} />
      </SC.Target>
      <SC.Body>{renderBody()}</SC.Body>
    </SC.Item>
  );
};

const SC = {};
SC.Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`;
SC.Target = styled.div`
  cursor: pointer;
`;
SC.Body = styled.div`
  list-style: none;
  font-size: 18px;
  border-top: 1px solid #efefef;
  padding: 10px 0;
  width: 100%;
`;

export default TodoItem;

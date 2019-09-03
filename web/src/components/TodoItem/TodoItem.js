import styled from "styled-components";

import Check from "src/components/Check";

const TodoItem = ({ id, body, status }) => {
  return (
    <SC.Item>
      <Check type={status} />
      <SC.Body>{body}</SC.Body>
    </SC.Item>
  );
};

const SC = {};
SC.Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`;
SC.Body = styled.div`
  list-style: none;
  font-size: 18px;
  border-top: 1px solid #efefef;
  padding: 10px 0;
  width: 100%;
`;

export default TodoItem;

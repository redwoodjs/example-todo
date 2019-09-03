import styled from "styled-components";

const TodoItem = ({ id, body }) => {
  return (
    <SC.Item>
      <SC.CheckOff />
      <SC.Body>{body}</SC.Body>
    </SC.Item>
  );
};

const SC = {};
SC.Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
`;
SC.Body = styled.div`
  list-style: none;
  font-size: 18px;
  border-top: 1px solid #efefef;
  padding: 10px 0;
  width: 100%;
`;
SC.CheckOff = styled.div`
  border-radius: 100px;
  border: 2px solid #8000ff;
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
SC.CheckOn = styled(SC.CheckOff)`
  background-color: #8000ff;
`;

export default TodoItem;

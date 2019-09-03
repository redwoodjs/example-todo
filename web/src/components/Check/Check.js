import styled from "styled-components";

const Check = ({ type }) => {
  if (type === "on") {
    return <SC.CheckOn />;
  } else if (type === "off") {
    return <SC.CheckOff />;
  } else if (type === "plus") {
    return <SC.CheckOn />;
  }
};

const SC = {};
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

export default Check;

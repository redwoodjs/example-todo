import styled from "styled-components";

import IconOn from "./on.svg";
import IconOff from "./off.svg";
import IconPlus from "./plus.svg";

const Check = ({ type }) => {
  if (type === "on") {
    return (
      <SC.Icon>
        <IconOn />
      </SC.Icon>
    );
  } else if (type === "off") {
    return (
      <SC.Icon>
        <IconOff />
      </SC.Icon>
    );
  } else if (type === "plus") {
    return (
      <SC.Icon>
        <IconPlus />
      </SC.Icon>
    );
  }
};

const SC = {};
SC.Icon = styled.div`
  margin-right: 15px;
`;

export default Check;

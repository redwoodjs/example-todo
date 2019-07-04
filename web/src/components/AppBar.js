import { Box } from "src/lib/primitives";

export default () => (
  <Box
    bg="blue"
    css={`
      height: 64px;
    `}
  >
    <Box
      color="white"
      fontSize={5}
      pl="8px"
      m="auto"
      css={`
        width: 800px;
        line-height: 64px;
      `}
    >
      Billable
    </Box>
  </Box>
);

import { useAuth } from "@hammerframework/hammer-web";

import { Flex, Box, Button } from "src/lib/primitives";

export default () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  return (
    <Box
      bg="blue"
      css={`
        height: 64px;
      `}
    >
      <Flex
        flexDirection="row"
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
        <Box
          ml="auto"
          css={`
            display: flex;
            align-items: center;
          `}
        >
          {!isAuthenticated && (
            <>
              <Button onClick={() => loginWithRedirect({})}>Log in</Button>
              <Button onClick={() => loginWithRedirect({})}>Sign up</Button>
            </>
          )}
          {isAuthenticated && (
            <>
              <Button onClick={() => logout()}>Log out</Button>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

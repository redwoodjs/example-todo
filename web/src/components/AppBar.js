import { Flex, Box, Button } from "src/lib/primitives";
import { useAuth0 } from "src/lib/auth0";

export default () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
        <Box bg="red" ml="auto">
          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}
          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
        </Box>
      </Flex>
    </Box>
  );
};

import { Stack } from "@chakra-ui/react";

const Heading = () => {
  return (
    <Stack spacing={6}>
      <Heading as="h1" size="4xl" noOfLines={1}>
        Todo List
      </Heading>
    </Stack>
  );
};

export default Heading;

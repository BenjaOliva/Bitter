import {
  Avatar,
  Box,
  Center,
  HStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

export default function AvatarCard({ user }) {
  const color =useColorModeValue("gray.300", "gray.600");
  console.log("User: ", user);
  return (
    user !== null && (
      <Center py={2}>
        <Box
          maxW={"500em"}
          w={"full"}
          bg={color}
          boxShadow={"xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <HStack m={3}>
            <Avatar alt="user-avatar" src={user.avatar} />
            <Text fontSize="md">{user.userName}</Text>
          </HStack>
        </Box>
      </Center>
    )
  );
}

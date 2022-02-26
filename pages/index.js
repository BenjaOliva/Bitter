import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {
  Center,
  Button,
  useColorMode,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Logo from './../components/Logo';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={"container"}>
      <Head>
        <title>Bitter | Home</title>
        <meta name="description" content="Bitter Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <Center h={"70vh"}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="center"
          >
            <Logo themeLight={colorMode === "light" ? true : false} width="100px" height="100px"/>
            <Heading>
              Welcome to <a href="https://nextjs.org">Bitter!</a>
            </Heading>
            <Button leftIcon={<FaGithub />}>
              Log In with GitHub
            </Button>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </VStack>
        </Center>
        <Center h={"20vh"}>
          <footer className={"footer"}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <Logo themeLight={colorMode === "light" ? true : false} width="50px" height="50px" />
            </a>
          </footer>
        </Center>
      </AppLayout>
    </div>
  );
}

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
import Logo from "./../components/Logo";
import { FaGithub } from "react-icons/fa";
import { loginWithGithub, onAuthStateChanged } from "./../firebase/client";
import { useEffect, useState } from "react";
import AvatarCard from "./../components/Avatar/index";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(user => {
      setUser(user)
    });
  }, []);

  const handleLoginGithub = () => {
    loginWithGithub()
      .then(user => {
        console.log("User loggin: ", user);
        setUser(user)
      })
      .catch((err) => console.error(err));
  };

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
            <Logo
              themeLight={colorMode === "light" ? true : false}
              width="100px"
            />
            <Heading>
              Welcome to <a href="https://nextjs.org">Bitter!</a>
            </Heading>
            {user === null ? (
              <Button leftIcon={<FaGithub />} onClick={handleLoginGithub}>
                Log In with GitHub
              </Button>
            ) : (
              <AvatarCard user={user} />
            )}
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
              <Logo
                themeLight={colorMode === "light" ? true : false}
                width="50px"
              />
            </a>
          </footer>
        </Center>
      </AppLayout>
    </div>
  );
}

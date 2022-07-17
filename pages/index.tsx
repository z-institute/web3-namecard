import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import { Center, Box, Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useEnsData from "../hooks/useEns";
import useImgColor from "../hooks/useImgColor";

const Home: NextPage = () => {
  const [domainName, setDomainName] = useState("cheyuwu.eth");
  const ensData = useEnsData(undefined, "cheyuwu.eth");
  const imgColor = useImgColor(
    "https://avatars0.githubusercontent.com/u/8186681?s=460&v=4"
  );

  return (
    <>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center w="100%" height="100vh" backgroundColor="gray.100">
        <Box>
          <Heading mb={5} color="brand-dark">
            The ENS Namecard
          </Heading>

          <ConnectButton />
          <Input
            mt="5"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
          ></Input>
          <Button mt="2" backgroundColor="brand" color="white" w="100%">
            {" "}
            Fetch
          </Button>
          <pre>{JSON.stringify(ensData, null, 4)}</pre>
          <pre>{JSON.stringify(imgColor, null, 4)}</pre>
        </Box>

        <Card cardData={ensData}></Card>
      </Center>
    </>
  );
};

export default Home;

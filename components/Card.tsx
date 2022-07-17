
import styles from '../styles/Card.module.css';
import { Heading, Box, Center, Image, Text, VStack, Flex, Spacer } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import classnames from 'classnames'
import { Link } from '@chakra-ui/react'
import { FaTwitter, FaDiscord, FaFacebookF, FaGithub } from "react-icons/fa";

//https://www.w3schools.com/howto/howto_css_flip_card.asp
const Card = () => {
  const [isFlipped, setIsFlipped] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      setIsFlipped(!isFlipped)
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <Box m="50" className={styles['flip-card']} onClick={() => setIsFlipped(!isFlipped)}>
    <Box w={520} h={300} className={classnames(styles['flip-card-inner'], { [styles['flipped']]: isFlipped })} >
      <Center w="100%" h="100%" shadow="xl"
        className={styles['flip-card-front']} backgroundColor="brand-black"
        borderRadius="xl" overflow="hidden">
        <Image boxSize="600px" src="https://media.artblocks.io/216000000.png" alt="" />
      </Center>
      <Center w="100%" h="100%" shadow="xl"
        backgroundColor="black"
        color="white"
        p={5}
        className={styles['flip-card-back']}
        borderRadius="xl" overflow="hidden"
      >
        <Flex direction="column" w="100%" h='100%'>
          <Flex flex={5}>
            <Flex flex={3} direction="column" pr="5">
              <Text color="brand">Boss, Coding Please</Text>
              <Spacer></Spacer>
              <Box>
                <Heading>Che-Yu Wu</Heading>
                <Text>cheyuwu.eth</Text>
              </Box>
            </Flex>
            <VStack borderLeft="solid 1px white" borderColor='brand'
              spacing="2" flex={4} align="flex-start"
              pl="5">
              <Link href={`https://twitter.com/cheyuwu345`} isExternal>
                <Flex align='center'>
                  <FaTwitter />
                  <Text ml="3">Twitter: cheyuwu345</Text>
                </Flex>
              </Link>


              <Link href={`https://www.facebook.com/cheyuwu345`} isExternal>
                <Flex align='center'>
                  <FaFacebookF />
                  <Text ml="3">FaceBook: cheyuwu345</Text>
                </Flex>
              </Link>


              <Link href={`https://github.com/frank890417`} isExternal>
                <Flex align='center'>
                  <FaGithub />
                  <Text ml="3">Github: cheyuwu345</Text>
                </Flex>
              </Link>
            </VStack>
          </Flex>
          <Flex flex={1}>
            <Box fontSize="7xl" mb={-5} className={styles['stroke-text']} >Che-Yu Wu</Box>
          </Flex>
        </Flex>
      </Center>
    </Box>
  </Box >
}

export default Card
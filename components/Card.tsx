
import styles from '../styles/Card.module.css';
import { Heading, Box, Center, Image, Text, VStack, Flex, Spacer } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import classnames from 'classnames'

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
        className={styles['flip-card-front']} backgroundColor="#19191A"
        borderRadius="xl" overflow="hidden">
        <Image boxSize="600px" src="https://media.artblocks.io/216000000.png" alt="" />
        {/* <Heading>Hello</Heading> */}
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
            <Flex flex={6} direction="column">
              <Text>Boss, Coding Please</Text>
              <Spacer></Spacer>
              <Box>
                <Heading>Che-Yu Wu</Heading>
                <Text>cheyuwu.eth</Text>
              </Box>
            </Flex>
            <VStack spacing="2" flex={4}>
              <Text>Twitter: cheyuwu345</Text>
              <Text>FaceBook: cheyuwu345</Text>
              <Text>Discord: cheyuwu345</Text>
            </VStack>
          </Flex>
          <Flex flex={1}>
            <Box fontSize="4xl" className={styles['stroke-text']} >Che-Yu Wu</Box>
          </Flex>
        </Flex>
      </Center>
    </Box>
  </Box >
}

export default Card
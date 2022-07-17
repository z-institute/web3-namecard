
import styles from '../styles/card.module.css';
import { Heading, Box, Center, Image, Text, VStack, Flex, Spacer } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import classNames from 'classnames'
import { Link } from '@chakra-ui/react'
import { FaTwitter, FaDiscord, FaGlobe, FaGithub } from "react-icons/fa";
import { colorRawType } from "../types/colorRawType"
//https://www.w3schools.com/howto/howto_css_flip_card.asp

const convertColor = (clr: colorRawType | undefined) => {
  if (clr) {
    return `rgb(${clr._rgb[0]},${clr._rgb[1]},${clr._rgb[2]})`;
  } else {
    return "";
  }
};
interface cardProps {
  cardData: {
    ensName?: string,
    avatarUrl?: string,
    twitter?: string,
    github?: string,
    websiteUrl?: string
    email?: string,
  },
  cardBgColor: string,
  colors: Array<colorRawType>
}
const Card = ({ cardData, cardBgColor, colors }: cardProps) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const convertColor = (clr: colorRawType) => {
    if (clr) {
      return `rgb(${clr._rgb[0]},${clr._rgb[1]},${clr._rgb[2]})`
    } else {
      return false
    }
  }
  const getLastName = (str: String | undefined) => (str || '').split("/").slice(-1)[0]

  useEffect(() => {
    setIsFlipped(false)
  }, [cardData])


  useEffect(() => {
    let timer = setInterval(() => {
      setIsFlipped(!isFlipped)
    }, 6000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <Box key={cardData.ensName} m="50" className={classNames(styles['flip-card'])} onClick={() => setIsFlipped(!isFlipped)}>
    <Box w={320} h={520} className={classNames(styles['flip-card-inner'], { [styles['flipped']]: isFlipped })} >
      <Center w="100%" h="100%" boxShadow='2xl'
        className={styles['flip-card-front']} backgroundColor={cardBgColor || 'brand-black'}
        borderRadius="xl" overflow="hidden"
        backgroundImage={cardData.avatarUrl}
        backgroundSize='cover'
        backgroundPosition='center'>
        {/* <Image boxSize="100%" src={cardData.avatarUrl} alt="" /> */}
      </Center>
      <Center w="100%" h="100%" boxShadow='2xl' backgroundColor={cardBgColor || 'brand-black'}
        color="white"
        p={5}
        className={styles['flip-card-back']}
        borderRadius="xl" overflow="hidden"
      >
        <Flex direction="column" w="100%" h='100%'>
          <Flex flex={5} direction="column">
            <Flex flex={3} direction="column" pr="5">
              <Text color={convertColor(colors[4]) || 'brand'}>Boss, Coding Please</Text>
              <Spacer></Spacer>
              <Box>
                {/* <Heading>Che-Yu Wu</Heading> */}
                {cardData.avatarUrl && <Image my={3} boxSize="150px" src={cardData.avatarUrl} alt="" />}
                <Heading>{cardData.ensName}</Heading>
                {/* {JSON.stringify(cardData)} */}
                <Text>{cardData.email}</Text>
              </Box>
            </Flex>
            <VStack borderTop="solid 1px white" borderColor={convertColor(colors[4]) || 'brand'}
              spacing="2" flex={4} align="flex-start"
              mt="5" pt='5'>



              <Link href={'https://twitter.com/' + cardData.twitter} isExternal>
                <Flex align='center'>
                  <FaTwitter />
                  <Text ml="3">Twitter: {getLastName(cardData.twitter)}</Text>
                </Flex>
              </Link>


              <Link href={'https://github.com/' + cardData.github} isExternal>
                <Flex align='center'>
                  <FaGithub />
                  <Text ml="3">Github: {getLastName(cardData.github)}</Text>
                </Flex>
              </Link>

              {cardData.websiteUrl && <Link href={cardData.websiteUrl} isExternal>
                <Flex align='center'>
                  <FaGlobe />
                  <Text ml="3">Website</Text>
                </Flex>
              </Link>}

            </VStack>
          </Flex>
          <Flex flex={1}>
            {// @ts-ignore
              <Box fontSize="7xl" mb={-5} style={{ "-webkit-text-stroke": `1px ${convertColor(colors[3])}`, color: 'transparent', fontWeight: 900 }}>
                {cardData.ensName}
              </Box>
            }
          </Flex>
        </Flex>
      </Center>
    </Box>
  </Box >
}

export default Card
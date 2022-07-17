import { Link, Image, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import useNFT from "../hooks/useNFT";
const NFTCard = () => {
  const { nfts } = useNFT();
  return (
    <>

      {nfts && <Heading mb={4} color="brand-dark" fontSize="20px" >
        NFTs:
      </Heading>}
      <SimpleGrid mb={4} columns={5} spacing={1}>
        {nfts &&
          nfts.map((data: any) => (
            <Link key={data.id} href={data.permalink} isExternal>
              <Image
                borderRadius="full"
                boxSize="90px"
                key={data.id}
                src={data.image_preview_url}
                alt={data.name}
              />
              <Text fontSize="xs" mt="10px">
                {data.name}
              </Text>
            </Link>
          ))}
      </SimpleGrid>
    </>
  );
};

export default NFTCard;

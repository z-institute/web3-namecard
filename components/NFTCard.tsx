import { Link, Image, Text, SimpleGrid } from "@chakra-ui/react";

const NFTCard = (nfts: any) => {
  return (
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
  );
};

export default NFTCard;

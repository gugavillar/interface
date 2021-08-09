import { Flex, Box, Image, VStack, Text, Avatar } from '@chakra-ui/react';

interface CardProps {
    srcImage: string;
    city: string;
    country: string;
    srcFlag: string;
}


export function Card({ srcImage, city, country, srcFlag }: CardProps) {
    return (
        <Box>
            <Image src={srcImage} alt={city} />
            <Flex justify="space-between" maxWidth="256px" px="6" py="4" borderLeft="1px" borderBottom="1px" borderRight="1px" borderBottomRadius={4} borderColor="yellow.300" pb="6">
                <VStack align="left" spacing="4">
                    <Text fontWeight="semibold" color="gray.600">{city}</Text>
                    <Text color="gray.200" fontWeight="medium">{country}</Text>
                </VStack>
                <Avatar mt="4" size="xs" src={srcFlag} alt={country} />
            </Flex>
        </Box>
    )
}
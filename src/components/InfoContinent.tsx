import { Box, HStack, VStack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'

interface InfoContinetProps {
    countries: number;
    languages: number;
    cities: number;
}


export function InfoContinent({ countries, languages, cities }: InfoContinetProps) {
    return (
        <Box px="4" mx="auto" py={["2", "10"]}>
            <HStack spacing="10">
                <VStack>
                    <Text alignSelf={["flex-start", "center"]} fontSize={["xl", "5xl"]} fontWeight="bold" color="yellow.300">{countries}</Text>
                    <Text fontSize={["lg", "2xl"]} fontWeight="bold" color="gray.600">países</Text>
                </VStack>
                <VStack>
                    <Text alignSelf={["flex-start", "center"]} fontSize={["xl", "5xl"]} fontWeight="bold" color="yellow.300">{languages}</Text>
                    <Text fontSize={["lg", "2xl"]} fontWeight="bold" color="gray.600">línguas</Text>
                </VStack>
                <VStack>
                    <Text alignSelf={["flex-start", "center"]} fontSize={["xl", "5xl"]} fontWeight="bold" color="yellow.300">{cities}</Text>
                    <Text fontSize={["lg", "2xl"]} fontWeight="bold" color="gray.600">cidades +100
                        <Tooltip label="mais informações" fontSize="md">
                            <InfoOutlineIcon ml="2" w="4" h="4" color="gray.200" />
                        </Tooltip>
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
}
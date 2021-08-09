import { Flex, Stack, Image, Text, Box, Icon, useBreakpointValue } from '@chakra-ui/react';
import { GiPlainCircle } from 'react-icons/gi';

export function TravelTypes() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    return (
        <Flex maxWidth={1160} w="100vw" h={["32", "36"]} mx="auto" mt={["9", "20"]} justify="center">
            {isWideVersion ? (
                <Stack direction="row" align="center" spacing="32">
                    <Box align="center">
                        {isWideVersion && <Image src="/images/cocktail.svg" alt="vida noturna" />}
                        <Text color="gray.600" fontSize="2xl" lineHeight="9" fontWeight="medium" mt="6">vida noturna</Text>
                    </Box>
                    <Box align="center">
                        <Image src="/images/surf.svg" alt="praia" />
                        <Text color="gray.600" fontSize="2xl" lineHeight="9" fontWeight="medium" mt="6">praia</Text>
                    </Box>
                    <Box align="center">
                        {isWideVersion && <Image src="/images/building.svg" alt="moderno" />}
                        <Text color="gray.600" fontSize="2xl" lineHeight="9" fontWeight="medium" mt="6">moderno</Text>
                    </Box>
                    <Box align="center">
                        <Image src="/images/museum.svg" alt="classico" />
                        <Text color="gray.600" fontSize="2xl" lineHeight="9" fontWeight="medium" mt="6">clássico</Text>
                    </Box>
                    <Box align="center">
                        <Image src="/images/earth.svg" alt="mais" />
                        <Text color="gray.600" fontSize="2xl" lineHeight="9" fontWeight="medium" mt="6">e mais...</Text>
                    </Box>
                </Stack>
            ) : (
                <>
                    <Stack direction="column" w="100%" align="center" color="gray.600" fontWeight="medium" fontSize="18px" lineHeight="7">
                        <Flex justify="space-between" w="100%" px="12">
                            <Flex align="center">
                                <Icon as={GiPlainCircle} w="8px" h="8px" color="yellow.300" mr="2" />
                                <Text as="span">vida noturna</Text>
                            </Flex>
                            <Flex align="center">
                                <Icon as={GiPlainCircle} w="8px" h="8px" color="yellow.300" mr="2" />
                                <Text as="span">praia</Text>
                            </Flex>
                        </Flex>
                        <Flex justify="space-between" w="100%" px="12">
                            <Flex align="center">
                                <Icon as={GiPlainCircle} w="8px" h="8px" color="yellow.300" mr="2" />
                                <Text as="span">moderno</Text>
                            </Flex>
                            <Flex align="center">
                                <Icon as={GiPlainCircle} w="8px" h="8px" color="yellow.300" mr="2" />
                                <Text as="span">clássico</Text>
                            </Flex>
                        </Flex>
                        <Flex justify="center" w="100%" px="12">
                            <Flex align="center">
                                <Icon as={GiPlainCircle} w="8px" h="8px" color="yellow.300" mr="2" />
                                <Text as="span">e mais...</Text>
                            </Flex>
                        </Flex>
                    </Stack>
                </>
            )}
        </Flex>
    )
}
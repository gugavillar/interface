import { Flex, Box, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react';


export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            w="100vw"
            maxWidth={1440}
            h={["163px", "335px"]}
            mx="auto"
            justify="space-around"
            align="center"
            backgroundImage="/images/background.svg"
            py={["7", "20"]} px={["4", "36"]}>
            <Box w="lg">
                <Heading
                    color="gray.50"
                    fontWeight="medium"
                    lineHeight={["7", "54px"]}
                    fontSize={["xl", "4xl"]}>
                    5 Continentes, <br /> infinitas possibilidades.
                </Heading>
                <Text
                    color="gray.100"
                    lineHeight={["5", "7"]} fontSize={["sm", "xl"]} mt="5">
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Box>
            {isWideVersion && <Image src="/images/airplane.svg" alt="Airplane" mt="20" />}
        </Flex>
    )
}
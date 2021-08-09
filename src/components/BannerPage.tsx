import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface BannerPageProps {
    srcImage: string;
    continent: string;
}

export function BannerPage({ srcImage, continent }: BannerPageProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    return (
        <Flex maxWidth={1440} mx="auto" w="100vw" position="relative">
            <Image src={srcImage} alt="Europa" />
            {isWideVersion ? (
                <Text position="absolute" fontSize="5xl" bottom="calc(100% - 90%)" right="calc(100% - 15%)" color="gray.50" fontWeight="medium">{continent}</Text>
            ) : (
                <Text position="absolute" fontSize="2xl" color="gray.50" fontWeight="medium" right="40%" top="40%" transition="transform(-40%, -40%)">{continent}
                </Text>
            )}
        </Flex>
    )
}
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';


SwiperCore.use([Navigation, Pagination]);

export function Slider() {
    return (
        <Flex mb="12" mt={["5", "14"]} maxWidth={1240} mx="auto">
            <Swiper navigation={true} pagination={true}>
                <SwiperSlide>
                    <Link href="/europe" passHref>
                        <Box position="absolute" fontWeight="bold" align="center" top="50%" left="50%" transform="translate(-50%, -50%)" cursor="pointer">
                            <Text fontSize={["2xl", "5xl"]} color="gray.50" lineHeight={["9", "72px"]}>Europa</Text>
                            <Text fontSize={["sm", "2xl"]} color="gray.100" lineHeight={["5", "9"]}>O continente mais antigo.</Text>
                        </Box>
                    </Link>
                    <Image h={["250px", "450px"]} src="/images/europe.jpg" alt="Europa" />
                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}
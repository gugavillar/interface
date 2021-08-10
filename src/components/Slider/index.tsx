import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';


SwiperCore.use([Navigation, Pagination]);

interface SlideElement {
    name: string;
    description: string;
    srcImage: string;
    urlLink: string;
}

interface SlideProps {
    slides: SlideElement[]
}

export function Slider({ slides }: SlideProps) {
    return (
        <Flex mb="12" mt={["5", "14"]} maxWidth={1240} mx="auto">
            <Swiper navigation={true} pagination={true}>
                {slides.map(slide => (
                    <SwiperSlide key="slide.name">
                        <Image h={["250px", "450px"]} src={slide.srcImage} alt="Europa" />
                        <Box position="absolute" w="100%" h="100%" top={0} bottom={0} right={0} left={0} bg="black" opacity=".4">
                        </Box>
                        <Link href={slide.urlLink} passHref>
                            <Box position="absolute" fontWeight="bold" align="center" top="50%" left="50%" transform="translate(-50%, -50%)" cursor="pointer">
                                <Text fontSize={["2xl", "5xl"]} color="gray.50" lineHeight={["9", "72px"]}>{slide.name}</Text>
                                <Text fontSize={["sm", "2xl"]} color="gray.100" lineHeight={["5", "9"]}>{slide.description}</Text>
                            </Box>
                        </Link>

                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    )
}
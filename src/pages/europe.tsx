import { Header } from "../components/Header"
import { BannerPage } from '../components/BannerPage';
import { Card } from '../components/Card';
import { Flex, Box, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import { InfoContinent } from "../components/InfoContinent";

export default function Europe() {
    return (
        <>
            <Header />
            <BannerPage continent="Europa" srcImage="/images/europe_banner.jpg" />
            <Flex mx="auto" maxWidth={1160} my="12">
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" w="100%">
                    <Box px="4" align="justify">
                        <Text fontSize={["sm", "2xl"]} color="gray.600">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                    </Box>
                    <InfoContinent countries={50} languages={60} cities={24} />
                </SimpleGrid>
            </Flex>
            <Flex maxWidth={1160} w="100%" mx="auto" mt={["8", "20"]} px="4">
                <Heading color="gray.600" fontWeight="medium">Cidades +100</Heading>
            </Flex>
            <Flex maxWidth={1160} mx="auto" mt={["5", "10"]} w="100%" pb="8">
                <SimpleGrid flex="1" minChildWidth="256px" gap={["5", "10"]} px={["16", "2"]}>
                    <Card srcImage="/cards/londres.jpg" city="Londres" country="Reino Unido" srcFlag="/flags/united_kingdom.png" />
                    <Card srcImage="/cards/paris.jpg" city="Paris" country="França" srcFlag="/flags/france.png" />
                    <Card srcImage="/cards/rome.jpg" city="Roma" country="Itália" srcFlag="/flags/italy.png" />
                    <Card srcImage="/cards/praga.jpg" city="Praga" country="República Tcheca" srcFlag="/flags/czech_republic.png" />
                    <Card srcImage="/cards/amsterdan.jpg" city="Amsterdã" country="Holanda" srcFlag="/flags/netherlands.png" />
                </SimpleGrid>
            </Flex>
        </>
    )
}
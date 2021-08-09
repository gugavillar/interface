import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';
import { Divider, Flex, Text, Box } from '@chakra-ui/react';
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider w={["14", "90px"]} mx="auto" mt={["4", "20"]} borderColor="gray.600" borderBottom="2px" />
      <Flex w="100%" maxWidth={1160} align="center" justify="center" mx="auto" mt={["6", "14"]}>
        <Box color="gray.600" align="center" lineHeight={["taller", "54px"]} fontWeight="medium" fontSize={["xl", "4xl"]}>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>
      </Flex>
      <Slider />
    </>
  )
}

import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
    return (
        <Flex
            w="100%"
            maxWidth={1440}
            h={["12", "24"]}
            align="center"
            justify="center"
            mx="auto"
            p="8">
            <Link href="/" passHref>
                <Image src="/images/logo.svg" alt="World trip" />
            </Link>
        </Flex>
    )
}
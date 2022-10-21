import { Fragment } from "react";
import { Box, Image, Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <Fragment>
      <Box py={8} as="header" alignItems="center">
        <Image
          src="/logo.svg"
          width={300}
          mx="auto"
          py={4}
          mb={3}
          alt="Ternak Kode Logo"
        />
        <Box textAlign="center">
          <Button
            as="a"
            href="https://bit.ly/jointernakkode"
            target="_blank"
            bgColor="#5865F2"
            py="2"
            px="6"
            borderRadius="full"
            maxWidth="200px"
            display="block"
            margin="auto"
          >
            Join Server Discord
          </Button>
          <Button
            as="a"
            href="https://saweria.co/alvimuh"
            target="_blank"
            bgColor="#ffff"
            color="#5865F2"
            py="2"
            px="6"
            borderRadius="full"
            maxWidth="200px"
            display="block"
            margin="auto"
            marginTop="3"
          >
            Link Saweria
          </Button>
        </Box>
      </Box>
      <Box as="main">{children}</Box>
    </Fragment>
  );
}

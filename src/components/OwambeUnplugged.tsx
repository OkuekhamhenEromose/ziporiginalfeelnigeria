import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
import Owambe from "../assets/img/owambe-background.jpg";
import NIDCOM from "../assets/img/NiDCOM.png";
import Premium from "../assets/img/PremiumTrustBank.png";

const OwambeSection = () => {
  return (
    <Box w="full">
      {/* Main Owambe Background Section */}
      <Box
        position="relative"
        w="full"
        minH={{ base: "70vh", md: "80vh" }}
        bgImage={`url(${Owambe})`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {/* Dark overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.600"
          zIndex={1}
        />

        {/* Content */}
        <Box position="relative" zIndex={2} px={4}>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="extrabold"
            color="green.400"
            letterSpacing="wide"
            mb={2}
          >
            OWAMBE
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="semibold"
            color="green.600"
            mb={8}
          >
            UNPLUGGED
          </Heading>

          <Button
            bg="green.600"
            color="white"
            size="lg"
            px={10}
            py={6}
            fontWeight="semibold"
            borderRadius="md"
            boxShadow="lg"
            _hover={{ bg: "green.700", transform: "translateY(-2px)" }}
            transition="all 0.3s ease"
          >
            Learn more
          </Button>
        </Box>
      </Box>

      {/* Official Partners Section */}
      <Box bg="gray.100" py={10} px={4}>
        <Container maxW="4xl">
          <Text
            textAlign="center"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="gray.800"
            mb={6}
          >
            OFFICIAL PARTNERS
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={{ base: 6, md: 12 }}
          >
            {/* NiDCOM Logo */}
            <Image
              src={NIDCOM}
              alt="NiDCOM - Nigerian Diaspora Commission"
              h={{ base: "60px", md: "80px" }}
              objectFit="contain"
            />

            {/* Powered by text */}
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="semibold"
              color="gray.700"
            >
              Powered by
            </Text>

            {/* Premium Trust Bank Logo */}
            <Image
              src={Premium}
              alt="Premium Trust Bank"
              h={{ base: "60px", md: "80px" }}
              objectFit="contain"
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default OwambeSection;

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardImage from "../assets/img/zipcashcard.jpg";
import Premium from "../assets/img/PremiumTrustBank.png";

const ZipCashSection = () => {
  return (
    <Box
      bg="white"
      position="relative"
      overflow="hidden"
      fontFamily='"Poppins", "Inter", sans-serif'
      color="black"
      py={8}
      mb={8}
    >
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, lg: 12 }}
          minH={{ base: "auto", lg: "80vh" }}
        >
          {/* Left Content */}
          <Box
            flex="1"
            maxW={{ base: "100%", lg: "50%" }}
            textAlign={{ base: "center", lg: "left" }}
            zIndex={2}
          >
            <Heading
              as="h1"
              color="#2b2e32"
              fontWeight="600"
              lineHeight="1.2"
              mb={4}
              fontSize={{ base: "1.5rem", md: "1.75rem", lg: "2rem" }}
            >
              Apply for Your ZipCash Debit Card Today
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color="#2b2e32"
              lineHeight="1.4"
              maxW={{ base: "100%", lg: "90%" }}
            >
              Experience the security and convenience of having a debit card
              made for Nigerians.
            </Text>

            {/* Powered by section */}
            <Box
              display="flex"
              alignItems="center"
              gap={12}
              justifyContent={{ base: "center", lg: "flex-start" }}
            >
              <Heading
                as="h1"
                color="#2b2e32"
                fontWeight="500"
                lineHeight="1.2"
                fontSize={{ base: "1.5rem", md: "1.75rem", lg: "2rem" }}
              >
                Powered by
              </Heading>
              <Image
                src={Premium}
                alt="Premium Trust Bank"
                boxSize={{ base: "120px", md: "150px", lg: "170px" }}
                objectFit="contain"
              />
            </Box>

            <Link
              to={"/login"}
              className="btn btn-success rounded-pill py-2 px-4 ms-lg-4"
            >
              Apply Now
            </Link>
          </Box>

          {/* Right Content - Card Image */}
          <Box
            flex="1"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH={{ base: "300px", md: "400px", lg: "500px" }}
          >
            <Box
              position="relative"
              transform={{ base: "rotate(3deg)", lg: "rotate(6deg)" }}
              transition="transform 0.3s ease"
              _hover={{
                transform: {
                  base: "rotate(1deg) scale(1.02)",
                  lg: "rotate(4deg) scale(1.02)",
                },
              }}
            >
              <Image
                mt={8}
                bg="white"
                src={CardImage}
                alt="ZipCash Debit Card"
                maxH={{ base: "240px", md: "340px", lg: "460px" }}
                w="auto"
                borderRadius="20px"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ZipCashSection;

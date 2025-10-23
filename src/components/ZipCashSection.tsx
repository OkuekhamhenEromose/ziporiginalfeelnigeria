import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CardImage from "../assets/img/zipcashcard.jpg";
import Premium from "../assets/img/PremiumTrustBank.png";

const ZipCashSection = () => {
  const navigate = useNavigate();

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
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              color="#2b2e32"
              fontWeight="500"
              lineHeight="1.1"
              mb={4}
              fontSize={{ base: "2.5rem", md: "3rem", lg: "3rem" }}
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
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="black"
                fontWeight="700"
                mr={8}
              >
                Powered by
              </Text>
              <Image
                src={Premium}
                alt="Premium Trust Bank"
                boxSize={{ base: "120px", md: "150px", lg: "170px" }}
                objectFit="contain"
              />
            </Box>

            <Button
              bg="#135734" // original green
              color="white"
              size="lg"
              px={12}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              borderRadius="60px"
              _hover={{
                bg: "#0f4428", // ✅ lighter green on hover
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
              boxShadow="0 4px 15px rgba(0, 119, 182, 0.3)"
              onClick={() => navigate("/biodata")}
            >
              Apply Now
            </Button>
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

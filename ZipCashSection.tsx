import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CardImage from "./src/assets/img/zipcashcard.jpg";
import Premium from "../assets/img/PremiumTrustBank.png"

const ZipCashSection = () => {
  const navigate = useNavigate();

  return (
    <Box 
      bg="white" 
      position="relative" 
      overflow="hidden"
      fontFamily='"Poppins", "Inter", sans-serif'
      color="black"
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
            pt={{ base: 3, md: 4, lg: 6 }}
          >
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              color="#0077B6" // ✅ synced blue from card
              fontWeight="900"
              lineHeight="1.1"
              mb={6}
              fontSize={{ base: "2.5rem", md: "3rem", lg: "3rem" }}
            >
              Apply for Your ZipCash Debit Card Today
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="black"
              mb={{ base: 6, md: 8, lg: 16 }}
              lineHeight="1.4"
              maxW={{ base: "100%", lg: "90%" }}
            >
              Experience the security and convenience of having a debit card made for Nigerians.
            </Text>

            <Button
              bg="#0077B6" // ✅ blue button
              color="white"
              size="lg"
              px={12}
              py={6}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              borderRadius="60px"
              _hover={{
                bg: "#005F8C", // ✅ darker hover
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
              boxShadow="0 4px 15px rgba(0, 119, 182, 0.3)"
              onClick={() => navigate('/biodata')}
            >
              Apply
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
                transform: { base: "rotate(1deg) scale(1.02)", lg: "rotate(4deg) scale(1.02)" }
              }}
            >
              <Image
                src={CardImage}
                alt="ZipCash Debit Card"
                w={{ base: "280px", md: "400px", lg: "520px" }}
                h="auto"
                borderRadius="20px"
                boxShadow="0 20px 50px rgba(0,0,0,0.4)"
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Footer Section */}
      <Box bg="rgba(0, 173, 198, 1)" py={8} mt={16}>
        <Container maxW="7xl" px={{ base: 4, md: 8 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={6}
          >
            {/* Paystack Logo */}
            <Box>
              <Image
                src={Premium}
                alt="Premium Trust Bank"
                h={{ base: "40px", md: "60px" }}
                objectFit="contain"
              />
            </Box>

            {/* Sponsors Text */}
            <Text
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="500"
              textAlign="center"
            >
              Sponsors....
            </Text>

            {/* Partner Logo */}
            <Box>
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/86703393d57657bcc5b8f7b9c93517fa2c3868db?width=642"
                alt="Partner"
                h={{ base: "40px", md: "60px" }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default ZipCashSection;

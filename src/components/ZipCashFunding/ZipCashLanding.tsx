// components/ZipCashFunding/ZipCashLanding.tsx
import {
  Box,
  Container,
//   Flex,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
//   HStack,
} from "@chakra-ui/react";
import { ArrowRight, CreditCard, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ZipCashLanding = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100vh" bg="white">
      {/* Hero Section - No custom navbar, uses app navbar */}
      <Box
        bg="linear-gradient(135deg, #2d7a4f 0%, #246139 100%)"
        py={{ base: 16, md: 32 }}
        color="white"
        mt={0} // Remove margin since navbar is fixed
      >
        <Container maxW="7xl" px={4}>
          <VStack gap={8} textAlign="center" maxW="4xl" mx="auto">
            <Heading
              as="h1"
              size={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Your Gateway to Financial Freedom
            </Heading>
            <Text fontSize={{ base: "lg", md: "2xl" }} opacity={0.9}>
              Get your FeelNigeria Card today and experience seamless banking with exclusive benefits
            </Text>
            {/* <Button
              size="lg"
              bg="white"
              color="#2d7a4f"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
              borderRadius="full"
              _hover={{
                bg: "gray.100",
                transform: "translateY(-2px)",
                boxShadow: "2xl",
              }}
              transition="all 0.3s ease"
              onClick={() => navigate("/bvn-check")}
            >
              Apply Now
              <ArrowRight size={20} style={{ marginLeft: 8 }} />
            </Button> */}
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="white">
        <Container maxW="7xl" px={4}>
          <VStack gap={12}>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              textAlign="center"
              color="#2b2e32"
            >
              Why Choose FeelNigeria Card?
            </Heading>
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={8}
              maxW="5xl"
              mx="auto"
            >
              {/* Feature 1 */}
              <Box
                bg="white"
                border="1px"
                borderColor="gray.200"
                borderRadius="xl"
                p={6}
                boxShadow="lg"
                transition="all 0.3s ease"
                _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-4px)",
                }}
                textAlign="center"
              >
                <Box
                  w={12}
                  h={12}
                  borderRadius="lg"
                  bg="#2d7a4f"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <CreditCard size={24} color="white" />
                </Box>
                <Heading as="h3" size="md" color="#2b2e32" mb={2}>
                  Easy Application
                </Heading>
                <Text color="gray.600">
                  Quick and simple application process with instant verification
                </Text>
              </Box>

              {/* Feature 2 */}
              <Box
                bg="white"
                border="1px"
                borderColor="gray.200"
                borderRadius="xl"
                p={6}
                boxShadow="lg"
                transition="all 0.3s ease"
                _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-4px)",
                }}
                textAlign="center"
              >
                <Box
                  w={12}
                  h={12}
                  borderRadius="lg"
                  bg="#2d7a4f"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Shield size={24} color="white" />
                </Box>
                <Heading as="h3" size="md" color="#2b2e32" mb={2}>
                  Secure Banking
                </Heading>
                <Text color="gray.600">
                  Bank-grade security to protect your transactions and personal data
                </Text>
              </Box>

              {/* Feature 3 */}
              <Box
                bg="white"
                border="1px"
                borderColor="gray.200"
                borderRadius="xl"
                p={6}
                boxShadow="lg"
                transition="all 0.3s ease"
                _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-4px)",
                }}
                textAlign="center"
              >
                <Box
                  w={12}
                  h={12}
                  borderRadius="lg"
                  bg="#2d7a4f"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Zap size={24} color="white" />
                </Box>
                <Heading as="h3" size="md" color="#2b2e32" mb={2}>
                  Instant Access
                </Heading>
                <Text color="gray.600">
                  Get your card quickly and start enjoying exclusive benefits immediately
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl" px={4}>
          <VStack gap={8} textAlign="center" maxW="3xl" mx="auto">
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} color="#2b2e32">
              Ready to Get Started?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Join thousands of satisfied customers who trust FeelNigeria for their banking needs
            </Text>
            <Button
              size="lg"
              bg="#2d7a4f"
              color="white"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
              borderRadius="full"
              _hover={{
                bg: "#246139",
                transform: "translateY(-2px)",
                boxShadow: "2xl",
              }}
              transition="all 0.3s ease"
              onClick={() => navigate("/bvn-check")}
            >
              Apply for Your Card
              <ArrowRight size={20} style={{ marginLeft: 8 }} />
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default ZipCashLanding;
import React from "react";
import {
  Box,
  Flex,
  Grid,
  Text,
  Heading,
  Button,
  VStack,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Award, Globe } from "lucide-react";
import RealityEvent from "../../assets/img/realityevent2.avif";
import { Link as RouterLink } from "react-router-dom";

const RealityDashboard: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      position="relative"
      width="100%"
      minHeight="100vh"
      backgroundImage={`url(${RealityEvent})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      {/* Overlay */}
      <Box position="absolute" inset={0} backgroundColor="blackAlpha.600" />

      {/* Content */}
      <Box position="relative" zIndex={10}>
        <Container maxW="6xl" py={8}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 8, lg: 16 }}
            alignItems="center"
            minH="100vh"
            py={8}
            mt={8}
          >
            {/* Left Column - Main Content */}
            <VStack
              gap={6}
              align="flex-start"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
            >
              {/* Logo/Brand */}
              <Flex align="center" gap={3} mx={{ base: "auto", lg: "0" }}>
                <Globe size={40} strokeWidth={1.5} />
                <Text fontSize="2xl" fontWeight="bold">
                  FNTE
                </Text>
              </Flex>

              {/* Badge */}
              <Flex
                align="center"
                gap={2}
                backgroundColor="whiteAlpha.200"
                backdropFilter="blur(10px)"
                px={4}
                py={2}
                borderRadius="full"
                width="fit-content"
                mx={{ base: "auto", lg: "0" }}
              >
                <Award size={20} color="#FBBF24" />
                <Text fontSize="sm" fontWeight="semibold">
                  Reality Show Experience
                </Text>
              </Flex>

              {/* Main Heading */}
              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
                fontWeight="bold"
                lineHeight="tight"
                mx={{ base: "auto", lg: "0" }}
              >
                Win an All-Expenses-Paid Trip & Become a Reality Star!
              </Heading>

              {/* Description Group - Reduced spacing */}
              <VStack gap={2} align={{ base: "center", lg: "flex-start" }}>
                <Text
                  fontSize={{ base: "lg", sm: "xl" }}
                  lineHeight="relaxed"
                  opacity={0.95}
                >
                  Your journey to experience authentic Nigerian culture, connect
                  with local families, and showcase your adventure on a global
                  platform starts here.
                </Text>

                <Text
                  fontSize={{ base: "base", sm: "lg" }}
                  fontWeight="medium"
                  opacity={0.9}
                  pt={1}
                >
                  Follow the 5 stages below to win your chance to experience the
                  food, work, culture, and heart of Nigeria.
                </Text>
              </VStack>

              {/* CTA Button - Reduced spacing */}
              <Box pt={2} mx={{ base: "auto", lg: "0" }}>
                <RouterLink to="/connect" style={{ textDecoration: "none" }}>
                  <Button
                    backgroundColor="white"
                    color="gray.900"
                    fontSize="lg"
                    fontWeight="bold"
                    px={8}
                    py={6}
                    borderRadius="full"
                    boxShadow="2xl"
                    transition="all 0.3s ease"
                    _hover={{
                      backgroundColor: "gray.50",
                      transform: "scale(1.05)",
                      boxShadow: "xl",
                    }}
                    _active={{
                      transform: "scale(0.95)",
                    }}
                    size="lg"
                  >
                    Start Your Journey
                  </Button>
                </RouterLink>
              </Box>

              {/* Info Tags */}
              <Flex
                flexWrap="wrap"
                align="center"
                gap={4}
                opacity={0.95}
                justify={{ base: "center", lg: "flex-start" }}
                pt={2}
              >
                <Flex align="center" gap={2}>
                  <Box
                    width={2}
                    height={2}
                    backgroundColor="yellow.300"
                    borderRadius="full"
                    animation="pulse 2s infinite"
                  />
                  <Text fontWeight="semibold">December 2025</Text>
                </Flex>
                <Text opacity={0.6}>•</Text>
                <Text fontWeight="semibold">10 Winners</Text>
                <Text opacity={0.6}>•</Text>
                <Text fontWeight="semibold">Fully Funded</Text>
                <Text opacity={0.6}>•</Text>
                <Text fontWeight="semibold">Global Reality Show</Text>
              </Flex>
            </VStack>

            {/* Right Column - Card (Desktop only) */}
            {isDesktop && (
              <Box width="full">
                <Box position="relative">
                  {/* Background Glow */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(to-br, yellow.400/30, transparent, slate.400/30)"
                    borderRadius="3xl"
                    filter="blur(40px)"
                  />
                    <VStack gap={6} textAlign="center">

                      {/* Stats Grid */}
                      <Grid templateColumns="1fr 1fr" gap={4} width="full" pt={64}>
                        <Box
                          backgroundColor="whiteAlpha.100"
                          backdropFilter="blur(10px)"
                          borderRadius="2xl"
                          p={5}
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                          transition="all 0.3s"
                          _hover={{ bg: "whiteAlpha.150" }}
                        >
                          <Text
                            fontSize="4xl"
                            fontWeight="bold"
                            color="yellow.300"
                            mb={1}
                          >
                            10
                          </Text>
                          <Text fontSize="md" color="white" fontWeight="medium">
                            Days
                          </Text>
                        </Box>
                        <Box
                          backgroundColor="whiteAlpha.100"
                          backdropFilter="blur(10px)"
                          borderRadius="2xl"
                          p={5}
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                          transition="all 0.3s"
                          _hover={{ bg: "whiteAlpha.150" }}
                        >
                          <Text
                            fontSize="4xl"
                            fontWeight="bold"
                            color="yellow.300"
                            mb={1}
                          >
                            10
                          </Text>
                          <Text fontSize="md" color="white" fontWeight="medium">
                            Winners
                          </Text>
                        </Box>
                      </Grid>

                      {/* Bottom Info */}
                      <Box
                        backgroundColor="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        borderRadius="2xl"
                        p={5}
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        width="full"
                      >
                        <Text
                          fontSize={{ base: "sm", lg: "base" }}
                          fontWeight="semibold"
                          color="white"
                          lineHeight="relaxed"
                        >
                          All expenses covered including flights, accommodation,
                          meals, and activities
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              // </Box>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Add CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </Box>
  );
};

export default RealityDashboard;
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
import { Award, Plane, Globe } from "lucide-react";
import RealityEvent from "../../assets/img/realityevent2.avif";
import { Link as RouterLink } from "react-router-dom";

const RealityDashboard: React.FC = () => {
  // const handleStartJourney = () => {
  //   console.log('Start Journey clicked');
  //   // Add navigation logic here if needed
  // };

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
          >
            {/* Left Column - Main Content */}
            <VStack
              gap={8}
              align="flex-start"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
            >
              {/* Logo/Brand */}
              <Flex align="center" gap={3}>
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
                fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="tight"
              >
                Win an All-Expenses-Paid Trip & Become a Reality Star!
              </Heading>

              {/* Description */}
              <Text
                fontSize={{ base: "lg", sm: "xl" }}
                lineHeight="relaxed"
                opacity={0.95}
              >
                Welcome to the most authentic travel experience on the planet.
                The FNTE is a global search for{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  10 lucky people
                </Text>
                —Nigerians in the Diaspora and foreign friends of Nigeria—who
                will win a fully paid, 10-day immersive stay with a local
                family, all broadcast on a global reality show!
              </Text>

              {/* Sub Description */}
              <Text
                fontSize={{ base: "base", sm: "lg" }}
                fontWeight="medium"
                opacity={0.9}
              >
                Follow the 5 stages below to win your chance to experience the
                food, work, culture, and heart of Nigeria.
              </Text>

              {/* CTA Button */}
              <Box pt={4}>
                <RouterLink to="/connect" style={{ textDecoration: "none" }}>
                  <Button
                    // onClick={handleStartJourney}
                    // leftIcon={<Plane size={24} />}
                    backgroundColor="white"
                    color="gray.900"
                    fontSize="lg"
                    fontWeight="bold"
                    px={12}
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
                pt={8}
                flexWrap="wrap"
                align="center"
                gap={4}
                opacity={0.95}
                justify={{ base: "center", lg: "flex-start" }}
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
                    background="linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(203, 213, 225, 0.2))"
                    borderRadius="3xl"
                    filter="blur(16px)"
                  />

                  {/* Main Card */}
                  <Box
                    position="relative"
                    backgroundColor="whiteAlpha.100"
                    backdropFilter="blur(12px)"
                    borderRadius="3xl"
                    p={8}
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    boxShadow="2xl"
                  >
                    <VStack gap={6} textAlign="center">
                      {/* Icon Section */}
                      <Flex justify="center">
                        <Box position="relative">
                          <Flex
                            width={24}
                            height={24}
                            background="linear-gradient(135deg, #FBBF24, #D97706)"
                            borderRadius="full"
                            align="center"
                            justify="center"
                            boxShadow="xl"
                          >
                            <Award size={56} color="white" strokeWidth={2} />
                          </Flex>
                          <Box
                            position="absolute"
                            top={-1}
                            right={-1}
                            width={8}
                            height={8}
                            backgroundColor="gray.500"
                            borderRadius="full"
                            boxShadow="lg"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Plane size={20} color="white" />
                          </Box>
                        </Box>
                      </Flex>

                      {/* Text Content */}
                      <VStack gap={4}>
                        <Heading
                          as="h3"
                          fontSize="2xl"
                          fontWeight="bold"
                          color="white"
                        >
                          The Feel Nigeria Tourism Exchange
                        </Heading>

                        <Text
                          color="whiteAlpha.90"
                          fontSize="sm"
                          lineHeight="relaxed"
                        >
                          Your journey to experience authentic Nigerian culture,
                          connect with local families, and showcase your
                          adventure on a global platform starts here.
                        </Text>
                      </VStack>

                      {/* Stats Grid */}
                      <Grid templateColumns="1fr 1fr" gap={4} pt={4}>
                        <Box
                          backgroundColor="whiteAlpha.100"
                          backdropFilter="blur(10px)"
                          borderRadius="xl"
                          p={4}
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                        >
                          <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            color="yellow.300"
                          >
                            10
                          </Text>
                          <Text fontSize="sm" color="whiteAlpha.80">
                            Days
                          </Text>
                        </Box>
                        <Box
                          backgroundColor="whiteAlpha.100"
                          backdropFilter="blur(10px)"
                          borderRadius="xl"
                          p={4}
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                        >
                          <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            color="yellow.300"
                          >
                            10
                          </Text>
                          <Text fontSize="sm" color="whiteAlpha.80">
                            Winners
                          </Text>
                        </Box>
                      </Grid>

                      {/* Bottom Info */}
                      <Box
                        backgroundColor="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        borderRadius="xl"
                        p={4}
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                      >
                        <Text fontSize="sm" fontWeight="semibold" color="white">
                          All expenses covered including flights, accommodation,
                          meals, and activities
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              </Box>
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

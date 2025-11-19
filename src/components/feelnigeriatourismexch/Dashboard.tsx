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
import { Award, Globe, Plane } from "lucide-react";
import RealityEvent from "../../assets/img/realityevent2.avif";
import { Link as RouterLink } from "react-router-dom";

const RealityDashboard: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  // const isTablet = useBreakpointValue({ base: false, md: true });

  // Responsive values matching other sections
  const containerPadding = useBreakpointValue({
    base: 2,
    sm: 4,
    md: 6,
    lg: 8,
  });

  const sectionPaddingY = useBreakpointValue({
    base: 8,
    sm: 12,
    md: 16,
    lg: 20,
  });

  const mainHeadingSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "5xl",
  });

  const middleTextSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "14px",
    lg: "15px",
  });

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
      {/* Enhanced Overlay */}
      <Box 
        position="absolute" 
        inset={0} 
        bgGradient="linear(to-b, blackAlpha.700, blackAlpha.800, blackAlpha.600)"
      />

      {/* Content */}
      <Box position="relative" zIndex={10}>
        <Container maxW="7xl" py={sectionPaddingY} px={containerPadding}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 6, sm: 8, md: 10, lg: 16 }}
            alignItems="center"
            minH={{ base: "auto", lg: "100vh" }}
          >
            {/* Left Column - Main Content */}
            <VStack
              gap={{ base: 4, sm: 5, md: 6 }}
              align="flex-start"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
              order={{ base: 2, lg: 1 }}
            >
              {/* Logo/Brand */}
              <Flex 
                align="center" 
                gap={3} 
                mx={{ base: "auto", lg: "0" }}
                mb={2}
              >
                <Globe size={32} strokeWidth={1.5} />
                <Text fontSize={{ base: "xl", sm: "2xl" }} fontWeight="bold">
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
                mb={2}
              >
                <Award size={18} color="#FBBF24" />
                <Text fontSize="sm" fontWeight="semibold">
                  Reality Show Experience
                </Text>
              </Flex>

              {/* Main Heading */}
              <Heading
                as="h1"
                fontSize={mainHeadingSize}
                fontWeight="bold"
                lineHeight="1.2"
                textAlign={{ base: "center", lg: "left" }}
                mx={{ base: "auto", lg: "0" }}
              >
                Win an All-Expenses-Paid Trip & Become a Reality Star!
              </Heading>

              {/* Description Group */}
              <VStack 
                gap={3} 
                align={{ base: "center", lg: "flex-start" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                <Text
                  fontSize={middleTextSize}
                  lineHeight="1.6"
                  opacity={0.95}
                  px={{ base: 2, sm: 0 }}
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

                <Text
                  fontSize={middleTextSize}
                  fontWeight="medium"
                  opacity={0.9}
                  px={{ base: 2, sm: 0 }}
                >
                  Follow the 5 stages below to win your chance to experience the
                  food, work, culture, and heart of Nigeria.
                </Text>
              </VStack>

              {/* CTA Button */}
              <Box 
                pt={2} 
                mx={{ base: "auto", lg: "0" }}
                w={{ base: "full", sm: "auto" }}
              >
                <RouterLink to="/connect" style={{ textDecoration: "none", width: "100%" }}>
                  <Button
                    backgroundColor="white"
                    color="gray.900"
                    fontSize={{ base: "md", sm: "lg" }}
                    fontWeight="bold"
                    px={{ base: 6, sm: 8 }}
                    py={{ base: 5, sm: 6 }}
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
                    w={{ base: "full", sm: "auto" }}
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Plane size={20} />
                    Start Your Journey
                  </Button>
                </RouterLink>
              </Box>

              {/* Info Tags */}
              <Flex
                flexWrap="wrap"
                align="center"
                gap={3}
                opacity={0.95}
                justify={{ base: "center", lg: "flex-start" }}
                pt={2}
                w="full"
              >
                <Flex align="center" gap={2}>
                  <Box
                    width={2}
                    height={2}
                    backgroundColor="yellow.300"
                    borderRadius="full"
                    animation="pulse 2s infinite"
                  />
                  <Text fontSize="sm" fontWeight="semibold">December 2025</Text>
                </Flex>
                <Text opacity={0.6} fontSize="sm">•</Text>
                <Text fontSize="sm" fontWeight="semibold">10 Winners</Text>
                <Text opacity={0.6} fontSize="sm">•</Text>
                <Text fontSize="sm" fontWeight="semibold">Fully Funded</Text>
                <Text opacity={0.6} fontSize="sm">•</Text>
                <Text fontSize="sm" fontWeight="semibold">Global Reality Show</Text>
              </Flex>
            </VStack>

            {/* Right Column - Stats Card */}
            <Box 
              width="full" 
              order={{ base: 1, lg: 2 }}
              mb={{ base: 4, lg: 0 }}
            >
              <Box position="relative">
                {/* Background Glow */}
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-br, yellow.400/20, transparent, blue.400/20)"
                  borderRadius="3xl"
                  filter="blur(40px)"
                  opacity={0.6}
                />

                {/* Main Card */}
                <Box
                  backgroundColor="whiteAlpha.100"
                  backdropFilter="blur(1px)"
                  borderRadius="3xl"
                  p={{ base: 6, sm: 8 }}
                  px={{ base: 8, sm: 12, md: 16 }}
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  boxShadow="2xl"
                  position="relative"
                >
                  <VStack gap={6} textAlign="center">
                    {/* Icon Section */}
                    <Flex justify="center">
                      <Box position="relative">
                        <Flex
                          width={{ base: 16, sm: 20, md: 24 }}
                          height={{ base: 16, sm: 20, md: 24 }}
                          background="linear-gradient(135deg, #FBBF24, #D97706)"
                          borderRadius="full"
                          align="center"
                          justify="center"
                          boxShadow="2xl"
                        >
                          <Award 
                            size={isDesktop ? 56 : 40} 
                            color="white" 
                            strokeWidth={2} 
                          />
                        </Flex>
                        <Box
                          position="absolute"
                          top={-1}
                          right={-1}
                          width={{ base: 6, sm: 8 }}
                          height={{ base: 6, sm: 8 }}
                          backgroundColor="gray.500"
                          borderRadius="full"
                          boxShadow="lg"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Plane 
                            size={isDesktop ? 20 : 16} 
                            color="white" 
                          />
                        </Box>
                      </Box>
                    </Flex>

                    {/* Text Content */}
                    <VStack gap={10}>
                      <Heading
                        as="h3"
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        color="white"
                      >
                        The Feel Nigeria Tourism Exchange
                      </Heading>

                      <Text
                        color="white"
                        fontSize={{ base: "xs", sm: "sm" }}
                        lineHeight="relaxed"
                        px={{ base: 10, sm: 8 }}
                      >
                        Your journey to experience authentic Nigerian culture,
                        connect with local families, and showcase your
                        adventure on a global platform starts here.
                      </Text>
                    </VStack>

                    {/* Stats Grid */}
                    <Grid 
                      templateColumns="1fr 1fr" 
                      gap={4} 
                      width="full" 
                      pt={4}
                    >
                      <Box
                        backgroundColor="whiteAlpha.100"
                        backdropFilter="blur(16px)"
                        borderRadius="2xl"
                        p={{ base: 4, sm: 5 }}
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        transition="all 0.3s"
                        _hover={{ bg: "whiteAlpha.150" }}
                      >
                        <Text
                          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                          fontWeight="bold"
                          color="yellow.300"
                          mb={1}
                        >
                          10
                        </Text>
                        <Text 
                          fontSize={{ base: "sm", sm: "md" }} 
                          color="white" 
                          fontWeight="medium"
                        >
                          Days
                        </Text>
                      </Box>
                      <Box
                        backgroundColor="whiteAlpha.100"
                        backdropFilter="blur(16px)"
                        borderRadius="2xl"
                        p={{ base: 4, sm: 5 }}
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        transition="all 0.3s"
                        _hover={{ bg: "whiteAlpha.150" }}
                      >
                        <Text
                          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                          fontWeight="bold"
                          color="yellow.300"
                          mb={1}
                        >
                          10
                        </Text>
                        <Text 
                          fontSize={{ base: "sm", sm: "md" }} 
                          color="white" 
                          fontWeight="medium"
                        >
                          Winners
                        </Text>
                      </Box>
                    </Grid>

                    {/* Bottom Info */}
                    <Box
                      backgroundColor="whiteAlpha.100"
                      backdropFilter="blur(10px)"
                      borderRadius="2xl"
                      p={{ base: 4, sm: 5 }}
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      width="full"
                    >
                      <Text
                        fontSize={{ base: "xs", sm: "sm", md: "base" }}
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
            </Box>
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
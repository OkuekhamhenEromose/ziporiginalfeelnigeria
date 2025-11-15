import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  useBreakpointValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Heart, MapPin, Shield, MessageCircle, ArrowRight } from "lucide-react";
import meetImage from "../assets/img/meetconnect.avif";

const MeetDateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerPadding = useBreakpointValue({
    base: 2,
    sm: 4,
    md: 6,
    lg: 8,
  });

  const sectionPaddingY = useBreakpointValue({
    base: 12,
    sm: 16,
    md: 20,
    lg: 20,
  });

  const mainHeadingSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "5xl",
  });

  const subHeadingSize = useBreakpointValue({
    base: "lg",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
  });

  const textSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "md",
    lg: "lg",
  });

  const featureTextSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "md",
    lg: "md",
  });

  return (
    <Box
      ref={ref}
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
      py={sectionPaddingY}
      px={4}
    >
      {/* Background Image with Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url(${meetImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Subtle Pattern Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        backgroundImage="radial-gradient(circle, white 1px, transparent 1px)"
        backgroundSize="30px 30px"
        zIndex={1}
      />

      <Container
        maxW="6xl"
        position="relative"
        zIndex={10}
        px={containerPadding}
      >
        <VStack gap={{ base: 6, md: 8, lg: 10 }} align="center">
          {/* Main Title */}
          <Box
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
            textAlign="center"
          >
            <Heading
              as="h1"
              color="white"
              fontWeight="700"
              lineHeight="1.2"
              fontSize={mainHeadingSize}
              mb={4}
              textShadow="0 2px 20px rgba(0,0,0,0.3)"
            >
              CONNECT & MATCH
            </Heading>
            <Heading
              as="h2"
              color="white"
              fontWeight="600"
              lineHeight="1.3"
              fontSize={subHeadingSize}
              textShadow="0 2px 15px rgba(0,0,0,0.2)"
            >
              Swipe. Match. Connect. Across Nigeria
              <br />And Diaspora
            </Heading>
          </Box>

          {/* Description */}
          <Box
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
            textAlign="center"
            maxW="3xl"
          >
            <Text
              color="white"
              fontSize={textSize}
              lineHeight="1.7"
              fontWeight="500"
              textShadow="0 1px 10px rgba(0,0,0,0.3)"
            >
              Discover real people with real vibes.
            </Text>
            <Text
              color="white"
              fontSize={textSize}
              lineHeight="1.7"
              fontWeight="400"
              mt={2}
              textShadow="0 1px 10px rgba(0,0,0,0.3)"
            >
              Meet friends, explore romantic connections, and start
              conversations that matter.
            </Text>
          </Box>

          {/* Features Grid */}
          <Box
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "scale(1)" : "scale(0.9)",
              transition: "all 0.8s ease-out 0.6s",
            }}
            w="100%"
            maxW="4xl"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 4, md: 6 }}
              justify="center"
              align="stretch"
              flexWrap="wrap"
            >
              {/* Feature 1 */}
              <HStack
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                px={{ base: 4, md: 6 }}
                py={{ base: 3, md: 4 }}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.300"
                gap={3}
                transition="all 0.3s ease"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                flex={{ base: "1 1 100%", md: "0 1 auto" }}
                justify="center"
              >
                <Heart size={24} color="white" fill="white" />
                <Text
                  color="white"
                  fontWeight="600"
                  fontSize={featureTextSize}
                  textShadow="0 1px 8px rgba(0,0,0,0.2)"
                >
                  Swipe & Match
                </Text>
              </HStack>

              {/* Feature 2 */}
              <HStack
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                px={{ base: 4, md: 6 }}
                py={{ base: 3, md: 4 }}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.300"
                gap={3}
                transition="all 0.3s ease"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                flex={{ base: "1 1 100%", md: "0 1 auto" }}
                justify="center"
              >
                <MapPin size={24} color="white" />
                <Text
                  color="white"
                  fontWeight="600"
                  fontSize={featureTextSize}
                  textShadow="0 1px 8px rgba(0,0,0,0.2)"
                >
                  Location Smart
                </Text>
              </HStack>

              {/* Feature 3 */}
              <HStack
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                px={{ base: 4, md: 6 }}
                py={{ base: 3, md: 4 }}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.300"
                gap={3}
                transition="all 0.3s ease"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                flex={{ base: "1 1 100%", md: "0 1 auto" }}
                justify="center"
              >
                <Shield size={24} color="white" />
                <Text
                  color="white"
                  fontWeight="600"
                  fontSize={featureTextSize}
                  textShadow="0 1px 8px rgba(0,0,0,0.2)"
                >
                  Safe & Verified
                </Text>
              </HStack>

              {/* Feature 4 */}
              <HStack
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                px={{ base: 4, md: 6 }}
                py={{ base: 3, md: 4 }}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.300"
                gap={3}
                transition="all 0.3s ease"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                flex={{ base: "1 1 100%", md: "0 1 auto" }}
                justify="center"
              >
                <MessageCircle size={24} color="white" />
                <Text
                  color="white"
                  fontWeight="600"
                  fontSize={featureTextSize}
                  textShadow="0 1px 8px rgba(0,0,0,0.2)"
                >
                  Chat & Connect
                </Text>
              </HStack>
            </Flex>
          </Box>

          {/* CTA Button */}
          <Box
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.8s",
            }}
          >
            <RouterLink to="/matches" style={{ textDecoration: "none" }}>
              <Button
                bg="#2d7a4f"
                color="white"
                size="lg"
                px={6}
                py={4}
                fontWeight="600"
                borderRadius="full"
                _hover={{
                  bg: "#246139",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s ease"
                display="flex"
                alignItems="center"
                gap={2}
                minW={{ base: "140px", sm: "160px" }}
                fontSize={{ base: "md", sm: "lg" }}
              >
                Meet Your Date
                <ArrowRight size={24} />
              </Button>
            </RouterLink>
          </Box>
        </VStack>
      </Container>

      {/* Animated Hearts Floating Effect */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        opacity={0.15}
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      >
        <Heart size={48} color="white" fill="white" />
      </Box>

      <Box
        position="absolute"
        bottom="15%"
        right="8%"
        opacity={0.15}
        style={{
          animation: "float 7s ease-in-out infinite 1s",
        }}
      >
        <Heart size={64} color="white" fill="white" />
      </Box>

      <Box
        position="absolute"
        top="25%"
        right="12%"
        opacity={0.15}
        style={{
          animation: "float 8s ease-in-out infinite 2s",
        }}
      >
        <Heart size={40} color="white" fill="white" />
      </Box>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default MeetDateSection;

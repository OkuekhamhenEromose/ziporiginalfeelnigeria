import { useRef } from "react";
import { useInView } from "framer-motion";
import { keyframes } from "@emotion/react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Crown, Sparkles, Plane, MapPin, Star, ArrowRight } from "lucide-react";

// Golden shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const DestinationTicket = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Responsive values
  const containerPadding = useBreakpointValue({
    base: 4,
    sm: 6,
    md: 8,
    lg: 12,
  });

  const sectionPaddingY = useBreakpointValue({
    base: 8,
    sm: 12,
    md: 16,
    lg: 20,
  });

  const headingSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "4xl",
  });

  const textSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "lg",
    lg: "xl",
  });

  return (
    <Box
      ref={ref}
      bg="gray.50"
      position="relative"
      minH="60vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
      color="black"
      py={sectionPaddingY}
      px={4}
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        pointerEvents="none"
      >
        {/* Floating icons */}
        <Box
          position="absolute"
          top="20%"
          left="10%"
          animation={`${float} 3s ease-in-out infinite`}
        >
          <Plane size={24} color="#D4AF37" />
        </Box>
        <Box
          position="absolute"
          top="60%"
          right="15%"
          animation={`${float} 3s ease-in-out infinite 1s`}
        >
          <MapPin size={20} color="#D4AF37" />
        </Box>
        <Box
          position="absolute"
          bottom="30%"
          left="20%"
          animation={`${float} 3s ease-in-out infinite 0.5s`}
        >
          <Star size={18} color="#D4AF37" />
        </Box>
      </Box>

      <Container
        maxW="7xl"
        position="relative"
        zIndex={10}
        px={containerPadding}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={8}
          alignItems="center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          {/* Column 1: Golden Ticket Image */}
          <GridItem>
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="300px"
            >
              {/* Golden Ticket Card */}
              <Box
                position="relative"
                width="250px"
                height="200px"
                bgGradient="linear(135deg, #D4AF37 0%, #F7EF8A 50%, #D4AF37 100%)"
                borderRadius="20px"
                p={6}
                boxShadow="0 20px 40px rgba(212, 175, 55, 0.3)"
                border="2px solid"
                borderColor="yellow.400"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  animation: `${shimmer} 2s infinite`,
                  borderRadius: "18px",
                }}
              >
                {/* Ticket perforations */}
                <Box
                  position="absolute"
                  left={-2}
                  top="50%"
                  transform="translateY(-50%)"
                  width="4px"
                  height="80%"
                  bg="gray.50"
                  borderRadius="full"
                  boxShadow="inset 0 0 5px rgba(0,0,0,0.1)"
                />
                <Box
                  position="absolute"
                  right={-2}
                  top="50%"
                  transform="translateY(-50%)"
                  width="4px"
                  height="80%"
                  bg="gray.50"
                  borderRadius="full"
                  boxShadow="inset 0 0 5px rgba(0,0,0,0.1)"
                />

                {/* Ticket content */}
                <VStack
                  gap={3}
                  textAlign="center"
                  height="100%"
                  justify="center"
                >
                  <Crown size={40} color="2b2e32" fill="#FFD700" />
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="2b2e32"
                    textTransform="uppercase"
                  >
                    Golden Ticket
                  </Text>
                  <Sparkles size={20} color="2b2e32" />
                  <Text fontSize="sm" color="2b2e32" fontWeight="medium">
                    Premium Access
                  </Text>
                </VStack>
              </Box>
            </Box>
          </GridItem>

          {/* Column 2: Creative Header and Statement */}
          <GridItem>
            <VStack
              gap={6}
              align="start"
              textAlign={{ base: "center", md: "left" }}
            >
              <Box>
                <Heading
                  as="h2"
                  fontSize={headingSize}
                  fontWeight="bold"
                  lineHeight="1.2"
                  color="2b2e32"
                  mb={4}
                >
                  Become One of The Lucky Travelers
                </Heading>
                <Text
                  fontSize={textSize}
                  color="2b2e32"
                  lineHeight="1.6"
                  fontWeight="medium"
                >
                  Subscribe to Premium for a chance to win an all-expense-paid
                  cultural tour experience.
                </Text>
              </Box>

              {/* Features list */}
              <VStack gap={3} align="start">
                <HStack gap={3}>
                  <Sparkles size={20} color="#D4AF37" />
                  <Text fontSize="sm" color="2b2e32" fontWeight="medium">
                    Exclusive cultural experiences
                  </Text>
                </HStack>
                <HStack gap={3}>
                  <Star size={20} color="#D4AF37" />
                  <Text fontSize="sm" color="2b2e32" fontWeight="medium">
                    Premium travel accommodations
                  </Text>
                </HStack>
                <HStack gap={3}>
                  <Crown size={20} color="#D4AF37" />
                  <Text fontSize="sm" color="2b2e32" fontWeight="medium">
                    VIP access to festivals
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>

          {/* Column 3: CTA Button */}
          <GridItem>
            <VStack gap={6} align="center" justify="center" height="100%">
              <Button
                // as="button"
                // onClick={handleBookNow}
                bg="#2d7a4f"
                color="white"
                px={4}
                py={3}
                borderRadius="full"
                fontWeight="600"
                fontSize="md"
                transition="all 0.3s ease"
                _hover={{
                  bg: "#246139",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                cursor="pointer"
                border="none"
              >
                Premium Access
                <ArrowRight size={20}  />
              </Button>

              <Text
                fontSize="sm"
                color="2b2e32"
                textAlign="center"
                maxW="200px"
              >
                Limited spots available. Join the elite travel community today!
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default DestinationTicket;

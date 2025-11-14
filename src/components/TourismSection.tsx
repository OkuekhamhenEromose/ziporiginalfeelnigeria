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
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Play } from "lucide-react";
import tourismImage from "../assets/img/tourismpics9.avif";

const TourismSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Responsive values matching enrollmentexchange section
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

  const middleTextSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "14px",
    lg: "15px",
  });

  const imageHeight = useBreakpointValue({
    base: "300px",
    sm: "350px",
    md: "400px",
    lg: "500px",
  });

  const gridGap = useBreakpointValue({
    base: 6,
    sm: 8,
    md: 10,
    lg: 12,
  });

  return (
    <Box
      ref={ref}
      bg="gray.50"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
      color="black"
      py={sectionPaddingY}
      px={4}
    >
      {/* Background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, blue.500/10, white, pink.500/10)"
      />

      <Container
        maxW="7xl"
        position="relative"
        zIndex={10}
        px={containerPadding}
      >
        {/* Main Heading - Always appears first on all screens */}
        <Box
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease-out 0.2s",
          }}
          mb={{ base: 8, sm: 10, md: 12 }}
          textAlign={{ base: "center", md: "left" }}
          px={{ base: 2, sm: 4, md: 0 }}
        >
          <Heading
            as="h1"
            color="#2b2e32"
            fontWeight="600"
            lineHeight="1.2"
            fontSize={mainHeadingSize}
            textAlign="center"
          >
            Discover the Soul of Nigeria
          </Heading>
        </Box>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={gridGap}
          align="center"
          justify="space-between"
        >
          {/* Image Section - Appears after heading on mobile, before text content on desktop */}
          <Box
            flex={{ base: "0 0 100%", lg: "1" }}
            w={{ base: "100%", lg: "auto" }}
            position="relative"
            h={imageHeight}
            overflow="hidden"
            borderRadius={{ base: "md", sm: "lg", md: "xl", lg: "lg" }}
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.02)" }}
            bg="gray.100"
            minH={{ base: "300px", sm: "350px" }}
            order={{ base: 1, lg: 1 }}
          >
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "scale(1)" : "scale(0.95)",
                transition: "all 1s ease-out 0.3s",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              {/* Main Image */}
              <Image
                src={tourismImage}
                alt="Beautiful Nigerian landscape showcasing vibrant culture and breathtaking scenery"
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.7s ease"
                _hover={{ transform: "scale(1.05)" }}
              />

              {/* Subtle gradient overlay for depth */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(to-br, blue.500/20, transparent, gray.900/30)"
              />

              {/* Animated glow effect */}
              <Box
                style={{
                  animation: "pulseGlow 4s ease-in-out infinite",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(66, 153, 225, 0.1), transparent, rgba(236, 72, 153, 0.1))",
                }}
              />

              {/* Decorative border accent */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                borderRadius={{ base: "md", sm: "lg", md: "xl", lg: "lg" }}
                border="1px"
                borderColor="blue.500/20"
              />
            </Box>
          </Box>

          {/* Text Content - Appears after image on mobile, after image on desktop */}
          <Box
            flex={{ base: "0 0 100%", lg: "1" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: "center", md: "left" }}
            px={{ base: 2, sm: 4, md: 0 }}
            py={{ base: 4, sm: 6, md: 0 }}
            order={{ base: 2, lg: 2 }}
          >
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.4s",
              }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="medium"
                color="#2b2e32"
                mb={4}
              >
                 Welcome to Feel Nigeria
              </Heading>
              <Text
                color="#2b2e32"
                fontSize={middleTextSize}
                lineHeight="1.6"
                mb={6}
                px={{ base: 2, sm: 0 }}
              >
                Unveil Nigeria's vibrant culture, breathtaking landscapes, and
                captivating history with Feel Nigeria — your all-in-one gateway
                to travel, connection, and celebration.
              </Text>
            </Box>

            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.5s",
              }}
            >
              <Box mb={4} color="#2b2e32" lineHeight="1.7">
                <Text
                  fontSize={middleTextSize}
                  lineHeight="1.6"
                  mb={4}
                  px={{ base: 2, sm: 0 }}
                >
                  Feel Nigeria is more than a tourism app — it's a lifestyle
                  ecosystem. We bring together authentic travel, entertainment,
                  social connection, and secure transactions to give you a
                  seamless experience rooted in the beauty and energy of
                  Nigeria.
                </Text>

                <Text
                  fontSize={middleTextSize}
                  lineHeight="1.6"
                  px={{ base: 2, sm: 0 }}
                >
                  From breathtaking destinations to electric festivals, from
                  real-life events to meaningful relationships — Feel Nigeria
                  connects you to the heartbeat of Africa's most dynamic nation.
                </Text>
              </Box>
            </Box>

            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.6s",
              }}
            >
              <Text
                fontSize={middleTextSize}
                fontWeight="600"
                color="#2b2e32"
                fontStyle="italic"
                pt={4}
                mb={4}
                textAlign={{ base: "center", md: "left" }}
                px={{ base: 2, sm: 0 }}
              >
                Let Feel Nigeria be your passport to the real Nigeria.
              </Text>
            </Box>

            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.7s",
              }}
            >
              <Flex
                gap={4}
                pt={2}
                flexWrap="wrap"
                justify={{ base: "center", md: "flex-start" }}
              >
                <RouterLink
                  to="/soulofnigeria"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    size="lg"
                    bg="#2d7a4f"
                    color="white"
                    _hover={{
                      bg: "#246139",
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    px={6}
                    py={4}
                    fontWeight="600"
                    borderRadius="full"
                    transition="all 0.3s ease"
                    minW={{ base: "140px", sm: "160px" }}
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    Explore Experiences
                  </Button>
                </RouterLink>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="#2d7a4f"
                  color="#2d7a4f"
                  _hover={{
                    bg: "#d1e7dd",
                    borderColor: "#2d7a4f",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  px={6}
                  py={4}
                  fontWeight="600"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  transition="all 0.3s ease"
                  minW={{ base: "140px", sm: "160px" }}
                  fontSize={{ base: "md", sm: "lg" }}
                >
                  <Play size={20} />
                  Watch the Story
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Add CSS animation for the glow effect */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </Box>
  );
};

export default TourismSection;

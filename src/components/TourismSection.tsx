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
} from "@chakra-ui/react";
import { Play } from "lucide-react";
import tourismImage from "../assets/img/tourismpics9.avif";

const TourismSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      ref={ref}
      bg="gray.50"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
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

      <Container maxW="7xl" py={20} position="relative" zIndex={10}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 8, md: 12, lg: 12 }}
          alignItems="center"
        >
          {/* Left: Visual Content (Image) */}
          <Box flex={1}>
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "scale(1)" : "scale(0.95)",
                transition: "all 1s ease-out 0.3s",
              }}
            >
              <Box
                position="relative"
                h={{ base: "30px", md: "400px", lg: "500px" }}
                borderRadius="2xl"
                overflow="hidden"
              >
                {/* Parallax zoom effect container */}
                <Box
                  style={{
                    transform: isInView ? "scale(1)" : "scale(1.1)",
                    transition: "transform 1.5s ease-out",
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
                </Box>

                {/* Decorative border accent */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  borderRadius="2xl"
                  border="1px"
                  borderColor="blue.500/20"
                />
              </Box>
            </Box>
          </Box>

          {/* Right: Text Content */}
          <Box flex={1}>
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(50px)",
                transition: "all 0.8s ease-out",
              }}
            >
              <Box
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out 0.2s",
                }}
              >
                <Heading
                  as="h1"
                  color="#2b2e32"
                  fontWeight="650"
                  lineHeight="1.2"
                  mb={4}
                  ml={8}
                  fontSize={{ base: "2rem", md: "2.25rem", lg: "2.5rem" }}
                >
                  Discover the Soul of Nigeria
                </Heading>
              </Box>

              <Box
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out 0.3s",
                }}
              >
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="#2b2e32"
                  fontWeight="medium"
                  mb={4}
                  lineHeight="1.4"
                >
                  Unveil Nigeria's vibrant culture, breathtaking landscapes, and
                  captivating history with Feel Nigeria — your all-in-one
                  gateway to travel, connection, and celebration.
                </Text>
              </Box>

              <Box
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out 0.4s",
                }}
              >
                <Box mb={4} color="#2b2e32" fontSize="lg" lineHeight="1.7">
                  <Text mb={4}>
                    Feel Nigeria is more than a tourism app — it's a lifestyle
                    ecosystem. We bring together authentic travel,
                    entertainment, social connection, and secure transactions to
                    give you a seamless experience rooted in the beauty and
                    energy of Nigeria.
                  </Text>

                  <Text>
                    From breathtaking destinations to electric festivals, from
                    real-life events to meaningful relationships — Feel Nigeria
                    connects you to the heartbeat of Africa's most dynamic
                    nation.
                  </Text>
                </Box>
              </Box>

              <Box
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out 0.5s",
                }}
              >
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="#2b2e32"
                  fontStyle="italic"
                  pt={4}
                  mb={4}
                >
                  Let Feel Nigeria be your passport to the real Nigeria.
                </Text>
              </Box>

              <Box
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out 0.6s",
                }}
              >
                <Flex gap={4} pt={2} flexWrap="wrap">
                  <RouterLink to="/soulofnigeria" style={{ textDecoration: "none" }}> 
                  <Button
                    size="lg"
                    bg="#2e8857"
                    color="white"
                    _hover={{ bg: "#2d7a4f" }}
                    px={8}
                    py={6}
                    fontWeight="semibold"

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
                    }}
                    px={8}
                    py={6}
                    fontWeight="semibold"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Play size={20} />
                    Watch the Story
                  </Button>
                </Flex>
              </Box>
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

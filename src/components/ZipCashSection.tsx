import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import CardImage from "../assets/img/zipcashcard.jpg";
import Premium from "../assets/img/PremiumTrustBank.png";

const ZipCashSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Responsive values matching tourism section
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
    lg: 24,
  });

  const mainHeadingSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "4xl",
  });

  const textSize = useBreakpointValue({
    base: "md",
    sm: "lg",
    md: "xl",
    lg: "xl",
  });

  const imageHeight = useBreakpointValue({
    base: "280px",
    sm: "320px",
    md: "380px",
    lg: "460px",
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
      bg="white"
      position="relative"
      minH={{ base: "auto", lg: "80vh" }}
      display="flex"
      alignItems="center"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
      color="black"
      py={sectionPaddingY}
      px={4}
    >
      {/* Background pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, green.50, white, blue.50)"
        opacity={0.7}
      />

      <Container
        maxW="7xl"
        position="relative"
        zIndex={10}
        px={containerPadding}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={gridGap}
          align="center"
          justify="space-between"
        >
          {/* Text Content - Appears first on mobile, first on desktop */}
          <Box
            flex={{ base: "0 0 100%", lg: "1" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: "center", lg: "left" }}
            px={{ base: 2, sm: 4, md: 0 }}
            py={{ base: 4, sm: 6, md: 0 }}
            order={{ base: 1, lg: 1 }}
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
                fontWeight="600"
                lineHeight="1.2"
                fontSize={mainHeadingSize}
                mb={6}
                textAlign={{ base: "center", lg: "left" }}
              >
                Apply for Your{" "}
                <Box
                  as="span"
                  color="#2d7a4f"
                  display={{ base: "block", sm: "inline" }}
                >
                  ZipCash Debit Card
                </Box>{" "}
                Today
              </Heading>

              <Text
                color="#2b2e32"
                fontSize={textSize}
                lineHeight="1.6"
                mb={8}
                px={{ base: 2, sm: 0 }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Experience the security and convenience of having a debit card
                made for Nigerians, powered by premium banking technology.
              </Text>
            </Box>

            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.4s",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ base: "center", lg: "flex-start" }}
                gap={2}
                mb={8}
              >
                <Text
                  color="#2b2e32"
                  fontWeight="500"
                  fontSize={{ base: "lg", md: "xl" }}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Powered by
                </Text>
                <Image
                  src={Premium}
                  alt="Premium Trust Bank"
                  maxW={{ base: "200px", sm: "240px", md: "280px", lg: "320px" }}
                  w="auto"
                  h="auto"
                  objectFit="contain"
                />
              </Box>
            </Box>

            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.6s",
              }}
            >
              <Flex
                gap={4}
                flexWrap="wrap"
                justify={{ base: "center", lg: "flex-start" }}
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
                  px={8}
                  py={6}
                  fontWeight="600"
                  borderRadius="full"
                  transition="all 0.3s ease"
                  minW={{ base: "160px", sm: "180px" }}
                  fontSize={{ base: "md", sm: "lg" }}
                  onClick={() => navigate("/zipcash")}
                >
                  Apply Now
                </Button>
              </Flex>
            </Box>
          </Box>

          {/* Image Section - Appears after text on mobile, after text on desktop */}
          <Box
            flex={{ base: "0 0 100%", lg: "1" }}
            w={{ base: "100%", lg: "auto" }}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH={{ base: "300px", sm: "350px", md: "400px" }}
            order={{ base: 2, lg: 2 }}
          >
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "scale(1) rotate(0deg)" : "scale(0.95) rotate(-5deg)",
                transition: "all 0.8s ease-out 0.3s",
              }}
              position="relative"
              transform={{ base: "rotate(2deg)", lg: "rotate(6deg)" }}
              transition="transform 0.3s ease"
              _hover={{
                transform: {
                  base: "rotate(0deg) scale(1.05)",
                  lg: "rotate(4deg) scale(1.05)",
                },
              }}
            >
              {/* Card Image with shadow and border */}
              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                shadow="2xl"
                border="1px solid"
                borderColor="gray.200"
                bg="white"
                p={{ base: 4, md: 6 }}
              >
                <Image
                  src={CardImage}
                  alt="ZipCash Debit Card"
                  maxH={imageHeight}
                  w="auto"
                  borderRadius="xl"
                  objectFit="contain"
                />
              </Box>

              {/* Decorative elements */}
              <Box
                position="absolute"
                top={-4}
                right={-4}
                w="80px"
                h="80px"
                bg="green.500"
                borderRadius="full"
                opacity={0.1}
                zIndex={-1}
              />
              <Box
                position="absolute"
                bottom={-6}
                left={-6}
                w="100px"
                h="100px"
                bg="blue.500"
                borderRadius="full"
                opacity={0.1}
                zIndex={-1}
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Add CSS animation for additional effects */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }
        
        @media (min-width: 1024px) {
          .card-float {
            animation: float 6s ease-in-out infinite;
          }
        }
      `}</style>
    </Box>
  );
};

export default ZipCashSection;
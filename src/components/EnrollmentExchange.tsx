import { useState, useEffect } from "react";
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

const EnrollmentSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "/assets/img/tourismexchange1.jpg",
    "/assets/img/tourismexchange3.jpg",
    "/assets/img/tourismexchange8.jpeg",
    "/assets/img/tourismexchange5.jpeg",
  ];

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

  const carouselHeight = useBreakpointValue({
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

  const middleHeadingSize = useBreakpointValue({
    base: "xl",
    sm: "2xl",
    md: "2xl",
    lg: "3xl",
  });

  const middleTextSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "14px",
    lg: "15px",
  });

  const rightHeadingSize = useBreakpointValue({
    base: "xl",
    sm: "2xl",
    md: "3xl",
    lg: "4xl",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleEnrollClick = () => {};

  return (
    <Box
      bg="white"
      position="relative"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
      color="black"
      py={sectionPaddingY}
      px={4}
    >
      <Container maxW="7xl" px={containerPadding}>
        {/* Main Heading */}
        <Heading
          as="h1"
          color="#2b2e32"
          fontWeight="600"
          textAlign="center"
          mb={{ base: 12, sm: 14, md: 16, lg: 16 }}
          lineHeight={{ base: "1.1", sm: "1.15", md: "1.2", lg: "1.2" }}
          fontSize={mainHeadingSize}
          letterSpacing={{
            base: "-0.01em",
            sm: "-0.015em",
            md: "-0.02em",
            lg: "-0.02em",
          }}
          px={{ base: 2, sm: 4, md: 0, lg: 0 }}
        >
          The Feel Nigeria Tourism Exchange (FNTE)
        </Heading>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={gridGap}
          align="center"
          justify="space-between"
        >
          {/* Image Carousel */}
          <Box
            flex={{ base: "0 0 100%", lg: "1" }}
            w={{ base: "100%", lg: "auto" }}
            position="relative"
            h={carouselHeight}
            overflow="hidden"
            borderRadius={{ base: "md", sm: "lg", md: "xl", lg: "lg" }}
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.02)" }}
            bg="gray.100"
            minH={{ base: "300px", sm: "350px" }}
            order={{ base: 1, lg: 1 }}
          >
            {carouselImages.map((image, index) => (
              <Box
                key={index}
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                transition="opacity 1s ease-in-out"
                opacity={index === currentImageIndex ? 1 : 0}
              >
                <Image
                  src={image}
                  alt={`Nigeria tourism ${index + 1}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.7s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                  bgGradient="linear(to-t, blackAlpha.200, transparent)"
                />
              </Box>
            ))}
          </Box>

          {/* Middle Content - Description Text */}
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
            <Heading
              as="h2"
              color="#2b2e32"
              fontWeight="600"
              mb={{ base: 4, sm: 5, md: 6 }}
              lineHeight="1.2"
              fontSize={middleHeadingSize}
            >
              Win an All-Expenses-Paid Trip & Become a Reality Star!
            </Heading>
            <Text
              color="#2b2e32"
              fontSize={middleTextSize}
              lineHeight="1.6"
              px={{ base: 2, sm: 0 }}
            >
              Welcome to the most authentic travel experience on the planet. The
              FNTE is a global search for 10 lucky people—Nigerians in the
              Diaspora and foreign friends of Nigeria—who will win a fully paid,
              10-day immersive stay with a local family, all broadcast on a
              global reality show!
            </Text>
          </Box>

          {/* Right Content - CTA Section (Now appears at bottom on mobile) */}
          <Box
            flex={{ base: "0 0 100%", lg: "1" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={{ base: 2, sm: 4, md: 0 }}
            py={{ base: 6, sm: 8, md: 0 }}
            order={{ base: 3, lg: 3 }} // Changed to 3 to appear last on mobile
            bg={{ base: "white", lg: "transparent" }}
            borderRadius={{ base: "lg", lg: "none" }}
            mx={{ base: 2, sm: 0 }}
          >
            <Heading
              as="h2"
              color="#2b2e32"
              fontWeight="600"
              mb={{ base: 6, sm: 7, md: 8 }}
              textAlign="center"
              lineHeight="1.2"
              fontSize={rightHeadingSize}
              px={{ base: 2, sm: 0 }}
            >
              Your Journey Home Starts Here!
            </Heading>
            <RouterLink to="/registration" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleEnrollClick}
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
                Enroll Now
              </Button>
            </RouterLink>
            {/* Updated text to match the description text styling */}
            <Text
              color="#2b2e32"
              fontSize={middleTextSize} // Now using the same responsive font size
              lineHeight="1.6" // Matching line height
              textAlign="center"
              mt={4}
              px={{ base: 2, sm: 0 }}
            >
              Limited spots available. Don't miss your chance!
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default EnrollmentSection;
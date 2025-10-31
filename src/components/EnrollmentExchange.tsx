import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import TourismSection1 from "../assets/img/tourismexchange1.jpg";
import TourismSection2 from "../assets/img/tourismexchange3.jpg";
import TourismSection3 from "../assets/img/tourismexchange4.jpg";
import TourismSection4 from "../assets/img/tourismexchange5.jpeg";

const EnrollmentSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    TourismSection1,
    TourismSection2,
    TourismSection3,
    TourismSection4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleEnrollClick = () => {
    console.log("Enroll Now clicked");
  };

  return (
    <Box
      bg="white"
      position="relative"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
      color="black"
      py={20}
      px={4}
    >
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Heading
          as="h1"
          color="#2b2e32"
          fontWeight="600"
          textAlign="center"
          mb={16}
          lineHeight="1.2"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          letterSpacing="-0.02em"
        >
          The Feel Nigeria Tourism Exchange (FNTE)
        </Heading>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 8, lg: 12 }}
          align="center"
          justify="space-between"
        >
          {/* Image Carousel */}
          <Box
            flex="1"
            position="relative"
            h={{ base: "400px", lg: "500px" }}
            overflow="hidden"
            borderRadius="lg"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.02)" }}
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

          {/* Middle Content */}
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading
              as="h2"
              color="#2b2e32"
              fontWeight="600"
              mb={6}
              lineHeight="1.2"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              letterSpacing="-0.01em"
            >
              Win an All-Expenses-Paid Trip & Become a Reality Star!
            </Heading>
            <Text
              color="#4a5568"
              fontSize={{ base: "15px", md: "16px", lg: "17px" }}
              lineHeight="1.6"
              fontWeight="400"
            >
              Welcome to the most authentic travel experience on the planet. The
              FNTE is a global search for 10 lucky people—Nigerians in the
              Diaspora and foreign friends of Nigeria—who will win a fully paid,
              10-day immersive stay with a local family, all broadcast on a
              global reality show!
            </Text>
          </Box>

          {/* Right Content */}
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading
              as="h2"
              color="#2b2e32"
              fontWeight="600"
              mb={8}
              textAlign="center"
              lineHeight="1.2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              letterSpacing="-0.01em"
            >
              Your Journey Home Starts Here!
            </Heading>
            <Button
              onClick={handleEnrollClick}
              bg="#2d7a4f"
              color="white"
              size="lg"
              px={12}
              py={7}
              fontWeight="600"
              fontSize={{ base: "md", md: "lg" }}
              borderRadius="full"
              _hover={{ 
                bg: "#246139", 
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.3s ease"
              textTransform="none"
              letterSpacing="0.01em"
            >
              Enroll Now
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default EnrollmentSection;
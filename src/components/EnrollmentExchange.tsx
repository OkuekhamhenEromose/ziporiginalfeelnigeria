import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Image
} from "@chakra-ui/react";
import { ChevronRight } from 'lucide-react';
import TourismSection1 from '../assets/img/tourismexchange1.jpg';
import TourismSection2 from '../assets/img/tourismexchange3.jpg';
import TourismSection3 from '../assets/img/tourismexchange4.jpg';
import TourismSection4 from '../assets/img/tourismexchange5.jpeg';

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
    console.log('Enroll Now clicked');
  };

  return (
    <Box
      bg="white"
      position="relative"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", sans-serif'
      color="black"
      py={20}
      px={4}
    >
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Heading
          as="h1"
          color="#2b2e32"
          fontWeight="bold"
          textAlign="center"
          mb={16}
          lineHeight="tight"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
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
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.02)' }}
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
                  _hover={{ transform: 'scale(1.05)' }}
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

            {/* Carousel Indicators */}
            {/* <Flex
              position="absolute"
              bottom={6}
              left="50%"
              transform="translateX(-50%)"
              gap={2}
              zIndex={10}
            >
              {carouselImages.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  w={index === currentImageIndex ? 8 : 2}
                  h={2}
                  borderRadius="full"
                  bg={index === currentImageIndex ? "white" : "whiteAlpha.600"}
                  transition="all 0.3s"
                  _hover={{ bg: "whiteAlpha.900" }}
                  minW="auto"
                  p={0}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </Flex> */}
          </Box>

          {/* Middle Content */}
          <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
            <Heading
              as="h2"
              color="#2b2e32"
              fontWeight="bold"
              mb={6}
              lineHeight="tight"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >
              Win an All-Expenses-Paid Trip & Become a Reality Star!
            </Heading>
            <Text
              color="gray.700"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="relaxed"
            >
              Welcome to the most authentic travel experience on the planet. The FNTE is a global search for 10 lucky people—Nigerians in the Diaspora and foreign friends of Nigeria—who will win a fully paid, 10-day immersive stay with a local family, all broadcast on a global reality show!
            </Text>
          </Box>

          {/* Right Content */}
          <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Heading
              as="h2"
              color="#2b2e32"
              fontWeight="bold"
              mb={8}
              textAlign="center"
              lineHeight="tight"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Your Journey Home Starts Here!
            </Heading>
            <Button
            onClick={handleEnrollClick}
            bg="green.600"
            color="white"
            size="lg"
            px={10}
            py={6}
            fontWeight="semibold"
            borderRadius="md"
            // boxShadow="lg"
            _hover={{ bg: "green.700", transform: "translateY(-2px)" }}
            transition="all 0.3s ease"
          >
            Enroll Now
            <ChevronRight size={20} />
          </Button>
            {/* <Button
              onClick={handleEnrollClick}
              bg="emerald.600"
              color=""
              fontWeight="bold"
              fontSize={{ base: "md", md: "lg" }}
              px={10}
              py={4}
              borderRadius="full"
              boxShadow="lg"
              _hover={{
                bg: "emerald.700",
                boxShadow: "xl",
                transform: "translateY(-4px)"
              }}
              transition="all 0.3s"
              display="flex"
              alignItems="center"
              gap={2}
              mb={6}
              size={{ base: "md", md: "lg" }}
            >
              Enroll Now
              <ChevronRight size={20} />
            </Button> */}
            {/* <Text
              color="gray.600"
              textAlign="center"
              fontSize="sm"
            >
              Limited spots available. Don't miss your chance!
            </Text> */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default EnrollmentSection;
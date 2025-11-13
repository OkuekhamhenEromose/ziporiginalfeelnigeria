import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import owambe1 from "../../assets/img/nightlife9.jpg";
import owambe2 from "../../assets/img/nightlife7.jpg";
import owambe3 from "../../assets/img/nightlife11.jpg";

const owambeEvents = [
  {
    image: owambe1,
    title: "The Vibe, Unfiltered. The Culture, Unlocked",
    description:
      "Experience the real sound and energy of a Nigerian celebration.",
  },
  {
    image: owambe2,
    title: "Weekend Nights Reimagined",
    description:
      "The cultural party where the elite meet the electric.",
  },
  {
    image: owambe3,
    title: "Your Ancestors Called. They Want You to Dance",
    description:
      "Live music, premium taste, and the heart of Nigeria on a single stage.",
  },
];

// OwambeDescription Component
interface OwambeDescriptionProps {
  title: string;
  description: string;
  onBookNow: () => void;
}

const OwambeDescription = ({
  title,
  description,
  onBookNow,
}: OwambeDescriptionProps) => {
  return (
    <Flex
      h="100%"
      direction="column"
      bg="gray.50"
      align="center"
      justify="center"
      bgGradient="linear(to-br, gray.50, orange.50)"
      px={{ base: 8, md: 16, lg: 20 }}
      py={{ base: 12, md: 16 }}
    >
      <Box maxW="xl" w="100%">
        {/* Category Label */}
        <Box textAlign="center" mb={6}>
          <Heading
            as="h1"
            color="#2b2e32"
            fontWeight="600"
            lineHeight="1.2"
            mb={4}
            fontSize={{ base: "1.5rem", md: "1.75rem", lg: "2rem" }}
          >
            Owambe Unplugged
          </Heading>
        </Box>

        {/* Title */}
        <Heading
          as="h3"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="200"
          color="gray.800"
          lineHeight="tight"
          textAlign="center"
          mb={6}
        >
          {title}
        </Heading>

        {/* Description */}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="#2b2e32"
          lineHeight="relaxed"
          textAlign="center"
          mb={8}
        >
          {description}
        </Text>

        {/* Call to Action Button */}
        <Flex justify="center" pt={6}>
          <Button
            onClick={onBookNow}
            bg="green.600"
            color="white"
            fontWeight="semibold"
            fontSize="md"
            px={10}
            py={6}
            borderRadius="full"
            _hover={{
              bg: "green.700",
              transform: "scale(1.05)",
            }}
            _active={{
              transform: "scale(0.95)",
            }}
            transition="all 0.3s"
            boxShadow="lg"
          >
            Book Your Ticket Now
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

// Main Carousel Component
export default function OwambeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollPrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) =>
        prev === 0 ? owambeEvents.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [isTransitioning]);

  const scrollNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) =>
        prev === owambeEvents.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prev) =>
          prev === owambeEvents.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);

    return () => clearInterval(autoplay);
  }, [isTransitioning]);

  const handleBookNow = () => {
    console.log("Book Now clicked for:", owambeEvents[currentIndex].title);
  };

  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      bg="gray.50"
      h="100vh"
      overflow="hidden"
    >
      <Box position="relative" w="100%" h="100%">
        {/* Slides Container */}
        <Box position="relative" w="100%" h="100%">
          {owambeEvents.map((event, index) => (
            <Box
              key={index}
              position="absolute"
              inset={0}
              transition="all 0.7s ease-in-out"
              opacity={index === currentIndex ? 1 : 0}
              transform={
                index === currentIndex
                  ? "translateX(0)"
                  : index < currentIndex
                  ? "translateX(-100%)"
                  : "translateX(100%)"
              }
            >
              <Flex direction={{ base: "column", md: "row" }} h="100%">
                {/* Image Section - Left Side with reduced height and padding */}
                <Box
                  position="relative"
                  w={{ base: "100%", md: "50%" }}
                  h={{ base: "50vh", md: "100%" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  py={{ base: 8, md: 12, lg: 16 }}
                  px={{ base: 4, md: 8, lg: 12 }}
                >
                  <Box
                    w="100%"
                    h="100%"
                    maxH={{ base: "400px", md: "500px", lg: "600px" }}
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    position="relative"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                    />
                    {/* Subtle gradient overlay */}
                    <Box
                      position="absolute"
                      inset={0}
                      bgGradient="linear(to-t, blackAlpha.200, transparent)"
                    />
                  </Box>
                </Box>

                {/* Description Section - Right Side */}
                <Box w={{ base: "100%", md: "50%" }} h="100%">
                  <OwambeDescription
                    title={event.title}
                    description={event.description}
                    onBookNow={handleBookNow}
                  />
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Previous Button */}
      <IconButton
        aria-label="Previous slide"
        onClick={scrollPrev}
        disabled={isTransitioning}
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={20}
        bg="green.600"
        color="white"
        size={{ base: "md", md: "lg" }}
        borderRadius="full"
        boxShadow="sm"
        _hover={{
          bg: "green.700",
          transform: "translateY(-50%) scale(1.1)",
        }}
        _active={{
          transform: "translateY(-50%) scale(0.95)",
        }}
        transition="all 0.3s"
      >
        <ChevronLeft size={24} />
      </IconButton>

      {/* Next Button */}
      <IconButton
        aria-label="Next slide"
        onClick={scrollNext}
        disabled={isTransitioning}
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={20}
        bg="green.600"
        color="white"
        size={{ base: "md", md: "lg" }}
        borderRadius="full"
        boxShadow="sm"
        _hover={{
          bg: "green.700",
          transform: "translateY(-50%) scale(1.1)",
        }}
        _active={{
          transform: "translateY(-50%) scale(0.95)",
        }}
        transition="all 0.3s"
      >
        <ChevronRight size={24} />
      </IconButton>
    </Box>
  );
}
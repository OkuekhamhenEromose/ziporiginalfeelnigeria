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
import owambe1 from "../../assets/img/owambeUnplugged1.jpg";
import owambe2 from "../../assets/img/owambeUnplugged2.jpg";
import owambe3 from "../../assets/img/owambeUnplugged3.jpg";

const owambeEvents = [
  {
    image: owambe1,
    title: "Grand Nigerian Wedding Ceremonies",
    description:
      "Experience the vibrant essence of Nigerian culture with spectacular Owambe celebrations. From traditional weddings adorned with colorful fabrics and live bands to elegant receptions filled with joy, dance, and authentic cuisine.",
  },
  {
    image: owambe2,
    title: "Live Entertainment & Cultural Shows",
    description:
      "Immerse yourself in the rhythm of authentic Nigerian entertainment. Our Owambe events feature live bands, renowned DJs, traditional drummers, and dancers who keep the energy high throughout your celebration.",
  },
  {
    image: owambe3,
    title: "Elegant Traditional Celebrations",
    description:
      "Celebrate your special moments in grand Nigerian style with our premium Owambe services. From milestone birthdays and anniversaries to naming ceremonies and cultural festivals, we create stunning atmospheres.",
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
            ml={16}
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

  const scrollTo = useCallback(
    (index: number) => {
      if (!isTransitioning && index !== currentIndex) {
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
      }
    },
    [isTransitioning, currentIndex]
  );

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
      bg="white"
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
                {/* Image Section - Left Side */}
                <Box
                  position="relative"
                  w={{ base: "100%", md: "50%" }}
                  h={{ base: "64", md: "100%" }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(to-t, blackAlpha.100, transparent)"
                    display={{ base: "block", md: "none" }}
                  />
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

      {/* Navigation Controls Container */}
      <Box
        position="absolute"
        insetX={0}
        bottom={0}
        pointerEvents="none"
        zIndex={20}
      >
        <Flex
          position="relative"
          w="100%"
          h={24}
          align="center"
          justify="center"
        >
          {/* Slide Indicators */}
          <Flex gap={3} pointerEvents="auto">
            {owambeEvents.map((_, index) => (
              <Box
                as="button"
                key={index}
                w={index === currentIndex ? 10 : 3}
                h={3}
                bg={
                  index === currentIndex
                    ? "linear-gradient(to right, orange.500, pink.500)"
                    : "gray.300"
                }
                borderRadius="full"
                transition="all 0.5s ease-in-out"
                _hover={{
                  bg: index === currentIndex ? undefined : "gray.400",
                }}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </Flex>
        </Flex>
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
        bg="whiteAlpha.950"
        color="gray.800"
        size={{ base: "md", md: "lg" }}
        borderRadius="full"
        boxShadow="xl"
        _hover={{
          bg: "white",
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
        bg="whiteAlpha.950"
        color="gray.800"
        size={{ base: "md", md: "lg" }}
        borderRadius="full"
        boxShadow="xl"
        _hover={{
          bg: "white",
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

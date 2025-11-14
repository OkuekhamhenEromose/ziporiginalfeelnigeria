import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  useBreakpointValue,
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
    description: "The cultural party where the elite meet the electric.",
  },
  {
    image: owambe3,
    title: "Your Ancestors Called. They Want You to Dance",
    description:
      "Live music, premium taste, and the heart of Nigeria on a single stage.",
  },
];

export default function OwambeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const titleSize = useBreakpointValue({
    base: "xl",
    sm: "2xl",
    md: "3xl",
    lg: "4xl",
  });

  const textSize = useBreakpointValue({
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

  const currentEvent = owambeEvents[currentIndex];

  return (
    <Box
      as="section"
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
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, orange.500/10, white, gray.500/10)"
      />

      <Container
        maxW="7xl"
        position="relative"
        zIndex={10}
        px={containerPadding}
      >
        <Box
          mb={{ base: 8, sm: 10, md: 12 }}
          textAlign="center"
          px={{ base: 2, sm: 4, md: 0 }}
        >
          <Heading
            as="h1"
            color="#2b2e32"
            fontWeight="600"
            lineHeight="1.2"
            fontSize={mainHeadingSize}
            transition="opacity 0.6s ease-out"
          >
            Owambe Unplugged
          </Heading>
        </Box>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={gridGap}
          align="center"
          justify="space-between"
        >
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
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Image
                src={currentEvent.image}
                alt={currentEvent.title}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="opacity 0.7s ease-in-out"
                key={currentIndex}
              />

              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(to-br, orange.500/20, transparent, gray.900/30)"
              />

              <Box
                style={{
                  animation: "pulseGlow 4s ease-in-out infinite",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(251, 146, 60, 0.1), transparent, rgba(75, 85, 99, 0.1))",
                }}
              />

              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                borderRadius={{ base: "md", sm: "lg", md: "xl", lg: "lg" }}
                border="1px"
                borderColor="orange.500/20"
              />
            </Box>
          </Box>

          {/* Content Section - Centered on all screens */}
          <Box
            flex={{ base: "0 0 100%", lg: "1" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center" // Center content horizontally
            textAlign="center" // Center text alignment
            px={{ base: 2, sm: 4, md: 6, lg: 8 }}
            py={{ base: 6, sm: 8, md: 10 }}
            order={{ base: 2, lg: 2 }}
            minH={{ base: "auto", lg: "400px" }}
          >
            <Box
              key={`content-${currentIndex}`}
              style={{
                animation: "fadeInUp 0.6s ease-out",
                width: "100%",
                maxWidth: "600px", // Limit width for better readability
              }}
            >
              <Heading
                as="h2"
                fontSize={titleSize}
                fontWeight="600" // Changed from 200 to 600 for better readability
                color="#2b2e32"
                mb={4}
                lineHeight="1.2"
                textAlign="center"
              >
                {currentEvent.title}
              </Heading>
              
              <Text
                color="#2b2e32"
                fontSize={textSize}
                lineHeight="1.6"
                mb={8}
                px={{ base: 2, sm: 4, md: 6 }}
                textAlign="center"
              >
                {currentEvent.description}
              </Text>

              <Box
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.2s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <Flex
                  justify="center" // Center the button
                  pt={2}
                >
                  <Button
                    onClick={handleBookNow}
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
                    minW={{ base: "180px", sm: "200px" }}
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    Book Your Ticket Now
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>

        {/* Dots Indicator */}
        <Flex
          justify="center"
          mt={{ base: 8, md: 10 }}
          gap={3}
          position="relative"
          zIndex={15}
        >
          {owambeEvents.map((_, index) => (
            <Box
              key={index}
              w={{ base: "10px", sm: "12px" }}
              h={{ base: "10px", sm: "12px" }}
              borderRadius="full"
              bg={index === currentIndex ? "#2d7a4f" : "gray.300"}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => !isTransitioning && setCurrentIndex(index)}
              _hover={{
                bg: index === currentIndex ? "#246139" : "gray.400",
                transform: "scale(1.2)",
              }}
            />
          ))}
        </Flex>
      </Container>

      {/* Navigation Buttons */}
      <IconButton
        aria-label="Previous slide"
        onClick={scrollPrev}
        disabled={isTransitioning}
        position="absolute"
        left={{ base: 2, sm: 4 }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={20}
        bg="#2d7a4f"
        color="white"
        size={{ base: "md", sm: "lg" }}
        borderRadius="full"
        boxShadow="lg"
        _hover={{
          bg: "#246139",
          transform: "translateY(-50%) scale(1.1)",
        }}
        _active={{
          transform: "translateY(-50%) scale(0.95)",
        }}
        transition="all 0.3s"
        _disabled={{
          opacity: 0.5,
          cursor: "not-allowed",
        }}
      >
        <ChevronLeft size={20} />
      </IconButton>

      <IconButton
        aria-label="Next slide"
        onClick={scrollNext}
        disabled={isTransitioning}
        position="absolute"
        right={{ base: 2, sm: 4 }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={20}
        bg="#2d7a4f"
        color="white"
        size={{ base: "md", sm: "lg" }}
        borderRadius="full"
        boxShadow="lg"
        _hover={{
          bg: "#246139",
          transform: "translateY(-50%) scale(1.1)",
        }}
        _active={{
          transform: "translateY(-50%) scale(0.95)",
        }}
        transition="all 0.3s"
        _disabled={{
          opacity: 0.5,
          cursor: "not-allowed",
        }}
      >
        <ChevronRight size={20} />
      </IconButton>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import OwlCarousel from "react-owl-carousel";
import getScreenSize from "@/services/get-screen-size";
import TextToContent from "./TextToContent";
import data from "./festivalData";

const carouselOptions = {
  items: 1,
  loop: true,
  autoplay: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 800,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
};

const FestivalGrid = () => {
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

  const screenSize = getScreenSize();
  const height = ["mobile", "small"].includes(screenSize || "") ? "40vh" : "80vh";

  return (
    <Box
      ref={ref}
      bg="white"
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
        // bgGradient="linear(to-br, yellow.500/10, white, red.500/10)"
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
          textAlign="center"
          px={{ base: 2, sm: 4, md: 0 }}
        >
          <Heading
            as="h1"
            color="#2b2e32"
            fontWeight="600"
            lineHeight="1.2"
            fontSize={mainHeadingSize}
          >
            Cultural Festivals
          </Heading>
          <Text
            color="#2b2e32"
            fontSize={middleTextSize}
            lineHeight="1.6"
            mt={4}
            px={{ base: 2, sm: 0 }}
          >
            Experience the vibrant colors, music, and traditions of Nigeria's most celebrated cultural festivals
          </Text>
        </Box>

        {/* Carousel Section */}
        <Box
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease-out 0.4s",
          }}
        >
          <OwlCarousel {...carouselOptions} className="owl-carousel">
            {data.map(({ filename, title, description }, idx) => (
              <Box key={idx} className="bg-light">
                <TextToContent 
                  data={description} 
                  title={title}
                  imageFilename={filename}
                  imageHeight={height}
                />
              </Box>
            ))}
          </OwlCarousel>
        </Box>
      </Container>
    </Box>
  );
};

export default FestivalGrid;
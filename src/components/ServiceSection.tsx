import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Globe, Video, Heart, Wallet } from "lucide-react";
import servicesImg from "../assets/img/services1.jpg";
import paymentWalletImg from "../assets/img/paymentwallet.jpg";
import meetConnectImg from "../assets/img/meetconnect.jpg";
import realityShowImg from "../assets/img/realityshow2.jpg";
import owambePicsImg from "../assets/img/nightlife7.jpg";

const services = [
  {
    id: "tourism",
    icon: Globe,
    title: "Explore Tourism",
    description:
      "Discover hidden gems, plan adventures, and explore breathtaking destinations across Nigeria.",
    cta: "Explore Tours",
    gradient: "linear(to-br, blue.400, blue.500)",
    bgColor: "blue.50",
    hoverColor: "blue.100",
    backgroundImage: owambePicsImg,
  },
  {
    id: "reality-show",
    icon: Video,
    title: "Join Reality Event Show",
    description:
      "Join exciting talent shows, cultural contests, and live experiences that celebrate creativity and passion.",
    cta: "Watch / Join Now",
    gradient: "linear(to-br, purple.400, purple.600)",
    bgColor: "purple.50",
    hoverColor: "purple.100",
    backgroundImage: realityShowImg,
  },
  {
    id: "matchup",
    icon: Heart,
    title: "MatchUp & Connect",
    description:
      "Meet like-minded travelers, professionals, and soulmates through our smart social connection platform.",
    cta: "Start Connecting",
    gradient: "linear(to-br, pink.400, pink.500)",
    bgColor: "pink.50",
    hoverColor: "pink.100",
    backgroundImage: meetConnectImg,
  },
  {
    id: "payments",
    icon: Wallet,
    title: "Payments & Wallet",
    description:
      "A secure, unified wallet for bookings, show voting, and digital transactions — trusted by banks and users alike.",
    cta: "Learn More",
    gradient: "linear(to-br, gray.700, gray.900)",
    bgColor: "gray.50",
    hoverColor: "gray.100",
    backgroundImage: paymentWalletImg,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageZoom, setImageZoom] = useState(0);

  // Responsive values matching other sections
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

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !ref.current) return;

      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, 1 - rect.top / window.innerHeight)
      );
      setImageZoom(progress * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={ref}
      position="relative"
      minH="100vh"
      py={sectionPaddingY}
      px={4}
      bg="white"
      overflow="hidden"
      fontFamily='"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
      color="black"
    >
      {/* Background gradients */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, blue.50, white, purple.50)"
        opacity={0.5}
      />
      <Box
        position="absolute"
        top={-40}
        left={-40}
        w={80}
        h={80}
        bgGradient="linear(to-br, blue.200, transparent)"
        borderRadius="full"
        filter="blur(3xl)"
        opacity={0.3}
      />
      <Box
        position="absolute"
        bottom={-40}
        right={-40}
        w={80}
        h={80}
        bgGradient="linear(to-tl, purple.200, transparent)"
        borderRadius="full"
        filter="blur(3xl)"
        opacity={0.3}
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
            mb={{ base: 4, sm: 5, md: 6 }}
          >
            Everything You Love, Connected in One Platform
          </Heading>
          <Text
            color="#2b2e32"
            fontSize={middleTextSize}
            lineHeight="1.6"
            px={{ base: 2, sm: 0 }}
          >
            Explore. Compete. Connect. Transact — all within one trusted
            ecosystem.
          </Text>
        </Box>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={gridGap}
          align="center"
          justify="space-between"
        >
          {/* Image Section - Appears after heading on mobile, before cards on desktop */}
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
              ref={imageRef}
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
              <Image
                src={servicesImg}
                alt="Feel Nigeria Services"
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.7s ease"
                _hover={{ transform: "scale(1.05)" }}
                style={{
                  transform: `scale(${1 + imageZoom})`,
                }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(to-br, blue.500/20, transparent, gray.900/30)"
              />
            </Box>
          </Box>

          {/* Services Cards - Appears after image on mobile, after image on desktop */}
          <Box flex={{ base: "0 0 100%", lg: "1" }} order={{ base: 2, lg: 2 }}>
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-10px)",
                transition: "all 1s ease-out",
              }}
            >
              {/* 1x1 on mobile, 2x2 on tablet+, 2x2 on desktop */}
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                gap={{ base: 3, sm: 4, md: 6 }}
              >
                {services.map((service, index) => (
                  <Box
                    key={service.id}
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView
                        ? "translateY(0)"
                        : "translateY(10px)",
                      transition: `all 0.7s ease-out ${0.15 + index * 0.1}s`,
                    }}
                  >
                    <Box
                      p={{ base: 3, sm: 4, md: 6 }}
                      h="full"
                      minH={{ base: "180px", sm: "200px", md: "240px" }}
                      borderRadius={{ base: "lg", sm: "xl" }}
                      border="1px"
                      borderColor="gray.200"
                      boxShadow={{ base: "none", sm: "sm" }}
                      position="relative"
                      overflow="hidden"
                      cursor="pointer"
                      transition="all 0.3s ease-in-out"
                      _hover={{
                        boxShadow: { base: "none", sm: "2xl" },
                        transform: { base: "none", sm: "translateY(-8px)" },
                      }}
                      mx={{ base: 2, sm: 0 }}
                    >
                      {/* Background Image */}
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        backgroundImage={`url(${service.backgroundImage})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        transition="all 0.5s ease-in-out"
                        _hover={{
                          transform: { base: "scale(1)", sm: "scale(1.05)" },
                        }}
                      />

                      {/* Content Container - Always visible */}
                      <Flex
                        direction="column"
                        h="full"
                        position="relative"
                        zIndex={2}
                        justify="space-between"
                        color="white"
                      >
                        {/* Gradient overlay for text readability */}
                        <Box
                          position="absolute"
                          top={0}
                          left={0}
                          right={0}
                          bottom={0}
                          bgGradient="linear(to-b, transparent, blackAlpha.700)"
                          borderRadius={{ base: "lg", sm: "xl" }}
                          zIndex={-1}
                        />

                        {/* Top Content */}
                        <Box>
                          {/* Title */}
                          <Heading
                            as="h3"
                            fontSize={{
                              base: "md",
                              sm: "lg",
                              md: "xl",
                              lg: "2xl",
                            }}
                            fontWeight="600"
                            textAlign="center"
                            mb={{ base: 2, sm: 3 }}
                            textShadow="0 4px 8px rgba(0,0,0,0.8)"
                          >
                            {service.title}
                          </Heading>

                          {/* Description */}
                          <Text
                            fontSize={{
                              base: "xs",
                              sm: "sm",
                              md: "14px",
                              lg: "15px",
                            }}
                            textAlign="center"
                            lineHeight="1.6"
                            textShadow="0 2px 4px rgba(0,0,0,0.8)"
                            opacity={0.95}
                          >
                            {service.description}
                          </Text>
                        </Box>

                        {/* Bottom CTA */}
                        {/* <Flex
                          justifyContent="space-between"
                          alignItems="center"
                          mt={{ base: 2, sm: 4 }}
                          p={{ base: 1, sm: 2 }}
                          borderRadius="lg"
                          bg={{ base: "transparent", sm: "blackAlpha.500" }}
                          backdropFilter={{ base: "none", sm: "blur(2px)" }}
                        >
                          <Text
                            fontSize={{
                              base: "xs",
                              sm: "sm",
                              md: "14px",
                              lg: "15px",
                            }}
                            fontWeight="600"
                            color="white"
                          >
                            {service.cta}
                          </Text>
                          <Box
                            color="white"
                            transition="all 0.3s"
                            _hover={{
                              color: "blue.200",
                              transform: {
                                base: "translateX(0)",
                                sm: "translateX(6px)",
                              },
                            }}
                          >
                            <ArrowRight size={useBreakpointValue({ base: 16, sm: 20 })} />
                          </Box>
                        </Flex> */}
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServicesSection;

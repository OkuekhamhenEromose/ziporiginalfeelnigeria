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
} from "@chakra-ui/react";
import { Globe, Video, Heart, Wallet, ArrowRight } from "lucide-react";
import servicesImg from "../assets/img/services1.jpg";
import paymentWalletImg from "../assets/img/paymentwallet.jpg";
import meetConnectImg from "../assets/img/meetconnect.jpg";
import realityShowImg from "../assets/img/realityshow2.jpg";
import owambePicsImg from "../assets/img/nightlife7.jpg";

const services = [
  {
    id: "tourism",
    icon: Globe,
    title: "Tourism",
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
    title: "Reality Event Show",
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
      py={12}
      px={6}
      bg="white"
      overflow="hidden"
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

      <Container maxW="7xl" position="relative" zIndex={10}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          {/* Left: Services Content */}
          <Box flex={1}>
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-10px)",
                transition: "all 1s ease-out",
              }}
            >
              {/* 2x2 Grid Layout for Services */}
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={4} pt={16}>
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
                      p={4}
                      h="full"
                      minH="240px"
                      borderRadius="xl"
                      border="1px"
                      borderColor="gray.200"
                      boxShadow="sm"
                      position="relative"
                      overflow="hidden"
                      cursor="pointer"
                      transition="all 0.3s ease-in-out"
                      _hover={{
                        boxShadow: "2xl",
                        transform: "translateY(-8px)",
                      }}
                    >
                      {/* Background Image - Clear without overlay */}
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
                          transform: "scale(1.05)",
                        }}
                      />
                      
                      {/* Content Container - Hidden by default, appears on hover */}
                      <Flex
                        direction="column"
                        h="full"
                        position="relative"
                        zIndex={2}
                        justify="space-between"
                        color="white"
                        opacity={0}
                        transform="translateY(40px)"
                        transition="all 0.5s ease-in-out"
                        _hover={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                      >
                        {/* Light gradient overlay for text readability */}
                        <Box
                          position="absolute"
                          top={0}
                          left={0}
                          right={0}
                          bottom={0}
                          bgGradient="linear(to-b, transparent, blackAlpha.700)"
                          borderRadius="xl"
                          zIndex={-1}
                        />

                        {/* Top Content */}
                        <Box>
                          {/* Icon */}
                          {/* <Flex justifyContent="center">
                            <Box
                              w={16}
                              h={16}
                              borderRadius="lg"
                              bgGradient={service.gradient}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              boxShadow="2xl"
                              transition="transform 0.3s ease-in-out"
                              _hover={{
                                transform: "scale(1.1)",
                              }}
                            >
                              <service.icon 
                                size={32} 
                                color="white" 
                                strokeWidth={2}
                              />
                            </Box>
                          </Flex> */}

                          {/* Title */}
                          <Heading
                            as="h3"
                            fontSize="2xl"
                            fontWeight="bold"
                            textAlign="center"
                            mb={4}
                            textShadow="0 4px 8px rgba(0,0,0,0.8)"
                          >
                            {service.title}
                          </Heading>

                          {/* Description */}
                          <Text
                            fontSize="lg"
                            textAlign="center"
                            lineHeight="1.4"
                            textShadow="0 2px 4px rgba(0,0,0,0.8)"
                            opacity={0.95}
                          >
                            {service.description}
                          </Text>
                        </Box>

                        {/* Bottom CTA */}
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                          mt={6}
                          p={2}
                          borderRadius="lg"
                          bg="blackAlpha.500"
                          backdropFilter="blur(2px)"
                        >
                          <Text
                            fontSize="md"
                            fontWeight="semibold"
                            color="white"
                          >
                            {service.cta}
                          </Text>
                          <Box
                            color="white"
                            transition="all 0.3s"
                            _hover={{
                              color: "blue.200",
                              transform: "translateX(6px)",
                            }}
                          >
                            <ArrowRight size={26} />
                          </Box>
                        </Flex>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>

          {/* Right: Image Content */}
          <Box flex={1}>
            <Box
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(4px)",
                transition: "all 1s ease-out 0.1s",
              }}
            >
              <Heading
                as="h1"
                color="#2b2e32"
                fontWeight="650"
                lineHeight="1.1"
                mb={4}
                textAlign="center"
                fontSize={{ base: "2rem", md: "2.25rem", lg: "2.5rem" }}
              >
                Everything You Love, Connected in One Platform
              </Heading>
              <Text fontSize="xl" color="gray.600" lineHeight="1.6" mb={6} textAlign="center">
                Explore. Compete. Connect. Transact — all within one trusted
                ecosystem.
              </Text>
            </Box>

            <Box
              ref={imageRef}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(10px)",
                transition: "all 1s ease-out",
              }}
            >
              <Box
                position="relative"
                h={{ base: "250px", md: "320px", lg: "500px" }}
                borderRadius="xl"
                overflow="hidden"
              >
                <Image
                  src={servicesImg}
                  alt="Feel Nigeria Services"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  style={{
                    transform: `scale(${1 + imageZoom})`,
                    transition: "transform 0.3s ease-out",
                  }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-t, blackAlpha.300, transparent, transparent)"
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServicesSection;
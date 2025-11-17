import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import DestinationDescription from "./DestinationDescription";
import getScreenSize from "@/services/get-screen-size";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: 1,
    title: "Elegushi Beach",
    description:
      "A popular private beach in Lekki, Lagos, is owned by the Elegushi royal family. As one of Nigeria's top beaches, it attracts nearly 40,000 visitors weekly, with Sundays being the busiest day, accounting for over half of its weekly visitors",
  },
  {
    src: 2,
    title: "Obudu Mountain Resort",
    description:
      "Located in Cross River State, Nigeria, offers breathtaking views from the Obudu Plateau. A scenic cable car ride, introduced in 2005, spans 870 meters (2,850 ft), providing a stunning perspective while bypassing the winding road to the top",
  },
  {
    src: 3,
    title: "Zuma Rock",
    description:
      "Zuma Rock is a massive monolith located in Madalla, Niger State, Nigeria. Rising 725 meters (2,379 ft) above its surroundings, it's a prominent landmark along the Abuja-Kaduna highway and is often called the 'Gateway to Abuja from Suleja'. Composed of gabbro and granodiorite, this natural wonder is a striking feature of Nigeria's landscape.",
  },
  {
    src: 4,
    title: "La Campagne Tropicana",
    description: "Escape to this African-themed paradise, where 65 acres of pristine palm-fringed beach, lush mangrove forest, and winding rivers await. The resort, nestled in the heart of Ibeju Lekki, Lagos, Nigeria, offers a tranquil retreat for nature lovers and adventure seekers alike. Explore the diverse ecosystem, teeming with exotic plants and animals, including monkeys, squirrels, mudskippers, and a variety of bird species.",
  },
  {
    src: 5,
    title: "Awhum Waterfall",
    description:
      "Located in Enugu State, Nigeria, is a 30-meter high natural wonder with a unique granite rock formation. The waterfall's water is believed to have healing properties and spiritual significance. Visitors can access the falls after a 50-minute hike from the parking area, passing through scenic terrain near the Awhum Monastery, making it an attractive site for religious tourism.",
  },
  {
    src: 6,
    title: "Aso Rock",
    description:
      "Aso Rock is a prominent 400-meter granitic monolith on the outskirts of Abuja, Nigeria's capital. Rising to 936 meters above sea level, it's a defining feature of the city, surrounded by key government buildings, including the Presidential Complex, National Assembly, and Supreme Court. The name 'Aso' means 'victorious' in the local Asokoro language.",
  },
  {
    src: 7,
    title: "Assop Falls",
    description:
      "Situated on the edge of the Jos Plateau, is one of Nigeria's most notable waterfalls. Located about 64 km from Jos city on the Abuja road, it has also become a popular filming location for soap operas and advertisements.",
  },
  {
    src: 8,
    title: "Cross River National Park",
    description:
      "Cross River National Park, located in Cross River State, Nigeria, is the country's largest rainforest area and a biodiversity hotspot. The park spans about 4,000 km², featuring primary moist tropical rainforests and mangrove swamps. It borders Korup National Park in Cameroon and is home to one of Africa's oldest rainforests. The park is inhabited by 16 primate species, including rare animals like chimpanzees, drills, and Cross River gorillas",
  },
];


const PopularDestination = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

   // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear'
  }

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
      <Container
        maxW="7xl"
        position="relative"
        zIndex={10}
        px={containerPadding}
      >
        {/* Main Heading */}
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
            Popular Destinations
          </Heading>
          <Text
            color="#2b2e32"
            fontSize={middleTextSize}
            lineHeight="1.6"
            mt={4}
            px={{ base: 2, sm: 0 }}
          >
            Discover Nigeria's most breathtaking landscapes and cultural landmarks
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
          <Slider {...settings}>
            {images.map(({ src, title, description }, idx) => (
              <Box key={idx}>
                <DestinationDescription 
                  title={title} 
                  description={description} 
                  imageSrc={src}
                  imageHeight={height}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularDestination;
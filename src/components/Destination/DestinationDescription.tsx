import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import getValidImageUrl from "@/services/get-valid-image-url";

interface DestinationDescriptionProps {
  title: string;
  description: string;
  imageSrc: number;
  imageHeight: string;
}

const DestinationDescription = ({
  title,
  description,
  imageSrc,
  imageHeight,
}: DestinationDescriptionProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imagePath = getValidImageUrl(imageSrc, "destination");
  const navigate = useNavigate();

  // Preload image using a safer approach
  useEffect(() => {
    let isMounted = true;
    
    const preloadImage = async () => {
      try {
        const response = await fetch(imagePath, { method: 'HEAD' });
        if (response.ok && isMounted) {
          setImageLoaded(true);
        } else if (isMounted) {
          setImageError(true);
        }
      } catch (error) {
        if (isMounted) {
          setImageError(true);
        }
      }
    };

    preloadImage();

    return () => {
      isMounted = false;
    };
  }, [imagePath]);

  const handleBookNow = () => {
    navigate("/booking");
  };

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="center"
      gap={{ base: 6, lg: 12 }}
      maxW="7xl"
      mx="auto"
      p={4}
    >
      {/* Image Section */}
      <Box
        flex="1"
        width={{ base: "100%", lg: "50%" }}
        position="relative"
        overflow="hidden"
        borderRadius="xl"
        minH={imageHeight}
      >
        {!imageError ? (
          <Image
            src={imagePath}
            alt={title}
            height={imageHeight}
            width="100%"
            objectFit="cover"
            loading="eager"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
            opacity={imageLoaded ? 1 : 0}
          />
        ) : (
          <Box
            height={imageHeight}
            width="100%"
            bg="gray.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px dashed"
            borderColor="gray.300"
          >
            <Text color="gray.500" textAlign="center">
              Image not available
              <br />
              <Text fontSize="sm">{title}</Text>
            </Text>
          </Box>
        )}
        
        {/* Loading state */}
        {!imageLoaded && !imageError && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="gray.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={1}
          >
            <Text color="gray.500">Loading image...</Text>
          </Box>
        )}
      </Box>

      {/* Content Section */}
      <Box flex="1" width={{ base: "100%", lg: "50%" }} py={{ base: 4, lg: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="600"
          color="#2b2e32"
          mb={4}
          lineHeight="1.2"
        >
          {title}
        </Heading>

        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          lineHeight="1.7"
          color="#2b2e32"
          mb={6}
        >
          {description}
        </Text>
        
        <Box mt={4}>
          <Box
            as="button"
            onClick={handleBookNow}
            bg="#2d7a4f"
            color="white"
            px={6}
            py={3}
            borderRadius="full"
            fontWeight="600"
            fontSize="md"
            transition="all 0.3s ease"
            _hover={{
              bg: "#246139",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            cursor="pointer"
            border="none"
          >
            Book Now
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DestinationDescription;
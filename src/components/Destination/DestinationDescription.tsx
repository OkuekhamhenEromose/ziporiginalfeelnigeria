import { useState } from "react";
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
  imageHeight 
}: DestinationDescriptionProps) => {
  const [imageError, setImageError] = useState(false);
  const imagePath = getValidImageUrl(imageSrc, "destination");

  // Debug logging
  console.log("DestinationDescription:", { 
    title, 
    imageSrc, 
    imagePath,
    imageHeight 
  });

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
        // boxShadow="xl"
        minH={imageHeight}
      >
        {!imageError ? (
          <Image
            src={getValidImageUrl(imageSrc, "destination")}
            alt={title}
            height={imageHeight}
            width="100%"
            objectFit="cover"
            loading="lazy"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
            onError={() => setImageError(true)}
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
              Image not available<br />
              <Text fontSize="sm">{title}</Text>
            </Text>
          </Box>
        )}
      </Box>

      {/* Content Section */}
      <Box
        flex="1"
        width={{ base: "100%", lg: "50%" }}
        py={{ base: 4, lg: 8 }}
      >
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
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default DestinationDescription;
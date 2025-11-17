import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import getValidImageUrl from "@/services/get-valid-image-url";

type ElementType = "h2" | "h3" | "p" | "ul" | "strong";
interface ParsedElement {
  type: ElementType;
  content: string | string[];
}

interface TextToContentProps {
  data: ParsedElement[];
  title: string;
  imageFilename: string;
  imageHeight: string;
  standalone?: boolean;
}

function TextToContent({ 
  data, 
  title, 
  imageFilename, 
  imageHeight,
  standalone = false 
}: TextToContentProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const imagePath = getValidImageUrl(1, "", imageFilename);

  // Preload image using fetch
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

  // Extract the main description (first paragraph)
  const getDescription = () => {
    const paragraph = data.find(item => item.type === "p");
    return paragraph ? (paragraph.content as string) : "";
  };

  // Get additional content (strong and ul elements)
  const getAdditionalContent = () => {
    return data.filter(item => item.type === "strong" || item.type === "ul");
  };

  const additionalContent = getAdditionalContent();

  const handleReadMore = () => {
    navigate("/festivals");
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
            transition="transform 0.3s ease"
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
            bg="white" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            border="2px dashed"
            borderColor="white"
          >
            <Text color="gray.500" textAlign="center">
              Festival image not available<br />
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
          mb={4}
        >
          {getDescription()}
        </Text>

        {/* Show all content when expanded or on standalone page */}
        {standalone && additionalContent.map((element, index) => {
          if (element.type === "strong") {
            return (
              <Text
                key={index}
                fontWeight="bold"
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                color="#2b2e32"
                mt={4}
                mb={2}
              >
                {element.content}
              </Text>
            );
          }
          if (element.type === "ul" && Array.isArray(element.content)) {
            return (
              <Box key={index} mt={2} mb={4}>
                {(element.content as string[]).map((item, idx) => (
                  <Text
                    key={idx}
                    fontSize={{ base: "sm", sm: "md" }}
                    color="#2b2e32"
                    mb={2}
                    pl={4}
                    position="relative"
                    _before={{
                      content: '"•"',
                      position: "absolute",
                      left: 2,
                      color: "#2b2e32",
                      fontWeight: "bold"
                    }}
                  >
                    {item}
                  </Text>
                ))}
              </Box>
            );
          }
          return null;
        })}

        {/* Show Read More button for non-standalone */}
        {!standalone && additionalContent.length > 0 && (
          <Box mt={4}>
            <Box
              as="button"
              onClick={handleReadMore}
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
              Read More
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default TextToContent;
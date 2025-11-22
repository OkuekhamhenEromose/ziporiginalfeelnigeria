import { Box, Text, HStack, Button as ChakraButton, Image } from "@chakra-ui/react";
import { Heart, MessageCircle, Camera, Video, CheckCircle } from "lucide-react";

interface ProfileCardProps {
  name: string;
  age: number;
  bio: string;
  image: string;
  isOnline?: boolean;
  isVerified?: boolean;
  photoCount?: number;
  videoCount?: number;
}

export const ProfileCard = ({
  name,
  age,
  bio,
  image,
  isOnline = false,
  isVerified = false,
  photoCount = 1,
  videoCount = 0,
}: ProfileCardProps) => {
  return (
    <Box
      position="relative"
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ shadow: "xl", transform: "translateY(-2px)" }}
      cursor="pointer"
      role="group"
    >
      <Box position="relative" paddingBottom="133.33%" overflow="hidden">
        <Image
          src={image}
          alt={`${name}, ${age}`}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.5s"
          _groupHover={{ transform: "scale(1.05)" }}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, transparent, transparent, blackAlpha.400)"
        />

        {/* Badges */}
        <HStack position="absolute" top={3} left={3} gap={2}>
          {isVerified && (
            <HStack
              bg="#2d7a4f"
              color="white"
              px={2}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="medium"
              gap={1}
            >
              <CheckCircle size={12} />
            </HStack>
          )}
        </HStack>

        {/* Media counts */}
        <HStack position="absolute" top={3} right={3} gap={2}>
          <HStack
            bg="blackAlpha.600"
            color="white"
            px={2}
            py={1}
            borderRadius="full"
            fontSize="xs"
            backdropFilter="blur(4px)"
            gap={1}
          >
            <Camera size={12} />
            {photoCount}
          </HStack>
          {videoCount > 0 && (
            <HStack
              bg="blackAlpha.600"
              color="white"
              px={2}
              py={1}
              borderRadius="full"
              fontSize="xs"
              backdropFilter="blur(4px)"
              gap={1}
            >
              <Video size={12} />
              {videoCount}
            </HStack>
          )}
        </HStack>

        {/* Quick actions (show on hover) */}
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.200"
          opacity={0}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.3s"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <ChakraButton
            bg="#2d7a4f"
            color="white"
            p={3}
            borderRadius="full"
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.2s"
          >
            <Heart size={20} />
          </ChakraButton>
          <ChakraButton
            bg="white"
            color="gray.900"
            p={3}
            borderRadius="full"
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.2s"
          >
            <MessageCircle size={20} />
          </ChakraButton>
        </Box>
      </Box>

      {/* Profile info */}
      <Box p={4}>
        <HStack gap={2} mb={2}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.900">
            {name}, {age}
          </Text>
          {isOnline && (
            <Box w={2.5} h={2.5} bg="green.500" borderRadius="full" />
          )}
        </HStack>
        <Text fontSize="sm" color="gray.600" lineClamp={2}>
          {bio}
        </Text>
      </Box>
    </Box>
  );
};
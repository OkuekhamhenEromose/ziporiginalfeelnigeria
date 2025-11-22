import { Box, HStack, Text, Image as ChakraImage } from "@chakra-ui/react";
import { Video } from "lucide-react";

interface ContactCardProps {
  name: string;
  message: string;
  image: string;
  unreadCount?: number;
  isOnline?: boolean;
  hasVideoInvite?: boolean;
  badge?: string;
}

export const ContactCard = ({
  name,
  message,
  image,
  unreadCount = 0,
  isOnline = false,
  hasVideoInvite = false,
  badge,
}: ContactCardProps) => {
  return (
    <HStack
      gap={3}
      p={3}
      _hover={{ bg: "gray.50" }}
      borderRadius="lg"
      cursor="pointer"
      transition="background 0.2s"
    >
      <Box position="relative" flexShrink={0}>
        <ChakraImage
          src={image}
          alt={name}
          boxSize="48px"
          borderRadius="full"
          objectFit="cover"
        />
        {isOnline && (
          <Box
            position="absolute"
            bottom={0}
            right={0}
            w={3}
            h={3}
            bg="green.500"
            border="2px"
            borderColor="white"
            borderRadius="full"
          />
        )}
        {hasVideoInvite && (
          <Box
            position="absolute"
            bottom={-1}
            right={-1}
            bg="#2d7a4f"
            color="white"
            p={1}
            borderRadius="full"
          >
            <Video size={12} />
          </Box>
        )}
      </Box>

      <Box flex={1} minW={0}>
        <HStack gap={2} mb={1}>
          <Text
            fontWeight="semibold"
            fontSize="sm"
            color="gray.900"
            truncate
          >
            {name}
          </Text>
          {badge && (
            <Box
              bg="#2d7a4f"
              color="white"
              fontSize="xs"
              px={2}
              py={0.5}
              borderRadius="full"
              fontWeight="medium"
            >
              {badge}
            </Box>
          )}
        </HStack>
        <Text fontSize="xs" color="gray.600" truncate>
          {message}
        </Text>
      </Box>

      {unreadCount > 0 && (
        <Box
          bg="#2d7a4f"
          color="white"
          w={5}
          h={5}
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xs"
          fontWeight="bold"
          flexShrink={0}
        >
          {unreadCount}
        </Box>
      )}
    </HStack>
  );
};
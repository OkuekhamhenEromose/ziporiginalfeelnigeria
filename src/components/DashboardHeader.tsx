import { Box, Container, HStack, Text, Button } from "@chakra-ui/react";
import { Heart, Search, MessageSquare, HelpCircle, CreditCard } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={50}
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      backdropFilter="blur(10px)"
    >
      <Container maxW="7xl" px={4}>
        <HStack justify="space-between" h={16}>
          {/* Logo */}
          <HStack gap={2}>
            <Box bg="#2d7a4f" color="white" p={2} borderRadius="lg">
              <Heart size={20} fill="currentColor" />
            </Box>
            <Text fontSize="xl" fontWeight="bold" color="gray.900">
              LoveConnect
            </Text>
          </HStack>

          {/* Navigation */}
          <HStack gap={1} display={{ base: "none", md: "flex" }}>
            <Button variant="ghost" gap={2}>
              <Heart size={16} />
              Today I Am
            </Button>
            <Button variant="ghost" gap={2}>
              <Search size={16} />
              Search
            </Button>
            <Button variant="ghost" gap={2}>
              <MessageSquare size={16} />
              Inbox
            </Button>
            <Button variant="ghost" size="sm">
              <HelpCircle size={16} />
            </Button>
          </HStack>

          {/* Right actions */}
          <HStack gap={3}>
            <Button
              display={{ base: "none", md: "flex" }}
              gap={2}
              bg="#2d7a4f"
              color="white"
              _hover={{ bg: "#246139" }}
            >
              <CreditCard size={16} />
              Upgrade
              <Box
                bg="yellow.500"
                color="black"
                fontSize="xs"
                px={2}
                py={0.5}
                borderRadius="full"
                fontWeight="bold"
                ml={1}
              >
                Save 66%
              </Box>
            </Button>
            <Box
              boxSize="40px"
              borderRadius="full"
              bg="linear-gradient(to bottom right, #2d7a4f, #246139)"
              color="white"
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s"
            >
              JD
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

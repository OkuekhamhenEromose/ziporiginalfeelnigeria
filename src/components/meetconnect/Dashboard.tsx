import { Box, Container, Grid, VStack, HStack, Text } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { ProfileCard } from "../../components/ProfileCard";
import { ContactCard } from "../../components/ContactCard";
import { DashboardButton } from "../../components/ui/DashboardButton";
import { DashboardInput } from "../../components/ui/DashboardInput";

// Import images
import profile1 from "../../assets/img/Calabar Carnival.jpg";
import profile2 from "../../assets/img/Argungu-Fishing-Festival.jpg";
import profile3 from "../../assets/img/Badagry-festival.jpg";
import profile4 from "../../assets/img/Durbar.jpg";
import profile5 from "../../assets/img/Felabration.jpg";
import profile6 from "../../assets/img/Igue-Festival-A-unique-Benin-celebration.jpg";

const profiles = [
  {
    name: "Ting",
    age: 32,
    bio: "I am proud of my figure but sometimes I am told that I am too...",
    image: profile1,
    isOnline: true,
    isVerified: true,
    photoCount: 9,
    videoCount: 3,
  },
  {
    name: "Michael",
    age: 29,
    bio: "Looking for someone special to share life's adventures with...",
    image: profile2,
    isOnline: false,
    isVerified: true,
    photoCount: 5,
    videoCount: 1,
  },
  {
    name: "Lisa",
    age: 31,
    bio: "I'm an open minded person, honest, sweet, funny, down to earth...",
    image: profile3,
    isOnline: false,
    isVerified: false,
    photoCount: 4,
    videoCount: 0,
  },
  {
    name: "David",
    age: 33,
    bio: "Adventure seeker and coffee enthusiast. Let's explore together...",
    image: profile4,
    isOnline: true,
    isVerified: true,
    photoCount: 7,
    videoCount: 2,
  },
  {
    name: "Rebecca",
    age: 28,
    bio: "Hello, I'm looking for a companion.. someone that'll keep me on my...",
    image: profile5,
    isOnline: false,
    isVerified: true,
    photoCount: 12,
    videoCount: 4,
  },
  {
    name: "Sarah",
    age: 27,
    bio: "Love traveling, good food, and meaningful conversations...",
    image: profile6,
    isOnline: true,
    isVerified: false,
    photoCount: 6,
    videoCount: 1,
  },
];

const contacts = [
  {
    name: "Julia",
    message: "Welcome to Dating...",
    image: profile1,
    unreadCount: 1,
    badge: "Concierge",
  },
  {
    name: "Miley Grey",
    message: "Miley Grey sent a photo",
    image: profile3,
    isOnline: false,
  },
  {
    name: "Jym",
    message: "Hey there!",
    image: profile2,
    unreadCount: 1,
  },
];

const chatRequests = [
  {
    name: "Laura",
    message: "is inviting you to Video Chat...",
    image: profile5,
    hasVideoInvite: true,
  },
  {
    name: "Anastasia",
    message: "Would love to connect!",
    image: profile6,
  },
];

const MeetDashboard = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <DashboardHeader />

      <Container maxW="7xl" px={4} py={6}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 320px" }}
          gap={6}
        >
          {/* Main content */}
          <Box>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
              ))}
            </Grid>
          </Box>

          {/* Sidebar */}
          <VStack gap={6} align="stretch">
            {/* My Contacts */}
            <Box bg="white" borderRadius="xl" p={4} shadow="md">
              <HStack justify="space-between" mb={4}>
                <Text fontSize="lg" fontWeight="bold" color="gray.900">
                  My Contacts
                </Text>
                <Box
                  bg="#2d7a4f"
                  color="white"
                  w={6}
                  h={6}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  {contacts.length}
                </Box>
              </HStack>

              <VStack gap={2} mb={4}>
                {contacts.map((contact, index) => (
                  <ContactCard key={index} {...contact} />
                ))}
              </VStack>

              <Box position="relative">
                <Box
                  position="absolute"
                  left={3}
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex={1}
                >
                  <Search size={16} color="#9CA3AF" />
                </Box>
                <DashboardInput
                  placeholder="Search contact"
                  pl={10}
                />
              </Box>
            </Box>

            {/* Chat Requests */}
            <Box bg="white" borderRadius="xl" p={4} shadow="md">
              <HStack justify="space-between" mb={4}>
                <Text fontSize="lg" fontWeight="bold" color="gray.900">
                  Chat Requests
                </Text>
                <DashboardButton
                  variant="link"
                  size="default"
                >
                  SHOW MORE
                </DashboardButton>
              </HStack>

              <VStack gap={2}>
                {chatRequests.map((request, index) => (
                  <ContactCard key={index} {...request} />
                ))}
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetDashboard;
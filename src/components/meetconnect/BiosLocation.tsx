import { useState, ChangeEvent, FormEvent } from "react"; 
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Input,
  Field,
} from "@chakra-ui/react";
import { Heart } from "lucide-react";

const BioLocationPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    location: "",
    diasporaCountry: "",
    ethnicity: "",
    language: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
//  If you want to keep the form submission structure, update the handleSubmit function: 
  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  // Navigate to relationship integrity page instead of profile-setup
  navigate("/relationshipintegrity");
};

  return (
    <Box
      bg="gray.50"
      minH="100vh"
      display="flex"
      alignItems="center"
      py={8}
      px={4}
    >
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          {/* Left Section - Form */}
          <GridItem>
            <Box
              bg="white"
              borderRadius="3xl"
              p={{ base: 6, md: 8, lg: 10 }}
              shadow="xl"
            >
              {/* Back Button */}
              <Button
                variant="ghost"
                size="sm"
                mb={6}
                onClick={() => navigate(-1)}
                // leftIcon={<ArrowLeft size={20} />}
                _hover={{ bg: "gray.100" }}
              >
                Back
              </Button>

              {/* Header */}
              <VStack align="stretch" mb={8}>
                <Heading
                  as="h1"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="gray.900"
                  mb={2}
                >
                  Tell us about yourself
                </Heading>
                <Text fontSize="md" color="gray.600">
                  Help us create your perfect match profile
                </Text>
              </VStack>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <VStack gap={6} align="stretch">
                  {/* Full Name */}
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                      Full Name (as on NIN)
                    </Text>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full legal name"
                      size="lg"
                      borderRadius="lg"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "#2d7a4f",
                        boxShadow: "0 0 0 1px #2d7a4f",
                      }}
                      required
                    />
                  </Box>

                  {/* Date of Birth */}
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                      Date of Birth
                    </Text>
                    <Input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      size="lg"
                      borderRadius="lg"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "#2d7a4f",
                        boxShadow: "0 0 0 1px #2d7a4f",
                      }}
                      required
                    />
                  </Box>

                  {/* Location Status */}
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                      Current Location Status
                    </Text>
                    <Field.Root>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '16px',
                          borderRadius: '8px',
                          border: '1px solid #E2E8F0',
                          fontSize: '16px',
                          backgroundColor: 'white'
                        }}
                        required
                      >
                        <option value="">Select status</option>
                        <option value="resident">Resident in Nigeria</option>
                        <option value="diaspora">Diaspora</option>
                      </select>
                    </Field.Root>
                  </Box>

                  {/* Country of Residence (conditional) */}
                  {formData.location === "diaspora" && (
                    <Box>
                      <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                        Country of Residence
                      </Text>
                      <Input
                        type="text"
                        name="diasporaCountry"
                        value={formData.diasporaCountry}
                        onChange={handleInputChange}
                        placeholder="e.g., United Kingdom, United States"
                        size="lg"
                        borderRadius="lg"
                        borderColor="gray.200"
                        _focus={{
                          borderColor: "#2d7a4f",
                          boxShadow: "0 0 0 1px #2d7a4f",
                        }}
                        required
                      />
                    </Box>
                  )}

                  {/* Ethnicity */}
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                      Ethnicity
                    </Text>
                    <Field.Root>
                      <select
                        name="ethnicity"
                        value={formData.ethnicity}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '16px',
                          borderRadius: '8px',
                          border: '1px solid #E2E8F0',
                          fontSize: '16px',
                          backgroundColor: 'white'
                        }}
                        required
                      >
                        <option value="">Select ethnicity</option>
                        <option value="Yoruba">Yoruba</option>
                        <option value="Igbo">Igbo</option>
                        <option value="Hausa">Hausa</option>
                        <option value="Fulani">Fulani</option>
                        <option value="Ijaw">Ijaw</option>
                        <option value="Edo">Edo</option>
                        <option value="Ibibio">Ibibio</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field.Root>
                  </Box>

                  {/* Primary Language */}
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                      Primary Language
                    </Text>
                    <Input
                      type="text"
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      placeholder="e.g., English, Yoruba, Igbo"
                      size="lg"
                      borderRadius="lg"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "#2d7a4f",
                        boxShadow: "0 0 0 1px #2d7a4f",
                      }}
                      required
                    />
                  </Box>

                  {/* Submit Button */}

                  <Button
                    type="submit"
                    size="lg"
                    height="56px"
                    fontSize="lg"
                    borderRadius="xl"
                    bg="#2d7a4f"
                    color="white"
                    _hover={{
                      bg: "#246139",
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    _active={{
                      transform: "translateY(0)",
                    }}
                    transition="all 0.3s ease"
                    mt={4}
                    // onClick={()=> navigate("/relationshipintegrity")}
                  >
                    Continue
                  </Button>
                </VStack>
              </form>
            </Box>
          </GridItem>

          {/* Right Section - Image/Visual */}
          <GridItem display={{ base: "none", lg: "block" }}>
            <Box
              position="relative"
              h="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* Background Decoration */}
              <Box
                position="absolute"
                top="10%"
                right="10%"
                w="300px"
                h="300px"
                bgGradient="linear(to-br, pink.400/30, purple.400/30)"
                borderRadius="full"
                filter="blur(60px)"
                zIndex={0}
              />
              <Box
                position="absolute"
                bottom="10%"
                left="10%"
                w="250px"
                h="250px"
                bgGradient="linear(to-tr, blue.400/30, green.400/30)"
                borderRadius="full"
                filter="blur(60px)"
                zIndex={0}
              />

              {/* Main Content */}
              <VStack
                position="relative"
                zIndex={1}
                gap={8}
                bg="white"
                p={12}
                borderRadius="3xl"
                shadow="2xl"
                textAlign="center"
              >
                {/* Couple Illustration */}
                <Box position="relative" mb={4}>
                  {/* Hearts floating around */}
                  <Box
                    position="absolute"
                    top={-4}
                    right={-4}
                    animation="float 3s ease-in-out infinite"
                  >
                    <Heart size={32} color="#FF6B9D" fill="#FF6B9D" />
                  </Box>
                  <Box
                    position="absolute"
                    bottom={-2}
                    left={-2}
                    animation="float 3s ease-in-out infinite 1s"
                  >
                    <Heart size={24} color="#FF6B9D" fill="#FF6B9D" />
                  </Box>

                  {/* Couple silhouette representation */}
                  <VStack gap={4}>
                    <HStack gap={4}>
                      {/* Woman */}
                      <Box
                        w="120px"
                        h="160px"
                        bgGradient="linear(to-b, pink.400, pink.600)"
                        borderRadius="full"
                        position="relative"
                        shadow="xl"
                      >
                        <Box
                          position="absolute"
                          bottom={-4}
                          left="50%"
                          transform="translateX(-50%)"
                          w="140px"
                          h="80px"
                          bgGradient="linear(to-b, pink.400, pink.600)"
                          borderRadius="0 0 70px 70px"
                        />
                      </Box>

                      {/* Man */}
                      <Box
                        w="120px"
                        h="160px"
                        bgGradient="linear(to-b, blue.400, blue.600)"
                        borderRadius="full"
                        position="relative"
                        shadow="xl"
                      >
                        <Box
                          position="absolute"
                          bottom={-4}
                          left="50%"
                          transform="translateX(-50%)"
                          w="140px"
                          h="80px"
                          bgGradient="linear(to-b, blue.400, blue.600)"
                          borderRadius="0 0 70px 70px"
                        />
                      </Box>
                    </HStack>

                    {/* Connecting heart */}
                    <Box mt={-8}>
                      <Heart size={48} color="#2d7a4f" fill="#2d7a4f" />
                    </Box>
                  </VStack>
                </Box>

                {/* Text */}
                <VStack gap={3}>
                  <Heading
                    as="h2"
                    fontSize="3xl"
                    fontWeight="bold"
                    color="gray.900"
                  >
                    Find Your Perfect Match
                  </Heading>
                  <Text fontSize="lg" color="gray.600" maxW="md">
                    Join thousands of Nigerians worldwide finding authentic connections
                  </Text>
                </VStack>

                {/* Stats */}
                <HStack gap={8} pt={4}>
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold" color="#2d7a4f">
                      10K+
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Active Users
                    </Text>
                  </VStack>
                  <Box h="50px" w="1px" bg="gray.300" />
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold" color="#2d7a4f">
                      500+
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Success Stories
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </Box>

            <style>
              {`
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                }
              `}
            </style>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default BioLocationPage;
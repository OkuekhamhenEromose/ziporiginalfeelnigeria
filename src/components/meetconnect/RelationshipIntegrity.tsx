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
  Field,
} from "@chakra-ui/react";
import { Heart, CheckCircle } from "lucide-react";

const RelationshipIntegrity = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    relationshipIntent: "",
    familySize: "",
    religion: "",
    futureLocation: "",
    agreeToZeroTolerance: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToZeroTolerance) {
      alert("You must agree to the Zero-Tolerance Pledge to continue");
      return;
    }
    // Navigate to next step or complete registration
    navigate("/meetdashboard");
  };

  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
                  Relationship Goals & Values
                </Heading>
                <Text fontSize="md" color="gray.600">
                  Help us understand your relationship preferences and
                  commitment
                </Text>
              </VStack>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <VStack gap={6} align="stretch">
                  {/* Relationship Goals Section */}
                  <Box>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="semibold"
                      color="gray.700"
                      mb={4}
                    >
                      Relationship Goals & Values
                    </Heading>

                    {/* Relationship Intent */}
                    <Box mb={6}>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Relationship Intent
                      </Text>
                      <Field.Root>
                        <select
                          name="relationshipIntent"
                          value={formData.relationshipIntent}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid #E2E8F0",
                            fontSize: "16px",
                            backgroundColor: "white",
                          }}
                          required
                        >
                          <option value="">Select your intent</option>
                          <option value="marriage-1-2">
                            Seeking Marriage in 1-2 Years
                          </option>
                          <option value="marriage-2-5">
                            Seeking Marriage in 2-5 Years
                          </option>
                          <option value="long-term">
                            Long-term Relationship
                          </option>
                          <option value="friendship">
                            Friendship & Networking
                          </option>
                        </select>
                      </Field.Root>
                    </Box>

                    {/* Desired Family Size */}
                    <Box mb={6}>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Desired Family Size
                      </Text>
                      <Field.Root>
                        <select
                          name="familySize"
                          value={formData.familySize}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid #E2E8F0",
                            fontSize: "16px",
                            backgroundColor: "white",
                          }}
                          required
                        >
                          <option value="">Select preference</option>
                          <option value="1-2">1-2 children</option>
                          <option value="3-4">3-4 children</option>
                          <option value="5+">5+ children</option>
                          <option value="undecided">Undecided</option>
                        </select>
                      </Field.Root>
                    </Box>

                    {/* Religion */}
                    <Box mb={6}>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Religion
                      </Text>
                      <Field.Root>
                        <select
                          name="religion"
                          value={formData.religion}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid #E2E8F0",
                            fontSize: "16px",
                            backgroundColor: "white",
                          }}
                          required
                        >
                          <option value="">Select religion</option>
                          <option value="Christianity">Christianity</option>
                          <option value="Islam">Islam</option>
                          <option value="Traditional">
                            Traditional Religion
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </Field.Root>
                    </Box>

                    {/* Future Location Plans */}
                    <Box mb={6}>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Future Location Plans
                      </Text>
                      <Field.Root>
                        <select
                          name="futureLocation"
                          value={formData.futureLocation}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid #E2E8F0",
                            fontSize: "16px",
                            backgroundColor: "white",
                          }}
                          required
                        >
                          <option value="">Select preference</option>
                          <option value="stay-nigeria">
                            Staying in Nigeria
                          </option>
                          <option value="relocate-abroad">
                            Willing to relocate abroad
                          </option>
                          <option value="flexible">
                            Flexible/Open to discuss
                          </option>
                          <option value="return-nigeria">
                            Planning to return to Nigeria
                          </option>
                        </select>
                      </Field.Root>
                    </Box>
                  </Box>

                  {/* Commitment to Integrity Section */}
                  <Box>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="semibold"
                      color="gray.700"
                      mb={4}
                    >
                      Final Step: Commitment to Integrity
                    </Heading>

                    {/* Zero-Tolerance Pledge */}
                    <Box
                      bg="red.50"
                      border="1px"
                      borderColor="red.200"
                      borderRadius="lg"
                      p={6}
                      mb={6}
                    >
                      <Heading
                        as="h4"
                        fontSize="md"
                        fontWeight="semibold"
                        color="red.800"
                        mb={3}
                      >
                        Zero-Tolerance Pledge
                      </Heading>
                      <VStack
                        align="start"
                        gap={2}
                        fontSize="sm"
                        color="red.700"
                      >
                        <Text>I pledge to:</Text>
                        <Box as="ul" listStyleType="disc" pl={4} spaceY={1}>
                          <li>
                            Provide truthful information in all interactions
                          </li>
                          <li>
                            Never solicit money or financial assistance from
                            other members
                          </li>
                          <li>
                            Respect the emotional wellbeing of all community
                            members
                          </li>
                          <li>
                            Report any suspicious activity or fraud attempts
                          </li>
                          <li>
                            Accept immediate account termination if I violate
                            these terms
                          </li>
                        </Box>
                      </VStack>
                    </Box>

                    {/* Agreement Checkbox - FIXED */}
                    {/* Replace the Checkbox section with this */}
                    <Box mb={6}>
                      <HStack>
                        <input
                          type="checkbox"
                          name="agreeToZeroTolerance"
                          checked={formData.agreeToZeroTolerance}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              agreeToZeroTolerance: e.target.checked,
                            }))
                          }
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "4px",
                          }}
                        />
                        <Text fontSize="sm" color="gray.700" ml={2}>
                          I have read and agree to the Zero-Tolerance Pledge
                          Against Emotional Fraud and Financial Solicitation
                        </Text>
                      </HStack>
                    </Box>

                    {/* Ready to Join Section */}
                    <Box
                      bg="green.50"
                      border="1px"
                      borderColor="green.200"
                      borderRadius="lg"
                      p={6}
                    >
                      <HStack gap={3}>
                        <CheckCircle size={24} color="#2d7a4f" />
                        <Box>
                          <Heading
                            as="h4"
                            fontSize="md"
                            fontWeight="semibold"
                            color="green.800"
                          >
                            Ready to Join!
                          </Heading>
                          <Text fontSize="sm" color="green.700" mt={1}>
                            Complete your registration and start connecting with
                            verified members
                          </Text>
                        </Box>
                      </HStack>
                    </Box>
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
                    disabled={!formData.agreeToZeroTolerance}
                    _disabled={{
                      bg: "gray.300",
                      color: "gray.500",
                      cursor: "not-allowed",
                      transform: "none",
                      boxShadow: "none",
                      _hover: {
                        bg: "gray.300",
                        transform: "none",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Complete Registration
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
                {/* Commitment Illustration */}
                <Box position="relative" mb={4}>
                  {/* Shield and Hearts */}
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
                    <CheckCircle size={24} color="#2d7a4f" />
                  </Box>

                  {/* Commitment visual representation */}
                  <VStack gap={4}>
                    <HStack gap={4}>
                      {/* Shield */}
                      <Box
                        w="140px"
                        h="160px"
                        bgGradient="linear(to-b, #2d7a4f, #246139)"
                        borderRadius="20px"
                        position="relative"
                        shadow="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <CheckCircle size={48} color="white" />
                      </Box>

                      {/* Heart Connection */}
                      <Box
                        w="140px"
                        h="160px"
                        bgGradient="linear(to-b, pink.400, pink.600)"
                        borderRadius="20px"
                        position="relative"
                        shadow="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Heart size={48} color="white" fill="white" />
                      </Box>
                    </HStack>

                    {/* Connecting trust symbol */}
                    <Box mt={-8}>
                      <Box
                        w="60px"
                        h="60px"
                        bg="yellow.400"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        shadow="lg"
                      >
                        <Text fontSize="xl" fontWeight="bold" color="white">
                          ✓
                        </Text>
                      </Box>
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
                    Build Trust & Connection
                  </Heading>
                  <Text fontSize="lg" color="gray.600" maxW="md">
                    Join a community committed to authentic relationships and
                    mutual respect
                  </Text>
                </VStack>

                {/* Stats */}
                <HStack gap={8} pt={4}>
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold" color="#2d7a4f">
                      99%
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Verified Profiles
                    </Text>
                  </VStack>
                  <Box h="50px" w="1px" bg="gray.300" />
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold" color="#2d7a4f">
                      0
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Fraud Cases
                    </Text>
                  </VStack>
                </HStack>

                {/* Trust Badges */}
                <HStack gap={4} pt={4} flexWrap="wrap" justify="center">
                  <Box
                    bg="green.100"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    color="green.800"
                    fontWeight="medium"
                  >
                    🔒 Secure
                  </Box>
                  <Box
                    bg="blue.100"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    color="blue.800"
                    fontWeight="medium"
                  >
                    ✓ Verified
                  </Box>
                  <Box
                    bg="purple.100"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    color="purple.800"
                    fontWeight="medium"
                  >
                    ❤️ Authentic
                  </Box>
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

export default RelationshipIntegrity;

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "framer-motion";
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
  useBreakpointValue,
  Field,
  Portal,
  Input,
} from "@chakra-ui/react";

import { Heart, X, Shield } from "lucide-react";

const MeetHome = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [interestedIn, setInterestedIn] = useState<string>("");
  const [ageFrom, setAgeFrom] = useState<string>("");
  const [ageTo, setAgeTo] = useState<string>("");
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const [showEmailSignup, setShowEmailSignup] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  // Responsive values
  const containerPadding = useBreakpointValue({
    base: 4,
    sm: 6,
    md: 8,
    lg: 12,
  });

  const sectionPaddingY = useBreakpointValue({
    base: 8,
    sm: 12,
    md: 16,
    lg: 20,
  });

  const headingSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "4xl",
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleNext = () => {
    if (interestedIn && ageFrom && ageTo) {
      setShowSignUpModal(true);
    }
  };

  const handleAgeFromChange = (value: string) => {
    const numValue = Number(value);
    if (value === "" || (numValue >= 18 && numValue <= 100)) {
      setAgeFrom(value);
      if (ageTo && numValue > Number(ageTo)) {
        setAgeTo("");
      }
    }
  };

  const handleAgeToChange = (value: string) => {
    const numValue = Number(value);
    if (value === "" || (numValue >= 18 && numValue <= 100)) {
      setAgeTo(value);
    }
  };

  const handleEmailSignup = () => {
    setShowSignUpModal(false);
    setShowEmailSignup(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === "signup") {
        navigate("/bioslocation");
      } else {
        // Handle login
        navigate("/dashboard");
      }
    }, 1500);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isAgeRangeValid = ageFrom && ageTo && Number(ageTo) >= Number(ageFrom);
  const isFormValid = interestedIn && ageFrom && ageTo && isAgeRangeValid;

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
      {/* Background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, blue.500/10, white, pink.500/10)"
      />

      <Container
        maxW="7xl"
        position="relative"
        zIndex={10}
        px={containerPadding}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={8}
          alignItems="center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          {/* Left Section - Form */}
          <GridItem>
            <Box
              bg="white"
              backdropBlur="sm"
              borderRadius="3xl"
              p={{ base: 6, lg: 12 }}
              shadow="xl"
            >
              <HStack gap={2} mb={12}>
                <Heart size={32} color="#2d7a4f" fill="#2d7a4f" />
                <Text fontSize="3xl" fontWeight="bold" color="gray.900">
                  Naija Connect
                </Text>
              </HStack>

              <VStack gap={8} align="stretch">
                <Box>
                  <Heading
                    as="h1"
                    fontSize={headingSize}
                    fontWeight="bold"
                    color="gray.900"
                    mb={2}
                  >
                    Find your Nigerian Love, Anywhere in the World
                  </Heading>
                </Box>

                {/* Gender Selection */}
                <Box>
                  <HStack gap={4} flexWrap="wrap">
                    <Button
                      variant={interestedIn === "men" ? "solid" : "outline"}
                      size="lg"
                      flex="1"
                      minW="120px"
                      borderRadius="full"
                      onClick={() => setInterestedIn("men")}
                      bg={interestedIn === "men" ? "#2d7a4f" : undefined}
                      color={interestedIn === "men" ? "white" : undefined}
                      _hover={{
                        bg: interestedIn === "men" ? "#246139" : "gray.100",
                      }}
                    >
                      Men
                    </Button>
                    <Button
                      variant={interestedIn === "women" ? "solid" : "outline"}
                      size="lg"
                      flex="1"
                      minW="120px"
                      borderRadius="full"
                      onClick={() => setInterestedIn("women")}
                      bg={interestedIn === "women" ? "#2d7a4f" : undefined}
                      color={interestedIn === "women" ? "white" : undefined}
                      _hover={{
                        bg: interestedIn === "women" ? "#246139" : "gray.100",
                      }}
                    >
                      Women
                    </Button>
                    <Button
                      variant={interestedIn === "both" ? "solid" : "outline"}
                      size="lg"
                      flex="1"
                      minW="120px"
                      borderRadius="full"
                      onClick={() => setInterestedIn("both")}
                      bg={interestedIn === "both" ? "#2d7a4f" : undefined}
                      color={interestedIn === "both" ? "white" : undefined}
                      _hover={{
                        bg: interestedIn === "both" ? "#246139" : "gray.100",
                      }}
                    >
                      Both
                    </Button>
                  </HStack>
                </Box>

                {/* Age Range Selection - Responsive */}
                <Box>
                  <Field.Root>
                    <Field.Label
                      fontSize="lg"
                      fontWeight="medium"
                      color="gray.900"
                      mb={4}
                    >
                      Between ages:
                    </Field.Label>

                    {/* Mobile: Stack vertically */}
                    {isMobile ? (
                      <VStack gap={3} align="stretch">
                        <Box>
                          <Text fontSize="sm" color="gray.600" mb={2}>
                            From age:
                          </Text>
                          <Input
                            type="number"
                            min={18}
                            max={100}
                            value={ageFrom}
                            onChange={(e) =>
                              handleAgeFromChange(e.target.value)
                            }
                            placeholder="18"
                            size="lg"
                            borderRadius="lg"
                            borderColor="gray.200"
                            _focus={{
                              borderColor: "#2d7a4f",
                              boxShadow: "0 0 0 1px #2d7a4f",
                            }}
                            css={{
                              "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":
                                {
                                  opacity: 1,
                                  height: "40px",
                                },
                              "-moz-appearance": "textfield",
                            }}
                          />
                        </Box>

                        <Box>
                          <Text fontSize="sm" color="gray.600" mb={2}>
                            To age:
                          </Text>
                          <Input
                            type="number"
                            min={18}
                            max={100}
                            value={ageTo}
                            onChange={(e) => handleAgeToChange(e.target.value)}
                            placeholder="25"
                            size="lg"
                            borderRadius="lg"
                            borderColor="gray.200"
                            _focus={{
                              borderColor: "#2d7a4f",
                              boxShadow: "0 0 0 1px #2d7a4f",
                            }}
                            css={{
                              "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":
                                {
                                  opacity: 1,
                                  height: "40px",
                                },
                              "-moz-appearance": "textfield",
                            }}
                          />
                        </Box>
                      </VStack>
                    ) : (
                      /* Desktop: Horizontal layout */
                      <HStack gap={4} alignItems="center">
                        <Box flex="1">
                          <Input
                            type="number"
                            min={18}
                            max={100}
                            value={ageFrom}
                            onChange={(e) =>
                              handleAgeFromChange(e.target.value)
                            }
                            placeholder="18"
                            size="lg"
                            borderRadius="lg"
                            borderColor="gray.200"
                            _focus={{
                              borderColor: "#2d7a4f",
                              boxShadow: "0 0 0 1px #2d7a4f",
                            }}
                            css={{
                              "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":
                                {
                                  opacity: 1,
                                  height: "40px",
                                },
                              "-moz-appearance": "textfield",
                            }}
                          />
                        </Box>

                        <Text
                          color="gray.500"
                          fontSize="lg"
                          fontWeight="medium"
                        >
                          To
                        </Text>

                        <Box flex="1">
                          <Input
                            type="number"
                            min={18}
                            max={100}
                            value={ageTo}
                            onChange={(e) => handleAgeToChange(e.target.value)}
                            placeholder="25"
                            size="lg"
                            borderRadius="lg"
                            borderColor="gray.200"
                            _focus={{
                              borderColor: "#2d7a4f",
                              boxShadow: "0 0 0 1px #2d7a4f",
                            }}
                            css={{
                              "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":
                                {
                                  opacity: 1,
                                  height: "40px",
                                },
                              "-moz-appearance": "textfield",
                            }}
                          />
                        </Box>
                      </HStack>
                    )}

                    {ageFrom && ageTo && Number(ageTo) < Number(ageFrom) && (
                      <Text mt={2} fontSize="sm" color="red.500">
                        "To" age must be greater than or equal to "From" age.
                      </Text>
                    )}
                  </Field.Root>
                </Box>

                <Button
                  onClick={handleNext}
                  disabled={!isFormValid}
                  size="lg"
                  height="56px"
                  fontSize="lg"
                  borderRadius="xl"
                  bg="#FF5722"
                  color="white"
                  _hover={{
                    bg: "#FF5722",
                    opacity: 0.9,
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.3s ease"
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
                  Next
                </Button>
              </VStack>
            </Box>
          </GridItem>

          {/* Right Section - Visual (Now visible on all screens) */}
          <GridItem>
            <Box position="relative">
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-br, blue.500/20, pink.500/20)"
                borderRadius="3xl"
                blur="3xl"
              />
              <Box
                position="relative"
                bgGradient="linear(to-br, blue.500/10, pink.500/10)"
                borderRadius="3xl"
                p={{ base: 6, sm: 8, md: 10, lg: 12 }}
                backdropBlur="sm"
                border="1px"
                borderColor="gray.200"
              >
                <VStack gap={{ base: 6, lg: 8 }}>
                  <HStack gap={4} justify="center" flexWrap="wrap">
                    <Box
                      w={{ base: "140px", sm: "160px", md: "192px" }}
                      h={{ base: "168px", sm: "192px", md: "224px" }}
                      bg="gray.100"
                      borderRadius="2xl"
                      shadow="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        position="absolute"
                        top={4}
                        right={4}
                        w={10}
                        h={10}
                        bg="blue.500/20"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Heart size={20} color="#2d7a4f" fill="#2d7a4f" />
                      </Box>
                      <Box textAlign="center" color="gray.500">
                        <Heart
                          size={64}
                          color="#2d7a4f"
                          opacity={0.3}
                          style={{ margin: "0 auto 8px" }}
                        />
                        <Text fontSize="sm">Verified Profile</Text>
                      </Box>
                    </Box>
                    <Box
                      w={{ base: "140px", sm: "160px", md: "192px" }}
                      h={{ base: "168px", sm: "192px", md: "224px" }}
                      bg="gray.100"
                      borderRadius="2xl"
                      shadow="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      overflow="hidden"
                      mt={{ base: 4, md: 8 }}
                    >
                      <Box
                        position="absolute"
                        top={4}
                        right={4}
                        w={10}
                        h={10}
                        bg="blue.500/20"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Heart size={20} color="#2d7a4f" fill="#2d7a4f" />
                      </Box>
                      <Box textAlign="center" color="gray.500">
                        <Heart
                          size={64}
                          color="#2d7a4f"
                          opacity={0.3}
                          style={{ margin: "0 auto 8px" }}
                        />
                        <Text fontSize="sm">Trusted Match</Text>
                      </Box>
                    </Box>
                  </HStack>
                  <Box textAlign="center">
                    <Heading
                      as="h2"
                      fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color="gray.900"
                      mb={2}
                    >
                      Safe place for finding
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
                      new connections
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <Portal>
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={1000}
            onClick={() => setShowSignUpModal(false)}
            px={4}
          >
            <Box
              bg="rgba(255, 255, 255, 0.95)"
              backdropFilter="blur(20px)"
              borderRadius="3xl"
              maxW="500px"
              w="100%"
              p={{ base: 8, md: 12 }}
              position="relative"
              onClick={(e) => e.stopPropagation()}
              shadow="2xl"
              border="1px"
              borderColor="rgba(255, 255, 255, 0.3)"
            >
              {/* Close Button */}
              <Button
                position="absolute"
                top={4}
                right={4}
                variant="ghost"
                size="sm"
                onClick={() => setShowSignUpModal(false)}
                _hover={{ bg: "gray.100" }}
              >
                <X size={24} color="#666" />
              </Button>

              {/* Modal Content */}
              <VStack gap={6} align="stretch">
                {/* Title */}
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="bold"
                  color="gray.900"
                  textAlign="center"
                  mb={4}
                >
                  Sign up
                </Heading>

                {/* Social Sign-up Buttons */}
                <Button
                  size="lg"
                  height="56px"
                  fontSize="md"
                  fontWeight="medium"
                  borderRadius="full"
                  bg="white"
                  color="gray.900"
                  border="1px"
                  borderColor="gray.300"
                  _hover={{ bg: "gray.50" }}
                  display="flex"
                  alignItems="center"
                  gap={3}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>

                <Button
                  size="lg"
                  height="56px"
                  fontSize="md"
                  fontWeight="medium"
                  borderRadius="full"
                  bg="white"
                  color="gray.900"
                  border="1px"
                  borderColor="gray.300"
                  _hover={{ bg: "gray.50" }}
                  display="flex"
                  alignItems="center"
                  gap={3}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Continue with Apple
                </Button>

                <Button
                  size="lg"
                  height="56px"
                  fontSize="md"
                  fontWeight="medium"
                  borderRadius="full"
                  bg="white"
                  color="gray.900"
                  border="1px"
                  borderColor="gray.300"
                  _hover={{ bg: "gray.50" }}
                  display="flex"
                  alignItems="center"
                  gap={3}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Continue with Facebook
                </Button>

                {/* Divider */}
                <HStack gap={4} my={2}>
                  <Box flex={1} height="1px" bg="gray.300" />
                  <Text color="gray.500" fontSize="sm">
                    or
                  </Text>
                  <Box flex={1} height="1px" bg="gray.300" />
                </HStack>

                {/* Email Sign-up Button */}
                <Button
                  size="lg"
                  height="56px"
                  fontSize="md"
                  fontWeight="semibold"
                  borderRadius="full"
                  bg="white"
                  color="gray.900"
                  border="1px"
                  borderColor="gray.300"
                  _hover={{ bg: "gray.50" }}
                  onClick={handleEmailSignup}
                >
                  Sign up with email
                </Button>

                {/* Log in Link */}
                <Text textAlign="center" color="gray.600" fontSize="md">
                  Already have an account?{" "}
                  <Text
                    as="span"
                    color="#6366F1"
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Log in
                  </Text>
                </Text>
              </VStack>
            </Box>
          </Box>
        </Portal>
      )}

      {/* Email Signup Modal */}
      {showEmailSignup && (
        <Portal>
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={1000}
            onClick={() => setShowEmailSignup(false)}
            px={4}
            overflowY="auto"
            py={8}
          >
            <Box
              bg="white"
              borderRadius="3xl"
              maxW="500px"
              w="100%"
              p={8}
              position="relative"
              onClick={(e) => e.stopPropagation()}
              shadow="2xl"
              my="auto"
            >
              {/* Close Button */}
              <Button
                position="absolute"
                top={4}
                right={4}
                variant="ghost"
                size="sm"
                onClick={() => setShowEmailSignup(false)}
                _hover={{ bg: "gray.100" }}
                zIndex={10}
              >
                <X size={24} color="#666" />
              </Button>

              {/* Header with Shield Icon */}
              <VStack mb={8} textAlign="center">
                <Box
                  w={16}
                  h={16}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  bgGradient="linear(to-br, blue.500, purple.600)"
                  shadow="lg"
                  mb={4}
                >
                  <Shield size={32} color="white" />
                </Box>
                <Heading
                  as="h1"
                  fontSize="3xl"
                  fontWeight="bold"
                  color="gray.900"
                  mb={2}
                >
                  Naija Connect
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Trust-verified connections for authentic relationships
                </Text>
              </VStack>

              {/* Tabs */}
              <Box mb={6}>
                <HStack bg="gray.100" borderRadius="lg" p={1} gap={1}>
                  <Button
                    flex={1}
                    onClick={() => setActiveTab("login")}
                    bg={activeTab === "login" ? "white" : "transparent"}
                    color={activeTab === "login" ? "gray.900" : "gray.600"}
                    shadow={activeTab === "login" ? "sm" : "none"}
                    _hover={{
                      bg: activeTab === "login" ? "white" : "gray.200",
                    }}
                    borderRadius="md"
                  >
                    Login
                  </Button>
                  <Button
                    flex={1}
                    onClick={() => setActiveTab("signup")}
                    bg={activeTab === "signup" ? "white" : "transparent"}
                    color={activeTab === "signup" ? "gray.900" : "gray.600"}
                    shadow={activeTab === "signup" ? "sm" : "none"}
                    _hover={{
                      bg: activeTab === "signup" ? "white" : "gray.200",
                    }}
                    borderRadius="md"
                  >
                    Sign Up
                  </Button>
                </HStack>
              </Box>

              {/* Login Form */}
              {activeTab === "login" && (
                <form onSubmit={handleSubmit}>
                  <VStack gap={4} align="stretch">
                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Email
                      </Text>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
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

                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Password
                      </Text>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
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

                    <Button
                      type="submit"
                      size="lg"
                      height="56px"
                      bg="#2d7a4f"
                      color="white"
                      borderRadius="lg"
                      _hover={{ bg: "#246139" }}
                      loading={isLoading}
                      loadingText="Signing in..."
                    >
                      Sign In
                    </Button>

                    <Text textAlign="center" fontSize="sm" color="gray.600">
                      Forgot password?{" "}
                      <Text
                        as="span"
                        color="#2d7a4f"
                        fontWeight="medium"
                        cursor="pointer"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Reset here
                      </Text>
                    </Text>
                  </VStack>
                </form>
              )}

              {/* Signup Form */}
              {activeTab === "signup" && (
                <form onSubmit={handleSubmit}>
                  <VStack gap={4} align="stretch">
                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Email
                      </Text>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
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

                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Phone Number
                      </Text>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
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

                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Password
                      </Text>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Create a strong password"
                        value={formData.password}
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

                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        mb={2}
                      >
                        Confirm Password
                      </Text>
                      <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
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

                    <Button
                      type="submit"
                      size="lg"
                      height="56px"
                      bg="#2d7a4f"
                      color="white"
                      borderRadius="lg"
                      _hover={{ bg: "#246139" }}
                      loading={isLoading}
                      loadingText="Creating Account..."
                    >
                      Create Account
                    </Button>

                    <Text fontSize="xs" color="gray.600" textAlign="center">
                      By signing up, you agree to our{" "}
                      <Text
                        as="span"
                        color="#2d7a4f"
                        fontWeight="medium"
                        cursor="pointer"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Zero-Tolerance Pledge
                      </Text>{" "}
                      against fraud.
                    </Text>
                  </VStack>
                </form>
              )}

              {/* Back to Home Link */}
              <Box mt={6} textAlign="center">
                <Text
                  fontSize="sm"
                  color="gray.600"
                  cursor="pointer"
                  _hover={{ color: "#2d7a4f" }}
                  onClick={() => setShowEmailSignup(false)}
                >
                  ← Back to Social Login
                </Text>
              </Box>
            </Box>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default MeetHome;

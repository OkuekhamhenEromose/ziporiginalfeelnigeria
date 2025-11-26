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
  IconButton,
} from "@chakra-ui/react";

import { Heart, X, Shield, Plus, Minus } from "lucide-react";

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

  const incrementAgeFrom = () => {
    const current = Number(ageFrom) || 18;
    if (current < 100) {
      handleAgeFromChange(String(current + 1));
    }
  };

  const decrementAgeFrom = () => {
    const current = Number(ageFrom) || 18;
    if (current > 18) {
      handleAgeFromChange(String(current - 1));
    }
  };

  const incrementAgeTo = () => {
    const current = Number(ageTo) || 18;
    if (current < 100) {
      handleAgeToChange(String(current + 1));
    }
  };

  const decrementAgeTo = () => {
    const current = Number(ageTo) || 18;
    if (current > 18) {
      handleAgeToChange(String(current - 1));
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

                    {/* Mobile: Custom buttons for better mobile experience */}
                    {isMobile ? (
                      <VStack gap={4} align="stretch">
                        {/* FROM AGE */}
                        <Box>
                          <Text fontSize="sm" color="gray.600" mb={2}>
                            From age:
                          </Text>
                          <HStack gap={2}>
                            <IconButton
                              aria-label="Decrease age"
                              onClick={decrementAgeFrom}
                              disabled={!ageFrom || Number(ageFrom) <= 18}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Minus size={16} />
                            </IconButton>
                            <Input
                              type="number"
                              value={ageFrom}
                              onChange={(e) => handleAgeFromChange(e.target.value)}
                              placeholder="18"
                              size="lg"
                              borderRadius="lg"
                              borderColor="gray.200"
                              textAlign="center"
                              _focus={{
                                borderColor: "#2d7a4f",
                                boxShadow: "0 0 0 1px #2d7a4f",
                              }}
                              min={18}
                              max={100}
                              // Enhanced CSS for mobile spinner visibility
                              css={{
                                "&::-webkit-outer-spin-button": {
                                  WebkitAppearance: "none",
                                  margin: 0,
                                },
                                "&::-webkit-inner-spin-button": {
                                  WebkitAppearance: "none",
                                  margin: 0,
                                },
                                "&[type=number]": {
                                  MozAppearance: "textfield",
                                },
                              }}
                            />
                            <IconButton
                              aria-label="Increase age"
                              onClick={incrementAgeFrom}
                              disabled={ageFrom && Number(ageFrom) >= 100}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Plus size={16} />
                            </IconButton>
                          </HStack>
                        </Box>

                        {/* TO AGE */}
                        <Box>
                          <Text fontSize="sm" color="gray.600" mb={2}>
                            To age:
                          </Text>
                          <HStack gap={2}>
                            <IconButton
                              aria-label="Decrease age"
                              onClick={decrementAgeTo}
                              disabled={!ageTo || Number(ageTo) <= 18}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Minus size={16} />
                            </IconButton>
                            <Input
                              type="number"
                              value={ageTo}
                              onChange={(e) => handleAgeToChange(e.target.value)}
                              placeholder="25"
                              size="lg"
                              borderRadius="lg"
                              borderColor="gray.200"
                              textAlign="center"
                              _focus={{
                                borderColor: "#2d7a4f",
                                boxShadow: "0 0 0 1px #2d7a4f",
                              }}
                              min={18}
                              max={100}
                              // Enhanced CSS for mobile spinner visibility
                              css={{
                                "&::-webkit-outer-spin-button": {
                                  WebkitAppearance: "none",
                                  margin: 0,
                                },
                                "&::-webkit-inner-spin-button": {
                                  WebkitAppearance: "none",
                                  margin: 0,
                                },
                                "&[type=number]": {
                                  MozAppearance: "textfield",
                                },
                              }}
                            />
                            <IconButton
                              aria-label="Increase age"
                              onClick={incrementAgeTo}
                              disabled={ageTo && Number(ageTo) >= 100}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Plus size={16} />
                            </IconButton>
                          </HStack>
                        </Box>
                      </VStack>
                    ) : (
                      /* Desktop: Horizontal layout with custom buttons */
                      <HStack gap={4} alignItems="center">
                        <Box flex="1">
                          <HStack gap={2}>
                            <IconButton
                              aria-label="Decrease age"
                              onClick={decrementAgeFrom}
                              disabled={!ageFrom || Number(ageFrom) <= 18}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Minus size={16} />
                            </IconButton>
                            <Input
                              type="number"
                              value={ageFrom}
                              onChange={(e) => handleAgeFromChange(e.target.value)}
                              placeholder="18"
                              size="lg"
                              borderRadius="lg"
                              borderColor="gray.200"
                              textAlign="center"
                              _focus={{
                                borderColor: "#2d7a4f",
                                boxShadow: "0 0 0 1px #2d7a4f",
                              }}
                              min={18}
                              max={100}
                              // Show native spinners on desktop
                              css={{
                                "&::-webkit-outer-spin-button": {
                                  WebkitAppearance: "auto",
                                  opacity: 1,
                                },
                                "&::-webkit-inner-spin-button": {
                                  WebkitAppearance: "auto",
                                  opacity: 1,
                                },
                              }}
                            />
                            <IconButton
                              aria-label="Increase age"
                              onClick={incrementAgeFrom}
                              disabled={ageFrom && Number(ageFrom) >= 100}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Plus size={16} />
                            </IconButton>
                          </HStack>
                        </Box>

                        <Text
                          color="gray.500"
                          fontSize="lg"
                          fontWeight="medium"
                          flexShrink={0}
                        >
                          To
                        </Text>

                        <Box flex="1">
                          <HStack gap={2}>
                            <IconButton
                              aria-label="Decrease age"
                              onClick={decrementAgeTo}
                              disabled={!ageTo || Number(ageTo) <= 18}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Minus size={16} />
                            </IconButton>
                            <Input
                              type="number"
                              value={ageTo}
                              onChange={(e) => handleAgeToChange(e.target.value)}
                              placeholder="25"
                              size="lg"
                              borderRadius="lg"
                              borderColor="gray.200"
                              textAlign="center"
                              _focus={{
                                borderColor: "#2d7a4f",
                                boxShadow: "0 0 0 1px #2d7a4f",
                              }}
                              min={18}
                              max={100}
                              // Show native spinners on desktop
                              css={{
                                "&::-webkit-outer-spin-button": {
                                  WebkitAppearance: "auto",
                                  opacity: 1,
                                },
                                "&::-webkit-inner-spin-button": {
                                  WebkitAppearance: "auto",
                                  opacity: 1,
                                },
                              }}
                            />
                            <IconButton
                              aria-label="Increase age"
                              onClick={incrementAgeTo}
                              disabled={ageTo && Number(ageTo) >= 100}
                              size="lg"
                              borderRadius="lg"
                              variant="outline"
                              flexShrink={0}
                            >
                              <Plus size={16} />
                            </IconButton>
                          </HStack>
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

      
    </Box>
  );
};

export default MeetHome;
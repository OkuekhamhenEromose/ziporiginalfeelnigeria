// components/ZipCashFunding/BvnCheck.tsx
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, ArrowLeft, Shield } from "lucide-react";

const BvnCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasBvn, setHasBvn] = useState<boolean | null>(null);
  const [accountNumber, setAccountNumber] = useState("");

  const steps = [
    { title: "Start", description: "Application" },
    { title: "Account", description: "Verification" },
    { title: "BVN Check", description: "Verification" },
    { title: "Card Request", description: "Processing" },
    { title: "Complete", description: "Success" },
  ];

  const activeStep = 2; // Manual step tracking

  useEffect(() => {
    if (location.state?.accountNumber) {
      setAccountNumber(location.state.accountNumber);
    }
  }, [location.state]);

  const handleBvnResponse = (response: boolean) => {
    setHasBvn(response);
    if (response) {
      // User has BVN, proceed to card request
      navigate("/card-request", { 
        state: { 
          accountNumber,
          hasBvn: true 
        } 
      });
    }
  };

  // Custom Stepper Component
  const CustomStepper = () => (
    <Box mb={12}>
      <VStack gap={4}>
        {/* Step Labels */}
        <HStack justify="space-between" w="100%">
          {steps.map((step, index) => (
            <Box key={index} textAlign="center" flex={1}>
              <Text
                fontSize="sm"
                fontWeight={index === activeStep ? "bold" : "normal"}
                color={index === activeStep ? "#2d7a4f" : "gray.500"}
              >
                {step.title}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {step.description}
              </Text>
            </Box>
          ))}
        </HStack>
        
        {/* Progress Line */}
        <Box w="100%" position="relative" h="2px" bg="gray.200">
          <Box
            position="absolute"
            left="0"
            top="0"
            h="100%"
            bg="#2d7a4f"
            style={{
              width: `${((activeStep + 1) / steps.length) * 100}%`,
              transition: "width 0.3s ease"
            }}
          />
        </Box>
        
        {/* Step Indicators */}
        <HStack justify="space-between" w="100%" position="relative">
          {steps.map((_, index) => (
            <Box
              key={index}
              w="8"
              h="8"
              borderRadius="full"
              bg={index <= activeStep ? "#2d7a4f" : "gray.200"}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
              fontWeight="bold"
              zIndex={1}
            >
              {index + 1}
            </Box>
          ))}
        </HStack>
      </VStack>
    </Box>
  );

  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="4xl" px={4}>
        {/* Custom Stepper */}
        <CustomStepper />

        {/* Back Button */}
        <Button
          variant="ghost"
          colorPalette="green"
          mb={6}
          onClick={() => navigate("/account-number-entry")}
        >
          <ArrowLeft size={20} style={{ marginRight: 8 }} />
          Back
        </Button>

        {/* BVN Check Card */}
        <Box 
          bg="white" 
          boxShadow="xl" 
          borderRadius="2xl"
          border="1px"
          borderColor="gray.200"
          maxW="2xl"
          mx="auto"
          w="100%"
        >
          {/* Card Header */}
          <Box textAlign="center" p={8} borderBottom="1px" borderColor="gray.200">
            <Box
              w={16}
              h={16}
              borderRadius="full"
              bg="blue.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <Shield size={32} color="#3182CE" />
            </Box>
            <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
              BVN Verification
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Bank Verification Number Check
            </Text>
          </Box>

          {/* Card Body */}
          <Box p={8}>
            <VStack gap={6} align="stretch">
              {/* Information Box */}
              <Box
                p={4}
                borderRadius="lg"
                bg="blue.50"
                border="1px"
                borderColor="blue.200"
              >
                <Heading as="h3" size="sm" color="blue.800" mb={2}>
                  Information
                </Heading>
                <Text fontSize="sm" color="blue.700">
                  Your BVN is required for identity verification and card issuance as per regulatory requirements.
                </Text>
              </Box>

              {/* BVN Question */}
              <Box>
                <Heading as="h3" size="md" color="#2b2e32" mb={2}>
                  Do you have a BVN?
                </Heading>
                <Text color="gray.600" mb={6} fontSize="sm">
                  Bank Verification Number is mandatory for card issuance
                </Text>
                <HStack gap={4}>
                  <Button
                    variant={hasBvn === true ? "solid" : "outline"}
                    bg={hasBvn === true ? "#2d7a4f" : "transparent"}
                    color={hasBvn === true ? "white" : "#2d7a4f"}
                    borderColor="#2d7a4f"
                    _hover={{
                      bg: hasBvn === true ? "#246139" : "gray.50",
                    }}
                    onClick={() => handleBvnResponse(true)}
                    flex={1}
                    h="52px"
                    fontSize="lg"
                  >
                    Yes, I have BVN
                  </Button>
                  <Button
                    variant={hasBvn === false ? "solid" : "outline"}
                    bg={hasBvn === false ? "#2d7a4f" : "transparent"}
                    color={hasBvn === false ? "white" : "#2d7a4f"}
                    borderColor="#2d7a4f"
                    _hover={{
                      bg: hasBvn === false ? "#246139" : "gray.50",
                    }}
                    onClick={() => handleBvnResponse(false)}
                    flex={1}
                    h="52px"
                    fontSize="lg"
                  >
                    No, I don't have BVN
                  </Button>
                </HStack>

                {hasBvn === false && (
                  <Box 
                    p={4} 
                    mt={4} 
                    borderRadius="lg" 
                    bg="orange.50" 
                    border="1px" 
                    borderColor="orange.200"
                  >
                    <Text color="orange.800" mb={3} fontSize="sm">
                      You need a BVN to proceed. You'll be redirected to NIBBN portal to register for
                      your Bank Verification Number.
                    </Text>
                    <HStack gap={3}>
                      <Button
                        variant="outline"
                        size="sm"
                        borderColor="orange.400"
                        color="orange.600"
                        _hover={{ bg: "orange.100" }}
                        onClick={() => window.open("https://nibss-plc.com.ng/bvn/", "_blank")}
                      >
                        Register BVN
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        color="orange.600"
                        onClick={() => setHasBvn(null)}
                      >
                        Cancel
                      </Button>
                    </HStack>
                  </Box>
                )}
              </Box>

              <HStack pt={4} borderTop="1px" borderColor="gray.200">
                <Button
                  variant="outline"
                  colorPalette="gray"
                  flex={1}
                  h="52px"
                  onClick={() => navigate("/account-number-entry")}
                >
                  <ArrowLeft size={20} style={{ marginRight: 8 }} />
                  Back
                </Button>
                <Button
                  bg="#2d7a4f"
                  color="white"
                  flex={1}
                  h="52px"
                  fontSize="lg"
                  _hover={{ bg: "#246139" }}
                  onClick={() => handleBvnResponse(true)}
                  disabled={hasBvn === false}
                >
                  Continue
                  <ArrowRight size={20} style={{ marginLeft: 8 }} />
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BvnCheck;
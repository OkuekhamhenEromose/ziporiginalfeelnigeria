// components/ZipCashFunding/CardRequest.tsx
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, ArrowLeft, CreditCard } from "lucide-react";

const CardRequest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [accountNumber, setAccountNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    { title: "Start", description: "Application" },
    { title: "Account", description: "Verification" },
    { title: "BVN Check", description: "Verification" },
    { title: "Card Request", description: "Processing" },
    { title: "Complete", description: "Success" },
  ];

  const activeStep = 3; // Manual step tracking

  useEffect(() => {
    if (location.state?.accountNumber) {
      setAccountNumber(location.state.accountNumber);
    }
  }, [location.state]);

  const handleCardRequest = async () => {
    setIsProcessing(true);
    
    // Simulate processing with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate to success page after completion
          setTimeout(() => {
            navigate("/card-application-success", { 
              state: { 
                accountNumber,
                phoneNumber 
              } 
            });
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
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

  // Custom Progress Bar
  const CustomProgress = () => (
    <Box w="100%" h="12px" bg="gray.200" borderRadius="full" overflow="hidden">
      <Box
        h="full"
        bg="#2d7a4f"
        borderRadius="full"
        transition="width 0.3s ease"
        style={{ width: `${progress}%` }}
      />
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
          onClick={() => navigate("/bvn-check")}
        >
          <ArrowLeft size={20} style={{ marginRight: 8 }} />
          Back
        </Button>

        {/* Card Request */}
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
              bg="green.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <CreditCard size={32} color="#2d7a4f" />
            </Box>
            <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
              Request Your Card
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Final step to get your FeelNigeria Card
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
                  We're almost done! Confirm your details and request your card.
                </Text>
              </Box>

              {!isProcessing ? (
                <VStack gap={6}>
                  {/* Account Info */}
                  <Box w="100%">
                    <Text fontWeight="semibold" color="#2b2e32" mb={2}>
                      Account Information
                    </Text>
                    <Box 
                      p={4} 
                      borderRadius="lg" 
                      bg="gray.50" 
                      border="1px" 
                      borderColor="gray.200"
                    >
                      <Text color="gray.700">
                        <strong>Account Number:</strong> {accountNumber}
                      </Text>
                    </Box>
                  </Box>

                  {/* Phone Number */}
                  <Box w="100%">
                    <Text fontWeight="semibold" color="#2b2e32" mb={2}>
                      Phone Number for Notifications
                    </Text>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      size="lg"
                    />
                    <Text fontSize="sm" color="gray.500" mt={2}>
                      We'll send card pickup details to this number
                    </Text>
                  </Box>

                  <HStack gap={4} w="100%" pt={4}>
                    <Button
                      variant="outline"
                      colorPalette="gray"
                      flex={1}
                      h="52px"
                      onClick={() => navigate("/bvn-check")}
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
                      onClick={handleCardRequest}
                      disabled={!phoneNumber.trim()}
                    >
                      Request Card
                      <ArrowRight size={20} style={{ marginLeft: 8 }} />
                    </Button>
                  </HStack>
                </VStack>
              ) : (
                <VStack gap={6}>
                  {/* Processing State */}
                  <Box w="100%">
                    <Text fontWeight="semibold" color="#2b2e32" mb={4} textAlign="center">
                      Processing Your Card Request...
                    </Text>
                    <CustomProgress />
                    <Text fontSize="sm" color="gray.600" textAlign="center" mt={4}>
                      {progress < 30 && "Verifying account details..."}
                      {progress >= 30 && progress < 60 && "Processing card issuance..."}
                      {progress >= 60 && progress < 90 && "Generating pickup token..."}
                      {progress >= 90 && "Finalizing your request..."}
                    </Text>
                  </Box>
                </VStack>
              )}
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CardRequest;
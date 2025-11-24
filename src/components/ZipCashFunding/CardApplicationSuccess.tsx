// components/ZipCashFunding/CardApplicationSuccess.tsx
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Code,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle, Download, Home } from "lucide-react";

const CardApplicationSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [accountNumber, setAccountNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickupToken, setPickupToken] = useState("");

  const steps = [
    { title: "Start", description: "Application" },
    { title: "Account", description: "Verification" },
    { title: "BVN Check", description: "Verification" },
    { title: "Card Request", description: "Processing" },
    { title: "Complete", description: "Success" },
  ];

  const activeStep = 4; // Manual step tracking

  useEffect(() => {
    if (location.state?.accountNumber) {
      setAccountNumber(location.state.accountNumber);
    }
    if (location.state?.phoneNumber) {
      setPhoneNumber(location.state.phoneNumber);
    }
    // Generate random pickup token
    setPickupToken(`FN-${Math.random().toString(36).substr(2, 8).toUpperCase()}`);
  }, [location.state]);

  const handleDownloadToken = () => {
    const tokenContent = `FeelNigeria Card Pickup Token\n\nToken: ${pickupToken}\nAccount: ${accountNumber}\nPhone: ${phoneNumber}\n\nPlease present this token at any PremiumTrust branch to collect your card.`;
    
    const blob = new Blob([tokenContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feel-nigeria-token-${pickupToken}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

        {/* Success Card */}
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
              w={20}
              h={20}
              borderRadius="full"
              bg="green.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <CheckCircle size={40} color="#2d7a4f" />
            </Box>
            <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
              Application Successful!
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Your FeelNigeria Card is being processed
            </Text>
          </Box>

          {/* Card Body */}
          <Box p={8}>
            <VStack gap={6} align="stretch">
              {/* Success Box */}
              <Box
                p={4}
                borderRadius="lg"
                bg="green.50"
                border="1px"
                borderColor="green.200"
              >
                <Heading as="h3" size="sm" color="green.800" mb={2}>
                  Success
                </Heading>
                <Text fontSize="sm" color="green.700">
                  Your card application has been submitted successfully. Your account has been debited and pickup token generated.
                </Text>
              </Box>

              {/* Pickup Token */}
              <Box textAlign="center">
                <Text fontWeight="semibold" color="#2b2e32" mb={2}>
                  Your Pickup Token
                </Text>
                <Code 
                  p={4} 
                  fontSize="xl" 
                  fontWeight="bold" 
                  colorScheme="green"
                  borderRadius="lg"
                >
                  {pickupToken}
                </Code>
                <Text fontSize="sm" color="gray.600" mt={2}>
                  Present this token at any PremiumTrust branch to collect your card
                </Text>
              </Box>

              {/* Account Details */}
              <Box 
                p={4} 
                borderRadius="lg" 
                bg="gray.50" 
                border="1px" 
                borderColor="gray.200"
              >
                <VStack gap={2} align="stretch">
                  <HStack justify="space-between">
                    <Text fontWeight="semibold">Account Number:</Text>
                    <Text>{accountNumber}</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontWeight="semibold">Phone Number:</Text>
                    <Text>{phoneNumber}</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontWeight="semibold">Status:</Text>
                    <Text color="green.600">Ready for Pickup</Text>
                  </HStack>
                </VStack>
              </Box>

              {/* Next Steps */}
              <Box>
                <Heading as="h3" size="sm" color="#2b2e32" mb={3}>
                  Next Steps:
                </Heading>
                <VStack gap={2} align="start">
                  <HStack>
                    <Box w={2} h={2} borderRadius="full" bg="green.500" />
                    <Text fontSize="sm">Pickup token has been sent to your email</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} borderRadius="full" bg="green.500" />
                    <Text fontSize="sm">Visit any PremiumTrust branch with your token</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} borderRadius="full" bg="green.500" />
                    <Text fontSize="sm">Present valid ID for verification</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} borderRadius="full" bg="green.500" />
                    <Text fontSize="sm">Collect your FeelNigeria Card</Text>
                  </HStack>
                </VStack>
              </Box>

              {/* Action Buttons */}
              <HStack gap={4} pt={4}>
                <Button
                  variant="outline"
                  colorPalette="gray"
                  flex={1}
                  h="52px"
                  onClick={() => navigate("/zipcash")}
                >
                  <Home size={20} style={{ marginRight: 8 }} />
                  Home
                </Button>
                <Button
                  bg="#2d7a4f"
                  color="white"
                  flex={1}
                  h="52px"
                  fontSize="lg"
                  _hover={{ bg: "#246139" }}
                  onClick={handleDownloadToken}
                >
                  <Download size={20} style={{ marginRight: 8 }} />
                  Download Token
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CardApplicationSuccess;
// components/ZipCashFunding/CardApplication.tsx
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, CreditCard, User } from "lucide-react";

const CardApplication = () => {
  const navigate = useNavigate();
  const [hasPremiumAccount, setHasPremiumAccount] = useState<boolean | null>(null);

  const steps = [
    { title: "Start", description: "Application" },
    { title: "Account", description: "Verification" },
    { title: "BVN Check", description: "Verification" },
    { title: "Card Request", description: "Processing" },
    { title: "Complete", description: "Success" },
  ];

  const activeStep = 0; // Manual step tracking

  const handlePremiumAccountResponse = (response: boolean) => {
    setHasPremiumAccount(response);
    if (response) {
      // User has PremiumTrust account, proceed to account number entry
      navigate("/account-number-entry");
    } else {
      // User doesn't have account, redirect to NIBBN
      window.open("https://nibss-plc.com.ng/", "_blank");
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

        {/* Application Card */}
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
              Card Application
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Welcome to FeelNigeria Card application
            </Text>
          </Box>

          {/* Card Body */}
          <Box p={8}>
            <VStack gap={8} align="stretch">
              {/* Welcome Message */}
              <Box textAlign="center">
                <Heading as="h2" size="md" color="#2b2e32" mb={3}>
                  Start Your Application
                </Heading>
                <Text color="gray.600">
                  To apply for your FeelNigeria Card, we need to verify your PremiumTrust account details.
                </Text>
              </Box>

              {/* Premium Trust Account Question */}
              <Box>
                <Heading as="h3" size="md" color="#2b2e32" mb={2}>
                  Do you have a PremiumTrust Account?
                </Heading>
                <Text color="gray.600" mb={6} fontSize="sm">
                  A PremiumTrust bank account is required to link with your FeelNigeria Card
                </Text>
                <HStack gap={4}>
                  <Button
                    variant={hasPremiumAccount === true ? "solid" : "outline"}
                    bg={hasPremiumAccount === true ? "#2d7a4f" : "transparent"}
                    color={hasPremiumAccount === true ? "white" : "#2d7a4f"}
                    borderColor="#2d7a4f"
                    _hover={{
                      bg: hasPremiumAccount === true ? "#246139" : "gray.50",
                    }}
                    onClick={() => handlePremiumAccountResponse(true)}
                    flex={1}
                    h="52px"
                    fontSize="lg"
                  >
                    <CheckCircle size={20} style={{ marginRight: 8 }} />
                    Yes, I have an account
                  </Button>
                  <Button
                    variant={hasPremiumAccount === false ? "solid" : "outline"}
                    bg={hasPremiumAccount === false ? "#2d7a4f" : "transparent"}
                    color={hasPremiumAccount === false ? "white" : "#2d7a4f"}
                    borderColor="#2d7a4f"
                    _hover={{
                      bg: hasPremiumAccount === false ? "#246139" : "gray.50",
                    }}
                    onClick={() => handlePremiumAccountResponse(false)}
                    flex={1}
                    h="52px"
                    fontSize="lg"
                  >
                    <User size={20} style={{ marginRight: 8 }} />
                    No, create account
                  </Button>
                </HStack>

                {hasPremiumAccount === false && (
                  <Box 
                    p={4} 
                    mt={4} 
                    borderRadius="lg" 
                    bg="blue.50" 
                    border="1px" 
                    borderColor="blue.200"
                  >
                    <Text color="blue.800" mb={3} fontSize="sm">
                      You'll be redirected to NIBBN portal to create your PremiumTrust account. 
                      Once your account is created, return here to continue your card application.
                    </Text>
                    <Button
                      variant="outline"
                      size="sm"
                      borderColor="blue.400"
                      color="blue.600"
                      _hover={{ bg: "blue.100" }}
                      onClick={() => window.open("https://nibss-plc.com.ng/", "_blank")}
                    >
                      Open NIBBN Portal
                    </Button>
                  </Box>
                )}
              </Box>

              {/* Additional Info */}
              <Box 
                p={4} 
                borderRadius="lg" 
                bg="gray.50" 
                border="1px" 
                borderColor="gray.200"
              >
                <Text color="gray.600" fontSize="sm" textAlign="center">
                  <strong>Note:</strong> You'll need your BVN and PremiumTrust account number to complete the application.
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CardApplication;
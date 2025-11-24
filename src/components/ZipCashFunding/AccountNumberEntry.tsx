// components/ZipCashFunding/AccountNumberEntry.tsx
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CreditCard, ArrowLeft } from "lucide-react";

const AccountNumberEntry = () => {
  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    { title: "Start", description: "Application" },
    { title: "Account", description: "Verification" },
    { title: "BVN Check", description: "Verification" },
    { title: "Card Request", description: "Processing" },
    { title: "Complete", description: "Success" },
  ];

  const activeStep = 1; // Manual step tracking

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber.trim() || accountNumber.length < 10) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to verify account
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to BVN check with account number
      navigate("/bvn-check", { state: { accountNumber } });
    }, 1500);
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
          onClick={() => navigate("/card-application")}
        >
          <ArrowLeft size={20} style={{ marginRight: 8 }} />
          Back
        </Button>

        {/* Account Entry Card */}
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
              Enter Account Number
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Please provide your PremiumTrust account number
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
                  We need your PremiumTrust account number to verify your eligibility and link your card.
                </Text>
              </Box>

              <form onSubmit={handleSubmit}>
                <VStack gap={6}>
                  <Box w="100%">
                    <Text fontWeight="semibold" color="#2b2e32" mb={2}>
                      PremiumTrust Account Number
                    </Text>
                    <Input
                      type="text"
                      placeholder="Enter your 10-digit account number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))}
                      size="lg"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      required
                    />
                    <Text fontSize="sm" color="gray.500" mt={2}>
                      Enter your 10-digit PremiumTrust account number
                    </Text>
                  </Box>

                  <HStack gap={4} w="100%" pt={4}>
                    <Button
                      type="button"
                      variant="outline"
                      colorPalette="gray"
                      flex={1}
                      h="52px"
                      onClick={() => navigate("/card-application")}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      bg="#2d7a4f"
                      color="white"
                      flex={1}
                      h="52px"
                      fontSize="lg"
                      _hover={{ bg: "#246139" }}
                      loading={isLoading}
                      loadingText="Verifying..."
                      disabled={!accountNumber.trim() || accountNumber.length < 10}
                    >
                      Continue
                      <ArrowRight size={20} style={{ marginLeft: 8 }} />
                    </Button>
                  </HStack>
                </VStack>
              </form>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AccountNumberEntry;
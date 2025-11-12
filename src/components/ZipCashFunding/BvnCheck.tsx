// components/ZipCashFunding/BvnCheck.tsx
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

const BvnCheck = () => {
  const navigate = useNavigate();
  const [hasBvn, setHasBvn] = useState<boolean | null>(null);
  const [hasPremiumAccount, setHasPremiumAccount] = useState<boolean | null>(null);

  const showToast = (title: string, description: string) => {
    // Simple toast simulation
    console.log(`INFO: ${title} - ${description}`);
  };

  const handleBvnResponse = (response: boolean) => {
    setHasBvn(response);
    if (!response) {
      showToast("BVN Required", "You need a BVN to proceed with card application");
    }
  };

  const handlePremiumAccountResponse = (response: boolean) => {
    setHasPremiumAccount(response);
    if (!response) {
      showToast("PremiumTrust Account Required", "You need a PremiumTrust account to continue");
    } else {
      // User has both BVN and Premium Trust account, proceed to account setup
      navigate("/account-setup");
    }
  };

  return (
    <Box minH="100vh" bg="white">
      <Container maxW="2xl" px={4} py={12}>
        <Box 
          bg="white" 
          boxShadow="xl" 
          borderRadius="xl"
          border="1px"
          borderColor="gray.200"
        >
          {/* Card Header */}
          <Box textAlign="center" p={6} borderBottom="1px" borderColor="gray.200">
            <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
              Card Application
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Let's verify your eligibility for a FeelNigeria Card
            </Text>
          </Box>

          {/* Card Body */}
          <Box p={6}>
            <VStack gap={6} align="stretch">
              {/* BVN Question */}
              <Box>
                <Heading as="h3" size="md" color="#2b2e32" mb={2}>
                  Do you have a BVN?
                </Heading>
                <Text color="gray.600" mb={4} fontSize="sm">
                  Bank Verification Number is required for card issuance
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
                    h="48px"
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
                    h="48px"
                  >
                    No, I don't have BVN
                  </Button>
                </HStack>

                {hasBvn === false && (
                  <Box 
                    p={4} 
                    mt={4} 
                    borderRadius="md" 
                    bg="orange.50" 
                    border="1px" 
                    borderColor="orange.200"
                  >
                    <Text color="orange.800" mb={3}>
                      You need a BVN to proceed. You'll be redirected to NIBBN portal to register for
                      BVN and a PremiumTrust bank account.
                    </Text>
                    <Button
                      variant="outline"
                      size="sm"
                      borderColor="orange.400"
                      color="orange.600"
                      _hover={{ bg: "orange.100" }}
                      onClick={() => window.open("https://nibss-plc.com.ng/bvn/", "_blank")}
                    >
                      Go to NIBBN Portal
                    </Button>
                  </Box>
                )}
              </Box>

              {/* Premium Trust Account Question */}
              {hasBvn === true && (
                <Box pt={4} borderTop="1px" borderColor="gray.200">
                  <Heading as="h3" size="md" color="#2b2e32" mb={2}>
                    Do you have a PremiumTrust Account?
                  </Heading>
                  <Text color="gray.600" mb={4} fontSize="sm">
                    A PremiumTrust bank account is required to link with your card
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
                      h="48px"
                    >
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
                      h="48px"
                    >
                      No, I don't have an account
                    </Button>
                  </HStack>

                  {hasPremiumAccount === false && (
                    <Box 
                      p={4} 
                      mt={4} 
                      borderRadius="md" 
                      bg="orange.50" 
                      border="1px" 
                      borderColor="orange.200"
                    >
                      <Text color="orange.800" mb={3}>
                        You'll be redirected to NIBBN page for account opening. Once your account is
                        created, you can return here to continue your card application.
                      </Text>
                      <Button
                        variant="outline"
                        size="sm"
                        borderColor="orange.400"
                        color="orange.600"
                        _hover={{ bg: "orange.100" }}
                        onClick={() => window.open("https://nibss-plc.com.ng/", "_blank")}
                      >
                        Go to NIBBN Portal
                      </Button>
                    </Box>
                  )}
                </Box>
              )}
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BvnCheck;
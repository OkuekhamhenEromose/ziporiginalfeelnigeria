// components/ZipCashFunding/InsufficientFunds.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

const InsufficientFunds = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountNumber = location.state?.accountNumber || "**********";

  const cardIssuanceFee = "₦1,000";

  return (
    <Box minH="100vh" bg="white">
      <Container maxW="2xl" py={12} pt={48}>
        <Box
          bg="white"
          boxShadow="xl"
          borderRadius="xl"
          border="1px"
          borderColor="gray.200"
          maxW="lg"
          w="100%"
        >
          {/* Card Header */}
          <Box textAlign="center" p={6} borderBottom="1px" borderColor="gray.200">
            <Box
              w={20}
              h={20}
              borderRadius="full"
              bg="red.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <AlertCircle size={48} color="white" />
            </Box>
            <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
              Card Issuance Failed
            </Heading>
            <Text color="gray.600" fontSize="md">
              Unable to process your card application
            </Text>
          </Box>

          {/* Card Body */}
          <Box p={6}>
            <VStack gap={6} align="stretch">
              {/* Error Alert */}
              <Box
                p={4}
                borderRadius="md"
                bg="red.50"
                border="1px"
                borderColor="red.200"
              >
                <Heading as="h3" size="sm" color="red.800" mb={2}>
                  Insufficient Funds
                </Heading>
                <Text fontSize="sm" color="red.700">
                  Your account does not have sufficient balance to cover the card issuance fee
                  of {cardIssuanceFee}.
                </Text>
              </Box>

              {/* Account Information */}
              <Box
                p={4}
                borderRadius="md"
                bg="gray.50"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="sm" color="#2b2e32" mb={3}>
                  Account Details
                </Heading>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" color="gray.700">
                    <Text as="span" fontWeight="semibold">
                      Account Number:
                    </Text>{" "}
                    {accountNumber}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text as="span" fontWeight="semibold">
                      Required Amount:
                    </Text>{" "}
                    {cardIssuanceFee}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text as="span" fontWeight="semibold">
                      Status:
                    </Text>{" "}
                    Insufficient Balance
                  </Text>
                </VStack>
              </Box>

              {/* Next Steps */}
              <Box
                p={4}
                borderRadius="md"
                bg="orange.50"
                border="1px"
                borderColor="orange.200"
              >
                <Heading as="h3" size="sm" color="orange.800" mb={3}>
                  What You Need to Do
                </Heading>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" color="orange.700">
                    1. Fund your PremiumTrust account with at least {cardIssuanceFee}
                  </Text>
                  <Text fontSize="sm" color="orange.700">
                    2. Ensure your account balance is sufficient before retrying
                  </Text>
                  <Text fontSize="sm" color="orange.700">
                    3. Once funded, return here to retry your card application
                  </Text>
                </VStack>
              </Box>

              {/* Funding Options */}
              <Box
                p={4}
                borderRadius="md"
                bg="blue.50"
                border="1px"
                borderColor="blue.200"
              >
                <Heading as="h3" size="sm" color="blue.800" mb={3}>
                  Ways to Fund Your Account
                </Heading>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" color="blue.700">
                    • Bank Transfer from another account
                  </Text>
                  <Text fontSize="sm" color="blue.700">
                    • Cash Deposit at any PremiumTrust Bank branch
                  </Text>
                  <Text fontSize="sm" color="blue.700">
                    • Online Banking Transfer
                  </Text>
                  <Text fontSize="sm" color="blue.700">
                    • Mobile Banking App
                  </Text>
                </VStack>
              </Box>

              {/* Action Buttons */}
              <VStack gap={3}>
                <Button
                  size="lg"
                  bg="#2d7a4f"
                  color="white"
                  w="100%"
                  onClick={() => navigate("/card-consent", { state: { accountNumber } })}
                  _hover={{
                    bg: "#246139",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.3s ease"
                >
                  <RefreshCw size={20} style={{ marginRight: 8 }} />
                  Retry Card Application
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  w="100%"
                  borderColor="#2d7a4f"
                  color="#2d7a4f"
                  onClick={() => navigate("/")}
                  _hover={{
                    bg: "gray.50",
                  }}
                >
                  <Home size={20} style={{ marginRight: 8 }} />
                  Return to Home
                </Button>
              </VStack>

              {/* Support Information */}
              <Box textAlign="center" pt={4}>
                <Text fontSize="sm" color="gray.600">
                  Need assistance? Contact{" "}
                  <Text as="span" color="#2d7a4f" fontWeight="semibold">
                    support@feelnigeria.com
                  </Text>
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InsufficientFunds;
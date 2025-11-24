// components/ZipCashFunding/AccountSetup.tsx
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Input,
  Field,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AccountSetup = () => {
  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!accountNumber || accountNumber.length !== 10) {
      setError("Please enter a valid 10-digit account number");
      return;
    }

    setIsLoading(true);

    // Simulate API call to verify account
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to OTP verification
      navigate("/otp-verification", { state: { accountNumber } });
    }, 1500);
  };

  return (
    <Box minH="100vh" bg="white">
      <Container maxW="2xl" px={4} py={12} pt={48}>
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
            <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
              Enter Account Details
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Please provide your PremiumTrust account number
            </Text>
          </Box>

          {/* Card Body */}
          <Box p={6}>
            <form onSubmit={handleSubmit}>
              <VStack gap={6} align="stretch">
                <Field.Root invalid={!!error}>
                  <Field.Label color="#2b2e32" fontWeight="medium">
                    Account Number
                  </Field.Label>
                  <Input
                    type="text"
                    placeholder="Enter your 10-digit account number"
                    value={accountNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 10) {
                        setAccountNumber(value);
                        setError("");
                      }
                    }}
                    size="lg"
                    borderColor="gray.300"
                    _hover={{ borderColor: "#2d7a4f" }}
                    _focus={{
                      borderColor: "#2d7a4f",
                      boxShadow: "0 0 0 1px #2d7a4f",
                    }}
                  />
                  {error && (
                    <Field.ErrorText>{error}</Field.ErrorText>
                  )}
                  <Field.HelperText>
                    This should be your PremiumTrust bank account number
                  </Field.HelperText>
                </Field.Root>

                <Button
                  type="submit"
                  size="lg"
                  bg="#2d7a4f"
                  color="white"
                  w="100%"
                  loading={isLoading}
                  loadingText="Verifying..."
                  _hover={{
                    bg: "#246139",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.3s ease"
                >
                  Continue
                  <ArrowRight size={20} style={{ marginLeft: 8 }} />
                </Button>

                <Button
                  variant="ghost"
                  size="md"
                  color="gray.600"
                  onClick={() => navigate("/bvn-check")}
                >
                  Back
                </Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AccountSetup;
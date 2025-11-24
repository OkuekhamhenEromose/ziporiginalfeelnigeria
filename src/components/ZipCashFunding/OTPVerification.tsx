// components/ZipCashFunding/OTPVerification.tsx
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Input,
  Field,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountNumber = location.state?.accountNumber || "**********";
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [canResend, setCanResend] = useState(false);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to card consent page
      navigate("/card-consent", { state: { accountNumber } });
    }, 2000);
  };

  const handleResendOtp = () => {
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    setError("");
    
    // Simulate OTP resend
    setTimeout(() => {
      console.log("OTP resent");
      setCanResend(true);
    }, 30000); // Enable resend after 30 seconds
  };

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
              w={16}
              h={16}
              borderRadius="full"
              bg="#2d7a4f"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <CheckCircle2 size={32} color="white" />
            </Box>
            <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
              Verify Your Identity
            </Heading>
            <Text color="gray.600" fontSize="md">
              We've sent a 6-digit code to the phone number linked to account{" "}
              <Text as="span" fontWeight="bold" color="#2b2e32">
                {accountNumber}
              </Text>
            </Text>
          </Box>

          {/* Card Body */}
          <Box p={6}>
            <VStack gap={6} align="stretch">
              <Field.Root invalid={!!error}>
                <Field.Label color="#2b2e32" fontWeight="medium" textAlign="center" mb={4}>
                  Enter OTP Code
                </Field.Label>
                <HStack justify="center" mb={2}>
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        handleOtpChange(value, index);
                      }}
                      size="lg"
                      width="50px"
                      height="50px"
                      textAlign="center"
                      fontSize="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "#2d7a4f" }}
                      _focus={{
                        borderColor: "#2d7a4f",
                        boxShadow: "0 0 0 1px #2d7a4f",
                      }}
                    />
                  ))}
                </HStack>
                {error && (
                  <Field.ErrorText textAlign="center">{error}</Field.ErrorText>
                )}
              </Field.Root>

              <Button
                size="lg"
                bg="#2d7a4f"
                color="white"
                w="100%"
                onClick={handleVerify}
                loading={isLoading}
                loadingText="Verifying..."
                disabled={otp.join("").length !== 6}
                _hover={{
                  bg: "#246139",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s ease"
              >
                Verify OTP
              </Button>

              <Box textAlign="center">
                <Text color="gray.600" fontSize="sm" mb={2}>
                  Didn't receive the code?
                </Text>
                <Button
                  variant="ghost"
                  color="#2d7a4f"
                  fontSize="sm"
                  fontWeight="semibold"
                  onClick={handleResendOtp}
                  disabled={!canResend}
                >
                  Resend OTP
                </Button>
              </Box>

              <Button
                variant="ghost"
                size="md"
                color="gray.600"
                onClick={() => navigate("/account-setup")}
              >
                Back
              </Button>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OTPVerification;
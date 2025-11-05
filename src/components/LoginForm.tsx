import React from "react";
import Header from "./Header";
import {
  Box,
  Button,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ChakraFormField from "./ChakraFormField";
import { LuLock, LuMail } from "react-icons/lu";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/useLogin";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { createData, isLoading, error } = useLogin();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const result = await createData(formData);
      if (result && typeof result === "object") {
        if ("access" in result) {
          localStorage.setItem("token", result.access);
          localStorage.setItem("user", JSON.stringify(result.user));
        }
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error("❌ Login failed:", err);
    }
  });

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <Header child="Login to Your Account" />

      <Box
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="md"
        mt={4}
        border="1px solid"
        borderColor="gray.200"
      >
        <VStack gap={6}>
          <Text fontSize="lg" fontWeight="medium" textAlign="center">
            Welcome back! Please login with your email.
          </Text>

          <form onSubmit={onSubmit} style={{ width: "100%" }}>
            <Stack gap={4}>
              <ChakraFormField
                label="Email Address"
                startElement={<LuMail />}
                fieldName="email"
                register={register}
                control={control}
                required
                placeholder="Enter your email address"
                fieldType="email"
              />

              <ChakraFormField
                label="Password"
                startElement={<LuLock />}
                fieldName="password"
                register={register}
                control={control}
                required
                placeholder="Enter your password"
                fieldType="password"
              />

              {/* ✅ Chakra Alert Fix */}
              {error && (
                <Box
                  p={4}
                  border="1px solid"
                  borderColor="red.200"
                  bg="red.50"
                  borderRadius="md"
                >
                  <Text fontWeight="bold">⚠ Error</Text>
                  <Text>
                    {error.includes("Invalid email or password")
                      ? "Invalid email or password. Please try again."
                      : error}
                  </Text>
                </Box>
              )}

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                loading={isLoading}
                loadingText="Logging in..."
                size="lg"
                mt={4}
              >
                Login
              </Button>
            </Stack>
          </form>

          <Text fontSize="sm" color="gray.600" textAlign="center">
            Don't have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#3182CE",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Sign up here
            </a>
          </Text>

          <Text fontSize="xs" color="gray.500" textAlign="center" mt={2}>
            Use the same email you used during registration.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginForm;

// src/components/LoginForm.tsx
"use client";

import { Box, Button, Stack, Spinner, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import { LuMail, LuLock } from "react-icons/lu";
import useLogin from "@/hooks/useLogin";

// Define login-specific form values
interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
  const { createData: login, isLoading, error } = useLogin();

  const onSubmit = handleSubmit(async (formData: LoginFormValues) => {
    try {
      console.log("🔄 Attempting login...");
      const result = await login(formData);
      console.log("✅ Login successful:", result);
      
      // Type assertion for the result
      const loginResult = result as any;
      
      if (loginResult.access) {
        localStorage.setItem("token", String(loginResult.access));
        if (loginResult.user) {
          localStorage.setItem("user", JSON.stringify(loginResult.user));
        }
        alert("Login successful!");
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      console.error("❌ Login failed:", err);
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  });

  return (
    <Box>
      <Header child="Login to Your Account" />
      <form className="m-5" onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          {/* Email Field */}
          <div style={{ width: "100%" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>Email *</label>
            <Box position="relative">
              <Box
                position="absolute"
                left="12px"
                top="50%"
                transform="translateY(-50%)"
                pointerEvents="none"
                color="gray.500"
              >
                <LuMail />
              </Box>
              <Input
                type="email"
                placeholder="Email"
                paddingLeft="40px"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
            </Box>
            {errors.email && (
              <Box color="red.500" fontSize="sm" mt={1}>
                {errors.email.message}
              </Box>
            )}
          </div>

          {/* Password Field */}
          <div style={{ width: "100%" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>Password *</label>
            <Box position="relative">
              <Box
                position="absolute"
                left="12px"
                top="50%"
                transform="translateY(-50%)"
                pointerEvents="none"
                color="gray.500"
              >
                <LuLock />
              </Box>
              <Input
                type="password"
                placeholder="Password"
                paddingLeft="40px"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />
            </Box>
            {errors.password && (
              <Box color="red.500" fontSize="sm" mt={1}>
                {errors.password.message}
              </Box>
            )}
          </div>

          <Button
            type="submit"
            className="text-white btn btn-success"
            borderRadius={3}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner size="sm" mr={2} />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>

          {error && (
            <Box color="red.500" fontSize="sm">
              {error}
            </Box>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
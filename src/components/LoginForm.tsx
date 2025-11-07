"use client";

import { Box, Button, Stack, Spinner, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import { LuMail, LuLock } from "react-icons/lu";
import useLogin from "@/hooks/useLogin";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const { createData: login, isLoading } = useLogin();

  const onSubmit = handleSubmit(async (formData: LoginFormValues) => {
    try {
      const result = await login(formData);
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
      alert("Login failed. Please check your credentials and try again.");
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
                {...register("email", { required: true })}
              />
            </Box>
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
                {...register("password", { required: true })}
              />
            </Box>
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
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
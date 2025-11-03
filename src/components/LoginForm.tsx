import React from "react";
import Header from "./Header";
import { Box, Button, HStack, Spinner, Stack } from "@chakra-ui/react";
import ChakraFormField, { FormValues } from "./ChakraFormField";
import { LuLock, LuMail } from "react-icons/lu";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/useLogin";

const LoginForm: React.FC = () => {
  const { handleSubmit, register, control } = useForm<FormValues>(); // Added control
  const { createData, data, isLoading, error } = useLogin();

  const onSubmit = handleSubmit(async (formData) => {
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    await createData(payload);

    // ✅ Save token & redirect if login successful
    if (data && typeof data === "object" && "access" in data && (data as any).access) {
      localStorage.setItem("token", (data as any).access);
      window.location.href = "/";
    }
  });

  return (
    <Box>
      <Header child="Login to Your Account" />
      <form className="m-5" onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          <ChakraFormField
            label="Email"
            startElement={<LuMail />}
            fieldName="email"
            register={register}
            control={control} // Added control prop
            required={true}
          />
          <ChakraFormField
            label="Password"
            startElement={<LuLock />}
            fieldName="password"
            register={register}
            control={control} // Added control prop
            required={true}
            fieldType="password"
          />

          {error && (
            <p style={{ color: "red" }}>Invalid email or password</p>
          )}

          {isLoading ? (
            <HStack>
              <Button type="submit" className="text-white btn btn-success">
                Logging in...
              </Button>
              <Spinner />
            </HStack>
          ) : (
            <Button type="submit" className="text-white btn btn-success">
              Login
            </Button>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
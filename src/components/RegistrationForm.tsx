"use client";

import { Box, Button, Stack, HStack, Spinner } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import {
  LuUser,
  LuMail,
  LuPhone,
  LuFlag,
  LuPlane,
  LuCalendar,
  LuLock,
} from "react-icons/lu";
import RegistrationFormField, { FormValues } from "./ChakraFormField";
import useCreateCustomer from "@/hooks/useCreateCustomer";

const RegistrationForm = () => {
  const { handleSubmit, register } = useForm<FormValues>();
  const { createData, data, error, isLoading } = useCreateCustomer();

  const onSubmit = handleSubmit(async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const payload = {
      name: formData.fullName,
      phone_number: formData.phoneNumber,
      email: formData.email,
      nationality: formData.nationality,
      preferred_destination: formData.preferredDestination,
      password: formData.password,
      travel_date: formData.travelDate,
      username: formData.username,
    };

    await createData(payload);

    if (data) {
      console.log("Form submitted successfully:", data);
      window.location.href = "/login";
    }
    if (error) {
      console.error("Error submitting form:", error);
    }
  });

  const fields = [
    {
      name: "fullName",
      required: true,
      icon: LuUser,
      type: "text",
    },
    {
      hStack: [
        {
          name: "email",
          required: true,
          icon: LuMail,
          type: "email",
        },
        {
          name: "username",
          required: true,
          icon: LuUser,
        },
      ],
    },
    {
      name: "phoneNumber",
      required: true,
      icon: LuPhone,
    },
    {
      name: "nationality",
      required: true,
      icon: LuFlag,
    },
    {
      hStack: [
        {
          name: "preferredDestination",
          required: true,
          icon: LuPlane,
        },
        {
          name: "travelDate",
          required: true,
          icon: LuCalendar,
          type: "date",
        },
      ],
    },
    {
      hStack: [
        {
          name: "password",
          required: true,
          icon: LuLock,
          type: "password",
        },
        {
          name: "confirmPassword",
          required: true,
          icon: LuLock,
          type: "password",
        },
      ],
    },
  ];

  return (
    <Box>
      <Header child="Register with Us" />
      <form className="m-5" onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          {fields.map((field) => {
            if (field.name) {
              return (
                <RegistrationFormField
                  key={field.name}
                  label={field.name
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  startElement={<field.icon />}
                  fieldName={field.name as keyof FormValues}
                  required={field.required}
                  fieldType={field?.type}
                  register={register}
                />
              );
            } else if (field.hStack) {
              return (
                <HStack
                  w={"100%"}
                  align={"flex-end"}
                  flexDirection="row"
                  key={field.hStack[0].name}
                >
                  {field.hStack.map((hField) => (
                    <RegistrationFormField
                      key={hField.name}
                      label={hField.name
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      startElement={<hField.icon />}
                      fieldName={hField.name as keyof FormValues}
                      required={hField.required}
                      fieldType={hField?.type}
                      register={register}
                    />
                  ))}
                </HStack>
              );
            }
            return null;
          })}
          {isLoading ? (
            <HStack>
              <Button
                type="submit"
                className="text-white btn btn-success"
                borderRadius={3}
              >
                Register
              </Button>
              <Spinner />
            </HStack>
          ) : (
            <Button
              type="submit"
              className="text-white btn btn-success"
              borderRadius={3}
            >
              Register
            </Button>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default RegistrationForm;

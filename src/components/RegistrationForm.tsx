"use client";

import { Box, Button, Stack, HStack, Spinner } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import { LuUser, LuMail, LuPhone, LuFlag, LuPlane, LuLock } from "react-icons/lu";
import RegistrationFormField, { FormValues } from "./ChakraFormField";
import { IconType } from "react-icons";
import useCreateCustomer from "@/hooks/useCreateCustomer";

// Simplified countries list (most common ones first)
const countries = [
  { value: "NG", label: "Nigeria" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "GH", label: "Ghana" },
  { value: "KE", label: "Kenya" },
  { value: "ZA", label: "South Africa" },
  // Add more as needed...
];

// Nigerian states
const nigerianStates = [
  { value: "LA", label: "Lagos" },
  { value: "AB", label: "Abia" },
  { value: "AD", label: "Adamawa" },
  { value: "AK", label: "Akwa Ibom" },
  { value: "AN", label: "Anambra" },
  { value: "BA", label: "Bauchi" },
  { value: "BY", label: "Bayelsa" },
  { value: "BE", label: "Benue" },
  { value: "BO", label: "Borno" },
  { value: "CR", label: "Cross River" },
  { value: "DE", label: "Delta" },
  { value: "EB", label: "Ebonyi" },
  { value: "ED", label: "Edo" },
  { value: "EK", label: "Ekiti" },
  { value: "EN", label: "Enugu" },
  { value: "FC", label: "Federal Capital Territory" },
  { value: "GO", label: "Gombe" },
  { value: "IM", label: "Imo" },
  { value: "JI", label: "Jigawa" },
  { value: "KD", label: "Kaduna" },
  { value: "KN", label: "Kano" },
  { value: "KT", label: "Katsina" },
  { value: "KE", label: "Kebbi" },
  { value: "KO", label: "Kogi" },
  { value: "KW", label: "Kwara" },
  { value: "NA", label: "Nasarawa" },
  { value: "NI", label: "Niger" },
  { value: "OG", label: "Ogun" },
  { value: "ON", label: "Ondo" },
  { value: "OS", label: "Osun" },
  { value: "OY", label: "Oyo" },
  { value: "PL", label: "Plateau" },
  { value: "RI", label: "Rivers" },
  { value: "SO", label: "Sokoto" },
  { value: "TA", label: "Taraba" },
  { value: "YO", label: "Yobe" },
  { value: "ZA", label: "Zamfara" },
];

interface BaseField {
  name: string;
  required: boolean;
  icon: IconType;
  type?: string;
  options?: { value: string; label: string }[];
}

interface FieldGroup {
  hStack: BaseField[];
}

type FieldConfig = BaseField | FieldGroup;

const RegistrationForm = () => {
  const { handleSubmit, register, control } = useForm<FormValues>();
  const { createData, isLoading } = useCreateCustomer();

  const onSubmit = handleSubmit(async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    const payload = {
      full_name: formData.fullName,
      phone: formData.phoneNumber,
      email: formData.email,
      nationality: formData.nationality,
      preferred_destination: formData.preferredDestination,
      password: formData.password,
      password1: formData.confirmPassword,
      username: formData.username,
      agreed_to_terms: true,
    };

    try {
      const result = await createData(payload);
      
      if (result) {
        alert("Registration successful! Please check your email for verification.");
        window.location.href = "/login";
      }
    } catch (err: any) {
      alert("Registration failed. Please try again.");
    }
  });

  const fields: FieldConfig[] = [
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
      options: countries,
    },
    {
      hStack: [
        {
          name: "preferredDestination",
          required: true,
          icon: LuPlane,
          options: nigerianStates,
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
          {fields.map((field, index) => {
            if ("name" in field) {
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
                  control={control}
                  options={field?.options}
                />
              );
            } else if ("hStack" in field) {
              return (
                <HStack
                  w={"100%"}
                  align={"flex-end"}
                  flexDirection="row"
                  key={`hstack-${index}`}
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
                      control={control}
                      options={hField?.options}
                    />
                  ))}
                </HStack>
              );
            }
            return null;
          })}
          <Button
            type="submit"
            className="text-white btn btn-success"
            borderRadius={3}
            disabled={isLoading}
          >
            {isLoading ? (
              <HStack>
                <span>Register</span>
                <Spinner size="sm" />
              </HStack>
            ) : (
              "Register"
            )}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegistrationForm;
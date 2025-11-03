import { Field, Input, InputGroup, SelectRoot, SelectTrigger, SelectContent, SelectItem, SelectValueText, createListCollection } from "@chakra-ui/react";
import React from "react";
import { useForm, UseFormRegister, Controller, Control } from "react-hook-form";

export interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  password: string;
  confirmPassword: string;
  preferredDestination: string;
  travelDate: string;
}

interface Props {
  label: string;
  fieldName: keyof FormValues;
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  startElement?: React.ReactNode;
  required?: boolean;
  fieldType?: string;
  options?: { value: string; label: string }[];
}

const RegistrationFormField: React.FC<Props> = ({
  label,
  startElement,
  fieldName,
  register,
  control,
  required = false,
  fieldType,
  options,
}) => {
  const {
    formState: { errors },
  } = useForm<FormValues>();

  if (options) {
    const collection = createListCollection({
      items: options,
    });

    return (
      <Field.Root required={required} invalid={!!errors[fieldName]} w="100%">
        <Field.Label>
          {label}
          <Field.RequiredIndicator />
        </Field.Label>
        <Controller
          name={fieldName}
          control={control}
          rules={{ required: required ? `${label} is required` : false }}
          render={({ field }) => (
            <SelectRoot
              collection={collection}
              value={field.value ? [field.value] : []}
              onValueChange={(e) => field.onChange(e.value[0])}
            >
              <SelectTrigger>
                <InputGroup startElement={startElement}>
                  <SelectValueText placeholder={`Select ${label}`} />
                </InputGroup>
              </SelectTrigger>
              <SelectContent bg="gray.50" borderRadius="md" boxShadow="md">
                {options.map((option) => (
                  <SelectItem 
                    key={option.value} 
                    item={option.value}
                    bg="gray.50"
                    _hover={{ bg: "gray.100" }}
                    _selected={{ bg: "gray.200" }}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          )}
        />
        <Field.ErrorText>{errors[fieldName]?.message}</Field.ErrorText>
      </Field.Root>
    );
  }

  return (
    <Field.Root required={required} invalid={!!errors[fieldName]} w="100%">
      <Field.Label>
        {label}
        <Field.RequiredIndicator />
      </Field.Label>
      <InputGroup startElement={startElement}>
        <Input type={fieldType} {...register(fieldName)} />
      </InputGroup>
      <Field.ErrorText>{errors[fieldName]?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default RegistrationFormField;
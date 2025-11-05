// src/components/ChakraFormField.tsx
import { Field, Input, InputGroup, SelectRoot, SelectTrigger, SelectContent, SelectItem, SelectValueText, createListCollection } from "@chakra-ui/react";
import React from "react";
import { UseFormRegister, Controller, Control, FieldValues, Path } from "react-hook-form";

// Make the component generic to work with any form values
interface Props<T extends FieldValues> {
  label: string;
  fieldName: Path<T>;
  register: UseFormRegister<T>;
  control: Control<T>;
  startElement?: React.ReactNode;
  required?: boolean;
  fieldType?: string;
  options?: { value: string; label: string }[];
}

const ChakraFormField = <T extends FieldValues>({
  label,
  startElement,
  fieldName,
  register,
  control,
  required = false,
  fieldType,
  options,
}: Props<T>) => {

  if (options) {
    const collection = createListCollection({
      items: options,
    });

    return (
      <Field.Root required={required} w="100%">
        <Field.Label>
          {label}
          <Field.RequiredIndicator />
        </Field.Label>
        <Controller
          name={fieldName}
          control={control}
          rules={{ required: required ? `${label} is required` : false }}
          render={({ field, fieldState }) => (
            <>
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
              {fieldState.error && (
                <Field.ErrorText>{fieldState.error.message}</Field.ErrorText>
              )}
            </>
          )}
        />
      </Field.Root>
    );
  }

  return (
    <Field.Root required={required} w="100%">
      <Field.Label>
        {label}
        <Field.RequiredIndicator />
      </Field.Label>
      <InputGroup startElement={startElement}>
        <Input 
          type={fieldType} 
          {...register(fieldName, { 
            required: required ? `${label} is required` : false 
          })} 
        />
      </InputGroup>
    </Field.Root>
  );
};

export default ChakraFormField;

// Export specific FormValues for registration
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
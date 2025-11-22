import * as React from "react";
import { Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

export interface DashboardInputProps extends ChakraInputProps {}

const DashboardInput = React.forwardRef<HTMLInputElement, DashboardInputProps>(
  ({ ...props }, ref) => {
    return (
      <ChakraInput
        ref={ref}
        h={10}
        w="full"
        borderRadius="md"
        border="1px"
        borderColor="gray.300"
        bg="white"
        px={3}
        py={2}
        fontSize={{ base: "base", md: "sm" }}
        _placeholder={{ color: "gray.400" }}
        _focusVisible={{
          outline: "none",
          ring: "2px",
          ringColor: "#2d7a4f",
          ringOffset: "2px",
        }}
        _disabled={{
          cursor: "not-allowed",
          opacity: 0.5,
        }}
        {...props}
      />
    );
  }
);

DashboardInput.displayName = "DashboardInput";

export { DashboardInput };
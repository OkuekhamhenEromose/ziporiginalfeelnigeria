import * as React from "react";
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

type CustomVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type CustomSize = "default" | "sm" | "lg" | "icon";

export interface DashboardButtonProps extends Omit<ChakraButtonProps, 'variant' | 'size'> {
  variant?: CustomVariant;
  size?: CustomSize;
}

const DashboardButton = React.forwardRef<HTMLButtonElement, DashboardButtonProps>(
  ({ variant = "default", size = "default", children, ...props }, ref) => {
    // Map custom variants to Chakra UI styles
    const getVariantStyles = () => {
      switch (variant) {
        case "default":
          return {
            bg: "#2d7a4f",
            color: "white",
            _hover: { bg: "#246139" },
            _active: { bg: "#1d4d2e" },
          };
        case "destructive":
          return {
            bg: "red.500",
            color: "white",
            _hover: { bg: "red.600" },
            _active: { bg: "red.700" },
          };
        case "outline":
          return {
            border: "1px",
            borderColor: "gray.300",
            bg: "white",
            color: "gray.900",
            _hover: { bg: "gray.50", color: "gray.900" },
          };
        case "secondary":
          return {
            bg: "gray.100",
            color: "gray.900",
            _hover: { bg: "gray.200" },
          };
        case "ghost":
          return {
            bg: "transparent",
            color: "gray.900",
            _hover: { bg: "gray.50", color: "gray.900" },
          };
        case "link":
          return {
            bg: "transparent",
            color: "#2d7a4f",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            _hover: { textDecoration: "underline" },
            p: 0,
            h: "auto",
          };
        default:
          return {};
      }
    };

    // Map custom sizes to Chakra UI sizes
    const getSizeStyles = () => {
      switch (size) {
        case "default":
          return { h: 10, px: 4, py: 2, fontSize: "sm" };
        case "sm":
          return { h: 9, px: 3, fontSize: "sm", borderRadius: "md" };
        case "lg":
          return { h: 11, px: 8, fontSize: "md", borderRadius: "md" };
        case "icon":
          return { h: 10, w: 10, p: 0 };
        default:
          return {};
      }
    };

    return (
      <ChakraButton
        ref={ref}
        borderRadius="md"
        fontWeight="medium"
        transition="all 0.2s"
        _focusVisible={{
          outline: "none",
          ring: "2px",
          ringColor: "#2d7a4f",
          ringOffset: "2px",
        }}
        _disabled={{
          pointerEvents: "none",
          opacity: 0.5,
        }}
        {...getVariantStyles()}
        {...getSizeStyles()}
        {...props}
      >
        {children}
      </ChakraButton>
    );
  }
);

DashboardButton.displayName = "DashboardButton";

export { DashboardButton };
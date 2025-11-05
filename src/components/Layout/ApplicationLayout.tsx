// components/Layout/ApplicationLayout.tsx
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ApplicationLayoutProps {
  children: ReactNode;
}

const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* You can add header, navigation, etc. here */}
      <Box as="main">
        {children}
      </Box>
    </Box>
  );
};

export default ApplicationLayout;
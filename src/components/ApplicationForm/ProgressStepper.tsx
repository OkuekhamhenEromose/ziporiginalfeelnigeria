// components/ApplicationForm/ProgressStepper.tsx
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

interface ProgressStepperProps {
  currentStep: number;
  steps: { number: number; title: string }[];
}

const ProgressStepper = ({ currentStep, steps }: ProgressStepperProps) => {
  return (
    <VStack gap={4} w="100%" mb={8}>
      <HStack justify="space-between" w="100%" gap={4}>
        {steps.map((step) => (
          <Box key={step.number} flex="1" textAlign="center">
            <Box
              w="40px"
              h="40px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              bg={
                step.number < currentStep
                  ? "green.500"
                  : step.number === currentStep
                  ? "blue.500"
                  : "gray.200"
              }
              color={step.number <= currentStep ? "white" : "gray.500"}
              fontWeight="bold"
              position="relative"
            >
              {step.number < currentStep ? (
                <Text fontSize="lg" lineHeight="1">
                  ✓
                </Text>
              ) : (
                step.number
              )}
            </Box>
            <Text
              fontSize="sm"
              mt={2}
              fontWeight={step.number === currentStep ? "bold" : "normal"}
              color={step.number === currentStep ? "blue.500" : "gray.600"}
            >
              {step.title}
            </Text>
          </Box>
        ))}
      </HStack>
      <Box w="100%" h="2px" bg="gray.200" position="relative" mt={2}>
        <Box
          h="2px"
          bg="blue.500"
          position="absolute"
          left="0"
          transition="all 0.3s"
          width={`${((currentStep - 1) / (steps.length - 1)) * 100}%`}
        />
      </Box>
    </VStack>
  );
};

export default ProgressStepper;
import { useState } from "react";
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ApplicationData, ApplicationResponse } from "../../types/application";

interface ReviewSubmitProps {
  data: ApplicationData;
  onSubmit: () => Promise<ApplicationResponse>;
  onPrev: () => void;
  onEdit: (step: number) => void;
}

const ReviewSubmit = ({
  data,
  onSubmit,
  onPrev,
  onEdit,
}: ReviewSubmitProps) => {
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setSubmitError("");

    try {
      await onSubmit();
      alert("Application submitted successfully!");
      window.location.href = "/dashboard";
    } catch (error: any) {
      setSubmitError(
        error.message || "Failed to submit application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="100%">
      <VStack gap={6} align="stretch">
        <Box
          p={4}
          border="1px solid"
          borderColor="blue.200"
          bg="blue.50"
          borderRadius="md"
        >
          <Text fontWeight="bold">ℹ Info</Text>
          <Text>Please review your application before submitting.</Text>
        </Box>

        {/* Example card replacement */}
        <Box border="1px solid" borderColor="gray.200" p={4} borderRadius="md">
          <HStack justify="space-between" mb={2}>
            <Text fontWeight="bold">Personal Details</Text>
            <Button size="sm" variant="outline" onClick={() => onEdit(1)}>
              Edit
            </Button>
          </HStack>
          <VStack align="start" gap={1}>
            <Text>
              <strong>Nationality:</strong> {data.step1.nationality}
            </Text>
            <Text>
              <strong>Residence:</strong> {data.step1.country_of_residence}
            </Text>
            <Text>
              <strong>Date of Birth:</strong> {data.step1.date_of_birth}
            </Text>
            <Text>
              <strong>Gender:</strong>{" "}
              {data.step1.gender === "M" ? "Male" : "Female"}
            </Text>
            <Text>
              <strong>Phone:</strong> {data.step1.phone}
            </Text>
          </VStack>
        </Box>

        {submitError && (
  <Box
    p={4}
    border="1px solid"
    borderColor="red.200"
    bg="red.50"
    borderRadius="md"
    color="red.700"
  >
    {submitError}
  </Box>
)}


        <HStack justify="space-between" pt={4}>
          <Button variant="outline" onClick={onPrev}>
            Back
          </Button>
          <Button
            colorScheme="green"
            loading={loading}
            loadingText="Submitting..."
            onClick={handleSubmit}
            size="lg"
          >
            Submit Application
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ReviewSubmit;

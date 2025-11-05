import { useState } from "react";
import { Box, Button, Input, VStack, HStack, Text } from "@chakra-ui/react";
import { PersonalDetails } from "../../types/application";

interface Step1PersonalDetailsProps {
  data: PersonalDetails;
  onChange: (data: PersonalDetails) => void;
  onSave: (data: PersonalDetails) => Promise<void>;
  onNext: () => void;
}

const Step1PersonalDetails = ({ data, onChange, onSave, onNext }: Step1PersonalDetailsProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSave(data);
      alert("Personal details saved successfully!");
      onNext();
    } catch (error) {
      alert("Error saving personal details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof PersonalDetails, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const countries = [
    { value: "NG", label: "Nigeria" },
    { value: "US", label: "United States" },
    { value: "GB", label: "United Kingdom" },
    { value: "CA", label: "Canada" },
  ];

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <VStack gap={6} align="stretch">
        {/* Nationality */}
        <Box>
          <Text mb={2} fontWeight="medium">Nationality</Text>
          <select
            value={data.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          >
            <option value="">Select your nationality</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </Box>

        {/* Country of Residence */}
        <Box>
          <Text mb={2} fontWeight="medium">Country of Residence</Text>
          <select
            value={data.country_of_residence}
            onChange={(e) => handleChange("country_of_residence", e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          >
            <option value="">Select your country of residence</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </Box>

        {/* Date of Birth */}
        <Box>
          <Text mb={2} fontWeight="medium">Date of Birth</Text>
          <Input type="date" value={data.date_of_birth} onChange={(e) => handleChange("date_of_birth", e.target.value)} />
        </Box>

        {/* Gender */}
        <Box>
          <Text mb={2} fontWeight="medium">Gender</Text>
          <select
            value={data.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          >
            <option value="">Select gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </Box>

        {/* Phone */}
        <Box>
          <Text mb={2} fontWeight="medium">Phone Number</Text>
          <Input type="tel" value={data.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+234 800 000 0000" />
        </Box>

        {/* Buttons */}
        <HStack justify="flex-end" pt={4}>
          <Button type="submit" colorScheme="green" loading={loading}>
            Save & Continue
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Step1PersonalDetails;

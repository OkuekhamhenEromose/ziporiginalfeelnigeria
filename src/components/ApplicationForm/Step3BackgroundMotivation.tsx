import { useState } from "react";
import { Box, Button, VStack, HStack, Input, Textarea } from "@chakra-ui/react";
import { BackgroundMotivation } from "../../types/application";

interface Step3BackgroundMotivationProps {
  data: BackgroundMotivation;
  onChange: (data: BackgroundMotivation) => void;
  onSave: (data: BackgroundMotivation) => Promise<void>;
  onNext: () => void;
  onPrev: () => void;
}

const Step3BackgroundMotivation = ({
  data,
  onChange,
  onSave,
  onNext,
  onPrev,
}: Step3BackgroundMotivationProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSave(data);
      onNext();
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof BackgroundMotivation, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <VStack gap={6} align="stretch">

        {/* Profession */}
        <div>
          <label>Profession</label>
          <Input
            value={data.profession}
            onChange={(e) => handleChange("profession", e.target.value)}
            placeholder="Enter your profession"
            required
          />
        </div>

        {/* Motivation */}
        <div>
          <label>Motivation</label>
          <Textarea
            rows={6}
            value={data.motivation}
            onChange={(e) => handleChange("motivation", e.target.value)}
            placeholder="Why do you want to visit Nigeria? What are your expectations?"
          />
        </div>

        {/* Hobbies */}
        <div>
          <label>Hobbies & Interests</label>
          <Textarea
            rows={4}
            value={data.hobbies}
            onChange={(e) => handleChange("hobbies", e.target.value)}
            placeholder="Tell us about your hobbies and interests..."
          />
        </div>

        <HStack justify="space-between" pt={4}>
          <Button variant="outline" onClick={onPrev}>
            Back
          </Button>
          <Button type="submit" colorScheme="blue" loading={loading}>
            Save & Continue
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Step3BackgroundMotivation;

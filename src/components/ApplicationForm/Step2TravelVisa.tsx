import { useState } from "react";
import { Box, Button, VStack, HStack, Textarea, Input } from "@chakra-ui/react";
import { TravelVisaInfo } from "../../types/application";

interface Step2TravelVisaProps {
  data: TravelVisaInfo;
  onChange: (data: TravelVisaInfo) => void;
  onSave: (data: TravelVisaInfo) => Promise<void>;
  onNext: () => void;
  onPrev: () => void;
}

const Step2TravelVisa = ({
  data,
  onChange,
  onSave,
  onNext,
  onPrev,
}: Step2TravelVisaProps) => {
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

  const handleChange = (field: keyof TravelVisaInfo, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <VStack gap={6} align="stretch">

        {/* Passport Number */}
        <div>
          <label>Passport Number</label>
          <Input
            value={data.passport_number}
            onChange={(e) => handleChange("passport_number", e.target.value)}
            placeholder="Enter your passport number"
            required
          />
        </div>

        {/* Passport Expiration Date */}
        <div>
          <label>Passport Expiration Date</label>
          <Input
            type="date"
            value={data.passport_expiration}
            onChange={(e) => handleChange("passport_expiration", e.target.value)}
          />
        </div>

        {/* Visa History - Replaced RadioGroup */}
        <div>
          <label>Do you have previous visa history?</label>
          <HStack style={{ gap: "1rem", marginTop: "0.5rem" }}>
            <label>
              <input
                type="radio"
                name="visa_history"
                value="true"
                checked={data.visa_history === true}
                onChange={() => handleChange("visa_history", true)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="visa_history"
                value="false"
                checked={data.visa_history === false}
                onChange={() => handleChange("visa_history", false)}
              />{" "}
              No
            </label>
          </HStack>
        </div>

        {/* Travel History */}
        <div>
          <label>Travel History</label>
          <Textarea
            rows={4}
            placeholder="List countries you have visited..."
            value={data.travel_history}
            onChange={(e) => handleChange("travel_history", e.target.value)}
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

export default Step2TravelVisa;

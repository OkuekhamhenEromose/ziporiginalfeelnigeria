import { useState, useRef } from "react";
import { Box, Button, Input, VStack, HStack, Text } from "@chakra-ui/react";
import { MediaSocial } from "../../types/application";

interface Step4MediaSocialProps {
  data: MediaSocial;
  onChange: (data: MediaSocial) => void;
  onSave: (data: MediaSocial) => Promise<void>;
  onNext: () => void;
  onPrev: () => void;
}

const Step4MediaSocial = ({
  data,
  onChange,
  onSave,
  onNext,
  onPrev,
}: Step4MediaSocialProps) => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleChange = (field: keyof MediaSocial, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith("video/")) {
        alert("Invalid file type. Please upload a video file.");
        return;
      }
      if (file.size > 100 * 1024 * 1024) {
        alert("File too large. Please upload a video smaller than 100MB.");
        return;
      }
      onChange({ ...data, intro_video: file });
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <VStack gap={6} align="stretch">

        {/* Instagram URL */}
        <div>
          <label>Instagram Profile URL</label>
          <Input
            type="url"
            value={data.instagram}
            onChange={(e) => handleChange("instagram", e.target.value)}
            placeholder="https://instagram.com/yourusername"
          />
        </div>

        {/* TikTok URL */}
        <div>
          <label>TikTok Profile URL</label>
          <Input
            type="url"
            value={data.tiktok}
            onChange={(e) => handleChange("tiktok", e.target.value)}
            placeholder="https://tiktok.com/@yourusername"
          />
        </div>

        {/* YouTube URL */}
        <div>
          <label>YouTube Channel URL</label>
          <Input
            type="url"
            value={data.youtube}
            onChange={(e) => handleChange("youtube", e.target.value)}
            placeholder="https://youtube.com/c/yourchannel"
          />
        </div>

        {/* Intro Video Upload */}
        <div>
          <label>Introduction Video</label>
          <Input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleFileClick}
            w="100%"
            py={8}
            borderStyle="dashed"
          >
            {data.intro_video ? (
              <Text>Selected: {data.intro_video.name}</Text>
            ) : (
              <Text>Click to upload introduction video</Text>
            )}
          </Button>
          <Text fontSize="sm" color="gray.600" mt={2}>
            Upload a short video introducing yourself (max 100MB)
          </Text>
        </div>

        {/* Navigation Buttons */}
        <HStack justify="space-between" pt={4}>
          <Button variant="outline" onClick={onPrev}>
            Back
          </Button>
          <Button
            type="submit"
            colorScheme="blue"
            loading={loading}
            disabled={!data.intro_video}
          >
            Save & Continue
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Step4MediaSocial;

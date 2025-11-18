import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Button,
  Heading,
  Text,
  Container,
  Flex,
  Field,
  Input,
} from '@chakra-ui/react';
import { Video, Upload, ArrowRight, ChevronLeft, CheckCircle, Clock } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
// import { supabase } from '../lib/supabase';

interface Stage3Props {
  applicationId: string;
  email: string;
  onNext: () => void;
  onBack: () => void;
}

export default function Stage3({ applicationId, email, onNext, onBack }: Stage3Props) {
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedCulture, setSelectedCulture] = useState('');
  const [uniqueSkill, setUniqueSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submissionCompleted, setSubmissionCompleted] = useState(false);

  const cultures = [
    'Yoruba drumming',
    'Igbo art',
    'Hausa horsemanship',
    'Ijaw fishing traditions',
    'Edo bronze casting',
    'Fulani pastoral life',
    'Calabar carnival culture',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!videoUrl || !selectedCulture || !uniqueSkill) {
      setError('Please complete all fields');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmissionCompleted(true);
      
      // Simulate toast notification
      alert('✓ Video Pitch Submitted!\nYour video pitch has been successfully submitted.');
    }, 1500);

    // try {
    //   await supabase
    //     .from('applications')
    //     .update({
    //       video_pitch_url: videoUrl,
    //       video_submitted_at: new Date().toISOString(),
    //       current_stage: 3
    //     })
    //     .eq('id', applicationId);

    //   setSubmissionCompleted(true);
    // } catch (err) {
    //   setError(err instanceof Error ? err.message : 'Failed to submit video pitch');
    // } finally {
    //   setLoading(false);
    // }
  };

  // Completion Screen (similar to Stage2's quiz completion)
  if (submissionCompleted) {
    return (
      <Box minH="100vh" bg="gray.50" py={{ base: 8, sm: 12 }} px={4}>
        <Container maxW="4xl">
          <Box bg="white" shadow="2xl" borderRadius="3xl" p={{ base: 8, md: 12 }}>
            <VStack gap={8} textAlign="center">
              {/* Icon */}
              <Box
                bg="green.100"
                borderRadius="full"
                p={6}
              >
                <Video
                  size={64}
                  color="#16a34a"
                  strokeWidth={2}
                />
              </Box>

              {/* Title */}
              <Heading as="h1" size="2xl" color="gray.900">
                🎉 Video Pitch Submitted!
              </Heading>

              {/* Success Message */}
              <VStack gap={4}>
                <Heading as="h2" size="xl" color="green.600">
                  Thank You for Your Submission
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Your video pitch has been successfully received and is now under review.
                </Text>
              </VStack>

              {/* Next Steps Information */}
              <Box bg="blue.50" border="2px solid" borderColor="blue.200" p={6} borderRadius="xl" w="full">
                <HStack gap={3} align="start">
                  <Clock size={24} color="#1d4ed8" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <VStack align="start" gap={2}>
                    <Text fontSize="lg" fontWeight="semibold" color="gray.900">
                      What Happens Next?
                    </Text>
                    <Text fontSize="md" color="gray.700" textAlign="left">
                      Our selection committee will carefully review your video submission. 
                      You will be contacted within 5-7 business days regarding the next steps.
                    </Text>
                  </VStack>
                </HStack>
              </Box>

              {/* Interview Information */}
              <Box bg="purple.50" border="2px solid" borderColor="purple.200" p={6} borderRadius="xl" w="full">
                <HStack gap={3} align="start">
                  <CheckCircle size={24} color="#7e22ce" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <VStack align="start" gap={2}>
                    <Text fontSize="lg" fontWeight="semibold" color="gray.900">
                      Final Stage: Video Interview
                    </Text>
                    <Text fontSize="md" color="gray.700" textAlign="left">
                      Successful candidates will be invited to participate in a short video interview 
                      (via Zoom) with the FNTE Selection Panel. This is to confirm your identity and 
                      manage expectations for the immersive experience.
                    </Text>
                  </VStack>
                </HStack>
              </Box>

              {/* Action Buttons */}
              <Flex gap={4} flexWrap="wrap" justify="center" pt={4}>
                <RouterLink to="/" style={{ textDecoration: 'none' }}>
                  <Button
                    colorPalette="green"
                    size="lg"
                    px={6}
                  >
                    Back to Home
                  </Button>
                </RouterLink>
              </Flex>

              {/* Additional Info */}
              <Box mt={4} bg="yellow.50" border="1px solid" borderColor="yellow.200" p={4} borderRadius="lg">
                <Text fontSize="sm" color="yellow.800" textAlign="center">
                  <Text as="span" fontWeight="semibold">Note:</Text> Keep an eye on your email ({email}) for updates about your application status.
                </Text>
              </Box>
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  }

  // Main Form Screen
  return (
    <Box minH="100vh" bg="gray.50" py={{ base: 8, sm: 12 }} px={4}>
      <Container maxW="4xl">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          colorPalette="green"
          mb={6}
        >
          <ChevronLeft size={20} />
          Back
        </Button>

        {/* Main Card */}
        <Box bg="white" shadow="2xl" borderRadius="3xl" p={{ base: 6, md: 12 }}>
          <VStack gap={8} align="stretch">
            {/* Header Section */}
            <VStack textAlign="center" gap={4}>
              <Box bg="green.100" borderRadius="full" p={4}>
                <Video size={48} color="#16a34a" />
              </Box>
              <Heading as="h1" size="2xl" fontWeight="bold" color="gray.900">
                Stage 3: The Video Pitch
              </Heading>
              <Text fontSize="xl" color="gray.600">
                The Personality Check
              </Text>
            </VStack>

            {/* Info Box */}
            <Box bg="green.50" borderRadius="xl" p={6}>
              <Text color="gray.700" lineHeight="relaxed">
                We want to see your energy, passion, and personality! Successful candidates will be invited for a final video interview.
              </Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack gap={8} align="stretch">
                {/* Record Your Pitch Section */}
                <Box>
                  <Heading as="h3" size="lg" fontWeight="semibold" color="gray.900" mb={4}>
                    1. Record Your Pitch
                  </Heading>

                  {/* Requirements Box */}
                  <Box bg="blue.50" border="1px solid" borderColor="blue.200" borderRadius="lg" p={6} mb={6}>
                    <Heading as="h4" size="md" fontWeight="semibold" color="blue.900" mb={3}>
                      Your 60-second video should include:
                    </Heading>
                    <VStack align="start" gap={2} color="blue.800">
                      <HStack gap={2}>
                        <Text color="blue.600">•</Text>
                        <Text>Who you are and where you live</Text>
                      </HStack>
                      <HStack gap={2}>
                        <Text color="blue.600">•</Text>
                        <Text>Which aspect of Nigerian culture you are most excited to experience</Text>
                      </HStack>
                      <HStack gap={2}>
                        <Text color="blue.600">•</Text>
                        <Text>What unique skill or story you will share with your host family</Text>
                      </HStack>
                    </VStack>
                  </Box>

                  {/* Culture Selection */}
                  <Field.Root required mb={6}>
                    <Field.Label>Which aspect of Nigerian culture are you most excited to experience? *</Field.Label>
                    <select
                      value={selectedCulture}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCulture(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '8px',
                        fontSize: '16px',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="">Select a cultural aspect...</option>
                      {cultures.map(culture => (
                        <option key={culture} value={culture}>{culture}</option>
                      ))}
                    </select>
                  </Field.Root>

                  {/* Unique Skill */}
                  <Field.Root required mb={6}>
                    <Field.Label>What unique skill or story will you share with your host family? *</Field.Label>
                    <textarea
                      value={uniqueSkill}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUniqueSkill(e.target.value)}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                      placeholder="Describe the unique perspective or skill you'll bring..."
                    />
                  </Field.Root>
                </Box>

                {/* Upload and Submit Section */}
                <Box>
                  <Heading as="h3" size="lg" fontWeight="semibold" color="gray.900" mb={4}>
                    2. Upload and Submit
                  </Heading>

                  {/* Upload Area */}
                  <Box
                    border="2px dashed"
                    borderColor="gray.300"
                    borderRadius="lg"
                    p={8}
                    textAlign="center"
                    mb={4}
                  >
                    <Upload size={48} color="#9CA3AF" style={{ margin: '0 auto 16px' }} />
                    <Text color="gray.600" mb={4}>
                      Upload your video to YouTube, Vimeo, or another platform, then paste the link below
                    </Text>

                    <Field.Root required>
                      <Field.Label textAlign="left">Video URL *</Field.Label>
                      <Input
                        type="url"
                        value={videoUrl}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVideoUrl(e.target.value)}
                        size="lg"
                        placeholder="https://youtube.com/watch?v=..."
                      />
                    </Field.Root>
                  </Box>

                  {/* Note Box */}
                  <Box bg="yellow.50" border="1px solid" borderColor="yellow.200" borderRadius="lg" p={4}>
                    <Text fontSize="sm" color="yellow.800">
                      <Text as="span" fontWeight="semibold">Note:</Text> Our selection committee will review all
                      submissions for enthusiasm and on-camera presence. Make sure your video is clear,
                      well-lit, and showcases your personality!
                    </Text>
                  </Box>
                </Box>

                {/* Error Alert */}
                {error && (
                  <Box
                    bg="red.50"
                    border="1px solid"
                    borderColor="red.200"
                    borderRadius="lg"
                    p={4}
                  >
                    <Text fontWeight="semibold" color="red.700" mb={1}>
                      Error
                    </Text>
                    <Text color="red.600" fontSize="sm">
                      {error}
                    </Text>
                  </Box>
                )}

                {/* Submit Button */}
                <Flex justify="flex-end">
                  <Button
                    type="submit"
                    colorPalette="green"
                    size="lg"
                    px={8}
                    loading={loading}
                    loadingText="Submitting..."
                  >
                    Submit Video Pitch
                    <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                  </Button>
                </Flex>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
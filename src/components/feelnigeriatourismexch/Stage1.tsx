import React, { useState } from "react";
import Logo from "../../assets/img/logo.png"
import {
  Box,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Heading,
  Text,
  Container,
  Flex,
  Field,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Share2, CheckCircle, ChevronLeft, Check } from "lucide-react";

// Simple toast notification
const showToast = (
  title: string,
  description: string,
  type: "success" | "error"
) => {
  console.log(`${type.toUpperCase()}: ${title} - ${description}`);
  // You can replace this with a proper toast library later
  if (type === "success") {
    alert(`✓ ${title}\n${description}`);
  } else {
    alert(`✗ ${title}\n${description}`);
  }
};

// Custom Checkbox Component (keep the same as before)
interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  children,
  size = "md",
}) => {
  const sizeMap = {
    sm: { box: "16px", icon: 12 },
    md: { box: "20px", icon: 16 },
    lg: { box: "24px", icon: 20 },
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={3}
      cursor="pointer"
      onClick={() => onChange(!checked)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <Box
        width={sizeMap[size].box}
        height={sizeMap[size].box}
        border="2px solid"
        borderColor={checked ? "green.600" : "gray.300"}
        borderRadius="md"
        bg={checked ? "green.600" : "white"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        transition="all 0.2s"
        flexShrink={0}
        _hover={{
          borderColor: checked ? "green.700" : "gray.400",
          bg: checked ? "green.700" : "gray.50",
        }}
      >
        {checked && (
          <Check size={sizeMap[size].icon} color="white" strokeWidth={3} />
        )}
      </Box>
      <Box flex="1" userSelect="none">
        {children}
      </Box>
    </Box>
  );
};

interface Stage1Props {
  onNext: (applicationId: string, email: string) => void;
  onBack: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  password: string;
  password1: string;
  phone: string;
  gender: string;
  location: string;
  motivation: string;
  profilePix: File | null;
  screenShot: File | null;
  agreedToTerms: boolean;
  socialShareCompleted: boolean;
}

export default function Stage1({ onBack }: Stage1Props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    password1: "",
    phone: "",
    gender: "",
    location: "",
    motivation: "",
    profilePix: null,
    screenShot: null,
    agreedToTerms: false,
    socialShareCompleted: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean | File
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (
    field: "profilePix" | "screenShot",
    files: FileList | null
  ) => {
    if (files && files[0]) {
      handleInputChange(field, files[0]);
    }
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (formData.password !== formData.password1) {
      setError("Passwords do not match");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }
    if (!formData.gender) {
      setError("Gender is required");
      return false;
    }
    if (!formData.location.trim()) {
      setError("Location is required");
      return false;
    }
    if (!formData.motivation.trim()) {
      setError("Motivation is required");
      return false;
    }
    if (!formData.profilePix) {
      setError("Profile picture is required");
      return false;
    }
    if (!formData.screenShot) {
      setError("Social media screenshot is required");
      return false;
    }
    if (!formData.agreedToTerms) {
      setError("Please accept the terms and conditions");
      return false;
    }
    if (!formData.socialShareCompleted) {
      setError("Please confirm you have shared on social media");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("password1", formData.password1);
      formDataToSend.append("full_name", formData.fullName);
      formDataToSend.append("agreed_to_terms", formData.agreedToTerms.toString());
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("motivation", formData.motivation);
      formDataToSend.append("profile_pix", formData.profilePix as File);
      formDataToSend.append("screen_shoot", formData.screenShot as File);
      formDataToSend.append("Phone", formData.phone);

      const response = await fetch("https://feelnigeriatourismexchange.onrender.com/api/user/register/", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit application");
      }

      showToast(
        "Application Submitted!",
        "Your stage 1 application has been submitted successfully.",
        "success"
      );

      // Navigate to stage 2 with the user email
      navigate("/connect/stage2", { state: { email: formData.email } });
      
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to submit application";
      setError(errorMessage);
      showToast("Error", errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="4xl">
        <Button onClick={onBack} variant="ghost" colorPalette="green" mb={6}>
          <ChevronLeft size={20} />
          Back to Dashboard
        </Button>

        <Box 
          bg="white" 
          shadow="xl" 
          borderRadius="2xl" 
          p={{ base: 6, md: 12 }}
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            backgroundImage: `url(${Logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.10,
            zIndex: 0,
            pointerEvents: "none"
          }}
        >
          <VStack gap={8} align="stretch" position="relative" zIndex={1}>
            <VStack textAlign="center" gap={4}>
              <Box bg="green.100" borderRadius="full" p={4}>
                <Share2 size={48} color="#16a34a" />
              </Box>
              <Heading as="h1" size="2xl" fontWeight="bold" color="gray.900">
                Stage 1: Sign Up & Share the Dream
              </Heading>
              <Text fontSize="xl" color="gray.600">
                The Hook
              </Text>
            </VStack>

            <Box bg="green.50" borderRadius="xl" p={6}>
              <Text color="gray.700" lineHeight="relaxed">
                This stage is all about declaring your interest and sharing your
                excitement!
              </Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack gap={8} align="stretch">
                <Box>
                  <Heading
                    as="h3"
                    size="lg"
                    fontWeight="semibold"
                    color="gray.900"
                    mb={4}
                  >
                    1. Create Your Profile
                  </Heading>

                  <VStack gap={4}>
                    <Field.Root required>
                      <Field.Label>Full Name</Field.Label>
                      <Input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        placeholder="Enter your full name"
                        size="lg"
                      />
                    </Field.Root>

                    <HStack gap={4} width="full">
                      <Field.Root required>
                        <Field.Label>Email Address</Field.Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="Enter your email"
                          size="lg"
                        />
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>Password</Field.Label>
                        <Input
                          type="password"
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                          placeholder="Create a password"
                          size="lg"
                        />
                      </Field.Root>
                    </HStack>

                    <HStack gap={4} width="full">
                      <Field.Root required>
                        <Field.Label>Confirm Password</Field.Label>
                        <Input
                          type="password"
                          value={formData.password1}
                          onChange={(e) =>
                            handleInputChange("password1", e.target.value)
                          }
                          placeholder="Confirm your password"
                          size="lg"
                        />
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>Phone Number</Field.Label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="Your phone number"
                          size="lg"
                        />
                      </Field.Root>
                    </HStack>

                    <HStack gap={4} width="full">
                      <Field.Root required>
                        <Field.Label>Gender</Field.Label>
                        <Input
                          type="text"
                          value={formData.gender}
                          onChange={(e) =>
                            handleInputChange("gender", e.target.value)
                          }
                          placeholder="e.g., Male, Female, Other"
                          size="lg"
                        />
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>Current Location</Field.Label>
                        <Input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          placeholder="City, Country"
                          size="lg"
                        />
                      </Field.Root>
                    </HStack>

                    <Field.Root required>
                      <Field.Label>Your Motivation</Field.Label>
                      <Textarea
                        value={formData.motivation}
                        onChange={(e) =>
                          handleInputChange("motivation", e.target.value)
                        }
                        placeholder="Share your story and primary motivation for wanting to visit Nigeria..."
                        rows={4}
                        size="lg"
                      />
                    </Field.Root>

                    <HStack gap={4} width="full">
                      <Field.Root required>
                        <Field.Label>Profile Picture</Field.Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange("profilePix", e.target.files)
                          }
                          size="lg"
                          pt={1}
                        />
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>Social Media Screenshot</Field.Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange("screenShot", e.target.files)
                          }
                          size="lg"
                          pt={1}
                        />
                      </Field.Root>
                    </HStack>
                  </VStack>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="lg"
                    fontWeight="semibold"
                    color="gray.900"
                    mb={4}
                  >
                    2. Agree to the Terms
                  </Heading>

                  <VStack gap={3} align="start">
                    <CustomCheckbox
                      checked={formData.agreedToTerms}
                      onChange={(checked) =>
                        handleInputChange("agreedToTerms", checked)
                      }
                      size="lg"
                    >
                      <Text fontSize="md">
                        I acknowledge and accept the terms and conditions
                      </Text>
                    </CustomCheckbox>
                  </VStack>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="lg"
                    fontWeight="semibold"
                    color="gray.900"
                    mb={4}
                  >
                    3. Go Viral
                  </Heading>

                  <Box
                    bg="yellow.50"
                    border="1px solid"
                    borderColor="yellow.200"
                    borderRadius="lg"
                    p={4}
                    mb={4}
                  >
                    <Text fontWeight="semibold" mb={2}>
                      MANDATORY:
                    </Text>
                    <Text fontSize="sm">
                      Follow us and share your application on at least one
                      social media platform (e.g., X, Instagram, Facebook) using
                      the hashtag{" "}
                      <Text as="span" fontWeight="bold" color="yellow.700">
                        #FeelNigeriaExchange
                      </Text>{" "}
                      to unlock the next stage.
                    </Text>
                  </Box>

                  <Box
                    bg="green.50"
                    border="2px"
                    borderColor="green.200"
                    borderRadius="lg"
                    p={4}
                  >
                    <CustomCheckbox
                      checked={formData.socialShareCompleted}
                      onChange={(checked) =>
                        handleInputChange("socialShareCompleted", checked)
                      }
                      size="lg"
                    >
                      <HStack>
                        <CheckCircle size={20} color="#16a34a" />
                        <Text fontSize="md">
                          I have shared my application on social media with
                          #FeelNigeriaExchange
                        </Text>
                      </HStack>
                    </CustomCheckbox>
                  </Box>
                </Box>

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

                <Flex justify="flex-end">
                  <Button
                    type="submit"
                    colorPalette="green"
                    size="lg"
                    px={8}
                    loading={loading}
                    loadingText="Submitting..."
                  >
                    Submit & Continue
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
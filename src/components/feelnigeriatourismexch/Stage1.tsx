import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
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
import { useNavigate } from "react-router-dom";
import { Share2, CheckCircle, ChevronLeft, Check } from "lucide-react";
import { tourismExchangeService } from "../../services/tourism-exchange-service";

// Simple toast notification
const showToast = (
  title: string,
  description: string,
  type: "success" | "error"
) => {
  console.log(`${type.toUpperCase()}: ${title} - ${description}`);
  if (type === "success") {
    alert(`✓ ${title}\n${description}`);
  } else {
    alert(`✗ ${title}\n${description}`);
  }
};

// Custom Checkbox Component (keep the same)
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
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleFileChange = (
    field: "profilePix" | "screenShot",
    files: FileList | null
  ) => {
    if (files && files[0]) {
      // Validate file size (max 5MB)
      if (files[0].size > 5 * 1024 * 1024) {
        setError(`File size too large. Please select a file smaller than 5MB.`);
        return;
      }
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
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
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
    if (formData.motivation.length < 50) {
      setError(
        "Please provide a more detailed motivation (at least 50 characters)"
      );
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

  // In Stage1.tsx - Update the handleSubmit function navigation part
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  if (!validateForm()) {
    return;
  }

  setLoading(true);

  try {
    const formDataToSend = new FormData();

    // Append all form data with correct field names
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("password1", formData.password1);
    formDataToSend.append("full_name", formData.fullName);
    formDataToSend.append("agreed_to_terms", formData.agreedToTerms.toString());
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("motivation", formData.motivation);
    formDataToSend.append("phone", formData.phone);

    // Append files with proper field names
    if (formData.profilePix) {
      formDataToSend.append("profile_pix", formData.profilePix);
    }
    if (formData.screenShot) {
      formDataToSend.append("screen_shoot", formData.screenShot);
    }

    console.log("Submitting form data...");

    // Use the tourism exchange service
    const result = await tourismExchangeService.register(formDataToSend);

    console.log("Registration successful:", result);

    showToast(
      "Application Submitted!",
      "Your stage 1 application has been submitted successfully.",
      "success"
    );

    // Store registration data for Stage2
    localStorage.setItem('stage1_email', formData.email);
    localStorage.setItem('stage1_applicationId', result.profile_id || result.id || '');

    // Navigate to stage 2 with the user email - FIXED NAVIGATION
    navigate("/connect/stage2", {
      state: {
        email: formData.email,
        applicationId: result.profile_id || result.id || '',
      },
      replace: true // This prevents going back to the form
    });

  } catch (err: unknown) {
    // ... error handling remains the same
  } finally {
    setLoading(false);
  }
};

React.useEffect(() => {
  // Only run in development and if you want to test
  if (process.env.NODE_ENV === 'development') {
    // You can call testRegistration here temporarily, or use a button to trigger it
    console.log('Development mode - registration debugging available');
  }
}, []);

// Or add a hidden debug button (remove in production)
// const debugRegistration = async () => {
//   console.log('=== DEBUG REGISTRATION ===');
  
//   const testFormData = new FormData();
//   testFormData.append("email", "test@example.com");
//   testFormData.append("password", "password123");
//   testFormData.append("password1", "password123");
//   testFormData.append("full_name", "Test User");
//   testFormData.append("agreed_to_terms", "true");
//   testFormData.append("gender", "Male");
//   testFormData.append("location", "Test City");
//   testFormData.append("motivation", "This is a test motivation with more than 50 characters for testing purposes.");
//   testFormData.append("phone", "1234567890");

//   // Create simple test files
//   const blob = new Blob(['test image content'], { type: 'image/png' });
//   const testFile = new File([blob], 'test.png', { type: 'image/png' });
  
//   testFormData.append("profile_pix", testFile);
//   testFormData.append("screen_shoot", testFile);

//   console.log('Test FormData contents:');
//   for (let [key, value] of testFormData.entries()) {
//     console.log(`${key}:`, value);
//   }

//   try {
//     const result = await tourismExchangeService.register(testFormData);
//     console.log("✅ Test registration successful:", result);
//     alert('Test registration successful! Check console for details.');
//   } catch (error) {
//     console.error("❌ Test registration failed:", error);
//     alert('Test registration failed. Check console for error details.');
//   }
// };

// Call this function temporarily to test

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
            opacity: 0.1,
            zIndex: 0,
            pointerEvents: "none",
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
                          placeholder="Create a password (min. 6 characters)"
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
                        <select
                          value={formData.gender}
                          onChange={(e) =>
                            handleInputChange("gender", e.target.value)
                          }
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            border: "2px solid #E2E8F0",
                            borderRadius: "8px",
                            fontSize: "16px",
                            backgroundColor: "white",
                          }}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
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
                      <Field.Label>
                        Your Motivation (Minimum 50 characters)
                        <Text fontSize="sm" color="gray.500" mt={1}>
                          {formData.motivation.length}/50 characters
                        </Text>
                      </Field.Label>

                      <Textarea
                        value={formData.motivation}
                        onChange={(e) =>
                          handleInputChange("motivation", e.target.value)
                        }
                        placeholder="Share your story and primary motivation..."
                        rows={4}
                        size="lg"
                        data-invalid={
                          formData.motivation.length > 0 &&
                          formData.motivation.length < 50
                            ? "true"
                            : undefined
                        }
                        _invalid={{
                          borderColor: "red.500",
                          boxShadow: "0 0 0 1px red",
                        }}
                      />
                    </Field.Root>

                    <HStack gap={4} width="full">
                      <Field.Root required>
                        <Field.Label>Profile Picture (Max 5MB)</Field.Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange("profilePix", e.target.files)
                          }
                          size="lg"
                          pt={1}
                        />
                        {formData.profilePix && (
                          <Text fontSize="sm" color="green.600" mt={1}>
                            Selected: {formData.profilePix.name}
                          </Text>
                        )}
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>
                          Social Media Screenshot (Max 5MB)
                        </Field.Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange("screenShot", e.target.files)
                          }
                          size="lg"
                          pt={1}
                        />
                        {formData.screenShot && (
                          <Text fontSize="sm" color="green.600" mt={1}>
                            Selected: {formData.screenShot.name}
                          </Text>
                        )}
                      </Field.Root>
                    </HStack>
                  </VStack>
                </Box>

                {/* Rest of the component remains the same */}
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
                    disabled={loading}
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

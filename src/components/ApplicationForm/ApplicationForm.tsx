// components/ApplicationForm/ApplicationForm.tsx
import { useState } from "react";
import { Box, Container, VStack } from "@chakra-ui/react";
import { useApplication } from "../../hooks/useApplication";
import { useStepNavigation } from "../../hooks/useStepNavigation";
import { ApplicationData } from "../../types/application";
import ProgressStepper from "./ProgressStepper";
import Step1PersonalDetails from "./Step1PersonalDetails";
import Step2TravelVisa from "./Step2TravelVisa";
import Step3BackgroundMotivation from "./Step3BackgroundMotivation";
import Step4MediaSocial from "./Step4MediaSocial";
import ReviewSubmit from "./ReviewSubmit";

const ApplicationForm = () => {
  const [formData, setFormData] = useState<ApplicationData>({
    step1: {
      nationality: "",
      country_of_residence: "",
      date_of_birth: "",
      gender: "M",
      phone: "",
    },
    step2: {
      passport_number: "",
      passport_expiration: "",
      visa_history: false,
      travel_history: "",
    },
    step3: {
      motivation: "",
      profession: "",
      hobbies: "",
    },
    step4: {
      instagram: "",
      tiktok: "",
      youtube: "",
      intro_video: null,
    },
    bvn: {
      has_bvn: false,
      bvn: "",
    },
  });

  const { currentStep, nextStep, prevStep, goToStep } = useStepNavigation(5);
  const {
    saveStep1,
    saveStep2,
    saveStep3,
    saveStep4,
    submitApplication,
    error,
  } = useApplication();

  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Travel & Visa" },
    { number: 3, title: "Background" },
    { number: 4, title: "Media" },
    { number: 5, title: "Review & Submit" },
  ];

  const handleStep1Change = (data: ApplicationData["step1"]) => {
    setFormData({ ...formData, step1: data });
  };

  const handleStep2Change = (data: ApplicationData["step2"]) => {
    setFormData({ ...formData, step2: data });
  };

  const handleStep3Change = (data: ApplicationData["step3"]) => {
    setFormData({ ...formData, step3: data });
  };

  const handleStep4Change = (data: ApplicationData["step4"]) => {
    setFormData({ ...formData, step4: data });
  };

  const handleEditStep = (step: number) => {
    goToStep(step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1PersonalDetails
            data={formData.step1}
            onChange={handleStep1Change}
            onSave={async (data) => {
              await saveStep1(data);
              return;
            }}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <Step2TravelVisa
            data={formData.step2}
            onChange={handleStep2Change}
            onSave={async (data) => {
              await saveStep2(data);
              return;
            }}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <Step3BackgroundMotivation
            data={formData.step3}
            onChange={handleStep3Change}
            onSave={async (data) => {
              await saveStep3(data);
              return;
            }}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <Step4MediaSocial
            data={formData.step4}
            onChange={handleStep4Change}
            onSave={async (data) => {
              await saveStep4(data);
              return;
            }}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <ReviewSubmit
            data={formData}
            onSubmit={submitApplication}
            onPrev={prevStep}
            onEdit={handleEditStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxW="4xl" py={8}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Feel Nigeria Application
          </h1>
          <p style={{ color: "#666" }}>
            Complete your application in 5 simple steps
          </p>
        </Box>

        <ProgressStepper currentStep={currentStep} steps={steps} />

        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="md"
          border="1px solid"
          borderColor="gray.200"
        >
          {renderStep()}
        </Box>

        {error && (
          <Box
            p={4}
            borderRadius="md"
            bg="red.50"
            border="1px solid"
            borderColor="red.200"
            color="red.800"
          >
            {error}
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default ApplicationForm;
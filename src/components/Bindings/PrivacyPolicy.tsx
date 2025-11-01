import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="4xl">
        <VStack gap={8} align="start">
          {/* Header */}
          <Box textAlign="center" w="100%">
            <Heading as="h1" size="2xl" color="#2b2e32" mb={4}>
              Privacy Policy
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Last updated: September 15, 2025
            </Text>
          </Box>

          <Box w="100%" borderBottom="1px" borderColor="gray.200" />

          {/* Content */}
          <VStack gap={6} align="start" w="100%">
            {/* Section 1 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                1. Introduction
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                This Privacy Policy describes how Feel Nigeria Media Limited ("we," "us," or "our") 
                collects, uses, and protects the personal information of users ("you") who visit and 
                interact with our website, www.feelnigeria.com (the "Website"). We are committed to 
                protecting your privacy and handling your data in a transparent and secure manner.
              </Text>
            </Box>

            {/* Section 2 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                2. Information We Collect
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                We may collect personal information that you voluntarily provide to us when you use 
                our Website. The types of information we may collect include:
              </Text>
              <VStack gap={2} align="start" pl={4} color="gray.700">
                <Box>
                  <Text as="span" fontWeight="medium">• Personal Identification Information:</Text> 
                  {" "}Your name, email address, phone number, and any other contact details you provide.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Application Information:</Text> 
                  {" "}Details you submit when applying to be a participant or host family on our TV show.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Usage Data:</Text> 
                  {" "}Information about how you access and use the Website, such as your IP address, 
                  browser type, device information, and pages you visit. This data is collected 
                  automatically through cookies and similar tracking technologies.
                </Box>
              </VStack>
            </Box>

            {/* Section 3 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                3. How We Use Your Information
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                We use the information we collect for various purposes, including:
              </Text>
              <VStack gap={2} align="start" pl={4} color="gray.700">
                <Box>
                  <Text as="span" fontWeight="medium">• To Provide and Manage Services:</Text> 
                  {" "}To operate and maintain the Website, process your applications, and provide you 
                  with the services you request.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• To Communicate With You:</Text> 
                  {" "}To respond to your inquiries, send you updates about the Feel Nigeria project, 
                  and provide customer support.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• To Improve Our Website:</Text> 
                  {" "}To analyze user behavior and trends, and to enhance the functionality and content 
                  of the Website.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• For Marketing and Promotion:</Text> 
                  {" "}To send you promotional materials about our initiatives, products, or services 
                  that may be of interest to you. You will always have the option to opt out of 
                  these communications.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• To Ensure Security:</Text> 
                  {" "}To monitor and protect the security and integrity of our Website and to prevent 
                  fraudulent or illegal activities.
                </Box>
              </VStack>
            </Box>

            {/* Section 4 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                4. How We Share Your Information
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                We do not sell, trade, or otherwise transfer your personal information to outside 
                parties without your explicit consent, except in the following circumstances:
              </Text>
              <VStack gap={2} align="start" pl={4} color="gray.700">
                <Box>
                  <Text as="span" fontWeight="medium">• Third-Party Service Providers:</Text> 
                  {" "}We may share your data with trusted third-party service providers who assist us 
                  in operating our Website and conducting our business, such as web hosting companies 
                  or email service providers. These parties are contractually obligated to keep your 
                  information confidential.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Legal Requirements:</Text> 
                  {" "}We may disclose your information if required to do so by law or in response to 
                  valid requests by public authorities (e.g., a court order or government agency).
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Business Transfers:</Text> 
                  {" "}In the event of a merger, acquisition, or sale of all or a portion of our assets, 
                  your personal information may be transferred to the new owner.
                </Box>
              </VStack>
            </Box>

            {/* Section 5 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                5. Data Security
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                We implement a variety of security measures to maintain the safety of your personal 
                information. These measures include using secure servers, data encryption, and 
                restricted access to data. However, please be aware that no method of transmission 
                over the internet or electronic storage is 100% secure.
              </Text>
            </Box>

            {/* Section 6 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                6. Your Data Protection Rights
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                You have certain rights regarding your personal information, including:
              </Text>
              <VStack gap={2} align="start" pl={4} color="gray.700">
                <Box>
                  <Text as="span" fontWeight="medium">• The Right to Access:</Text> 
                  {" "}You can request a copy of the personal data we hold about you.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• The Right to Rectification:</Text> 
                  {" "}You can request that we correct any information you believe is inaccurate or incomplete.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• The Right to Erasure:</Text> 
                  {" "}You can request that we delete your personal data under certain conditions.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• The Right to Restrict Processing:</Text> 
                  {" "}You can request that we restrict the processing of your personal data under certain conditions.
                </Box>
              </VStack>
              <Text color="gray.700" lineHeight="tall" mt={4}>
                To exercise any of these rights, please contact us using the information provided below.
              </Text>
            </Box>

            {/* Section 7 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                7. Changes to This Privacy Policy
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                We may update our Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page. You are advised to review this Privacy 
                Policy periodically for any changes. Changes to this Privacy Policy are effective when 
                they are posted on this page.
              </Text>
            </Box>

            {/* Section 8 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                8. Contact Information
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                If you have any questions about this Privacy Policy, please contact us at:
              </Text>
              <VStack gap={2} align="start" color="gray.700">
                <Text fontWeight="medium">Feel Nigeria Media Limited</Text>
                <Text>20, Ajasa Street off King George IV</Text>
                <Text>Onikan Lagos Nigeria</Text>
                <Text>Email: info@feelnigeria.com</Text>
                <Text>Phone: +234 803 475 1038</Text>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
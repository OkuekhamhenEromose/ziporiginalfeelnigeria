import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const TermsAndConditions = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="4xl">
        <VStack gap={8} align="start">
          {/* Header */}
          <Box textAlign="center" w="100%">
            <Heading as="h1" size="2xl" color="#2b2e32" mb={4}>
              Terms and Conditions
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
                1. Acceptance of Terms
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                Welcome to www.feelnigeria.com (the "Website"), owned and operated by Feel Nigeria 
                Media Limited ("we," "us," or "our"). By accessing or using this Website, you agree 
                to be bound by these Terms and Conditions ("Terms"). If you do not agree to these 
                Terms, you must not use this Website.
              </Text>
            </Box>

            {/* Section 2 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                2. Use of the Website
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                You agree to use this Website only for lawful purposes and in a manner that does not 
                infringe upon the rights of others, or restrict or inhibit anyone else's use and 
                enjoyment of the Website. Prohibited behavior includes harassing or causing distress 
                or inconvenience to any person, transmitting obscene or offensive content, or 
                disrupting the normal flow of dialogue within this Website.
              </Text>
            </Box>

            {/* Section 3 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                3. Intellectual Property
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                All content on this Website, including but not limited to text, graphics, logos, 
                images, and software, is the property of Feel Nigeria Media Limited or its content 
                suppliers and is protected by international copyright laws. The "Feel Nigeria" and 
                "ZipCash" names and logos are trademarks of Feel Nigeria Media Limited. You may not 
                use these trademarks without our prior written permission.
              </Text>
            </Box>

            {/* Section 4 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                4. User Content
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                Any content you submit to this Website, including applications, comments, or other 
                materials, must be accurate, truthful, and not misleading. You grant us a non-exclusive, 
                royalty-free, perpetual, and worldwide license to use, reproduce, modify, and publish 
                such content in connection with the operation of the Website and for promotional 
                purposes related to the Feel Nigeria project.
              </Text>
            </Box>

            {/* Section 5 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                5. Limitation of Liability
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                The Website and its content are provided on an "as is" and "as available" basis without 
                any warranties of any kind, either express or implied. Feel Nigeria Media Limited, its 
                directors, employees, and agents will not be liable for any damages, including, without 
                limitation, indirect or consequential damages, arising from the use or inability to use 
                the Website.
              </Text>
            </Box>

            {/* Section 6 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                6. Indemnity
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                You agree to indemnify and hold harmless Feel Nigeria Media Limited and its affiliates, 
                directors, employees, and agents from and against any and all claims, liabilities, 
                damages, losses, or expenses, including legal fees and costs, arising out of or in any 
                way connected with your access to or use of the Website.
              </Text>
            </Box>

            {/* Section 7 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                7. Governing Law and Jurisdiction
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                These Terms shall be governed by and construed in accordance with the laws of the 
                Federal Republic of Nigeria. You agree that any legal action or proceeding related to 
                this Website shall be brought exclusively in the courts of Nigeria.
              </Text>
            </Box>

            {/* Section 8 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                8. Changes to Terms
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                We reserve the right to modify these Terms at any time without prior notice. Your 
                continued use of the Website following any such changes constitutes your acceptance 
                of the new Terms.
              </Text>
            </Box>

            {/* Section 9 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                9. Contact Information
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;
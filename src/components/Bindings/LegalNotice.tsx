import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const LegalNotice = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="4xl">
        <VStack gap={8} align="start">
          {/* Header */}
          <Box textAlign="center" w="100%">
            <Heading as="h1" size="2xl" color="#2b2e32" mb={4}>
              Legal Notice & Terms of Use
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
                Welcome to the Feel Nigeria website www.feelnigeria.com (the website). 
                This Website is owned and operated by Feel Nigeria Media Limited, a company 
                registered in Nigeria. By accessing and using this Website, you agree to be 
                bound by the following terms, conditions, and disclaimers. If you do not agree 
                with these terms, you must not use this Website.
              </Text>
            </Box>

            {/* Section 2 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                2. Intellectual Property Rights
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                The content, design, graphics, and other materials on this Website, including 
                but not limited to the "Feel Nigeria" and "ZipCash" brand names, logos, text, 
                and video content, are the intellectual property of Feel Nigeria Media Limited. 
                They are protected by copyright, trademark, and other intellectual property laws. 
                You may not copy, reproduce, distribute, or otherwise use any of this material 
                without the prior written consent of Feel Nigeria Media Limited.
              </Text>
            </Box>

            {/* Section 3 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                3. Disclaimer of Warranties
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                The information provided on this Website is for general informational purposes only. 
                While we strive to ensure the accuracy of the information, we make no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, 
                reliability, suitability, or availability of the information, products, services, 
                or related graphics contained on the Website for any purpose. Any reliance you place 
                on such information is therefore strictly at your own risk.
              </Text>
            </Box>

            {/* Section 4 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                4. Limitation of Liability
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                To the fullest extent permitted by law, Feel Nigeria Media Limited and its directors, 
                employees, and agents shall not be liable for any direct, indirect, incidental, special, 
                or consequential damages arising from your use of this Website or the information 
                contained herein. This includes, but is not limited to, damages for loss of profits, 
                data, or other intangible losses, even if we have been advised of the possibility of 
                such damages.
              </Text>
            </Box>

            {/* Section 5 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                5. Third-Party Links
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                This Website may contain links to third-party websites that are not owned or controlled 
                by Feel Nigeria Media Limited. We have no control over, and assume no responsibility for, 
                the content, privacy policies, or practices of any third-party websites. You acknowledge 
                and agree that Feel Nigeria Media Limited shall not be responsible or liable, directly 
                or indirectly, for any damage or loss caused or alleged to be caused by or in connection 
                with the use of or reliance on any such content, goods, or services available on or 
                through any such websites.
              </Text>
            </Box>

            {/* Section 6 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                6. Governing Law
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                This legal notice and all matters relating to your access to and use of the Website 
                are governed by and construed in accordance with the laws of the Federal Republic of 
                Nigeria. Any legal action or proceeding relating to this Website shall be brought 
                exclusively in the courts of Nigeria.
              </Text>
            </Box>

            {/* Section 7 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                7. Contact Information
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                For any legal inquiries regarding this notice, please contact us at:
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

export default LegalNotice;
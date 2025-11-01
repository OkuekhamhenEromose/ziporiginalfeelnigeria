import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const CookiePolicy = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="4xl">
        <VStack gap={8} align="start">
          {/* Header */}
          <Box textAlign="center" w="100%">
            <Heading as="h1" size="2xl" color="#2b2e32" mb={4}>
              Cookie Policy
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
                1. What are Cookies?
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit a website. They are widely used to make websites work more efficiently and 
                to provide information to the owners of the site. They help us remember your preferences, 
                understand how you interact with our website, and improve your overall experience.
              </Text>
            </Box>

            {/* Section 2 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                2. How We Use Cookies
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                We use cookies for the following purposes:
              </Text>
              <VStack gap={2} align="start" pl={4} color="gray.700">
                <Box>
                  <Text as="span" fontWeight="medium">• Functionality:</Text> 
                  {" "}These cookies are essential for the operation of our Website. They allow you to 
                  navigate the site and use its features, such as accessing secure areas or 
                  submitting forms.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Performance and Analytics:</Text> 
                  {" "}We use these cookies to collect information about how visitors use our Website. 
                  This includes things like which pages are most popular, the time spent on the 
                  site, and any errors that occur. This information helps us to improve the 
                  performance and design of the Website.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Targeting and Advertising:</Text> 
                  {" "}These cookies are used to deliver relevant advertisements to you and to measure 
                  the effectiveness of our advertising campaigns. They may also be used to track 
                  your visits to other websites.
                </Box>
              </VStack>
            </Box>

            {/* Section 3 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                3. Types of Cookies We Use
              </Heading>
              <VStack gap={3} align="start" pl={4} color="gray.700">
                <Box>
                  <Text as="span" fontWeight="medium">• Session Cookies:</Text> 
                  {" "}These are temporary cookies that remain in the cookie file of your browser only 
                  until you close the browser. They are used for purposes like carrying information 
                  across pages to avoid you having to re-enter it.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Persistent Cookies:</Text> 
                  {" "}These cookies remain in your browser's cookie file even after the browser is closed. 
                  The length of time a cookie stays on your device depends on its lifespan. They are 
                  used to recognize you when you return to the Website.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• First-Party Cookies:</Text> 
                  {" "}These are cookies set by our Website directly.
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Third-Party Cookies:</Text> 
                  {" "}These are cookies set by a third party, such as a social media network or an 
                  analytics provider. For example, we might use Google Analytics to help us understand 
                  how visitors engage with the Website.
                </Box>
              </VStack>
            </Box>

            {/* Section 4 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                4. Your Cookie Choices
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                Most web browsers automatically accept cookies, but you can usually modify your browser 
                settings to decline cookies if you prefer. However, if you choose to block or delete 
                cookies, some parts of the Website may not function properly.
              </Text>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                You can manage your cookie preferences through your browser settings:
              </Text>
              <VStack gap={2} align="start" pl={4} color="gray.700">
                <Box>
                  <Text as="span" fontWeight="medium">• Google Chrome:</Text> Settings &gt; Privacy and security &gt; Cookies and other site data
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Mozilla Firefox:</Text> Options &gt; Privacy & Security &gt; Cookies and Site Data
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Microsoft Edge:</Text> Settings &gt; Privacy, search, and services &gt; Clear browsing data
                </Box>
                <Box>
                  <Text as="span" fontWeight="medium">• Apple Safari:</Text> Preferences &gt; Privacy
                </Box>
              </VStack>
              <Text color="gray.700" lineHeight="tall" mt={4}>
                You may also be able to use third-party tools to manage or opt-out of certain cookies.
              </Text>
            </Box>

            {/* Section 5 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                5. Changes to this Cookie Policy
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any changes 
                by posting the new policy on this page.
              </Text>
            </Box>

            {/* Section 6 */}
            <Box>
              <Heading as="h2" size="lg" color="#2d7a4f" mb={4}>
                6. Contact Us
              </Heading>
              <Text color="gray.700" lineHeight="tall" mb={4}>
                If you have any questions about this Cookie Policy, please contact us at:
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

export default CookiePolicy;
// // components/ZipCashFunding/CardSuccess.tsx
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Button,
//   VStack,
// } from "@chakra-ui/react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { CheckCircle2, Mail, Home } from "lucide-react";

// const CardSuccess = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const accountNumber = location.state?.accountNumber || "**********";
  
//   // Generate a mock pickup token
//   const pickupToken = `PTB-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

//   return (
//     <Box minH="100vh" bg="white">
//       <Container maxW="2xl" py={12} pt={48}>
//         <Box
//           bg="white"
//           boxShadow="xl"
//           borderRadius="xl"
//           border="1px"
//           borderColor="gray.200"
//           maxW="lg"
//           w="100%"
//         >
//           {/* Card Header */}
//           <Box textAlign="center" p={6} borderBottom="1px" borderColor="gray.200">
//             <Box
//               w={20}
//               h={20}
//               borderRadius="full"
//               bg="#2d7a4f"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               mx="auto"
//               mb={4}
//             >
//               <CheckCircle2 size={48} color="white" />
//             </Box>
//             <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
//               Card Issued Successfully!
//             </Heading>
//             <Text color="gray.600" fontSize="md">
//               Your FeelNigeria debit card has been issued
//             </Text>
//           </Box>

//           {/* Card Body */}
//           <Box p={6}>
//             <VStack gap={6} align="stretch">
//               {/* Success Alert */}
//               <Box
//                 p={4}
//                 borderRadius="md"
//                 bg="green.50"
//                 border="1px"
//                 borderColor="green.200"
//               >
//                 <Heading as="h3" size="sm" color="green.800" mb={2}>
//                   Payment Successful
//                 </Heading>
//                 <Text fontSize="sm" color="green.700">
//                   Your account {accountNumber} has been debited and your card has been issued.
//                 </Text>
//               </Box>

//               {/* Pickup Token Information */}
//               <Box
//                 p={5}
//                 borderRadius="md"
//                 bg="gray.50"
//                 border="1px"
//                 borderColor="gray.300"
//               >
//                 <Box display="flex" alignItems="center" mb={3}>
//                   <Mail size={20} color="#2d7a4f" />
//                   <Heading as="h3" size="sm" color="#2b2e32" ml={2}>
//                     Pickup Token
//                   </Heading>
//                 </Box>
//                 <Box
//                   p={3}
//                   bg="white"
//                   borderRadius="md"
//                   border="2px"
//                   borderColor="#2d7a4f"
//                   textAlign="center"
//                   mb={3}
//                 >
//                   <Text
//                     fontSize="2xl"
//                     fontWeight="bold"
//                     color="#2d7a4f"
//                     letterSpacing="wider"
//                     fontFamily="mono"
//                   >
//                     {pickupToken}
//                   </Text>
//                 </Box>
//                 <Text fontSize="sm" color="gray.600">
//                   A pickup token has been sent to your registered email address. Please use this
//                   token to collect your card from any PremiumTrust Bank branch.
//                 </Text>
//               </Box>

//               {/* Next Steps */}
//               <Box
//                 p={4}
//                 borderRadius="md"
//                 bg="blue.50"
//                 border="1px"
//                 borderColor="blue.200"
//               >
//                 <Heading as="h3" size="sm" color="blue.800" mb={3}>
//                   Next Steps
//                 </Heading>
//                 <VStack align="start" gap={2}>
//                   <Text fontSize="sm" color="blue.700">
//                     1. Check your email for the pickup token and confirmation details
//                   </Text>
//                   <Text fontSize="sm" color="blue.700">
//                     2. Visit any PremiumTrust Bank branch with a valid ID
//                   </Text>
//                   <Text fontSize="sm" color="blue.700">
//                     3. Present your pickup token to collect your card
//                   </Text>
//                   <Text fontSize="sm" color="blue.700">
//                     4. Activate your card following the instructions provided
//                   </Text>
//                 </VStack>
//               </Box>

//               {/* Action Buttons */}
//               <VStack gap={3}>
//                 <Button
//                   size="lg"
//                   bg="#2d7a4f"
//                   color="white"
//                   w="100%"
//                   onClick={() => navigate("/")}
//                   _hover={{
//                     bg: "#246139",
//                     transform: "translateY(-2px)",
//                     boxShadow: "lg",
//                   }}
//                   transition="all 0.3s ease"
//                 >
//                   <Home size={20} style={{ marginRight: 8 }} />
//                   Return to Home
//                 </Button>

//                 <Button
//                   variant="outline"
//                   size="md"
//                   w="100%"
//                   borderColor="#2d7a4f"
//                   color="#2d7a4f"
//                   onClick={() => {
//                     // Copy token to clipboard
//                     navigator.clipboard.writeText(pickupToken);
//                     alert("Pickup token copied to clipboard!");
//                   }}
//                   _hover={{
//                     bg: "gray.50",
//                   }}
//                 >
//                   Copy Pickup Token
//                 </Button>
//               </VStack>

//               {/* Support Information */}
//               <Box textAlign="center" pt={4}>
//                 <Text fontSize="sm" color="gray.600">
//                   Need help? Contact{" "}
//                   <Text as="span" color="#2d7a4f" fontWeight="semibold">
//                     support@feelnigeria.com
//                   </Text>
//                 </Text>
//               </Box>
//             </VStack>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default CardSuccess;
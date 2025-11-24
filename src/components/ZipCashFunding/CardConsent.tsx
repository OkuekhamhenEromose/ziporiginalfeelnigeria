// // components/ZipCashFunding/CardConsent.tsx
// import { useState } from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Button,
//   VStack,
//   Checkbox,
//   Field,
// } from "@chakra-ui/react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { CreditCard } from "lucide-react";

// const CardConsent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const accountNumber = location.state?.accountNumber || "**********";
//   const [hasConsent, setHasConsent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const cardIssuanceFee = "₦1,000"; // Example fee

//   const handleGetCard = async () => {
//     if (!hasConsent) {
//       return;
//     }

//     setIsLoading(true);

//     // Simulate checking balance and processing card issuance
//     setTimeout(() => {
//       setIsLoading(false);
//       // Randomly simulate success or insufficient funds for demo
//       const hasInsufficientFunds = Math.random() > 0.7; // 30% chance of insufficient funds
      
//       if (hasInsufficientFunds) {
//         navigate("/insufficient-funds", { state: { accountNumber } });
//       } else {
//         navigate("/card-success", { state: { accountNumber } });
//       }
//     }, 2500);
//   };

//   const handleConsentChange = (checked: boolean) => {
//     setHasConsent(checked);
//   };

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
//               w={16}
//               h={16}
//               borderRadius="full"
//               bg="#2d7a4f"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               mx="auto"
//               mb={4}
//             >
//               <CreditCard size={32} color="white" />
//             </Box>
//             <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
//               Get Your Debit Card
//             </Heading>
//             <Text color="gray.600" fontSize="md">
//               Review the terms and proceed with card issuance
//             </Text>
//           </Box>

//           {/* Card Body */}
//           <Box p={6}>
//             <VStack gap={6} align="stretch">
//               {/* Information Alert */}
//               <Box
//                 p={4}
//                 borderRadius="md"
//                 bg="blue.50"
//                 border="1px"
//                 borderColor="blue.200"
//               >
//                 <Heading as="h3" size="sm" color="blue.800" mb={2}>
//                   Card Issuance Details
//                 </Heading>
//                 <VStack align="start" gap={1}>
//                   <Text fontSize="sm" color="blue.700">
//                     Account: {accountNumber}
//                   </Text>
//                   <Text fontSize="sm" color="blue.700">
//                     Issuance Fee: {cardIssuanceFee}
//                   </Text>
//                 </VStack>
//               </Box>

//               {/* Terms and Conditions */}
//               <Box
//                 p={4}
//                 borderRadius="md"
//                 bg="gray.50"
//                 border="1px"
//                 borderColor="gray.200"
//                 maxH="200px"
//                 overflowY="auto"
//               >
//                 <Heading as="h3" size="sm" color="#2b2e32" mb={3}>
//                   Terms & Conditions
//                 </Heading>
//                 <VStack align="start" gap={2}>
//                   <Text fontSize="sm" color="gray.700">
//                     • A one-time card issuance fee of {cardIssuanceFee} will be debited from your
//                     account.
//                   </Text>
//                   <Text fontSize="sm" color="gray.700">
//                     • Your account must have sufficient balance to cover the issuance fee.
//                   </Text>
//                   <Text fontSize="sm" color="gray.700">
//                     • Once issued, a pickup token will be sent to your registered email address.
//                   </Text>
//                   <Text fontSize="sm" color="gray.700">
//                     • Card activation and usage are subject to PremiumTrust Bank's terms and
//                     conditions.
//                   </Text>
//                   <Text fontSize="sm" color="gray.700">
//                     • Your personal information will be used in accordance with our privacy policy.
//                   </Text>
//                 </VStack>
//               </Box>

//               {/* Consent Checkbox */}
//               <Field.Root>
//                 <Checkbox.Root
//                   checked={hasConsent}
//                   onCheckedChange={({ checked }) => handleConsentChange(!!checked)}
//                   colorPalette="green"
//                 >
//                   <Checkbox.HiddenInput />
//                   <Checkbox.Control />
//                   <Checkbox.Label>
//                     <Text fontSize="sm" color="#2b2e32">
//                       I agree to the terms and conditions and authorize the debit of {cardIssuanceFee}{" "}
//                       from my account
//                     </Text>
//                   </Checkbox.Label>
//                 </Checkbox.Root>
//               </Field.Root>

//               {/* Action Buttons */}
//               <Button
//                 size="lg"
//                 bg="#2d7a4f"
//                 color="white"
//                 w="100%"
//                 onClick={handleGetCard}
//                 loading={isLoading}
//                 loadingText="Processing..."
//                 disabled={!hasConsent}
//                 _hover={{
//                   bg: "#246139",
//                   transform: "translateY(-2px)",
//                   boxShadow: "lg",
//                 }}
//                 transition="all 0.3s ease"
//               >
//                 Get Debit Card
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="md"
//                 color="gray.600"
//                 onClick={() => navigate("/otp-verification", { state: { accountNumber } })}
//               >
//                 Back
//               </Button>
//             </VStack>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default CardConsent;
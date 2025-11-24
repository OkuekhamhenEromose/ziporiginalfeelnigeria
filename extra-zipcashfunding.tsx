// // components/ZipCashFunding/AccountSetup.tsx
// import { useState } from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Button,
//   VStack,
//   Input,
//   HStack,
//   Spinner,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const AccountSetup = () => {
//   const navigate = useNavigate();
//   const [accountNumber, setAccountNumber] = useState("");
//   const [isValidating, setIsValidating] = useState(false);
//   const [accountDetails, setAccountDetails] = useState<{
//     name: string;
//     email: string;
//   } | null>(null);

//   const showToast = (title: string, description: string, status: "error" | "success") => {
//     // Simple toast simulation since useToast doesn't exist in v3
//     console.log(`${status.toUpperCase()}: ${title} - ${description}`);
//   };

//   const validateAccount = async () => {
//     if (accountNumber.length !== 10) {
//       showToast("Invalid Account Number", "Account number must be 10 digits", "error");
//       return;
//     }

//     setIsValidating(true);
//     // Simulate API call to validate account
//     setTimeout(() => {
//       setAccountDetails({
//         name: "John Doe",
//         email: "j***@example.com",
//       });
//       setIsValidating(false);
//       showToast("Account Verified", "Your account has been successfully verified", "success");
//     }, 1500);
//   };

//   const handleContinue = () => {
//     if (!accountDetails) {
//       showToast("Verification Required", "Please verify your account first", "error");
//       return;
//     }
//     navigate("/location-select");
//   };

//   return (
//     <Box minH="100vh" bg="white">
//       <Container maxW="2xl" px={4} py={12}>
//         <Box 
//           bg="white" 
//           boxShadow="xl" 
//           borderRadius="xl"
//           border="1px"
//           borderColor="gray.200"
//         >
//           {/* Card Header */}
//           <Box textAlign="center" p={6} borderBottom="1px" borderColor="gray.200">
//             <Heading as="h1" size="xl" color="#2b2e32" mb={2}>
//               Account Setup
//             </Heading>
//             <Text color="gray.600" fontSize="lg">
//               Enter your PremiumTrust account details
//             </Text>
//           </Box>

//           {/* Card Body */}
//           <Box p={6}>
//             <VStack gap={6} align="stretch">
//               {/* Account Number Input */}
//               <Box>
//                 <Text 
//                   color="#2b2e32" 
//                   fontWeight="medium" 
//                   mb={2}
//                   fontSize="sm"
//                 >
//                   Account Number
//                 </Text>
//                 <Input
//                   placeholder="Enter your 10-digit account number"
//                   value={accountNumber}
//                   onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                   maxLength={10}
//                   size="lg"
//                   borderColor="gray.300"
//                   _focus={{
//                     borderColor: "#2d7a4f",
//                     boxShadow: "0 0 0 1px #2d7a4f",
//                   }}
//                 />
//               </Box>

//               {/* Verify Button */}
//               <Button
//                 onClick={validateAccount}
//                 disabled={isValidating || accountNumber.length !== 10}
//                 bg="#2d7a4f"
//                 color="white"
//                 _hover={{
//                   bg: "#246139",
//                 }}
//                 _disabled={{
//                   bg: "gray.400",
//                   cursor: "not-allowed",
//                 }}
//                 size="lg"
//                 w="100%"
//                 h="48px"
//               >
//                 {isValidating ? (
//                   <HStack gap={2}>
//                     <Spinner size="sm" color="white" />
//                     <Text>Verifying Account...</Text>
//                   </HStack>
//                 ) : (
//                   "Verify Account"
//                 )}
//               </Button>

//               {/* Account Details */}
//               {accountDetails && (
//                 <Box p={4} border="1px" borderColor="gray.200" borderRadius="md" bg="gray.50">
//                   <VStack gap={3} align="stretch">
//                     <Box>
//                       <Text fontSize="sm" color="gray.600" mb={1}>
//                         Account Name
//                       </Text>
//                       <Text fontSize="lg" fontWeight="semibold" color="#2b2e32">
//                         {accountDetails.name}
//                       </Text>
//                     </Box>
//                     <Box>
//                       <Text fontSize="sm" color="gray.600" mb={1}>
//                         Email Address
//                       </Text>
//                       <Text fontSize="lg" fontWeight="semibold" color="#2b2e32">
//                         {accountDetails.email}
//                       </Text>
//                     </Box>
//                   </VStack>
//                 </Box>
//               )}

//               {/* Continue Button */}
//               {accountDetails && (
//                 <Button
//                   onClick={handleContinue}
//                   bg="#2d7a4f"
//                   color="white"
//                   _hover={{ bg: "#246139" }}
//                   size="lg"
//                   w="100%"
//                   h="48px"
//                 >
//                   Continue to Location Selection
//                 </Button>
//               )}
//             </VStack>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AccountSetup;
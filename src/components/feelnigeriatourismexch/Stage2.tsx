import { useState, useEffect } from 'react';
import Logo from '../../assets/img/logo.png';
import {
  Box,
  VStack,
  HStack,
  Button,
  Heading,
  Text,
  Container,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Brain, Trophy, Clock, ArrowRight, ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { tourismExchangeService } from '../../services/tourism-exchange-service';

// Custom Progress Bar Component
const CustomProgress = ({ value, colorScheme = 'green' }: { value: number; colorScheme?: string }) => {
  return (
    <Box w="full" h="12px" bg="gray.200" borderRadius="full" overflow="hidden">
      <Box
        h="full"
        bg={`${colorScheme}.500`}
        borderRadius="full"
        transition="width 0.3s ease"
        style={{ width: `${value}%` }}
      />
    </Box>
  );
};

// Custom Toast replacement
const showToast = (title: string, description: string, type: 'success' | 'error' | 'warning') => {
  console.log(`${type.toUpperCase()}: ${title} - ${description}`);
  if (type === 'success') {
    alert(`✓ ${title}\n${description}`);
  }
};

interface Stage2Props {
  onNext: () => void;
  onBack: () => void;
}

interface QuizQuestion {
  id: number;
  question_text: string;
  category: string;
  options: string[];
  correct_answer?: number;
}

export default function Stage2({ onBack }: Stage2Props) {
  const location = useLocation();
  const userEmail = location.state?.email;
  const navigate = useNavigate()
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes as per backend
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
  try {
    setFetching(true);
    
    // Check if we're authenticated
    if (!tourismExchangeService.isAuthenticated()) {
      // Try to authenticate with stored credentials or redirect to login
      showToast('Authentication Required', 'Please complete stage 1 first', 'warning');
      onBack();
      return;
    }

    const data = await tourismExchangeService.getQuizQuestions();
    
    // Handle different response formats
    const questions = data.questions || data;
    
    if (!questions || questions.length === 0) {
      throw new Error('No questions available');
    }
    
    setQuizQuestions(questions);
    setAnswers(Array(questions.length).fill(-1));
  } catch (error) {
    console.error('Error fetching questions:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to load quiz questions';
    showToast('Error', errorMessage, 'error');
    
    // If authentication fails, redirect to stage 1
    if (errorMessage.includes('Authentication') || errorMessage.includes('login')) {
      navigate('/connect');
    }
  } finally {
    setFetching(false);
  }
};

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (quizCompleted || timeLeft <= 0 || fetching) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizCompleted, timeLeft, fetching]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    // Auto-advance to next question after a short delay
    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = async () => {
  setLoading(true);

  try {
    // Submit quiz results to backend with authentication
    const result = await tourismExchangeService.submitQuiz(
      userEmail,
      answers,
      120 - timeLeft // Time used in seconds
    );

    // Calculate score from backend response
    const correct = result.score || result.correct_answers || 0;
    const total = quizQuestions.length;
    setCorrectAnswers(correct);
    const percentage = (correct / total) * 100;
    setScore(Math.round(percentage));
    
    setQuizCompleted(true);
    
    showToast(
      "Quiz Submitted!",
      "Your answers have been successfully submitted.",
      "success"
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to submit quiz";
    console.error('Quiz submission error:', error);
    showToast("Error", errorMessage, "error");
    
    // If authentication fails during submission
    if (errorMessage.includes('Authentication') || errorMessage.includes('login')) {
      navigate('/connect');
    }
  } finally {
    setLoading(false);
  }
};

  // const handleSubmitQuiz = async () => {
  //   setLoading(true);

  //   try {
  //     // Submit quiz results to backend
  //     const submissionData = {
  //       email: userEmail,
  //       answers: answers,
  //       time_taken: 120 - timeLeft, // Time used in seconds
  //     };

  //     const response = await fetch('https://feelnigeriatourismexchange.onrender.com/api/game/submit/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(submissionData),
  //     });

  //     const result = await response.json();

  //     if (!response.ok) {
  //       throw new Error(result.message || 'Failed to submit quiz');
  //     }

  //     // Calculate score from backend response
  //     const correct = result.score || result.correct_answers || 0;
  //     const total = quizQuestions.length;
  //     setCorrectAnswers(correct);
  //     const percentage = (correct / total) * 100;
  //     setScore(Math.round(percentage));
      
  //     setQuizCompleted(true);
      
  //     showToast(
  //       "Quiz Submitted!",
  //       "Your answers have been successfully submitted.",
  //       "success"
  //     );
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : "Failed to submit quiz";
  //     showToast("Error", errorMessage, "error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (fetching) {
    return (
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="4xl">
          <Box bg="white" shadow="2xl" borderRadius="3xl" p={12} textAlign="center">
            <Text fontSize="xl">Loading quiz questions...</Text>
          </Box>
        </Container>
      </Box>
    );
  }

  if (quizCompleted) {
    const passed = correctAnswers >= 7;

    return (
      <Box minH="100vh" bg="gray.50" py={{ base: 8, sm: 12 }} px={4}>
        <Container maxW="4xl">
          <Box 
            bg="white" 
            shadow="2xl" 
            borderRadius="3xl" 
            p={{ base: 8, md: 12 }}
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
              opacity: 0.20,
              zIndex: 0,
              pointerEvents: "none"
            }}
          >
            <VStack gap={8} textAlign="center" position="relative" zIndex={1}>
              {/* Icon */}
              <Box
                bg={passed ? "green.100" : "yellow.100"}
                borderRadius="full"
                p={6}
              >
                <Trophy
                  size={64}
                  color={passed ? "#16a34a" : "#ca8a04"}
                  strokeWidth={2}
                />
              </Box>

              {/* Title */}
              <Heading as="h1" size="2xl" color="gray.900">
                {passed ? '🎉 Congratulations!' : 'Good Effort!'}
              </Heading>

              {/* Score Display */}
              <VStack gap={4}>
                <Heading as="h2" size="4xl" color={passed ? "green.600" : "yellow.600"}>
                  {correctAnswers}/{quizQuestions.length}
                </Heading>
                <Text fontSize="xl" color="gray.600">
                  You got {correctAnswers} out of {quizQuestions.length} questions correct ({score}%)
                </Text>
              </VStack>

              {/* Result Message */}
              {passed ? (
                <Box bg="green.50" border="2px solid" borderColor="green.200" p={6} borderRadius="xl" w="full">
                  <HStack gap={3} align="start">
                    <CheckCircle size={24} color="#16a34a" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <VStack align="start" gap={2}>
                      <Text fontSize="lg" fontWeight="semibold" color="gray.900">
                        Excellent Cultural Knowledge!
                      </Text>
                      <Text fontSize="md" color="gray.700" textAlign="left">
                        You've demonstrated strong understanding of Nigerian culture and history. 
                        You need 7 or more correct answers to proceed. You can now move to Stage 3.
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ) : (
                <Box bg="yellow.50" border="2px solid" borderColor="yellow.200" p={6} borderRadius="xl" w="full">
                  <HStack gap={3} align="start">
                    <AlertCircle size={24} color="#ca8a04" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <VStack align="start" gap={2}>
                      <Text fontSize="lg" fontWeight="semibold" color="gray.900">
                        Almost There!
                      </Text>
                      <Text fontSize="md" color="gray.700" textAlign="left">
                        You need at least 7 out of 10 correct answers (70%) to proceed to the next stage.
                        Keep learning about Nigerian culture and try again!
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              )}

              {/* Action Buttons */}
              <Flex gap={4} flexWrap="wrap" justify="center" pt={4}>
                {passed ? (
                  <RouterLink 
                    to="/connect/stage3" 
                    state={{ email: userEmail }}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      colorPalette="green"
                      size="lg"
                      px={8}
                    >
                      Continue to Stage 3
                      <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </Button>
                  </RouterLink>
                ) : (
                  <HStack gap={4}>
                    <Button
                      onClick={() => window.location.reload()}
                      colorPalette="green"
                      size="lg"
                      px={6}
                    >
                      Try Again
                    </Button>
                    <Button
                      onClick={onBack}
                      variant="outline"
                      colorPalette="gray"
                      size="lg"
                      px={6}
                    >
                      Back to Dashboard
                    </Button>
                  </HStack>
                )}
              </Flex>
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  }

  const allAnswered = answers.every(a => a !== -1);
  const answeredCount = answers.filter(a => a !== -1).length;
  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <Box minH="100vh" bg="gray.50" py={{ base: 8, sm: 12 }} px={4}>
      <Container maxW="5xl">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          colorPalette="green"
          mb={6}
        >
          <ChevronLeft size={20} />
          Back to Dashboard
        </Button>

        {/* Quiz Card */}
        <Box 
          bg="white" 
          shadow="2xl" 
          borderRadius="3xl" 
          overflow="hidden"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            backgroundImage: `url(${Logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none"
          }}
        >
          {/* Header Section */}
          <Box
            bgGradient="linear(to-r, green.500, green.400)"
            color="white"
            p={{ base: 6, sm: 8 }}
            position="relative"
            zIndex={1}
          >
            <HStack justify="center" gap={3} mb={4}>
              <Box bg="whiteAlpha.200" borderRadius="full" p={3}>
                <Brain size={32} />
              </Box>
              <VStack align="start" gap={0}>
                <Heading as="h1" size={{ base: "xl", sm: "2xl" }} fontWeight="bold">
                  Cultural IQ Challenge
                </Heading>
                <Text color="whiteAlpha.800" fontSize={{ base: "sm", sm: "base" }}>
                  Stage 2: Test Your Knowledge
                </Text>
              </VStack>
            </HStack>

            {/* Timer */}
            <Flex
              align="center"
              justify="center"
              gap={2}
              bg="whiteAlpha.100"
              borderRadius="xl"
              px={4}
              py={3}
            >
              <Clock size={20} color="white" />
              <Text fontWeight="bold" fontSize="lg" color={timeLeft <= 60 ? "red.300" : "white"}>
                {formatTime(timeLeft)}
              </Text>
              {timeLeft <= 60 && (
                <Text fontSize="sm" color="red.300" ml={2}>
                  Hurry up!
                </Text>
              )}
            </Flex>
          </Box>

          {/* Progress Section */}
          <Box px={{ base: 6, sm: 8 }} pt={6} position="relative" zIndex={1}>
            <Flex justify="space-between" align="center" mb={3}>
              <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </Text>
              <Text fontSize="sm" fontWeight="semibold" color="green.600">
                {answeredCount} answered
              </Text>
            </Flex>
            <CustomProgress value={progressPercentage} colorScheme="green" />
          </Box>

          {/* Question Section */}
          <Box p={{ base: 6, sm: 8 }} position="relative" zIndex={1}>
            <Box mb={8}>
              <Heading as="h2" size={{ base: "lg", sm: "xl" }} color="gray.900" mb={6} lineHeight="relaxed">
                {quizQuestions[currentQuestion]?.question_text}
              </Heading>

              {/* Options */}
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                {quizQuestions[currentQuestion]?.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion] === idx;
                  return (
                    <GridItem key={idx}>
                      <Box
                        as="button"
                        w="full"
                        border="2px solid"
                        borderColor={isSelected ? "green.500" : "gray.200"}
                        bg={isSelected ? "green.50" : "white"}
                        borderRadius="xl"
                        p={{ base: 4, sm: 5 }}
                        cursor="pointer"
                        transition="all 0.2s"
                        _hover={{
                          borderColor: "green.300",
                          bg: isSelected ? "green.50" : "gray.50",
                          transform: "translateY(-2px)",
                          shadow: "md"
                        }}
                        onClick={() => handleAnswer(idx)}
                      >
                        <HStack gap={4} align="center">
                          <Flex
                            align="center"
                            justify="center"
                            w="32px"
                            h="32px"
                            borderRadius="md"
                            bg={isSelected ? "green.500" : "gray.100"}
                            color={isSelected ? "white" : "gray.700"}
                            fontWeight="bold"
                            fontSize="sm"
                            flexShrink={0}
                          >
                            {String.fromCharCode(65 + idx)}
                          </Flex>
                          <Text
                            fontSize={{ base: "md", sm: "lg" }}
                            fontWeight={isSelected ? "semibold" : "normal"}
                            color="gray.900"
                            textAlign="left"
                          >
                            {option}
                          </Text>
                        </HStack>
                      </Box>
                    </GridItem>
                  );
                })}
              </Grid>
            </Box>

            {/* Navigation Buttons */}
            <Flex justify="space-between" align="center" pt={6} borderTop="1px solid" borderColor="gray.200">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="ghost"
                colorPalette="green"
              >
                <ChevronLeft size={20} />
                Previous
              </Button>

              <Flex gap={3}>
                {currentQuestion < quizQuestions.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === -1}
                    colorPalette="green"
                    size="lg"
                  >
                    Next
                    <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmitQuiz}
                    disabled={!allAnswered || loading}
                    colorPalette="green"
                    size="lg"
                    loading={loading}
                    loadingText="Submitting..."
                  >
                    <CheckCircle size={20} style={{ marginRight: '8px' }} />
                    Submit Quiz
                  </Button>
                )}
              </Flex>
            </Flex>
          </Box>
        </Box>

        {/* Question Navigator */}
        <Box 
          mt={6} 
          bg="white" 
          borderRadius="2xl" 
          shadow="lg" 
          p={4}
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "300px",
            backgroundImage: `url(${Logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.03,
            zIndex: 0,
            pointerEvents: "none"
          }}
        >
          <Text fontSize="sm" fontWeight="semibold" color="gray.600" mb={3} textAlign="center" position="relative" zIndex={1}>
            Question Navigator
          </Text>
          <Flex wrap="wrap" gap={2} justify="center" position="relative" zIndex={1}>
            {quizQuestions.map((_, idx) => (
              <Button
                key={idx}
                onClick={() => setCurrentQuestion(idx)}
                w="40px"
                h="40px"
                borderRadius="lg"
                fontWeight="bold"
                colorPalette={
                  idx === currentQuestion
                    ? "green"
                    : answers[idx] !== -1
                    ? "green"
                    : "gray"
                }
                variant={idx === currentQuestion ? "solid" : answers[idx] !== -1 ? "outline" : "outline"}
              >
                {idx + 1}
              </Button>
            ))}
          </Flex>
        </Box>

        {/* Reminder */}
        {!allAnswered && currentQuestion === quizQuestions.length - 1 && (
          <Box mt={4} bg="yellow.50" border="1px solid" borderColor="yellow.200" p={4} borderRadius="lg" textAlign="center">
            <Text fontSize="sm" color="gray.700" fontWeight="medium">
              ⚠️ Please answer all questions before submitting
            </Text>
          </Box>
        )}
      </Container>
    </Box>
  );
}
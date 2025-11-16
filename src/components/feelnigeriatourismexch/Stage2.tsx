import { useState, useEffect } from 'react';
import { Brain, Trophy, Clock, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Stage2Props {
  applicationId: string;
  email: string;
  onNext: () => void;
  onBack: () => void;
}

const quizQuestions = [
  {
    question: "What year did Nigeria gain independence?",
    options: ["1958", "1960", "1963", "1965"],
    correct: 1
  },
  {
    question: "Which is the most populous city in Nigeria?",
    options: ["Abuja", "Kano", "Lagos", "Port Harcourt"],
    correct: 2
  },
  {
    question: "How many states are in Nigeria?",
    options: ["32", "34", "36", "38"],
    correct: 2
  },
  {
    question: "What does the Nigerian proverb 'The lizard that jumped from the high Iroko tree to the ground said he would praise himself if no one else did' mean?",
    options: [
      "Self-praise is important",
      "If no one appreciates your efforts, appreciate yourself",
      "Lizards are brave",
      "Trees are very tall"
    ],
    correct: 1
  },
  {
    question: "Which Nigerian dish is made from bean flour?",
    options: ["Jollof Rice", "Akara", "Suya", "Egusi Soup"],
    correct: 1
  },
  {
    question: "Who is known as the 'Father of Nollywood'?",
    options: ["Ola Balogun", "Kenneth Nnebue", "Hubert Ogunde", "Eddie Ugbomah"],
    correct: 1
  },
  {
    question: "What is Nigeria's official language?",
    options: ["Yoruba", "Igbo", "Hausa", "English"],
    correct: 3
  },
  {
    question: "Which river is the longest in Nigeria?",
    options: ["River Niger", "River Benue", "River Cross", "River Kaduna"],
    correct: 0
  },
  {
    question: "What are the colors of the Nigerian flag?",
    options: ["Red, White, Green", "Green, White, Green", "Green, Yellow, White", "White, Green, Yellow"],
    correct: 1
  },
  {
    question: "Which Nigerian music genre became globally popular in the 2010s?",
    options: ["Highlife", "Afrobeats", "Juju", "Fuji"],
    correct: 1
  }
];

export default function Stage2({ applicationId, email, onNext, onBack }: Stage2Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (quizCompleted || timeLeft <= 0) return;

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
  }, [quizCompleted, timeLeft]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
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
    const finalScore = answers.reduce((acc, answer, idx) => {
      return acc + (answer === quizQuestions[idx].correct ? 10 : 0);
    }, 0);

    setScore(finalScore);
    setQuizCompleted(true);
    setLoading(true);

    try {
      await supabase
        .from('applications')
        .update({
          quiz_score: finalScore,
          quiz_completed_at: new Date().toISOString(),
          current_stage: 2
        })
        .eq('id', applicationId);
    } catch (err) {
      console.error('Error updating quiz score:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (quizCompleted) {
    const passed = score >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className={`inline-block rounded-full p-4 mb-4 ${passed ? 'bg-green-100' : 'bg-yellow-100'}`}>
              <Trophy className={`w-16 h-16 ${passed ? 'text-green-600' : 'text-yellow-600'}`} />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Complete!</h1>

            <div className="text-6xl font-bold text-green-600 mb-4">{score}/100</div>

            {passed ? (
              <>
                <p className="text-xl text-gray-700 mb-8">
                  Congratulations! You've passed the Cultural IQ Challenge and can proceed to the next stage.
                </p>

                <button
                  onClick={onNext}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
                >
                  Continue to Stage 3
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <p className="text-xl text-gray-700 mb-4">
                  You scored {score}%. A score of 70% or higher is required to proceed.
                </p>
                <p className="text-gray-600 mb-8">
                  Keep learning about Nigerian culture and try again!
                </p>

                <button
                  onClick={onBack}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  Back to Dashboard
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  const allAnswered = answers.every(a => a !== -1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
        >
          ← Back
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 rounded-full p-4 mb-4">
              <Brain className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Stage 2: The Cultural IQ Challenge</h1>
            <p className="text-xl text-gray-600">The Test</p>
          </div>

          <div className="mb-8 bg-green-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Prove you have the passion and cultural literacy to truly embrace the Nigerian lifestyle.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-700">
              <Clock className="w-5 h-5" />
              <span className="font-semibold text-lg">Time Remaining: {formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm text-gray-600">
                {answers.filter(a => a !== -1).length} answered
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {quizQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    answers[currentQuestion] === idx
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-semibold text-gray-700">{String.fromCharCode(65 + idx)}.</span> {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 text-green-600 font-semibold disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex gap-3">
              {currentQuestion < quizQuestions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={!allAnswered || loading}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit Quiz'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Trophy, Gift, Plane, Calendar, ArrowLeft } from 'lucide-react';

interface Stage5Props {
  onBack: () => void;
  onReturnHome: () => void;
}

export default function Stage5({ onBack, onReturnHome }: Stage5Props) {
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
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-4 mb-4 animate-pulse">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Stage 5: The Grand Reveal</h1>
            <p className="text-xl text-gray-600">The Victory</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
            <p className="text-center text-xl font-semibold text-gray-900">
              The moment of truth!
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Trophy className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Live Announcement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The 10 winners will be announced during a high-profile, live-streamed global event
                    broadcast across all Feel Nigeria platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Gift className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Preparation Kit</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Winners will immediately receive a comprehensive Orientation Kit covering travel
                    logistics, safety protocols, and basic cultural phrases to prepare for their
                    unforgettable trip.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Plane className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Travel to Nigeria</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Get ready! Your all-expenses-paid trip begins in December 2025.
                  </p>
                  <p className="text-gray-900 font-semibold text-lg">
                    Your journey to Feel Nigeria is officially on!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-xl p-8 text-white mb-8">
            <div className="text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">December 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-green-100">Winners</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-green-100">Days</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-green-100">Funded</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-yellow-900 mb-3">What Winners Receive:</h4>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>Round-trip flights to Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>10-day immersive stay with a carefully selected local family</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>All meals and accommodation covered</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>Cultural experiences and guided tours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>Feature on the FNTE Reality Show</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>Travel insurance and safety support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">✓</span>
                <span>Orientation kit with cultural guides and language basics</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Thank you for your interest in the Feel Nigeria Tourism Exchange!
              Stay connected with us on social media for updates.
            </p>

            <button
              onClick={onReturnHome}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-5 h-5" />
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

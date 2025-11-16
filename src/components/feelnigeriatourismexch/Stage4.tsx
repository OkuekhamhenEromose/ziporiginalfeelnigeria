import { CheckCircle, UserCheck, Shield, ArrowRight } from 'lucide-react';

interface Stage4Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Stage4({ onNext, onBack }: Stage4Props) {
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
              <UserCheck className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Stage 4: Interview & Vetting</h1>
            <p className="text-xl text-gray-600">The Finalists</p>
          </div>

          <div className="mb-8 bg-green-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              This stage is about confirming your suitability for a smooth and safe experience.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Top 50 Interview</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If selected from the video round, you will participate in a short video interview
                    (via Zoom) with the FNTE Selection Panel.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This is to confirm your identity and manage expectations for the immersive experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Background Check</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Final candidates will undergo a standard background check to ensure the safety and
                    security of both the contestants and the host families.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This is a routine process to create a safe and positive experience for everyone involved.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-2">What to Expect:</h4>
              <ul className="space-y-2 text-yellow-800">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>If you're selected for the Top 50, we'll contact you via email within 2 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>The interview will be scheduled at a time convenient for your timezone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Background checks typically take 5-7 business days to complete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>All information is kept confidential and used solely for selection purposes</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Congratulations on Making It This Far!</h3>
              <p className="text-lg mb-6">
                You're one step closer to winning an all-expenses-paid trip to Nigeria.
                Stay tuned for updates from our selection committee.
              </p>
              <p className="text-green-100">
                Check your email regularly and make sure to whitelist notifications from Feel Nigeria.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onNext}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              Continue to Stage 5
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Plane, Award, Globe } from 'lucide-react';

interface DashboardProps {
  onStartJourney: () => void;
}

export default function Dashboard({ onStartJourney }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Globe className="w-20 h-20 text-green-600" strokeWidth={1.5} />
              <Plane className="w-8 h-8 text-green-700 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            The Feel Nigeria Tourism Exchange
          </h1>
          <p className="text-2xl text-green-700 font-semibold mb-2">
            Your Journey Home Starts Here!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-green-100">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-16 h-16 text-yellow-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Win an All-Expenses-Paid Trip & Become a Reality Star!
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-center text-xl leading-relaxed">
              Welcome to the most authentic travel experience on the planet. The FNTE is a global
              search for <span className="font-bold text-green-700">10 lucky people</span>—Nigerians in the Diaspora and
              foreign friends of Nigeria—who will win a fully paid, 10-day immersive stay with a
              local family, all broadcast on a global reality show!
            </p>

            <p className="text-center text-xl font-semibold text-gray-900 mt-8">
              Follow the 5 stages below to win your chance to experience the food, work, culture,
              and heart of Nigeria.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {[
              { stage: 1, title: "Sign Up & Share", color: "bg-green-100 text-green-800" },
              { stage: 2, title: "Cultural IQ Challenge", color: "bg-green-200 text-green-900" },
              { stage: 3, title: "Video Pitch", color: "bg-green-300 text-green-900" },
              { stage: 4, title: "Interview & Vetting", color: "bg-green-400 text-green-900" },
              { stage: 5, title: "Grand Reveal", color: "bg-green-500 text-white" }
            ].map((item) => (
              <div key={item.stage} className={`${item.color} rounded-xl p-4 text-center transition-transform hover:scale-105`}>
                <div className="text-3xl font-bold mb-2">{item.stage}</div>
                <div className="text-sm font-semibold">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onStartJourney}
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Start Your Journey
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <p className="text-xl md:text-2xl font-semibold">
            December 2025 • 10 Winners • Fully Funded • Global Reality Show
          </p>
        </div>
      </div>
    </div>
  );
}

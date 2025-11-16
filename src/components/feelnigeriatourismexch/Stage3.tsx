import { useState } from 'react';
import { Video, Upload, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Stage3Props {
  applicationId: string;
  email: string;
  onNext: () => void;
  onBack: () => void;
}

export default function Stage3({ applicationId, email, onNext, onBack }: Stage3Props) {
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedCulture, setSelectedCulture] = useState('');
  const [uniqueSkill, setUniqueSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cultures = [
    'Yoruba drumming',
    'Igbo art',
    'Hausa horsemanship',
    'Ijaw fishing traditions',
    'Edo bronze casting',
    'Fulani pastoral life',
    'Calabar carnival culture',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!videoUrl || !selectedCulture || !uniqueSkill) {
      setError('Please complete all fields');
      return;
    }

    setLoading(true);

    try {
      await supabase
        .from('applications')
        .update({
          video_pitch_url: videoUrl,
          video_submitted_at: new Date().toISOString(),
          current_stage: 3
        })
        .eq('id', applicationId);

      onNext();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit video pitch');
    } finally {
      setLoading(false);
    }
  };

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
              <Video className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Stage 3: The Video Pitch</h1>
            <p className="text-xl text-gray-600">The Personality Check</p>
          </div>

          <div className="mb-8 bg-green-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              We want to see your energy, passion, and personality!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Record Your Pitch</h3>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-blue-900 mb-3">Your 60-second video should include:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Who you are and where you live</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Which aspect of Nigerian culture you are most excited to experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>What unique skill or story you will share with your host family</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Which aspect of Nigerian culture are you most excited to experience? *
                </label>
                <select
                  required
                  value={selectedCulture}
                  onChange={(e) => setSelectedCulture(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select a cultural aspect...</option>
                  {cultures.map(culture => (
                    <option key={culture} value={culture}>{culture}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What unique skill or story will you share with your host family? *
                </label>
                <textarea
                  required
                  value={uniqueSkill}
                  onChange={(e) => setUniqueSkill(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Describe the unique perspective or skill you'll bring..."
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Upload and Submit</h3>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Upload your video to YouTube, Vimeo, or another platform, then paste the link below
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Video URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Note:</span> Our selection committee will review all
                  submissions for enthusiasm and on-camera presence. Make sure your video is clear,
                  well-lit, and showcases your personality!
                </p>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? 'Submitting...' : 'Submit Video Pitch'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// import { useState } from 'react';
// import { Share2, CheckCircle, ArrowRight } from 'lucide-react';
// import { supabase } from '../lib/supabase';

// interface Stage1Props {
//   onNext: (applicationId: string, email: string) => void;
//   onBack: () => void;
// }

// export default function Stage1({ onNext, onBack }: Stage1Props) {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     currentLocation: '',
//     motivation: '',
//     termsAccepted: false,
//     availabilityConfirmed: false,
//     filmingConsent: false,
//     socialShareCompleted: false
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.termsAccepted || !formData.availabilityConfirmed || !formData.filmingConsent) {
//       setError('Please accept all terms and conditions');
//       return;
//     }

//     if (!formData.socialShareCompleted) {
//       setError('Please confirm you have shared on social media');
//       return;
//     }

//     setLoading(true);

//     try {
//       const { data, error: insertError } = await supabase
//         .from('applications')
//         .insert({
//           full_name: formData.fullName,
//           email: formData.email,
//           current_location: formData.currentLocation,
//           motivation: formData.motivation,
//           terms_accepted: formData.termsAccepted,
//           availability_confirmed: formData.availabilityConfirmed,
//           filming_consent: formData.filmingConsent,
//           social_share_completed: formData.socialShareCompleted,
//           current_stage: 1
//         })
//         .select()
//         .maybeSingle();

//       if (insertError) throw insertError;

//       if (data) {
//         onNext(data.id, data.email);
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to submit application');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <button
//           onClick={onBack}
//           className="mb-6 text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
//         >
//           ← Back to Dashboard
//         </button>

//         <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//           <div className="text-center mb-8">
//             <div className="inline-block bg-green-100 rounded-full p-4 mb-4">
//               <Share2 className="w-12 h-12 text-green-600" />
//             </div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">Stage 1: Sign Up & Share the Dream</h1>
//             <p className="text-xl text-gray-600">The Hook</p>
//           </div>

//           <div className="mb-8 bg-green-50 rounded-xl p-6">
//             <p className="text-gray-700 leading-relaxed">
//               This stage is all about declaring your interest and sharing your excitement!
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Create Your Profile</h3>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Where are you from? *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.currentLocation}
//                       onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                       placeholder="City, Country"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Your primary motivation for wanting to visit Nigeria *
//                     </label>
//                     <textarea
//                       required
//                       value={formData.motivation}
//                       onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
//                       rows={4}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                       placeholder="Share your story..."
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Agree to the Terms</h3>

//                 <div className="space-y-3">
//                   <label className="flex items-start gap-3 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={formData.availabilityConfirmed}
//                       onChange={(e) => setFormData({ ...formData, availabilityConfirmed: e.target.checked })}
//                       className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                     />
//                     <span className="text-gray-700">
//                       I confirm my availability for the December 2025 Exchange
//                     </span>
//                   </label>

//                   <label className="flex items-start gap-3 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={formData.filmingConsent}
//                       onChange={(e) => setFormData({ ...formData, filmingConsent: e.target.checked })}
//                       className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                     />
//                     <span className="text-gray-700">
//                       I consent to be filmed for the FNTE Reality Show
//                     </span>
//                   </label>

//                   <label className="flex items-start gap-3 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={formData.termsAccepted}
//                       onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
//                       className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                     />
//                     <span className="text-gray-700">
//                       I acknowledge and accept the terms and conditions
//                     </span>
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Go Viral</h3>

//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
//                   <p className="text-sm font-semibold text-yellow-800 mb-2">MANDATORY:</p>
//                   <p className="text-sm text-yellow-700">
//                     Follow us and share your application on at least one social media platform
//                     (e.g., X, Instagram, Facebook) using the hashtag <span className="font-bold">#FeelNigeriaExchange</span> to unlock the next stage.
//                   </p>
//                 </div>

//                 <label className="flex items-start gap-3 cursor-pointer bg-green-50 border-2 border-green-200 rounded-lg p-4">
//                   <input
//                     type="checkbox"
//                     checked={formData.socialShareCompleted}
//                     onChange={(e) => setFormData({ ...formData, socialShareCompleted: e.target.checked })}
//                     className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                   />
//                   <span className="text-gray-700 flex items-center gap-2">
//                     <CheckCircle className="w-5 h-5 text-green-600" />
//                     I have shared my application on social media with #FeelNigeriaExchange
//                   </span>
//                 </label>
//               </div>
//             </div>

//             {error && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
//                 {error}
//               </div>
//             )}

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//               >
//                 {loading ? 'Submitting...' : 'Submit & Continue'}
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

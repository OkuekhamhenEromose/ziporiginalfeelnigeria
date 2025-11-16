// src/lib/supabase.ts

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// src/types/application.ts

// export interface Application {
//   id: string;
//   email: string;
//   full_name: string;
//   current_location: string;
//   motivation: string;
//   terms_accepted: boolean;
//   availability_confirmed: boolean;
//   filming_consent: boolean;
//   social_share_completed: boolean;
//   current_stage: number;
//   quiz_score: number | null;
//   quiz_completed_at: string | null;
//   video_pitch_url: string | null;
//   video_submitted_at: string | null;
//   interview_scheduled: boolean;
//   interview_completed: boolean;
//   background_check_status: string | null;
//   is_winner: boolean;
//   created_at: string;
//   updated_at: string;
// }

// src/app.tsx

// import { useState } from 'react';
// import Dashboard from './components/Dashboard';
// import Stage1 from './components/Stage1';
// import Stage2 from './components/Stage2';
// import Stage3 from './components/Stage3';
// import Stage4 from './components/Stage4';
// import Stage5 from './components/Stage5';

// type Page = 'dashboard' | 'stage1' | 'stage2' | 'stage3' | 'stage4' | 'stage5';

// function App() {
//   const [currentPage, setCurrentPage] = useState<Page>('dashboard');
//   const [applicationId, setApplicationId] = useState<string>('');
//   const [email, setEmail] = useState<string>('');

//   const handleStartJourney = () => {
//     setCurrentPage('stage1');
//   };

//   const handleStage1Complete = (appId: string, userEmail: string) => {
//     setApplicationId(appId);
//     setEmail(userEmail);
//     setCurrentPage('stage2');
//   };

//   const handleStage2Complete = () => {
//     setCurrentPage('stage3');
//   };

//   const handleStage3Complete = () => {
//     setCurrentPage('stage4');
//   };

//   const handleStage4Complete = () => {
//     setCurrentPage('stage5');
//   };

//   const handleReturnToDashboard = () => {
//     setCurrentPage('dashboard');
//     setApplicationId('');
//     setEmail('');
//   };

//   return (
//     <>
//       {currentPage === 'dashboard' && (
//         <Dashboard onStartJourney={handleStartJourney} />
//       )}
//       {currentPage === 'stage1' && (
//         <Stage1 onNext={handleStage1Complete} onBack={handleReturnToDashboard} />
//       )}
//       {currentPage === 'stage2' && (
//         <Stage2
//           applicationId={applicationId}
//           email={email}
//           onNext={handleStage2Complete}
//           onBack={handleReturnToDashboard}
//         />
//       )}
//       {currentPage === 'stage3' && (
//         <Stage3
//           applicationId={applicationId}
//           email={email}
//           onNext={handleStage3Complete}
//           onBack={() => setCurrentPage('stage2')}
//         />
//       )}
//       {currentPage === 'stage4' && (
//         <Stage4
//           onNext={handleStage4Complete}
//           onBack={() => setCurrentPage('stage3')}
//         />
//       )}
//       {currentPage === 'stage5' && (
//         <Stage5
//           onBack={() => setCurrentPage('stage4')}
//           onReturnHome={handleReturnToDashboard}
//         />
//       )}
//     </>
//   );
// }

// export default App;

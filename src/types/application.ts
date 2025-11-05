// types/application.ts
export interface PersonalDetails {
  nationality: string;
  country_of_residence: string;
  date_of_birth: string;
  gender: 'M' | 'F';
  phone: string;
}

export interface TravelVisaInfo {
  passport_number: string;
  passport_expiration: string;
  visa_history: boolean;
  travel_history: string;
}

export interface BackgroundMotivation {
  motivation: string;
  profession: string;
  hobbies: string;
}

export interface MediaSocial {
  instagram: string;
  tiktok: string;
  youtube: string;
  intro_video: File | null;
}

export interface BVNInfo {
  has_bvn: boolean;
  bvn: string;
}

export interface ApplicationData {
  step1: PersonalDetails;
  step2: TravelVisaInfo;
  step3: BackgroundMotivation;
  step4: MediaSocial;
  bvn: BVNInfo;
}

export interface ApplicationResponse {
  id: string;
  message: string;
}
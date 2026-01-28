import { useState } from 'react';
import { Hero } from '@/app/components/hero';
import { Features } from '@/app/components/features';
import { HowItWorks } from '@/app/components/how-it-works';
import { DemoBanner } from '@/app/components/demo-banner';
import { Footer } from '@/app/components/footer';
import { Onboarding } from '@/app/components/onboarding';
import { Dashboard } from '@/app/components/dashboard';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGNhdCUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTYwOTc5OXww&ixlib=rb-4.1.0&q=80&w=1080';

interface OnboardingData {
  userName: string;
  petName: string;
  petType: string;
  petBreed: string;
  petAge: string;
  petAgeUnit: string;
  petPhoto: string;
}

export default function App() {
  const [view, setView] = useState<'landing' | 'onboarding' | 'dashboard'>('landing');
  const [userData, setUserData] = useState<OnboardingData | null>(null);

  const handleDemoClick = () => {
    setView('onboarding');
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    setUserData(data);
    setView('dashboard');
  };

  const handleLogout = () => {
    setUserData(null);
    setView('landing');
  };

  if (view === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (view === 'dashboard' && userData) {
    return (
      <Dashboard
        userName={userData.userName}
        petName={userData.petName}
        petType={userData.petType}
        petPhoto={userData.petPhoto}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero heroImage={HERO_IMAGE} onDemoClick={handleDemoClick} />
      <Features />
      <HowItWorks />
      <DemoBanner />
      <Footer />
    </div>
  );
}
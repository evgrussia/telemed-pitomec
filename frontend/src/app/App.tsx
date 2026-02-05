import { useState } from 'react';
import { TabBar } from './components/TabBar';

// Screens
import { Landing } from './screens/Landing';
import { LandingFull } from './screens/LandingFull';
import { Onboarding } from './screens/Onboarding';
import { Home } from './screens/Home';
import { PetProfile } from './screens/PetProfile';
import { AIDiagnosis } from './screens/AIDiagnosis';
import { Appointments } from './screens/Appointments';
import { VetDetails } from './screens/VetDetails';
import { Payment } from './screens/Payment';
import { VideoCall } from './screens/VideoCall';
import { Chat } from './screens/Chat';
import { Diary } from './screens/Diary';
import { AddDiaryEntry } from './screens/AddDiaryEntry';
import { Profile } from './screens/Profile';
import { Subscription } from './screens/Subscription';
import { Reminders } from './screens/Reminders';
import { EmptyStates } from './screens/EmptyStates';
import { MedicalRecords } from './screens/MedicalRecords';
import { VaccinationCalendar } from './screens/VaccinationCalendar';
import { Marketplace } from './screens/Marketplace';
import { ConsultationHistory } from './screens/ConsultationHistory';

type Screen = 
  | 'landing'
  | 'landing-full'
  | 'onboarding'
  | 'home'
  | 'pet-profile'
  | 'ai-diagnosis'
  | 'appointments'
  | 'vet-details'
  | 'payment'
  | 'video-call'
  | 'chat'
  | 'diary'
  | 'add-diary-entry'
  | 'profile'
  | 'subscription'
  | 'reminders'
  | 'empty-states'
  | 'medical-records'
  | 'vaccination-calendar'
  | 'marketplace'
  | 'consultation-history'
  | 'design-system';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [activeTab, setActiveTab] = useState('home');
  const [screenData, setScreenData] = useState<any>(null);
  const [history, setHistory] = useState<Screen[]>(['landing']);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = (screen: Screen, data?: any) => {
    setHistory([...history, screen]);
    setCurrentScreen(screen);
    if (data) setScreenData(data);
    
    // Update active tab for main screens
    if (['home', 'ai-diagnosis', 'appointments', 'diary', 'profile'].includes(screen)) {
      setActiveTab(screen);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousScreen = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentScreen(previousScreen);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(tab as Screen);
  };

  // Check if current screen should show tab bar
  const showTabBar = ['home', 'ai-diagnosis', 'appointments', 'diary', 'profile'].includes(currentScreen);

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <Landing onGetStarted={() => navigate('landing-full')} />;
      
      case 'landing-full':
        return <LandingFull onGetStarted={() => navigate('onboarding')} />;
      
      case 'onboarding':
        return (
          <Onboarding 
            onComplete={() => navigate('home')}
            onSkip={() => navigate('home')}
          />
        );
      
      case 'home':
        return <Home onNavigate={navigate} />;
      
      case 'pet-profile':
        return <PetProfile onNavigate={navigate} onBack={goBack} />;
      
      case 'ai-diagnosis':
        return <AIDiagnosis onNavigate={navigate} />;
      
      case 'appointments':
        return <Appointments onNavigate={navigate} />;
      
      case 'vet-details':
        return <VetDetails vet={screenData} onNavigate={navigate} onBack={goBack} />;
      
      case 'payment':
        return <Payment data={screenData} onNavigate={navigate} />;
      
      case 'video-call':
        return <VideoCall onNavigate={navigate} />;
      
      case 'chat':
        return <Chat onBack={goBack} />;
      
      case 'diary':
        return <Diary onNavigate={navigate} />;
      
      case 'add-diary-entry':
        return (
          <AddDiaryEntry 
            onBack={goBack}
            onSave={() => {
              goBack();
            }}
          />
        );
      
      case 'profile':
        return <Profile onNavigate={navigate} />;
      
      case 'subscription':
        return <Subscription onBack={goBack} />;
      
      case 'reminders':
        return <Reminders onBack={goBack} />;
      
      case 'empty-states':
        return <EmptyStates onNavigate={navigate} onBack={goBack} />;
      
      case 'medical-records':
        return <MedicalRecords onBack={goBack} />;
      
      case 'vaccination-calendar':
        return <VaccinationCalendar onBack={goBack} />;
      
      case 'marketplace':
        return <Marketplace onNavigate={navigate} />;
      
      case 'consultation-history':
        return <ConsultationHistory onNavigate={navigate} onBack={goBack} />;
      
      case 'design-system':
        return <DesignSystem />;
      
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? 'dark' : ''}`}>
      {renderScreen()}
      {showTabBar && <TabBar activeTab={activeTab} onTabChange={handleTabChange} />}
      
      {/* Screen Navigation Helper (Development Only) */}
      <ScreenNavigationHelper 
        currentScreen={currentScreen} 
        onNavigate={navigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}

// Design System Screen (original)
function DesignSystem() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
            Design System — Телемед-Питомец
          </h1>
          <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
            Компоненты и стиль для Telegram WebApp 2026
          </p>
        </div>

        <section>
          <h2 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1.5rem' }}>
            Палитра цветов
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <ColorSwatch color="var(--primary)" name="Primary" subtitle="#3390EC" />
            <ColorSwatch color="var(--success)" name="Success" subtitle="#31B545" />
            <ColorSwatch color="var(--warning)" name="Warning" subtitle="#F1A302" />
            <ColorSwatch color="var(--error)" name="Error" subtitle="#E53935" />
            <ColorSwatch color="var(--pet-accent)" name="Pet Accent" subtitle="#FF9F43" />
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorSwatch({ color, name, subtitle }: { color: string; name: string; subtitle: string }) {
  return (
    <div className="space-y-2">
      <div className="w-full h-20 rounded-xl" style={{ backgroundColor: color }}></div>
      <div>
        <p style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
          {name}
        </p>
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--muted-foreground)' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// Development helper to quickly navigate between screens
function ScreenNavigationHelper({ currentScreen, onNavigate, isDarkMode, onToggleDarkMode }: { 
  currentScreen: string; 
  onNavigate: (screen: Screen) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const screens: { label: string; value: Screen }[] = [
    { label: '🏠 Landing Hero', value: 'landing' },
    { label: '📄 Landing Full', value: 'landing-full' },
    { label: '👋 Onboarding', value: 'onboarding' },
    { label: '🏡 Home', value: 'home' },
    { label: '🐾 Pet Profile', value: 'pet-profile' },
    { label: '🤖 AI Diagnosis', value: 'ai-diagnosis' },
    { label: '📅 Appointments', value: 'appointments' },
    { label: '💬 Chat', value: 'chat' },
    { label: '📊 Diary', value: 'diary' },
    { label: '👤 Profile', value: 'profile' },
    { label: '💎 Subscription', value: 'subscription' },
    { label: '🔔 Reminders', value: 'reminders' },
    { label: '🚫 Empty States', value: 'empty-states' },
    { label: '🩺 Medical Records', value: 'medical-records' },
    { label: '💉 Vaccination Calendar', value: 'vaccination-calendar' },
    { label: '🛍️ Marketplace', value: 'marketplace' },
    { label: '📜 Consultation History', value: 'consultation-history' },
    { label: '🎨 Design System', value: 'design-system' }
  ];

  return (
    <div className="fixed bottom-28 right-6 z-50">
      {isOpen && (
        <div className="mb-3 bg-white rounded-xl shadow-2xl border border-border p-3 max-h-96 overflow-y-auto w-64">
          <div className="space-y-1">
            {screens.map(screen => (
              <button
                key={screen.value}
                onClick={() => {
                  onNavigate(screen.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all hover:bg-accent ${
                  currentScreen === screen.value ? 'bg-primary/10 text-primary font-medium' : ''
                }`}
                style={{ fontSize: 'var(--text-subhead)' }}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all active:scale-95"
          style={{ backgroundColor: 'var(--primary)', color: 'white' }}
        >
          <span className="text-2xl">{isOpen ? '✕' : '📱'}</span>
        </button>
        <button
          onClick={onToggleDarkMode}
          className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all active:scale-95 border-2"
          style={{ 
            backgroundColor: 'var(--background)', 
            color: 'var(--primary)',
            borderColor: 'var(--primary)'
          }}
        >
          <span className="text-2xl">{isDarkMode ? '☀️' : '🌙'}</span>
        </button>
      </div>
    </div>
  );
}
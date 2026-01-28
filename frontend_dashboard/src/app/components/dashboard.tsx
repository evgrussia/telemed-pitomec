import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Calendar, 
  MessageCircle, 
  User, 
  Bell, 
  ChevronRight, 
  Plus, 
  Brain,
  Video,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { PetProfile } from '@/app/components/pet-profile';
import { AIDiagnosis } from '@/app/components/ai-diagnosis';
import { HealthDiary } from '@/app/components/health-diary';
import { Appointments } from '@/app/components/appointments';

interface DashboardProps {
  userName: string;
  petName: string;
  petType: string;
  petPhoto: string;
  onLogout?: () => void;
}

// Моковое фото Барсика
const BARSIK_PHOTO = 'https://images.unsplash.com/photo-1625192494235-21e8821040c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0YWJieSUyMGNhdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTU5NTY1MXww&ixlib=rb-4.1.0&q=80&w=1080';

export function Dashboard({ userName, petName, petType, petPhoto, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('home');
  const [notificationCount] = useState(2);
  const [currentView, setCurrentView] = useState<'dashboard' | 'pet-profile' | 'ai-diagnosis' | 'health-diary' | 'appointments'>('dashboard');

  // Моковые данные питомца
  const mockPet = {
    name: 'Барсик',
    type: 'Кот',
    age: '3 года',
    status: 'Здоров',
    statusColor: 'bg-[#31B545]',
    photo: BARSIK_PHOTO,
  };

  // Моковые ближайшие события
  const upcomingEvents = [
    {
      emoji: '💉',
      title: 'Прививка',
      time: 'завтра, 10:00',
      color: 'bg-red-50',
      textColor: 'text-red-700',
    },
    {
      emoji: '💊',
      title: 'Глистогонное',
      time: 'через 3 дня',
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    {
      emoji: '📅',
      title: 'Плановый осмотр',
      time: 'через неделю',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
  ];

  // Популярные услуги
  const popularServices = [
    {
      icon: Brain,
      title: 'ИИ-диагностика',
      description: 'Мгновенная оценка симптомов',
      color: 'from-[#2481CC] to-[#1a66a3]',
      emoji: '🧠',
    },
    {
      icon: Video,
      title: 'Видеоконсультация',
      description: 'Онлайн приём 24/7',
      color: 'from-[#31B545] to-[#28a03a]',
      emoji: '📹',
    },
    {
      icon: MessageCircle,
      title: 'Чат с врачом',
      description: 'Быстрый ответ специалиста',
      color: 'from-[#FF9F43] to-[#e88b2e]',
      emoji: '💬',
    },
  ];

  const bottomNavigation = [
    { id: 'home', icon: Home, label: 'Главная' },
    { id: 'ai', icon: Brain, label: 'ИИ-Диагноз' },
    { id: 'appointments', icon: Calendar, label: 'Приёмы' },
    { id: 'diary', icon: BookOpen, label: 'Дневник' },
    { id: 'profile', icon: User, label: 'Профиль' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'ai') {
      setCurrentView('ai-diagnosis');
    } else if (tabId === 'diary') {
      setCurrentView('health-diary');
    } else if (tabId === 'appointments') {
      setCurrentView('appointments');
    } else {
      setCurrentView('dashboard');
    }
  };

  // Render different views
  if (currentView === 'pet-profile') {
    return <PetProfile onBack={() => {
      setCurrentView('dashboard');
      setActiveTab('home');
    }} />;
  }

  if (currentView === 'ai-diagnosis') {
    return <AIDiagnosis onBack={() => {
      setCurrentView('dashboard');
      setActiveTab('home');
    }} />;
  }

  if (currentView === 'health-diary') {
    return <HealthDiary onBack={() => {
      setCurrentView('dashboard');
      setActiveTab('home');
    }} />;
  }

  if (currentView === 'appointments') {
    return <Appointments onBack={() => {
      setCurrentView('dashboard');
      setActiveTab('home');
    }} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <h1 className="text-2xl">Привет, {userName}! 👋</h1>
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell className="w-6 h-6 text-gray-700" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Блок "Мои питомцы" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl mb-4">Мои питомцы</h2>
          
          {/* Карточка питомца */}
          <button 
            onClick={() => setCurrentView('pet-profile')}
            className="w-full bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-all mb-3 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={mockPet.photo}
                  alt={mockPet.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-1">{mockPet.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {mockPet.type}, {mockPet.age}
                </p>
                <span className={`${mockPet.statusColor} text-white text-xs px-3 py-1 rounded-full inline-block`}>
                  {mockPet.status}
                </span>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </button>

          {/* Кнопка добавить питомца */}
          <button className="w-full border-2 border-dashed border-gray-300 rounded-3xl p-4 hover:border-[#2481CC] hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-gray-600 hover:text-[#2481CC]">
            <Plus className="w-5 h-5" />
            <span>Добавить питомца</span>
          </button>
        </motion.div>

        {/* Блок "Ближайшие события" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl mb-4">Ближайшие события</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`${event.color} rounded-2xl p-4 flex items-center gap-4`}
              >
                <div className="text-3xl">{event.emoji}</div>
                <div className="flex-1">
                  <h4 className={`mb-1 ${event.textColor}`}>{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Блок "Популярные услуги" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl mb-4">Популярные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularServices.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index === 0) {
                    // ИИ-диагностика
                    setCurrentView('ai-diagnosis');
                    setActiveTab('ai');
                  }
                }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl">{service.emoji}</span>
                </div>
                <h3 className="text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Блок "Статус подписки" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-[#FFF3CD] to-[#FFE7A0] border-l-4 border-[#F1A302] rounded-3xl p-6 shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#F1A302] rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl mb-2">Демо-режим активен</h3>
              <p className="text-gray-700 mb-2">
                Полный функционал будет доступен после окончания разработки.
              </p>
              <p className="text-sm">
                <strong>Старт: апрель 2026</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto max-w-6xl px-2 py-2">
          <div className="flex justify-around">
            {bottomNavigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors ${
                  activeTab === item.id
                    ? 'text-[#2481CC] bg-[#2481CC]/10'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
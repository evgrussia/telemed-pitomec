import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Video, MessageCircle, ChevronRight } from 'lucide-react';
import { VeterinaryCatalog } from '@/app/components/veterinary-catalog';
import { VideoCall } from '@/app/components/video-call';
import { CallEndScreen } from '@/app/components/call-end-screen';

interface AppointmentsProps {
  onBack: () => void;
}

export function Appointments({ onBack }: AppointmentsProps) {
  const [view, setView] = useState<'list' | 'book' | 'catalog' | 'video-call' | 'call-end'>('list');

  const upcomingAppointments = [
    {
      date: '29 января 2026',
      time: '10:00',
      doctor: 'Иванова А.П.',
      specialty: 'Офтальмолог',
      type: 'Осмотр',
      format: 'video',
      status: 'confirmed',
      statusColor: 'bg-[#31B545]',
      statusText: 'Подтверждено',
    },
    {
      date: '5 февраля 2026',
      time: '14:30',
      doctor: 'Петров С.М.',
      specialty: 'Терапевт',
      type: 'Вакцинация',
      format: 'clinic',
      location: 'Ул. Ленина, 15',
      status: 'pending',
      statusColor: 'bg-[#F1A302]',
      statusText: 'Ожидает подтверждения',
    },
  ];

  const consultationTypes = [
    {
      icon: Video,
      title: 'Видеоконсультация',
      description: 'Онлайн приём с ветеринаром',
      price: 'от 1500 ₽',
      color: 'from-[#2481CC] to-[#1a66a3]',
      available: '24/7',
    },
    {
      icon: Phone,
      title: 'Телефонная консультация',
      description: 'Быстрый звонок специалисту',
      price: 'от 800 ₽',
      color: 'from-[#31B545] to-[#28a03a]',
      available: '09:00 - 21:00',
    },
    {
      icon: MessageCircle,
      title: 'Чат с врачом',
      description: 'Переписка в удобное время',
      price: 'от 500 ₽',
      color: 'from-[#FF9F43] to-[#e88b2e]',
      available: '24/7',
    },
    {
      icon: MapPin,
      title: 'Приём в клинике',
      description: 'Очный визит к ветеринару',
      price: 'от 2000 ₽',
      color: 'from-purple-500 to-purple-700',
      available: '09:00 - 20:00',
    },
  ];

  if (view === 'call-end') {
    return (
      <CallEndScreen
        doctorName="Доктор Елена Смирнова"
        callDuration="05:23"
        onBack={() => setView('list')}
      />
    );
  }

  if (view === 'video-call') {
    return (
      <VideoCall
        doctorName="Доктор Елена Смирнова"
        onEndCall={() => setView('call-end')}
      />
    );
  }

  if (view === 'catalog') {
    return <VeterinaryCatalog onBack={() => setView('list')} />;
  }

  if (view === 'book') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white">
          <div className="container mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setView('list')}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex-1">
                <h1 className="text-2xl">Записаться на приём</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFF3CD] border-l-4 border-[#F1A302] rounded-2xl p-4"
          >
            <p className="text-sm">
              ⚠️ <strong>Демо-режим:</strong> Запись на приём недоступна в демо-версии.
            </p>
          </motion.div>

          <h2 className="text-xl">Выберите тип консультации</h2>

          {consultationTypes.map((type, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (index === 0) {
                  // Видеоконсультация - переход к каталогу
                  setView('catalog');
                }
              }}
              className="w-full bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg mb-1">{type.title}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-sm text-gray-700">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {type.available}
                    </span>
                    <span className="text-sm text-[#2481CC]">
                      {type.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl mb-1">Мои приёмы</h1>
              <p className="text-blue-100 text-sm">Запланированные визиты</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Book Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setView('book')}
          className="w-full bg-gradient-to-r from-[#31B545] to-[#28a03a] text-white py-5 rounded-2xl flex items-center justify-center gap-2 hover:shadow-xl transition-all text-lg"
        >
          <Calendar className="w-6 h-6" />
          Записаться на приём
        </motion.button>

        {/* Upcoming Appointments */}
        <div>
          <h2 className="text-xl mb-4">Предстоящие приёмы</h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg mb-1">{appointment.type}</h3>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                  </div>
                  <span className={`${appointment.statusColor} text-white text-xs px-3 py-1 rounded-full`}>
                    {appointment.statusText}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    {appointment.format === 'video' ? (
                      <Video className="w-4 h-4" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                    <span className="text-sm">
                      {appointment.format === 'video' 
                        ? 'Видеоконсультация' 
                        : appointment.location}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    👨‍⚕️ Врач: {appointment.doctor}
                  </p>
                  
                  {appointment.format === 'video' && appointment.status === 'confirmed' && (
                    <button
                      onClick={() => setView('video-call')}
                      className="w-full bg-gradient-to-r from-[#31B545] to-[#28a03a] text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Video className="w-5 h-5" />
                      Начать видеозвонок (Демо)
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Appointments */}
        <div>
          <h2 className="text-xl mb-4">История приёмов</h2>
          <div className="bg-white rounded-3xl p-8 shadow-md text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">
              История приёмов пуста
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
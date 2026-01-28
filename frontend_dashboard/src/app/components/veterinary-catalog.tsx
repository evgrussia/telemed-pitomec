import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Filter, Star, Clock, X, Calendar } from 'lucide-react';
import { BookingScreen } from '@/app/components/booking-screen';

interface VeterinaryCatalogProps {
  onBack: () => void;
}

// Моковые данные врачей
const DOCTOR_FEMALE = 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk2MTU2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080';
const DOCTOR_MALE = 'https://images.unsplash.com/photo-1640161415278-a5ac46f82d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdmV0ZXJpbmFyaWFuJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NjE1NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080';

export function VeterinaryCatalog({ onBack }: VeterinaryCatalogProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [availableNow, setAvailableNow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [bookingDoctor, setBookingDoctor] = useState<typeof doctors[0] | null>(null);

  const animalTypes = [
    { id: 'all', label: 'Все животные' },
    { id: 'cat', label: 'Кошка' },
    { id: 'dog', label: 'Собака' },
    { id: 'bird', label: 'Птица' },
    { id: 'rodent', label: 'Грызун' },
  ];

  const specialties = [
    { id: 'all', label: 'Все специализации' },
    { id: 'general', label: 'Общая практика' },
    { id: 'ophthalmologist', label: 'Офтальмолог' },
    { id: 'dermatologist', label: 'Дерматолог' },
    { id: 'surgeon', label: 'Хирург' },
  ];

  const doctors = [
    {
      id: 1,
      name: 'Доктор Елена Смирнова',
      specialty: 'Ветеринар-офтальмолог',
      experience: '8 лет опыта',
      rating: 4.9,
      reviews: 127,
      status: 'available',
      statusText: '🟢 Доступна сейчас',
      statusColor: 'text-[#31B545]',
      price: '1,500 ₽',
      photo: DOCTOR_FEMALE,
    },
    {
      id: 2,
      name: 'Доктор Иван Петров',
      specialty: 'Ветеринар общей практики',
      experience: '12 лет опыта',
      rating: 4.8,
      reviews: 89,
      status: 'later',
      statusText: '🟡 Доступен через 2 часа',
      statusColor: 'text-[#F1A302]',
      price: '1,200 ₽',
      photo: DOCTOR_MALE,
    },
  ];

  const myAppointment = {
    doctor: 'Доктор Елена Смирнова',
    datetime: 'Завтра, 15:00',
    status: 'Подтверждена',
    statusColor: 'bg-[#31B545]',
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? 'fill-[#F1A302] text-[#F1A302]'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  if (bookingDoctor) {
    return (
      <BookingScreen
        doctor={bookingDoctor}
        onBack={() => setBookingDoctor(null)}
      />
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
              <h1 className="text-2xl">Консультации</h1>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <Filter className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Фильтры */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 shadow-md space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl">Фильтры</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-1 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Вид животного */}
            <div>
              <label className="block text-sm mb-2">Вид животного</label>
              <select
                value={selectedAnimal}
                onChange={(e) => setSelectedAnimal(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors bg-white"
              >
                {animalTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Специализация */}
            <div>
              <label className="block text-sm mb-2">Специализация</label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors bg-white"
              >
                {specialties.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    {spec.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Доступны сейчас */}
            <div className="flex items-center justify-between">
              <label className="text-sm">Доступны сейчас</label>
              <button
                onClick={() => setAvailableNow(!availableNow)}
                className={`w-14 h-8 rounded-full transition-colors ${
                  availableNow ? 'bg-[#31B545]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    availableNow ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </motion.div>
        )}

        {/* Мои записи */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl mb-4">Мои записи</h2>
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg mb-1">{myAppointment.doctor}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{myAppointment.datetime}</span>
                </div>
                <span className={`${myAppointment.statusColor} text-white text-xs px-3 py-1 rounded-full inline-block`}>
                  {myAppointment.status}
                </span>
              </div>
            </div>
            <button className="w-full border-2 border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-50 transition-colors">
              Отменить
            </button>
          </div>
        </motion.div>

        {/* Список врачей */}
        <div>
          <h2 className="text-xl mb-4">Доступные врачи</h2>
          <div className="space-y-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{doctor.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{doctor.specialty}</p>
                    <p className="text-gray-500 text-sm mb-3">{doctor.experience}</p>

                    {/* Рейтинг */}
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(doctor.rating)}
                      <span className="text-sm">
                        {doctor.rating} ({doctor.reviews} отзывов)
                      </span>
                    </div>

                    {/* Статус */}
                    <p className={`text-sm ${doctor.statusColor} mb-2`}>
                      {doctor.statusText}
                    </p>

                    {/* Цена */}
                    <p className="text-lg mb-3">
                      <strong>{doctor.price}</strong> / консультация
                    </p>

                    <button
                      onClick={() => setSelectedDoctor(doctor.id)}
                      className="w-full bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white py-3 rounded-xl hover:shadow-lg transition-all"
                    >
                      Записаться
                    </button>
                  </div>
                </div>

                {/* Детали врача (при клике) */}
                {selectedDoctor === doctor.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 pt-4 mt-4"
                  >
                    <h4 className="mb-3">Выберите время консультации:</h4>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map((time) => (
                        <button
                          key={time}
                          className="border-2 border-gray-200 py-2 rounded-xl hover:border-[#2481CC] hover:bg-blue-50 transition-colors"
                        >
                          <Clock className="w-4 h-4 mx-auto mb-1" />
                          <span className="text-sm">{time}</span>
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#FFF3CD] rounded-2xl p-4 mb-4">
                      <p className="text-sm">
                        ⚠️ <strong>Демо-режим:</strong> Запись на приём недоступна в демо-версии.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => setBookingDoctor(doctor)}
                        className="w-full bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white py-3 rounded-xl hover:shadow-lg transition-all"
                      >
                        Перейти к выбору даты и времени
                      </button>

                      <button
                        onClick={() => setSelectedDoctor(null)}
                        className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        Закрыть
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
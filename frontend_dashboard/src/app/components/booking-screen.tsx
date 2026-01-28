import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';

interface BookingScreenProps {
  doctor: {
    id: number;
    name: string;
    specialty: string;
    rating: number;
    reviews: number;
    price: string;
    photo: string;
  };
  onBack: () => void;
}

export function BookingScreen({ doctor, onBack }: BookingScreenProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Генерация дней месяца
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Доступные даты (следующие 14 дней)
  const availableDates: Date[] = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    availableDates.push(date);
  }

  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (d) =>
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
    );
  };

  const isSameDate = (date1: Date | null, date2: Date) => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Слоты времени
  const timeSlots = [
    { time: '10:00', available: true },
    { time: '11:00', available: true },
    { time: '12:00', available: false },
    { time: '13:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: true },
    { time: '18:00', available: true },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= Math.floor(rating)
                ? 'fill-[#F1A302] text-[#F1A302]'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (date: Date) => {
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handlePayment = () => {
    setShowPayment(true);
    // Имитация оплаты
    setTimeout(() => {
      setShowPayment(false);
      setShowConfirmation(true);
    }, 2000);
  };

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  // Экран подтверждения
  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-gradient-to-r from-[#31B545] to-[#28a03a] text-white">
          <div className="container mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h1 className="text-2xl">Запись подтверждена</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl text-center"
          >
            <div className="w-24 h-24 bg-[#31B545] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-2xl mb-4">Запись успешно создана!</h2>
            <p className="text-gray-600 mb-8">
              Вы получите напоминание за 30 минут до начала консультации
            </p>

            <div className="bg-blue-50 rounded-2xl p-6 mb-6 text-left">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">
                    {selectedDate && formatDate(selectedDate)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">{selectedTime}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="w-full bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white py-4 rounded-xl hover:shadow-lg transition-all"
            >
              Вернуться на главную
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#FFF3CD] rounded-2xl p-4"
          >
            <p className="text-sm text-center">
              ⚠️ <strong>Демо-режим:</strong> Это тестовая запись. Реальная консультация не запланирована.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Экран оплаты
  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-xl text-center mx-4"
        >
          <div className="w-16 h-16 border-4 border-[#2481CC] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h3 className="text-xl mb-2">Обработка платежа...</h3>
          <p className="text-gray-600">Пожалуйста, подождите</p>
        </motion.div>
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
              <h1 className="text-2xl">Запись к {doctor.name.replace('Доктор ', '')}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Информация о враче */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-4 shadow-md"
        >
          <div className="flex items-center gap-4">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg mb-1">{doctor.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
              <div className="flex items-center gap-2">
                {renderStars(doctor.rating)}
                <span className="text-xs text-gray-600">
                  {doctor.rating} ({doctor.reviews})
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Календарь */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-xl mb-4">Выберите дату</h3>
          
          <div className="mb-4">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {/* Пустые клетки для начала месяца */}
              {Array.from({ length: (firstDayOfMonth + 6) % 7 }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {/* Дни месяца */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const date = new Date(currentYear, currentMonth, i + 1);
                const available = isDateAvailable(date);
                const selected = isSameDate(selectedDate, date);
                const isPast = date < today && date.toDateString() !== today.toDateString();

                return (
                  <button
                    key={i}
                    onClick={() => available && setSelectedDate(date)}
                    disabled={!available || isPast}
                    className={`aspect-square rounded-xl flex items-center justify-center text-sm transition-all ${
                      selected
                        ? 'bg-[#2481CC] text-white shadow-lg scale-105'
                        : available && !isPast
                        ? 'bg-green-50 text-[#31B545] hover:bg-green-100'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Выбор времени */}
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-md"
          >
            <h3 className="text-xl mb-4">
              Доступное время на {formatDate(selectedDate)}
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                  disabled={!slot.available}
                  className={`py-4 rounded-xl flex flex-col items-center justify-center transition-all ${
                    selectedTime === slot.time
                      ? 'bg-[#2481CC] text-white shadow-lg scale-105'
                      : slot.available
                      ? 'bg-green-50 text-[#31B545] hover:bg-green-100'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Clock className="w-5 h-5 mb-1" />
                  <span className="text-sm">{slot.time}</span>
                  {!slot.available && (
                    <span className="text-xs mt-1">Занято</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Итоговая информация */}
        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-md"
          >
            <h3 className="text-xl mb-4">Детали записи</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Врач:</span>
                <span>{doctor.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Дата:</span>
                <span>{formatDate(selectedDate)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Время:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-gray-600">Стоимость:</span>
                <span className="text-xl">{doctor.price}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-gradient-to-r from-[#31B545] to-[#28a03a] text-white py-5 rounded-xl hover:shadow-xl transition-all text-lg"
            >
              Оплатить и подтвердить
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              💡 Вы сможете отменить запись за 2 часа до начала
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Star, ArrowLeft } from 'lucide-react';

interface CallEndScreenProps {
  doctorName: string;
  callDuration: string;
  onBack: () => void;
}

export function CallEndScreen({ doctorName, callDuration, onBack }: CallEndScreenProps) {
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  // Экран благодарности после отправки отзыва
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-md"
        >
          <div className="w-24 h-24 bg-[#31B545] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-2xl mb-4">Спасибо за отзыв!</h2>
          <p className="text-gray-600">
            Ваше мнение помогает нам становиться лучше
          </p>
        </motion.div>
      </div>
    );
  }

  // Экран отзыва
  if (showReview) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white">
          <div className="container mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowReview(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex-1">
                <h1 className="text-2xl">Оставить отзыв</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-md"
          >
            <h3 className="text-xl mb-6 text-center">Оцените консультацию</h3>

            <div className="flex items-center justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-[#F1A302] text-[#F1A302]'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Поделитесь своими впечатлениями о консультации (необязательно)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors resize-none h-32 mb-4"
            />

            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className="w-full bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Отправить отзыв
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Главный экран завершения консультации
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full"
      >
        {/* Иконка успеха */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#31B545] rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Заголовок */}
        <h2 className="text-2xl text-center mb-6">Консультация завершена</h2>

        {/* Информация */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-6 space-y-3">
          <div>
            <p className="text-sm text-gray-600 mb-1">Врач:</p>
            <p className="text-base">{doctorName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Длительность:</p>
            <p className="text-base">{callDuration}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Дата:</p>
            <p className="text-base">{formattedDate}</p>
          </div>
        </div>

        {/* Сообщение */}
        <div className="bg-[#FFF3CD] rounded-2xl p-4 mb-6">
          <p className="text-sm text-center">
            Заключение врача будет отправлено вам в чат бота в течение 10 минут.
          </p>
        </div>

        {/* Действия */}
        <div className="space-y-3">
          <button
            onClick={() => setShowReview(true)}
            className="w-full bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white py-4 rounded-xl hover:shadow-lg transition-all"
          >
            Оставить отзыв
          </button>

          <button
            onClick={onBack}
            className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Вернуться в кабинет
          </button>
        </div>

        {/* Дисклеймер */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            ⚠️ <strong>Демо-режим:</strong> Это моковая консультация для демонстрации функционала.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
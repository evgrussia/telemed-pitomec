import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Camera, AlertTriangle, BookOpen, Calendar } from 'lucide-react';
import { VeterinaryCatalog } from '@/app/components/veterinary-catalog';

interface AIDiagnosisProps {
  onBack: () => void;
}

// Моковое изображение симптома (глаз кота)
const MOCK_SYMPTOM_PHOTO = 'https://images.unsplash.com/photo-1739440665892-ccdb9c696a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBleWUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2OTYxNTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080';

export function AIDiagnosis({ onBack }: AIDiagnosisProps) {
  const [selectedPet, setSelectedPet] = useState('barsik');
  const [uploadedImage, setUploadedImage] = useState('');
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const pets = [
    { id: 'barsik', name: 'Барсик (кот)' },
  ];

  const handlePhotoClick = () => {
    // Имитация загрузки фото - сразу показываем моковое изображение
    setUploadedImage(MOCK_SYMPTOM_PHOTO);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Имитация анализа (3-5 секунд)
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 4000);
  };

  const handleReset = () => {
    setUploadedImage('');
    setDescription('');
    setShowResult(false);
    setIsAnalyzing(false);
  };

  if (showCatalog) {
    return <VeterinaryCatalog onBack={() => setShowCatalog(false)} />;
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
              <h1 className="text-2xl">ИИ-диагностика</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        {!showResult ? (
          <>
            {/* Выбор питомца */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-md"
            >
              <label className="block text-sm mb-2">Выберите питомца</label>
              <select
                value={selectedPet}
                onChange={(e) => setSelectedPet(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors bg-white"
              >
                {pets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Блок загрузки фото */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-md"
            >
              <h3 className="text-xl mb-4">Сфотографируйте симптом</h3>
              
              {uploadedImage ? (
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={uploadedImage}
                    alt="Symptom"
                    className="w-full h-80 object-cover"
                  />
                  <button
                    onClick={() => setUploadedImage('')}
                    className="absolute top-4 right-4 px-6 py-3 bg-white text-[#2481CC] rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
                  >
                    Изменить фото
                  </button>
                </div>
              ) : (
                <button
                  onClick={handlePhotoClick}
                  className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center hover:border-[#2481CC] hover:bg-blue-50 transition-all"
                >
                  <Camera className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg text-gray-600">
                    Нажмите, чтобы сделать фото или выбрать из галереи
                  </p>
                </button>
              )}
            </motion.div>

            {/* Поле описания */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-md"
            >
              <label className="block text-sm mb-2">
                Дополнительное описание (необязательно)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Например, вялость со вчерашнего вечера..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors resize-none h-32"
              />
            </motion.div>

            {/* Кнопка анализа */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={handleAnalyze}
              disabled={!uploadedImage || isAnalyzing}
              className="w-full bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white py-6 rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-xl"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  Анализируем...
                </>
              ) : (
                'АНАЛИЗИРОВАТЬ'
              )}
            </motion.button>

            {/* Дисклеймер */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-sm text-gray-600">
                ⓘ ИИ не заменяет полноценный осмотр врача. При серьёзных симптомах обратитесь в клинику.
              </p>
            </motion.div>
          </>
        ) : (
          <>
            {/* Результат анализа */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-4 border-[#F1A302]"
            >
              {/* Заголовок результата */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FFF3CD] rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-[#F1A302]" />
                </div>
                <div>
                  <h3 className="text-2xl mb-1">Средний уровень тревоги</h3>
                  <p className="text-sm text-gray-600">Результат готов</p>
                </div>
              </div>

              {/* Превью фото */}
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src={uploadedImage}
                  alt="Analyzed symptom"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Текст результата */}
              <div className="bg-[#FFF3CD] rounded-2xl p-6 mb-6">
                <h4 className="text-lg mb-3">
                  <strong>Обнаружено:</strong> Покраснение конъюнктивы
                </h4>
                
                <p className="mb-4 text-gray-800">
                  <strong>Рекомендация:</strong> Рекомендуется консультация 
                  ветеринара-офтальмолога в течение 24 часов.
                </p>
                
                <p className="text-sm text-gray-700 italic">
                  Это не окончательный диагноз. ИИ помогает 
                  только в первичной оценке симптомов.
                </p>
              </div>

              {/* Кнопки действий */}
              <div className="space-y-3">
                <button 
                  onClick={() => setShowCatalog(true)}
                  className="w-full bg-[#31B545] text-white py-5 rounded-xl hover:bg-[#28a03a] transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Calendar className="w-6 h-6" />
                  Записаться к ветеринару
                </button>
                
                <button className="w-full border-2 border-[#2481CC] text-[#2481CC] py-5 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-lg">
                  <BookOpen className="w-6 h-6" />
                  Сохранить в дневник
                </button>
              </div>
            </motion.div>

            {/* Кнопка нового анализа */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={handleReset}
              className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Провести новый анализ
            </motion.button>

            {/* Дисклеймер */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-sm text-gray-600">
                ⓘ ИИ не заменяет полноценный осмотр врача. При серьёзных симптомах обратитесь в клинику.
              </p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
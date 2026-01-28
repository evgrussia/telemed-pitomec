import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Plus, Scale, Activity, Syringe, Pill, FileText, Video, Utensils, TrendingUp, ChevronDown, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HealthDiaryProps {
  onBack: () => void;
}

type FilterType = 'all' | 'weight' | 'symptoms' | 'vaccines' | 'prescriptions';
type RecordType = 'weight' | 'symptom' | 'vaccine' | 'medication' | 'prescription' | 'nutrition' | 'activity';

export function HealthDiary({ onBack }: HealthDiaryProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'weight', label: 'Вес' },
    { id: 'symptoms', label: 'Симптомы' },
    { id: 'vaccines', label: 'Прививки' },
    { id: 'prescriptions', label: 'Назначения' },
  ];

  const diaryEntries = [
    {
      id: 1,
      date: 'Сегодня, 14:30',
      type: 'symptom',
      icon: Activity,
      color: 'text-[#F1A302]',
      bgColor: 'bg-[#FFF3CD]',
      title: 'Покраснение глаза',
      description: 'Заметили покраснение правого глаза. Загружено фото.',
      source: 'ИИ-диагностика',
      category: 'symptoms',
    },
    {
      id: 2,
      date: 'Вчера, 10:00',
      type: 'weight',
      icon: Scale,
      color: 'text-[#2481CC]',
      bgColor: 'bg-blue-50',
      title: 'Взвешивание',
      value: '4.5 кг',
      category: 'weight',
    },
    {
      id: 3,
      date: '25 января 2026',
      type: 'vaccine',
      icon: Syringe,
      color: 'text-[#31B545]',
      bgColor: 'bg-green-50',
      title: 'Комплексная вакцинация',
      description: 'Вакцинация от бешенства и основных инфекций',
      clinic: 'Ветклиника "Дружок"',
      category: 'vaccines',
    },
    {
      id: 4,
      date: '20 января 2026',
      type: 'consultation',
      icon: Video,
      color: 'text-[#2481CC]',
      bgColor: 'bg-blue-50',
      title: 'Видеоконсультация с доктором Еленой Смирновой',
      description: 'Плановый осмотр. Всё в порядке.',
      hasReport: true,
      category: 'prescriptions',
    },
  ];

  // Данные для графика веса
  const weightData = [
    { month: 'Окт', weight: 4.2 },
    { month: 'Ноя', weight: 4.3 },
    { month: 'Дек', weight: 4.3 },
    { month: 'Янв', weight: 4.5 },
  ];

  const filteredEntries = selectedFilter === 'all'
    ? diaryEntries
    : diaryEntries.filter(entry => entry.category === selectedFilter);

  if (showAddForm) {
    return <AddRecordForm onBack={() => setShowAddForm(false)} />;
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
              <h1 className="text-2xl">Дневник здоровья</h1>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-white text-[#2481CC] px-4 py-2 rounded-xl hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Добавить запись</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Выбор питомца */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-4 shadow-md"
        >
          <div className="relative">
            <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors bg-white appearance-none">
              <option>Барсик (кот)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </motion.div>

        {/* Фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id as FilterType)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedFilter === filter.id
                  ? 'bg-[#2481CC] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* График веса */}
        {(selectedFilter === 'all' || selectedFilter === 'weight') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#2481CC]" />
              <h3 className="text-xl">Динамика веса</h3>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[4.0, 4.6]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '2px solid #2481CC',
                    borderRadius: '12px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#2481CC"
                  strokeWidth={3}
                  dot={{ fill: '#2481CC', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-3">
                <p className="text-xs text-gray-600 mb-1">Текущий</p>
                <p className="text-lg">4.5 кг</p>
              </div>
              <div className="bg-green-50 rounded-xl p-3">
                <p className="text-xs text-gray-600 mb-1">Прирост</p>
                <p className="text-lg text-[#31B545]">+0.3 кг</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-3">
                <p className="text-xs text-gray-600 mb-1">Норма</p>
                <p className="text-lg">4.0-5.0 кг</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Таймлайн событий */}
        <div className="space-y-4">
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 ${entry.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <entry.icon className={`w-7 h-7 ${entry.color}`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg">{entry.title}</h3>
                    <p className="text-sm text-gray-600 text-right whitespace-nowrap ml-2">
                      {entry.date}
                    </p>
                  </div>

                  {entry.value && (
                    <p className="text-2xl mb-2">{entry.value}</p>
                  )}

                  {entry.description && (
                    <p className="text-gray-700 mb-2">{entry.description}</p>
                  )}

                  {entry.source && (
                    <p className="text-sm text-gray-600 mb-2">
                      📱 Источник: {entry.source}
                    </p>
                  )}

                  {entry.clinic && (
                    <p className="text-sm text-gray-600">
                      🏥 {entry.clinic}
                    </p>
                  )}

                  {entry.hasReport && (
                    <button className="mt-2 text-[#2481CC] text-sm hover:underline">
                      Ссылка на заключение →
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl p-12 text-center"
          >
            <p className="text-gray-500 mb-4">Записей с таким фильтром нет</p>
            <button
              onClick={() => setSelectedFilter('all')}
              className="text-[#2481CC] hover:underline"
            >
              Показать все записи
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Компонент формы добавления записи
interface AddRecordFormProps {
  onBack: () => void;
}

function AddRecordForm({ onBack }: AddRecordFormProps) {
  const [selectedType, setSelectedType] = useState<RecordType | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const recordTypes = [
    { id: 'weight', label: 'Вес', icon: Scale, color: 'bg-blue-50 text-[#2481CC]' },
    { id: 'symptom', label: 'Симптом', icon: Activity, color: 'bg-orange-50 text-[#F1A302]' },
    { id: 'vaccine', label: 'Прививка', icon: Syringe, color: 'bg-green-50 text-[#31B545]' },
    { id: 'medication', label: 'Приём лекарства', icon: Pill, color: 'bg-purple-50 text-purple-600' },
    { id: 'prescription', label: 'Назначение врача', icon: FileText, color: 'bg-blue-50 text-[#2481CC]' },
    { id: 'nutrition', label: 'Питание', icon: Utensils, color: 'bg-orange-50 text-orange-600' },
    { id: 'activity', label: 'Активность', icon: TrendingUp, color: 'bg-green-50 text-[#31B545]' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-md"
        >
          <div className="w-24 h-24 bg-[#31B545] rounded-full flex items-center justify-center mx-auto mb-6">
            <Plus className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-2xl mb-4">Запись добавлена!</h2>
          <p className="text-gray-600">
            Запись успешно добавлена в дневник здоровья
          </p>
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
              <h1 className="text-2xl">Добавить запись</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Выбор типа записи */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-md"
          >
            <h3 className="text-xl mb-4">Выберите тип записи</h3>

            <div className="grid grid-cols-2 gap-3">
              {recordTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id as RecordType)}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    selectedType === type.id
                      ? 'border-[#2481CC] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-center">{type.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Динамические поля формы */}
          <AnimatePresence mode="wait">
            {selectedType === 'weight' && (
              <motion.div
                key="weight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-md space-y-4"
              >
                <h3 className="text-xl mb-4">Данные о весе</h3>

                <div>
                  <label className="block text-sm mb-2">Вес (кг) *</label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                    placeholder="4.5"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Дата и время *</label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Фото (необязательно)</label>
                  <button
                    type="button"
                    className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#2481CC] hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-gray-600"
                  >
                    <Plus className="w-6 h-6" />
                    <span>Загрузить фото</span>
                  </button>
                </div>
              </motion.div>
            )}

            {selectedType === 'symptom' && (
              <motion.div
                key="symptom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-md space-y-4"
              >
                <h3 className="text-xl mb-4">Описание симптома</h3>

                <div>
                  <label className="block text-sm mb-2">Описание *</label>
                  <textarea
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors resize-none h-32"
                    placeholder="Опишите симптомы..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Фото *</label>
                  <button
                    type="button"
                    className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#2481CC] hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-gray-600"
                  >
                    <Plus className="w-6 h-6" />
                    <span>Загрузить фото симптома</span>
                  </button>
                </div>

                <div>
                  <label className="block text-sm mb-2">Дата и время *</label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                  />
                </div>
              </motion.div>
            )}

            {selectedType === 'vaccine' && (
              <motion.div
                key="vaccine"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-md space-y-4"
              >
                <h3 className="text-xl mb-4">Данные о прививке</h3>

                <div>
                  <label className="block text-sm mb-2">Название вакцины *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                    placeholder="Например: Нобивак"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Дата *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Клиника (необязательно)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                    placeholder="Например: Ветклиника 'Дружок'"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Фото ветпаспорта (необязательно)</label>
                  <button
                    type="button"
                    className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#2481CC] hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-gray-600"
                  >
                    <Plus className="w-6 h-6" />
                    <span>Загрузить фото</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Кнопка сохранения */}
          {selectedType && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#2481CC] to-[#1a66a3] text-white py-4 rounded-xl hover:shadow-lg transition-all text-lg"
            >
              Сохранить
            </motion.button>
          )}
        </form>
      </div>
    </div>
  );
}

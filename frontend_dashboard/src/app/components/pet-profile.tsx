import { motion } from 'motion/react';
import { ArrowLeft, Edit, Calendar, Heart, Activity, FileText } from 'lucide-react';

interface PetProfileProps {
  onBack: () => void;
}

const BARSIK_PHOTO = 'https://images.unsplash.com/photo-1625192494235-21e8821040c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0YWJieSUyMGNhdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTU5NTY1MXww&ixlib=rb-4.1.0&q=80&w=1080';

export function PetProfile({ onBack }: PetProfileProps) {
  const petInfo = {
    name: 'Барсик',
    type: 'Кот',
    breed: 'Британская короткошёрстная',
    age: '3 года',
    weight: '4.5 кг',
    gender: 'Самец',
    status: 'Здоров',
    photo: BARSIK_PHOTO,
  };

  const healthMetrics = [
    { icon: Heart, label: 'Последний осмотр', value: '15 января 2026' },
    { icon: Activity, label: 'Вес', value: '4.5 кг' },
    { icon: Calendar, label: 'Следующая прививка', value: 'завтра' },
  ];

  const recentRecords = [
    {
      date: '15 января 2026',
      type: 'Осмотр',
      doctor: 'Иванова А.П.',
      note: 'Плановый осмотр. Питомец здоров.',
    },
    {
      date: '10 декабря 2025',
      type: 'Вакцинация',
      doctor: 'Петров С.М.',
      note: 'Комплексная прививка. Переносимость хорошая.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl flex-1">Профиль питомца</h1>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Edit className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Pet Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#2481CC] to-[#1a66a3] rounded-3xl p-6 text-white shadow-xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white flex-shrink-0 ring-4 ring-white/30">
              <img
                src={petInfo.photo}
                alt={petInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl mb-2">{petInfo.name}</h2>
              <p className="text-blue-100 mb-3">
                {petInfo.breed}, {petInfo.age}
              </p>
              <span className="bg-[#31B545] text-white text-sm px-4 py-2 rounded-full inline-block">
                {petInfo.status}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-xl mb-4">Основная информация</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Вид</p>
              <p className="text-lg">{petInfo.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Порода</p>
              <p className="text-lg">{petInfo.breed}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Возраст</p>
              <p className="text-lg">{petInfo.age}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Пол</p>
              <p className="text-lg">{petInfo.gender}</p>
            </div>
          </div>
        </motion.div>

        {/* Health Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-xl mb-4">Показатели здоровья</h3>
          <div className="space-y-4">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2481CC]/10 rounded-xl flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-[#2481CC]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <p className="text-lg">{metric.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Records */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-xl mb-4">История приёмов</h3>
          <div className="space-y-4">
            {recentRecords.map((record, index) => (
              <div key={index} className="border-l-4 border-[#2481CC] pl-4 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-[#2481CC]" />
                  <p className="text-sm text-gray-600">{record.date}</p>
                </div>
                <h4 className="mb-1">{record.type}</h4>
                <p className="text-sm text-gray-600 mb-1">Врач: {record.doctor}</p>
                <p className="text-sm text-gray-700">{record.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { Brain, Video, BookOpen, Bell } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'ИИ-диагностика',
    description: 'Мгновенная оценка симптомов по фото',
  },
  {
    icon: Video,
    title: 'Видеоконсультации',
    description: 'Связь с ветеринарами 24/7',
  },
  {
    icon: BookOpen,
    title: 'Дневник здоровья',
    description: 'История болезни и трекинг параметров',
  },
  {
    icon: Bell,
    title: 'Умные напоминания',
    description: 'Не пропустите прививки и осмотры',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Основные возможности</h2>
          <p className="text-xl text-gray-600">
            Всё необходимое для заботы о здоровье вашего питомца
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#2481CC] to-[#1a66a3] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

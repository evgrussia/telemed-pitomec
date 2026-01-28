import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Upload, Sparkles, Calendar } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Загрузите фото симптома',
    description: 'Сделайте фото питомца или проблемной области',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400',
  },
  {
    icon: Sparkles,
    title: 'Получите оценку ИИ за 10 секунд',
    description: 'Наш алгоритм проанализирует симптомы и даст рекомендации',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  },
  {
    icon: Calendar,
    title: 'Запишитесь на консультацию',
    description: 'Свяжитесь с ветеринаром для точной диагностики',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Как это работает</h2>
          <p className="text-xl text-gray-600">
            Простой процесс от диагностики до лечения
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="flex-1">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#2481CC] rounded-full flex items-center justify-center text-white text-xl">
                    {index + 1}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="w-16 h-16 bg-[#FF9F43] rounded-2xl flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl mb-4">{step.title}</h3>
                <p className="text-xl text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

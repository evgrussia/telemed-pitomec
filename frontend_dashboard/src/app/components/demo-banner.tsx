import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';

export function DemoBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#F1A302] to-[#FF9F43] rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8" />
              <h2 className="text-3xl md:text-4xl">Демо-версия</h2>
            </div>
            
            <p className="text-xl md:text-2xl mb-6 opacity-95">
              Полный функционал будет доступен после окончания разработки
            </p>
            
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-flex">
              <Calendar className="w-6 h-6" />
              <span className="text-lg">Старт проекта: апрель 2026 года</span>
            </div>
            
            <p className="mt-6 text-lg opacity-90">
              Сейчас вы можете протестировать интерфейс и основные возможности приложения
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

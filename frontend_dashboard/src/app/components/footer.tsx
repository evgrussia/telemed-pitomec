import { motion } from 'motion/react';
import { Send, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4">Телемед-Питомец</h3>
            <p className="text-gray-400">
              Забота о здоровье вашего питомца с помощью современных технологий и опытных ветеринаров
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@telemed-pet.ru"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@telemed-pet.ru</span>
              </a>
              <a
                href="https://t.me/telemedpet"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>@telemedpet</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl mb-4">Следите за нами</h4>
            <div className="flex gap-4">
              <a
                href="https://t.me/telemedpet"
                className="w-12 h-12 bg-[#2481CC] rounded-full flex items-center justify-center hover:bg-[#1a66a3] transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear} Телемед-Питомец. Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  );
}

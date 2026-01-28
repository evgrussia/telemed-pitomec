import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Share2, 
  Paperclip, 
  X, 
  MessageCircle,
  Send,
  ChevronLeft
} from 'lucide-react';

interface VideoCallProps {
  doctorName: string;
  onEndCall: () => void;
}

// Моковые изображения
const DOCTOR_VIDEO = 'https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2OTYxNjEyNnww&ixlib=rb-4.1.0&q=80&w=1080';
const BACKGROUND_BLUR = 'https://images.unsplash.com/photo-1758208974170-3a3037da0c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBibHVyJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njk2MTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080';

export function VideoCall({ doctorName, onEndCall }: VideoCallProps) {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [showEndConfirm, setShowEndConfirm] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  // Таймер звонка
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const chatMessages = [
    {
      id: 1,
      sender: 'doctor',
      text: 'Вижу покраснение. Когда это началось?',
      time: '10:15',
    },
    {
      id: 2,
      sender: 'user',
      text: 'Вчера вечером заметила',
      time: '10:16',
    },
    {
      id: 3,
      sender: 'doctor',
      text: 'Давайте посмотрим на фото ещё раз...',
      time: '10:17',
    },
  ];

  const handleEndCall = () => {
    setShowEndConfirm(false);
    onEndCall();
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Фон */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKGROUND_BLUR})`,
          filter: 'blur(20px) brightness(0.4)',
        }}
      />

      {/* Основное видео (врач) */}
      <div className="relative h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <img
            src={DOCTOR_VIDEO}
            alt="Doctor"
            className="w-full h-full object-cover"
          />
          
          {/* Имя врача */}
          <div className="absolute bottom-24 left-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-xl">
            <p className="text-white text-lg">{doctorName}</p>
          </div>
        </motion.div>

        {/* Маленькое окно (пользователь) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-6 right-6 w-40 h-56 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
        >
          {isCameraOn ? (
            <div className="w-full h-full bg-gradient-to-br from-[#2481CC] to-[#1a66a3] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Video className="w-8 h-8" />
                </div>
                <p className="text-sm">Камера вкл.</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <VideoOff className="w-8 h-8 text-gray-500" />
            </div>
          )}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 px-3 py-1 rounded-lg">
            <p className="text-white text-xs">Вы</p>
          </div>
        </motion.div>

        {/* Информация о звонке */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-6 left-6 space-y-2"
        >
          <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-xl">
            <p className="text-white text-xl">{formatTime(callDuration)}</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2">
            <div className="w-2 h-2 bg-[#31B545] rounded-full animate-pulse" />
            <p className="text-white text-sm">Отличное качество</p>
          </div>
        </motion.div>

        {/* Панель управления */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg rounded-3xl px-6 py-4 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            {/* Микрофон */}
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                isMicOn
                  ? 'bg-white/20 hover:bg-white/30 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
            </button>

            {/* Камера */}
            <button
              onClick={() => setIsCameraOn(!isCameraOn)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                isCameraOn
                  ? 'bg-white/20 hover:bg-white/30 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              {isCameraOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
            </button>

            {/* Поделиться экраном */}
            <button className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all">
              <Share2 className="w-6 h-6" />
            </button>

            {/* Прикрепить файл */}
            <button className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all">
              <Paperclip className="w-6 h-6" />
            </button>

            {/* Чат */}
            <button
              onClick={() => setShowChat(!showChat)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                showChat
                  ? 'bg-[#2481CC] text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              <MessageCircle className="w-6 h-6" />
            </button>

            {/* Завершить звонок */}
            <button
              onClick={() => setShowEndConfirm(true)}
              className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Чат */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 w-96 h-full bg-black/90 backdrop-blur-xl border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                {/* Заголовок чата */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-white text-xl">Чат</h3>
                  <button
                    onClick={() => setShowChat(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Сообщения */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-[#2481CC] text-white'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <p className="text-sm mb-1">{message.text}</p>
                        <p className="text-xs opacity-70">{message.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ввод сообщения */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Введите сообщение..."
                      className="flex-1 bg-white/10 text-white placeholder-white/50 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2481CC]"
                    />
                    <button
                      onClick={() => setMessageInput('')}
                      className="w-12 h-12 bg-[#2481CC] rounded-xl flex items-center justify-center text-white hover:bg-[#1a66a3] transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Подтверждение завершения звонка */}
        <AnimatePresence>
          {showEndConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl"
              >
                <h3 className="text-2xl mb-4">Завершить консультацию?</h3>
                <p className="text-gray-600 mb-6">
                  Вы уверены, что хотите завершить видеозвонок с {doctorName}?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowEndConfirm(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={handleEndCall}
                    className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition-colors"
                  >
                    Завершить
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

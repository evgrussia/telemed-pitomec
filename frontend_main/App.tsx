import React from 'react';
import { GlassCard } from './components/GlassCard';
import { 
  Heart, 
  Sparkles,
  PawPrint,
  Zap,
  Users,
  CheckCircle2,
  Camera,
  Video,
  FileText,
  AlertCircle,
  TrendingUp,
  Scan,
  Calendar,
  Bell,
  MessageCircle,
  MapPin,
  Globe,
  Feather,
  Bug,
  Check,
  Star
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0A1128' }}>
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" 
             style={{ background: 'radial-gradient(circle, #2D9CDB 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" 
             style={{ background: 'radial-gradient(circle, #FF6B6B 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl" 
             style={{ background: 'radial-gradient(circle, #2D9CDB 0%, transparent 70%)' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Trust Badge - Top */}
          <div className="flex justify-center mb-8 md:mb-12">
            <GlassCard className="rounded-[32px] px-6 py-3" variant="strong">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#2D9CDB' }}></div>
                <span className="text-white/90 text-sm md:text-base">Уже 50 000+ счастливых хвостиков</span>
                <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" style={{ color: '#FF6B6B' }} />
              </div>
            </GlassCard>
          </div>

          {/* Main Hero Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 glass-card border border-white/20">
                <Sparkles className="w-4 h-4" style={{ color: '#2D9CDB' }} />
                <span className="text-sm text-white/90">AI + Ветеринары</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Будущее ветеринарии{' '}
                <span style={{ 
                  background: 'linear-gradient(135deg, #2D9CDB 0%, #FF6B6B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  в вашем смартфоне
                </span>
              </h1>

              {/* Sub-heading */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Мгновенная помощь ИИ и ветеринары на связи 24/7. Забота о питомце стала проще, умнее и всегда под рукой.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button 
                  className="px-8 md:px-10 py-4 md:py-5 rounded-[28px] font-semibold text-base md:text-lg transition-all hover:scale-105 neon-glow-coral flex items-center justify-center gap-2"
                  style={{ background: '#FF6B6B', color: 'white' }}
                >
                  <Zap className="w-5 h-5" />
                  Начать диагностику
                </button>
                <button 
                  className="px-8 md:px-10 py-4 md:py-5 rounded-[28px] font-semibold text-base md:text-lg transition-all hover:scale-105 glass-card-strong text-white border border-white/20 hover-glow flex items-center justify-center gap-2"
                >
                  <PawPrint className="w-5 h-5" />
                  Записаться к врачу
                </button>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" 
                       style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/80">Ответ за 60 секунд</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" 
                       style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/80">Точность AI 95%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" 
                       style={{ background: 'rgba(255, 107, 107, 0.2)' }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#FF6B6B' }} />
                  </div>
                  <span className="text-white/80">500+ ветеринаров</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" 
                       style={{ background: 'rgba(255, 107, 107, 0.2)' }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#FF6B6B' }} />
                  </div>
                  <span className="text-white/80">Работаем 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Side - Premium Mascot Card */}
            <div className="order-1 lg:order-2">
              <GlassCard 
                className="rounded-[48px] p-8 md:p-12 relative overflow-hidden"
                variant="strong"
                glow="teal"
                edgeGlow
              >
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-30 blur-2xl"
                     style={{ background: 'radial-gradient(circle, #2D9CDB 0%, transparent 70%)' }} />
                <div className="absolute bottom-6 left-6 w-24 h-24 rounded-full opacity-30 blur-2xl"
                     style={{ background: 'radial-gradient(circle, #FF6B6B 0%, transparent 70%)' }} />

                {/* Pet Images - Dual Display */}
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {/* Cat */}
                    <div className="relative group">
                      <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity neon-glow-teal" />
                      <div className="relative rounded-[32px] overflow-hidden aspect-square">
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1700984289886-4fda91fd5e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwb3JhbmdlJTIwY2F0JTIwY2xvc2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk2MDY4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Cat mascot"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-2 glass-card rounded-full px-3 py-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: '#2D9CDB' }}></div>
                            <span className="text-white text-xs">Здоровье отличное</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dog */}
                    <div className="relative group">
                      <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity neon-glow-coral" />
                      <div className="relative rounded-[32px] overflow-hidden aspect-square">
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1758571529333-c570882ea962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGdvbGRlbiUyMHJldHJpZXZlciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTYwNjg1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Dog mascot"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-2 glass-card rounded-full px-3 py-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: '#FF6B6B' }}></div>
                            <span className="text-white text-xs">Активность высокая</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Card */}
                  <GlassCard className="rounded-[32px] p-6" variant="strong">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl md:text-3xl font-bold mb-1" style={{ 
                          background: 'linear-gradient(135deg, #2D9CDB 0%, #FF6B6B 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          24/7
                        </div>
                        <div className="text-white/60 text-xs">Онлайн</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold mb-1" style={{ 
                          background: 'linear-gradient(135deg, #2D9CDB 0%, #FF6B6B 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          &lt;60с
                        </div>
                        <div className="text-white/60 text-xs">Ответ</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold mb-1" style={{ 
                          background: 'linear-gradient(135deg, #2D9CDB 0%, #FF6B6B 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          95%
                        </div>
                        <div className="text-white/60 text-xs">Точность</div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </GlassCard>
            </div>

          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-16 md:mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GlassCard className="rounded-[24px] p-6 text-center" variant="strong">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" 
                     style={{ background: 'linear-gradient(135deg, #2D9CDB, #FF6B6B)' }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/90 text-sm">AI анализ симптомов</div>
              </GlassCard>

              <GlassCard className="rounded-[24px] p-6 text-center" variant="strong">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" 
                     style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                  <Users className="w-6 h-6" style={{ color: '#2D9CDB' }} />
                </div>
                <div className="text-white/90 text-sm">Сертифицированные врачи</div>
              </GlassCard>

              <GlassCard className="rounded-[24px] p-6 text-center" variant="strong">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" 
                     style={{ background: 'rgba(255, 107, 107, 0.2)' }}>
                  <Heart className="w-6 h-6 fill-current" style={{ color: '#FF6B6B' }} />
                </div>
                <div className="text-white/90 text-sm">Круглосуточная забота</div>
              </GlassCard>

              <GlassCard className="rounded-[24px] p-6 text-center" variant="strong">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" 
                     style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                  <PawPrint className="w-6 h-6" style={{ color: '#2D9CDB' }} />
                </div>
                <div className="text-white/90 text-sm">50 000+ птомцев</div>
              </GlassCard>
            </div>
          </div>

        </div>
      </section>

      {/* Service Ecosystem Bento Grid */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Комплексная забота{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #2D9CDB 0%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                в одной экосистеме
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Всё для здоровья вашего питомца в одном приложении
            </p>
          </div>

          {/* 3-Card Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 - Video Consultations */}
            <div 
              className="rounded-xl p-8 transition-all hover:scale-[1.02] cursor-pointer"
              style={{ 
                background: 'rgba(255, 255, 255, 0.06)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(45, 156, 219, 0.15)' }}
                >
                  <Video className="w-7 h-7" style={{ color: '#2D9CDB' }} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Видеоконсультации 24/7
              </h3>
              <p className="text-white/70 leading-relaxed">
                Свяжитесь с экспертом из любой точки мира. Без очередей и стресса от поездок.
              </p>
            </div>

            {/* Card 2 - Health Diary */}
            <div 
              className="rounded-xl p-8 transition-all hover:scale-[1.02] cursor-pointer"
              style={{ 
                background: 'rgba(255, 255, 255, 0.06)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255, 107, 107, 0.15)' }}
                >
                  <Calendar className="w-7 h-7" style={{ color: '#FF6B6B' }} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Дневник здоровья
              </h3>
              <p className="text-white/70 leading-relaxed">
                Умные напоминания о прививках и обработках. Вся медкарта в одном месте.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Bell className="w-4 h-4" />
                  <span>Автоматические напоминания</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Telegram Integration */}
            <div 
              className="rounded-xl p-8 transition-all hover:scale-[1.02] cursor-pointer"
              style={{ 
                background: 'rgba(255, 255, 255, 0.06)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(45, 156, 219, 0.15)' }}
                >
                  <MessageCircle className="w-7 h-7" style={{ color: '#2D9CDB' }} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Интеграция с Telegram
              </h3>
              <p className="text-white/70 leading-relaxed">
                Получ��йте советы от врача прямо в любимом мессенджере.
              </p>
              <div className="mt-6">
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                  style={{ background: 'rgba(45, 156, 219, 0.1)', color: '#2D9CDB' }}
                >
                  <span>🚀</span>
                  <span>Instant messaging</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Dreamy Background Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl animate-pulse"
                 style={{ 
                   background: 'radial-gradient(circle, #2D9CDB 0%, #9B59B6 50%, transparent 70%)',
                   animationDuration: '4s'
                 }} />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse"
                 style={{ 
                   background: 'radial-gradient(circle, #FF6B6B 0%, #E74C3C 50%, transparent 70%)',
                   animationDuration: '5s',
                   animationDelay: '1s'
                 }} />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl animate-pulse"
                 style={{ 
                   background: 'radial-gradient(circle, #9B59B6 0%, #3498DB 50%, transparent 70%)',
                   animationDuration: '6s',
                   animationDelay: '2s'
                 }} />
          </div>

          {/* Section Header */}
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 glass-card border border-white/20">
              <Sparkles className="w-4 h-4 animate-pulse" style={{ color: '#9B59B6' }} />
              <span className="text-sm text-white/90">2026 и дальше</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span style={{ 
                background: 'linear-gradient(135deg, #2D9CDB 0%, #9B59B6 50%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Экосистема будущего
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Мы расширяем границы заботы, внедряя технологии там, где они нужнее всего.
            </p>
          </div>

          {/* Main Future Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            
            {/* Future Item 1 - Exotic Pets */}
            <GlassCard 
              className="rounded-[48px] p-8 md:p-12 relative overflow-hidden"
              variant="strong"
              edgeGlow
            >
              {/* Dreamy Gradient Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 blur-3xl"
                   style={{ background: 'radial-gradient(circle, #9B59B6 0%, transparent 70%)' }} />
              
              <div className="relative z-10">
                {/* Exotic Pet Icons */}
                <div className="flex gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl animate-pulse neon-glow-teal" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center"
                         style={{ background: 'linear-gradient(135deg, #2D9CDB, #9B59B6)' }}>
                      <Feather className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl animate-pulse neon-glow-coral" 
                         style={{ animationDelay: '0.5s' }} />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center"
                         style={{ background: 'linear-gradient(135deg, #FF6B6B, #E74C3C)' }}>
                      <Bug className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl animate-pulse"
                         style={{ 
                           boxShadow: '0 0 20px rgba(155, 89, 182, 0.3), 0 0 40px rgba(155, 89, 182, 0.2)',
                           animationDelay: '1s'
                         }} />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center"
                         style={{ background: 'linear-gradient(135deg, #9B59B6, #8E44AD)' }}>
                      <PawPrint className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Эксперты по экзотам
                </h3>
                <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                  Редкая помощь для самых редких друзей (птицы, рептилии, грызуны).
                </p>

                {/* Exotic Pet Images Preview */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative rounded-[24px] overflow-hidden aspect-video group">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1685253228245-1ef7bfbad77c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBwYXJyb3QlMjBiaXJkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY5NjA3ODczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Exotic bird"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-2 glass-card rounded-full px-3 py-1.5">
                        <Feather className="w-3 h-3" style={{ color: '#2D9CDB' }} />
                        <span className="text-white text-xs">Птицы</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[24px] overflow-hidden aspect-video group">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1769122717217-1038ab684dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXB0aWxlJTIwbGl6YXJkJTIwY2hhbWVsZW9uJTIwZXhvdGljfGVufDF8fHx8MTc2OTYwNzg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Exotic reptile"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-2 glass-card rounded-full px-3 py-1.5">
                        <Bug className="w-3 h-3" style={{ color: '#FF6B6B' }} />
                        <span className="text-white text-xs">Рептилии</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <div className="px-4 py-2 rounded-full glass-card">
                    <span className="text-white/80">🦜 Попугаи</span>
                  </div>
                  <div className="px-4 py-2 rounded-full glass-card">
                    <span className="text-white/80">🦎 Ящерицы</span>
                  </div>
                  <div className="px-4 py-2 rounded-full glass-card">
                    <span className="text-white/80">🐹 Грызуны</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Future Item 2 - Interactive Map */}
            <GlassCard 
              className="rounded-[48px] p-8 md:p-12 relative overflow-hidden"
              variant="strong"
              glow="teal"
              edgeGlow
            >
              {/* Dreamy Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-30 blur-3xl"
                   style={{ background: 'radial-gradient(circle, #2D9CDB 0%, transparent 70%)' }} />
              
              <div className="relative z-10">
                {/* Globe Icon with Glow */}
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 rounded-full animate-ping"
                         style={{ background: 'rgba(45, 156, 219, 0.4)' }} />
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                         style={{ background: 'linear-gradient(135deg, #2D9CDB, #3498DB)' }}>
                      <Globe className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Интерактивная карта
                </h3>
                <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                  Найдите проверенные клиники-партнеры с мгновенным доступом к данным вашего питомца.
                </p>

                {/* Map Visualization */}
                <div className="relative rounded-[32px] overflow-hidden aspect-video mb-6">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMG5ldHdvcmslMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3Njk2MDc4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Interactive map"
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent" />
                  
                  {/* Glowing Map Markers */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-md">
                      {/* Marker 1 */}
                      <div className="absolute top-1/4 left-1/3 group cursor-pointer">
                        <div className="absolute inset-0 w-6 h-6 rounded-full animate-ping"
                             style={{ background: 'rgba(45, 156, 219, 0.5)' }} />
                        <div className="relative w-6 h-6 rounded-full flex items-center justify-center neon-glow-teal"
                             style={{ background: '#2D9CDB' }}>
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="glass-card rounded-2xl px-4 py-2 whitespace-nowrap">
                            <span className="text-white text-xs">Клиника #1</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Marker 2 */}
                      <div className="absolute top-1/2 right-1/4 group cursor-pointer">
                        <div className="absolute inset-0 w-6 h-6 rounded-full animate-ping"
                             style={{ 
                               background: 'rgba(255, 107, 107, 0.5)',
                               animationDelay: '0.5s'
                             }} />
                        <div className="relative w-6 h-6 rounded-full flex items-center justify-center neon-glow-coral"
                             style={{ background: '#FF6B6B' }}>
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="glass-card rounded-2xl px-4 py-2 whitespace-nowrap">
                            <span className="text-white text-xs">Клиника #2</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Marker 3 */}
                      <div className="absolute bottom-1/3 left-1/2 group cursor-pointer">
                        <div className="absolute inset-0 w-6 h-6 rounded-full animate-ping"
                             style={{ 
                               background: 'rgba(45, 156, 219, 0.5)',
                               animationDelay: '1s'
                             }} />
                        <div className="relative w-6 h-6 rounded-full flex items-center justify-center neon-glow-teal"
                             style={{ background: '#2D9CDB' }}>
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="glass-card rounded-2xl px-4 py-2 whitespace-nowrap">
                            <span className="text-white text-xs">Клиника #3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                      <CheckCircle2 className="w-5 h-5" style={{ color: '#2D9CDB' }} />
                    </div>
                    <span className="text-white/80">Более 1000 партнёрских клиник</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                      <CheckCircle2 className="w-5 h-5" style={{ color: '#2D9CDB' }} />
                    </div>
                    <span className="text-white/80">Синхронизация медкарты в реальном времени</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                      <CheckCircle2 className="w-5 h-5" style={{ color: '#2D9CDB' }} />
                    </div>
                    <span className="text-white/80">Навигация и онлайн-запись</span>
                  </div>
                </div>
              </div>
            </GlassCard>

          </div>

          {/* Coming Soon Badge */}
          <div className="flex justify-center mt-16">
            <div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
              style={{ 
                background: 'rgba(155, 89, 182, 0.1)',
                border: '1px solid rgba(155, 89, 182, 0.3)'
              }}
            >
              <Sparkles className="w-5 h-5 animate-pulse" style={{ color: '#9B59B6' }} />
              <span className="text-lg font-semibold" style={{ 
                background: 'linear-gradient(135deg, #2D9CDB 0%, #9B59B6 50%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                В разработке • Q4 2026
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Выберите{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #2D9CDB 0%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                свой тариф
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Прозрачные цены для каждой потребности
            </p>

            {/* Toggle: Monthly / Yearly */}
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm md:text-base transition-colors ${!isYearly ? 'text-white font-semibold' : 'text-white/50'}`}>
                Месяц
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 rounded-full transition-colors"
                style={{ background: isYearly ? '#2D9CDB' : 'rgba(255, 255, 255, 0.2)' }}
              >
                <div 
                  className="absolute top-1 w-6 h-6 rounded-full bg-white transition-transform shadow-lg"
                  style={{ 
                    transform: isYearly ? 'translateX(34px)' : 'translateX(4px)',
                  }}
                />
              </button>
              <span className={`text-sm md:text-base transition-colors ${isYearly ? 'text-white font-semibold' : 'text-white/50'}`}>
                Год
              </span>
              {isYearly && (
                <div 
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(45, 156, 219, 0.2)', color: '#2D9CDB' }}
                >
                  выгода 20%
                </div>
              )}
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Plan 1 - Базовый (Free) */}
            <div 
              className="rounded-[32px] p-8 transition-all hover:scale-[1.02]"
              style={{ 
                background: 'rgba(255, 255, 255, 0.06)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Базовый</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">Бесплатно</span>
                </div>
                <p className="text-white/50 text-sm">Попробуйте сейчас</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                    <Check className="w-3 h-3" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/80 text-sm">Дневник здоровья</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                    <Check className="w-3 h-3" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/80 text-sm">1 ИИ-диагностика в месяц</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(45, 156, 219, 0.2)' }}>
                    <Check className="w-3 h-3" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/80 text-sm">Чат-поддержка</span>
                </div>
              </div>

              <button 
                className="w-full py-3 rounded-[20px] font-semibold transition-all hover:scale-105"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                Выбрать тариф
              </button>
            </div>

            {/* Plan 2 - Про (Popular) */}
            <div 
              className="rounded-[32px] p-8 transition-all hover:scale-[1.02] relative"
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(45, 156, 219, 0.5)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(45, 156, 219, 0.3)'
              }}
            >
              {/* Popular Badge */}
              <div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ 
                  background: 'linear-gradient(135deg, #2D9CDB, #3498DB)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(45, 156, 219, 0.4)'
                }}
              >
                <Star className="w-4 h-4 inline mr-1" />
                Популярный
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">Про</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold" style={{ color: '#2D9CDB' }}>
                    {isYearly ? '792' : '990'}
                  </span>
                  <span className="text-white/70">₽ / мес</span>
                </div>
                {isYearly && (
                  <p className="text-white/50 text-xs line-through">990 ₽ / мес</p>
                )}
                <p className="text-white/50 text-sm mt-1">
                  {isYearly ? 'Оплата за год' : 'Ежемесячно'}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(45, 156, 219, 0.3)' }}>
                    <Check className="w-3 h-3" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/90 text-sm font-medium">Безлимитный ИИ</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(45, 156, 219, 0.3)' }}>
                    <Check className="w-3 h-3" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/90 text-sm font-medium">2 видеоконсультации</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(45, 156, 219, 0.3)' }}>
                    <Check className="w-3 h-3" style={{ color: '#2D9CDB' }} />
                  </div>
                  <span className="text-white/90 text-sm font-medium">Приоритетная связь с врачом</span>
                </div>
              </div>

              <button 
                className="w-full py-3 rounded-[20px] font-semibold transition-all hover:scale-105 neon-glow-teal"
                style={{ 
                  background: '#2D9CDB',
                  color: 'white'
                }}
              >
                Выбрать тариф
              </button>
            </div>

            {/* Plan 3 - Семейный */}
            <div 
              className="rounded-[32px] p-8 transition-all hover:scale-[1.02]"
              style={{ 
                background: 'rgba(255, 255, 255, 0.06)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Семейный</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">
                    {isYearly ? '1 992' : '2 490'}
                  </span>
                  <span className="text-white/70">₽ / мес</span>
                </div>
                {isYearly && (
                  <p className="text-white/50 text-xs line-through">2 490 ₽ / мес</p>
                )}
                <p className="text-white/50 text-sm mt-1">
                  {isYearly ? 'Оплата за год' : 'Ежемесячно'}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(255, 107, 107, 0.2)' }}>
                    <Check className="w-3 h-3" style={{ color: '#FF6B6B' }} />
                  </div>
                  <span className="text-white/80 text-sm">До 5 питомцев</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(255, 107, 107, 0.2)' }}>
                    <Check className="w-3 h-3" style={{ color: '#FF6B6B' }} />
                  </div>
                  <span className="text-white/80 text-sm">Консилиум врачей</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                       style={{ background: 'rgba(255, 107, 107, 0.2)' }}>
                    <Check className="w-3 h-3" style={{ color: '#FF6B6B' }} />
                  </div>
                  <span className="text-white/80 text-sm">Скидки в клиниках-партнерах</span>
                </div>
              </div>

              <button 
                className="w-full py-3 rounded-[20px] font-semibold transition-all hover:scale-105"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                Выбрать тариф
              </button>
            </div>

          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-white/50 text-sm">
              Все тарифы включают доступ к дневнику здоровья и базовые функции. <br />
              Отмена подписки в любое время без штрафов.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
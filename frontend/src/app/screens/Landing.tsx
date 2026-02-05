import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/Button';

export function Landing({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="px-6 pt-16 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full" style={{ color: 'var(--primary)' }}>
              <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                🏥 Телемедицина для питомцев
              </span>
            </div>
            <h1 
              className="leading-tight"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)', 
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: '1.2'
              }}
            >
              Ветеринарная помощь и спокойствие для вас и питомца — в Telegram
            </h1>
            <p 
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: 'var(--text-body-l)' }}
            >
              Быстрая ИИ-оценка по фото, видеоконсультации 24/7 и дневник здоровья — всё в одном месте. Забота о питомце без стресса и очередей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="large" onClick={onGetStarted}>
                Открыть в Telegram
              </Button>
              <Button variant="secondary" size="large">
                Узнать больше ↓
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span style={{ fontSize: 'var(--text-subhead)' }}>Ответ за 30 сек</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span style={{ fontSize: 'var(--text-subhead)' }}>Безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💙</span>
                <span style={{ fontSize: 'var(--text-subhead)' }}>24/7</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1708515902724-07114f865d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG93bmVyJTIwd2l0aCUyMHBldCUyMGRvZyUyMGNhdHxlbnwxfHx8fDE3NzAyMTk4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Владелец с питомцем"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center text-white text-xl">
                  ✓
                </div>
                <div>
                  <p style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-semibold)' }}>
                    Уже помогли
                  </p>
                  <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)' }}>
                    5000+ питомцам
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
              Три столпа заботы о питомце
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
              Всё необходимое в одном Telegram-боте
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🤖"
              title="ИИ-диагностика за минуты"
              description="Загрузите фото симптома и получите предварительную оценку за 30 секунд. Узнайте, нужна ли срочная помощь."
              accent="var(--primary)"
            />
            <FeatureCard 
              icon="📹"
              title="Ветеринар по видео 24/7"
              description="Запишитесь на видеоконсультацию в удобное время. Верифицированные специалисты всегда на связи."
              accent="var(--success)"
            />
            <FeatureCard 
              icon="📊"
              title="Дневник здоровья"
              description="Вес, прививки, анализы и назначения в одном месте. Напоминания о важных процедурах в Telegram."
              accent="var(--warning)"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, accent }: {
  icon: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all space-y-4">
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
        style={{ backgroundColor: `${accent}15` }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}>
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
        {description}
      </p>
    </div>
  );
}

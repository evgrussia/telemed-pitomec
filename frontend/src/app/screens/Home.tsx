import { PetCard } from '../components/PetCard';
import { Button } from '../components/Button';
import { StatusBadge } from '../components/StatusBadge';

export function Home({ onNavigate }: { onNavigate: (screen: string, data?: any) => void }) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent px-6 pt-8 pb-6">
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Привет, Дмитрий! 👋
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Как дела у ваших питомцев?
        </p>
      </div>

      <div className="px-6 space-y-8">
        {/* Pets Section */}
        <section>
          <h2 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
            Твои питомцы
          </h2>
          <div className="grid gap-4">
            <PetCard 
              name="Барсик"
              species="Кот"
              age="3 года"
              status="success"
              lastActivity="Прививка 12.01.2026"
              onClick={() => onNavigate('pet-profile', { name: 'Барсик' })}
            />
            <button 
              className="bg-card rounded-xl border-2 border-dashed border-border p-6 hover:bg-accent transition-all active:scale-[0.98]"
              onClick={() => onNavigate('add-pet')}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">➕</span>
                </div>
                <span style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-medium)' }}>
                  Добавить питомца
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <h2 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
            Ближайшие события
          </h2>
          <div className="space-y-3">
            <EventCard 
              icon="💉"
              title="Прививка — завтра, 10:00"
              subtitle="Барсик · Комплексная"
              variant="warning"
              onClick={() => onNavigate('reminders')}
            />
            <EventCard 
              icon="💊"
              title="Глистогонное — через 3 дня"
              subtitle="Барсик · Таблетка"
              variant="info"
              onClick={() => onNavigate('reminders')}
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
            Популярные услуги
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <QuickAction 
              icon="🤖"
              label="ИИ-диагностика"
              onClick={() => onNavigate('ai-diagnosis')}
            />
            <QuickAction 
              icon="📹"
              label="Видеозвонок"
              onClick={() => onNavigate('appointments')}
            />
            <QuickAction 
              icon="💬"
              label="Чат с врачом"
              onClick={() => onNavigate('chat')}
            />
          </div>
        </section>

        {/* Subscription Status */}
        <section>
          <div 
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #3390EC 0%, #667eea 100%)',
              color: 'white'
            }}
          >
            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p style={{ fontSize: 'var(--text-subhead)', opacity: 0.9 }}>
                    Ваш тариф
                  </p>
                  <p style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}>
                    Basic — 299 ₽/мес
                  </p>
                </div>
                <div className="text-4xl">✨</div>
              </div>
              <p style={{ fontSize: 'var(--text-body)', opacity: 0.9 }}>
                2 ИИ-диагностики осталось в этом месяце
              </p>
              <Button 
                variant="secondary" 
                size="default"
                onClick={() => onNavigate('subscription')}
              >
                Перейти на Premium
              </Button>
            </div>
            <div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
              style={{ background: 'white', transform: 'translate(30%, -30%)' }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function EventCard({ icon, title, subtitle, variant, onClick }: {
  icon: string;
  title: string;
  subtitle: string;
  variant: 'warning' | 'info' | 'success';
  onClick: () => void;
}) {
  const colors = {
    warning: 'var(--warning)',
    info: 'var(--primary)',
    success: 'var(--success)'
  };

  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-xl border border-border p-4 hover:shadow-md transition-all active:scale-[0.98] text-left"
    >
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ backgroundColor: `${colors[variant]}20` }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
            {title}
          </p>
          <p className="text-muted-foreground truncate" style={{ fontSize: 'var(--text-subhead)' }}>
            {subtitle}
          </p>
        </div>
        <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

function QuickAction({ icon, label, onClick }: {
  icon: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-card rounded-2xl border border-border p-4 hover:shadow-md transition-all active:scale-95 space-y-3"
    >
      <div className="text-3xl">{icon}</div>
      <p 
        className="leading-tight"
        style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}
      >
        {label}
      </p>
    </button>
  );
}

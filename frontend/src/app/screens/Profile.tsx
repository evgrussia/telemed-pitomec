import { Button } from '../components/Button';

export function Profile({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-6">
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Профиль
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* User Info */}
        <div className="bg-card rounded-2xl border border-border p-6 flex items-center gap-5">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
            style={{ backgroundColor: 'var(--primary)/10' }}
          >
            👤
          </div>
          <div className="flex-1">
            <p style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}>
              Дмитрий
            </p>
            <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
              @telegram_user
            </p>
          </div>
        </div>

        {/* Subscription */}
        <div 
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #3390EC 0%, #667eea 100%)',
            color: 'white'
          }}
        >
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p style={{ fontSize: 'var(--text-subhead)', opacity: 0.9 }}>
                  Ваша подписка
                </p>
                <p style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Basic — 299 ₽/мес
                </p>
              </div>
              <div className="text-4xl">💎</div>
            </div>
            <ul className="space-y-2" style={{ fontSize: 'var(--text-subhead)', opacity: 0.9 }}>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Дневник здоровья</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>2 ИИ-диагностики в месяц</span>
              </li>
            </ul>
            <Button 
              variant="secondary" 
              size="default"
              onClick={() => onNavigate('subscription')}
            >
              Изменить тариф
            </Button>
          </div>
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
            style={{ background: 'white', transform: 'translate(30%, -30%)' }}
          />
        </div>

        {/* Menu Sections */}
        <div className="space-y-3">
          <MenuButton 
            icon="🐾"
            title="Мои питомцы"
            subtitle="2 питомца"
            onClick={() => onNavigate('home')}
          />
          <MenuButton 
            icon="💳"
            title="Подписка и платежи"
            subtitle="История транзакций"
            onClick={() => onNavigate('subscription')}
          />
          <MenuButton 
            icon="🔔"
            title="Настройки уведомлений"
            subtitle="Напоминания и push"
            onClick={() => {}}
          />
          <MenuButton 
            icon="📜"
            title="История консультаций"
            subtitle="12 консультаций"
            onClick={() => onNavigate('appointments')}
          />
          <MenuButton 
            icon="❓"
            title="Техподдержка и FAQ"
            subtitle="Помощь и ответы"
            onClick={() => {}}
          />
          <MenuButton 
            icon="ℹ️"
            title="О приложении"
            subtitle="Версия 1.0.0"
            onClick={() => {}}
          />
        </div>

        {/* Logout */}
        <button 
          className="w-full py-4 rounded-xl border border-border hover:bg-accent transition-all"
          style={{ 
            color: 'var(--destructive)',
            fontSize: 'var(--text-body)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Выйти
        </button>
      </div>
    </div>
  );
}

function MenuButton({ icon, title, subtitle, onClick }: {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all active:scale-[0.98] text-left"
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
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

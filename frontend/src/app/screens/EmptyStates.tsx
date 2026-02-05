import { Button } from '../components/Button';

export function EmptyStates({ onNavigate, onBack }: { 
  onNavigate: (screen: string) => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span style={{ fontSize: 'var(--text-subhead)' }}>Назад</span>
        </button>
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Empty States
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Пустые состояния для различных экранов
        </p>
      </div>

      <div className="px-6 space-y-12">
        {/* No Pets */}
        <EmptyState 
          icon="🐾"
          title="Добавьте первого питомца"
          description="Создайте профиль питомца, чтобы начать отслеживать его здоровье и записываться к врачам"
          actionLabel="Добавить питомца"
          onAction={() => onNavigate('onboarding')}
        />

        {/* No Diary Entries */}
        <EmptyState 
          icon="📊"
          title="Дневник пуст"
          description="Добавьте первую запись: вес, симптом или событие. Отслеживайте здоровье питомца в динамике"
          actionLabel="Добавить запись"
          onAction={() => onNavigate('add-diary-entry')}
        />

        {/* No Appointments */}
        <EmptyState 
          icon="📅"
          title="Нет запланированных консультаций"
          description="Запишитесь к ветеринару на видеоконсультацию или текстовый чат в удобное время"
          actionLabel="Выбрать ветеринара"
          onAction={() => onNavigate('appointments')}
        />

        {/* No Reminders */}
        <EmptyState 
          icon="🔔"
          title="Напоминания не настроены"
          description="Добавьте напоминания о прививках, обработке от паразитов и приёме лекарств"
          actionLabel="Добавить напоминание"
          onAction={() => {}}
        />
      </div>
    </div>
  );
}

function EmptyState({ icon, title, description, actionLabel, onAction }: {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <div className="bg-card rounded-2xl border border-border p-8 text-center space-y-6">
      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-5xl mx-auto">
        {icon}
      </div>
      <div className="space-y-2 max-w-md mx-auto">
        <h2 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}>
          {title}
        </h2>
        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
          {description}
        </p>
      </div>
      <Button 
        variant="primary" 
        size="large"
        onClick={onAction}
      >
        {actionLabel}
      </Button>
    </div>
  );
}
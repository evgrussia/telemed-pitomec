import { Button } from '../components/Button';

export function Reminders({ onBack }: { onBack: () => void }) {
  const upcomingReminders = [
    { id: 1, type: 'vaccination', icon: '💉', title: 'Прививка (комплекс)', date: '15.02.2026', pet: 'Барсик', daysLeft: 1 },
    { id: 2, type: 'parasites', icon: '💊', title: 'Глистогонное', date: '01.03.2026', pet: 'Барсик', daysLeft: 15 },
    { id: 3, type: 'parasites', icon: '🛡️', title: 'Обработка от клещей', date: '15.03.2026', pet: 'Барсик', daysLeft: 29 }
  ];

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
          Напоминания
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Календарь прививок и процедур
        </p>
      </div>

      <div className="px-6 space-y-6">
        {/* Add Reminder Button */}
        <Button 
          variant="primary" 
          fullWidth
          icon={<span className="text-xl">➕</span>}
          onClick={() => {}}
        >
          Добавить напоминание
        </Button>

        {/* Upcoming Reminders */}
        <div className="space-y-3">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Предстоящие
          </h3>
          {upcomingReminders.map(reminder => (
            <ReminderCard 
              key={reminder.id}
              icon={reminder.icon}
              title={reminder.title}
              date={reminder.date}
              pet={reminder.pet}
              daysLeft={reminder.daysLeft}
            />
          ))}
        </div>

        {/* Info */}
        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>
                Не пропустите важное
              </p>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-subhead)' }}>
                Push-уведомления придут в Telegram за день до процедуры
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReminderCard({ icon, title, date, pet, daysLeft }: {
  icon: string;
  title: string;
  date: string;
  pet: string;
  daysLeft: number;
}) {
  const getUrgencyColor = () => {
    if (daysLeft <= 1) return 'var(--error)';
    if (daysLeft <= 7) return 'var(--warning)';
    return 'var(--success)';
  };

  const getUrgencyText = () => {
    if (daysLeft === 0) return 'Сегодня';
    if (daysLeft === 1) return 'Завтра';
    return `Через ${daysLeft} дн.`;
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5 space-y-4">
      <div className="flex items-start gap-4">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ backgroundColor: `${getUrgencyColor()}20` }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
              {title}
            </p>
            <span 
              className="px-2 py-1 rounded text-white text-xs font-medium whitespace-nowrap"
              style={{ backgroundColor: getUrgencyColor() }}
            >
              {getUrgencyText()}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
              📅 {date}
            </p>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
              🐾 {pet}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-2 border-t border-border">
        <button 
          className="flex-1 py-2 px-4 rounded-lg border border-border hover:bg-accent transition-all"
          style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}
        >
          Перенести
        </button>
        <button 
          className="flex-1 py-2 px-4 rounded-lg transition-all"
          style={{ 
            backgroundColor: 'var(--success)/10',
            color: 'var(--success)',
            fontSize: 'var(--text-subhead)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          ✓ Выполнено
        </button>
      </div>
    </div>
  );
}

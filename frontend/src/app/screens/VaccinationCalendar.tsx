import { Button } from '../components/Button';

export function VaccinationCalendar({ onBack, petName = 'Барсик' }: { 
  onBack: () => void;
  petName?: string;
}) {
  const vaccinations = [
    {
      id: 1,
      name: 'Комплексная прививка',
      description: 'Нобивак DHPPi+L',
      date: '15.02.2026',
      daysLeft: 1,
      status: 'upcoming' as const,
      clinic: 'Ветклиника "Айболит"',
      nextDate: '15.02.2027'
    },
    {
      id: 2,
      name: 'Бешенство',
      description: 'Нобивак Rabies',
      date: '12.01.2026',
      daysLeft: -34,
      status: 'completed' as const,
      clinic: 'Ветклиника "Айболит"',
      nextDate: '12.01.2027'
    },
    {
      id: 3,
      name: 'Лейкоз кошек',
      description: 'Пуревакс FeLV',
      date: '20.12.2025',
      daysLeft: -57,
      status: 'completed' as const,
      clinic: 'Ветклиника "Зоомир"',
      nextDate: '20.12.2026'
    }
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
          Календарь прививок
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          {petName}
        </p>
      </div>

      <div className="px-6 space-y-6">
        {/* Info Card */}
        <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20">
          <div className="flex gap-3">
            <div className="text-3xl">💉</div>
            <div className="flex-1">
              <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>
                Следующая прививка
              </p>
              <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)' }}>
                Через 1 день · 15 февраля
              </p>
              <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
                Комплексная прививка (Нобивак DHPPi+L)
              </p>
            </div>
          </div>
        </div>

        {/* Add Vaccination Button */}
        <Button 
          variant="primary" 
          fullWidth
          icon={<span className="text-xl">➕</span>}
          onClick={() => {}}
        >
          Добавить прививку
        </Button>

        {/* Vaccinations List */}
        <div className="space-y-4">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            История прививок
          </h3>
          {vaccinations.map(vaccination => (
            <VaccinationCard key={vaccination.id} vaccination={vaccination} />
          ))}
        </div>

        {/* Vaccination Schedule Info */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Рекомендуемый график прививок для кошек
          </h3>
          <div className="space-y-3">
            <ScheduleItem 
              age="8-9 недель"
              vaccines="Первая комплексная прививка"
            />
            <ScheduleItem 
              age="12 недель"
              vaccines="Вторая комплексная + Бешенство"
            />
            <ScheduleItem 
              age="Ежегодно"
              vaccines="Ревакцинация всех прививок"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-subhead)' }}>
            График прививок может отличаться в зависимости от вакцины и рекомендаций ветеринара
          </p>
        </div>
      </div>
    </div>
  );
}

function VaccinationCard({ vaccination }: { vaccination: any }) {
  const getStatusConfig = () => {
    if (vaccination.status === 'upcoming') {
      if (vaccination.daysLeft <= 1) {
        return { 
          color: 'var(--error)', 
          bgColor: 'var(--error)/10',
          label: vaccination.daysLeft === 0 ? 'Сегодня' : 'Завтра',
          icon: '🚨'
        };
      }
      if (vaccination.daysLeft <= 7) {
        return { 
          color: 'var(--warning)', 
          bgColor: 'var(--warning)/10',
          label: `Через ${vaccination.daysLeft} дн.`,
          icon: '⚠️'
        };
      }
      return { 
        color: 'var(--primary)', 
        bgColor: 'var(--primary)/10',
        label: `Через ${vaccination.daysLeft} дн.`,
        icon: '📅'
      };
    }
    return { 
      color: 'var(--success)', 
      bgColor: 'var(--success)/10',
      label: 'Выполнено',
      icon: '✓'
    };
  };

  const config = getStatusConfig();

  return (
    <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
      <div className="flex items-start gap-4">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ backgroundColor: config.bgColor }}
        >
          {config.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1">
              <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
                {vaccination.name}
              </p>
              <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
                {vaccination.description}
              </p>
            </div>
            <span 
              className="px-3 py-1 rounded-lg text-white whitespace-nowrap"
              style={{ backgroundColor: config.color, fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)' }}
            >
              {config.label}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
              📅 Дата: {vaccination.date}
            </p>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
              🏥 {vaccination.clinic}
            </p>
            {vaccination.status === 'completed' && (
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
                🔄 Следующая: {vaccination.nextDate}
              </p>
            )}
          </div>
        </div>
      </div>

      {vaccination.status === 'upcoming' && (
        <div className="flex gap-2 pt-2 border-t border-border">
          <Button variant="secondary" fullWidth onClick={() => {}}>
            Перенести
          </Button>
          <Button variant="primary" fullWidth onClick={() => {}}>
            Отметить в��полненной
          </Button>
        </div>
      )}

      {vaccination.status === 'completed' && (
        <Button variant="ghost" fullWidth onClick={() => {}}>
          Показать сертификат
        </Button>
      )}
    </div>
  );
}

function ScheduleItem({ age, vaccines }: { age: string; vaccines: string }) {
  return (
    <div className="flex gap-4">
      <div 
        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
        style={{ backgroundColor: 'var(--primary)' }}
      />
      <div className="flex-1">
        <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
          {age}
        </p>
        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
          {vaccines}
        </p>
      </div>
    </div>
  );
}

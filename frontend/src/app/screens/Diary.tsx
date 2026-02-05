import { useState } from 'react';
import { Button } from '../components/Button';

export function Diary({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedPet, setSelectedPet] = useState('Барсик');

  const events = [
    { date: '15.01', type: 'weight', icon: '⚖️', title: 'Вес 4,5 кг', description: 'Стабильный вес' },
    { date: '12.01', type: 'vaccination', icon: '💉', title: 'Прививка (комплекс)', description: 'Нобивак DHPPi+L' },
    { date: '10.01', type: 'consultation', icon: '👨‍⚕️', title: 'Консультация с А. Петровой', description: 'Плановый осмотр' },
    { date: '05.01', type: 'symptom', icon: '🤒', title: 'Симптом: вялость', description: 'ИИ: низкий риск' },
    { date: '01.01', type: 'weight', icon: '⚖️', title: 'Вес 4,4 кг', description: 'Прибавка 100 г' }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-6">
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Дневник здоровья
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Отслеживайте состояние питомца
        </p>
      </div>

      <div className="px-6 space-y-6">
        {/* Pet Selector */}
        <button className="w-full bg-card rounded-xl border border-border p-4 hover:shadow-md transition-all text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-pet-accent flex items-center justify-center text-2xl">
              🐱
            </div>
            <div className="flex-1">
              <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                {selectedPet}
              </p>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
                Кот, 3 года
              </p>
            </div>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Weight Chart Preview */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
              График веса
            </h3>
            <button className="text-primary" style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
              Подробнее →
            </button>
          </div>
          {/* Simple weight visualization */}
          <div className="h-32 flex items-end justify-between gap-2">
            {[4.2, 4.3, 4.4, 4.4, 4.5, 4.5].map((weight, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-primary/20 rounded-t"
                  style={{ height: `${(weight / 5) * 100}%` }}
                />
                <span className="text-caption text-muted-foreground" style={{ fontSize: 'var(--text-caption)' }}>
                  {weight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Add Record Button */}
        <Button 
          variant="primary" 
          fullWidth
          icon={<span className="text-xl">➕</span>}
          onClick={() => onNavigate('add-diary-entry')}
        >
          Добавить запись
        </Button>

        {/* Timeline */}
        <div className="space-y-4">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            История событий
          </h3>
          <div className="space-y-3">
            {events.map((event, idx) => (
              <TimelineEvent 
                key={idx}
                date={event.date}
                icon={event.icon}
                title={event.title}
                description={event.description}
                isLast={idx === events.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineEvent({ date, icon, title, description, isLast }: {
  date: string;
  icon: string;
  title: string;
  description: string;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ backgroundColor: 'var(--primary)/10' }}
        >
          {icon}
        </div>
        {!isLast && (
          <div 
            className="w-0.5 flex-1 mt-2"
            style={{ backgroundColor: 'var(--border)', minHeight: '24px' }}
          />
        )}
      </div>
      <div className="flex-1 pb-6">
        <div className="flex items-baseline gap-3 mb-1">
          <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-semibold)' }}>
            {date}
          </span>
          <span className="text-muted-foreground" style={{ fontSize: 'var(--text-caption)' }}>
            2026
          </span>
        </div>
        <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-medium)' }}>
          {title}
        </p>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

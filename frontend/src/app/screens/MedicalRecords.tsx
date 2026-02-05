import { useState } from 'react';
import { Button } from '../components/Button';

export function MedicalRecords({ onBack, petName = 'Барсик' }: { 
  onBack: () => void;
  petName?: string;
}) {
  const [activeTab, setActiveTab] = useState<'tests' | 'ultrasound' | 'visits'>('tests');

  const tests = [
    { 
      id: 1, 
      date: '15.01.2026', 
      type: 'Общий анализ крови', 
      clinic: 'Ветклиника "Айболит"',
      result: 'Норма',
      status: 'success' as const
    },
    { 
      id: 2, 
      date: '10.01.2026', 
      type: 'Биохимия крови', 
      clinic: 'Ветклиника "Айболит"',
      result: 'Небольшое отклонение',
      status: 'warning' as const
    }
  ];

  const ultrasounds = [
    { 
      id: 1, 
      date: '12.01.2026', 
      type: 'УЗИ брюшной полости', 
      doctor: 'Иванов П.С.',
      result: 'Без патологий'
    }
  ];

  const visits = [
    { 
      id: 1, 
      date: '20.01.2026', 
      type: 'Плановый осмотр', 
      doctor: 'Анна Петрова',
      diagnosis: 'Здоров',
      notes: 'Общее состояние хорошее. Вес в норме. Рекомендовано продолжить текущий рацион.'
    },
    { 
      id: 2, 
      date: '05.01.2026', 
      type: 'Консультация', 
      doctor: 'Елена Волкова',
      diagnosis: 'Легкое расстройство ЖКТ',
      notes: 'Назначена диета на 3 дня. Пробиотики 1 раз в день.'
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
          Медкарта
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          {petName}
        </p>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="flex gap-2 bg-secondary rounded-xl p-1">
          <TabButton 
            active={activeTab === 'tests'}
            onClick={() => setActiveTab('tests')}
            label="Анализы"
          />
          <TabButton 
            active={activeTab === 'ultrasound'}
            onClick={() => setActiveTab('ultrasound')}
            label="УЗИ/Рентген"
          />
          <TabButton 
            active={activeTab === 'visits'}
            onClick={() => setActiveTab('visits')}
            label="Осмотры"
          />
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Add Record Button */}
        <Button 
          variant="primary" 
          fullWidth
          icon={<span className="text-xl">➕</span>}
          onClick={() => {}}
        >
          Добавить запись
        </Button>

        {/* Tests Tab */}
        {activeTab === 'tests' && (
          <div className="space-y-4">
            {tests.map(test => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
        )}

        {/* Ultrasound Tab */}
        {activeTab === 'ultrasound' && (
          <div className="space-y-4">
            {ultrasounds.map(us => (
              <UltrasoundCard key={us.id} ultrasound={us} />
            ))}
          </div>
        )}

        {/* Visits Tab */}
        {activeTab === 'visits' && (
          <div className="space-y-4">
            {visits.map(visit => (
              <VisitCard key={visit.id} visit={visit} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 py-2 px-4 rounded-lg transition-all"
      style={{
        backgroundColor: active ? 'white' : 'transparent',
        color: active ? 'var(--foreground)' : 'var(--muted-foreground)',
        fontSize: 'var(--text-subhead)',
        fontWeight: active ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
        boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      {label}
    </button>
  );
}

function TestCard({ test }: { test: any }) {
  const statusColors = {
    success: 'var(--success)',
    warning: 'var(--warning)',
    error: 'var(--error)'
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            {test.type}
          </p>
          <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
            📅 {test.date} · {test.clinic}
          </p>
        </div>
        <div 
          className="px-3 py-1 rounded-lg text-white"
          style={{ backgroundColor: statusColors[test.status] }}
        >
          <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)' }}>
            {test.result}
          </span>
        </div>
      </div>
      <div className="flex gap-2 pt-2 border-t border-border">
        <Button variant="ghost" onClick={() => {}}>
          Смотреть результаты
        </Button>
        <Button variant="ghost" onClick={() => {}}>
          📎 Файл
        </Button>
      </div>
    </div>
  );
}

function UltrasoundCard({ ultrasound }: { ultrasound: any }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
      <div>
        <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
          {ultrasound.type}
        </p>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
          📅 {ultrasound.date} · 👨‍⚕️ {ultrasound.doctor}
        </p>
      </div>
      <div className="bg-success/10 rounded-xl p-3">
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--success)' }}>
          ✓ {ultrasound.result}
        </p>
      </div>
      <div className="flex gap-2 pt-2 border-t border-border">
        <Button variant="ghost" onClick={() => {}}>
          Смотреть снимки
        </Button>
        <Button variant="ghost" onClick={() => {}}>
          📄 Заключение
        </Button>
      </div>
    </div>
  );
}

function VisitCard({ visit }: { visit: any }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
      <div>
        <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
          {visit.type}
        </p>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
          📅 {visit.date} · 👨‍⚕️ {visit.doctor}
        </p>
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-muted-foreground mb-1" style={{ fontSize: 'var(--text-subhead)' }}>
            Диагноз
          </p>
          <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-medium)' }}>
            {visit.diagnosis}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1" style={{ fontSize: 'var(--text-subhead)' }}>
            Примечания
          </p>
          <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body)' }}>
            {visit.notes}
          </p>
        </div>
      </div>
      <Button variant="ghost" fullWidth onClick={() => {}}>
        Полная информация о приёме
      </Button>
    </div>
  );
}

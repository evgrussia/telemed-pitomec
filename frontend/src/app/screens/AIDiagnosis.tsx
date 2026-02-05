import { useState } from 'react';
import { Button } from '../components/Button';
import { StatusBadge } from '../components/StatusBadge';

export function AIDiagnosis({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [step, setStep] = useState<'input' | 'loading' | 'result'>('input');
  const [result, setResult] = useState<'low' | 'medium' | 'high'>('medium');
  const [photo, setPhoto] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  const handleAnalyze = () => {
    setStep('loading');
    setTimeout(() => {
      setStep('result');
    }, 2000);
  };

  if (step === 'loading') {
    return <LoadingScreen />;
  }

  if (step === 'result') {
    return <ResultScreen result={result} onNavigate={onNavigate} onBack={() => setStep('input')} />;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-6">
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          ИИ-диагностика
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Получите предварительную оценку за 30 секунд
        </p>
      </div>

      <div className="px-6 space-y-6">
        {/* Pet Selection */}
        <section className="space-y-3">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Выберите питомца
          </label>
          <button className="w-full bg-card rounded-xl border border-border p-4 hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pet-accent flex items-center justify-center text-2xl">
                🐱
              </div>
              <div className="flex-1">
                <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Барсик
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
        </section>

        {/* Photo Upload */}
        <section className="space-y-3">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Сфотографируйте симптом
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="cursor-pointer">
              <div className="bg-card rounded-2xl border-2 border-dashed border-border p-8 hover:bg-accent transition-all aspect-square flex flex-col items-center justify-center gap-3">
                <div className="text-4xl">📷</div>
                <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                  Сделать фото
                </span>
              </div>
              <input type="file" className="hidden" accept="image/*" capture="environment" />
            </label>
            <label className="cursor-pointer">
              <div className="bg-card rounded-2xl border-2 border-dashed border-border p-8 hover:bg-accent transition-all aspect-square flex flex-col items-center justify-center gap-3">
                <div className="text-4xl">🖼️</div>
                <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                  Из галереи
                </span>
              </div>
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>
        </section>

        {/* Description */}
        <section className="space-y-3">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Описание <span className="text-muted-foreground">(необязательно)</span>
          </label>
          <textarea 
            placeholder="Например: вялость со вчерашнего вечера, отказывается от еды..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            style={{ fontSize: 'var(--text-body)', minHeight: '120px' }}
          />
        </section>

        {/* Disclaimer */}
        <div className="bg-warning/10 rounded-xl p-4 border border-warning/20">
          <div className="flex gap-3">
            <div className="text-xl">⚠️</div>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-subhead)' }}>
              ИИ не заменяет полноценный осмотр врача. При серьёзных симптомах обратитесь к ветеринару.
            </p>
          </div>
        </div>

        {/* Analyze Button */}
        <Button 
          variant="primary" 
          fullWidth 
          size="large"
          onClick={handleAnalyze}
        >
          Анализировать
        </Button>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="relative w-32 h-32 mx-auto">
          <div 
            className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"
            style={{ borderColor: 'var(--primary) transparent transparent transparent' }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-4xl">
            🤖
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}>
            Анализируем фото...
          </h2>
          <p className="text-muted-foreground mt-2" style={{ fontSize: 'var(--text-body)' }}>
            ИИ обрабатывает изображение. Обычно это занимает 10–30 секунд.
          </p>
        </div>
      </div>
    </div>
  );
}

function ResultScreen({ result, onNavigate, onBack }: {
  result: 'low' | 'medium' | 'high';
  onNavigate: (screen: string) => void;
  onBack: () => void;
}) {
  const resultConfig = {
    low: {
      badge: 'success' as const,
      label: 'Низкий риск',
      title: 'Всё хорошо',
      description: 'Вероятно, не требует срочного вмешательства. Рекомендуем наблюдение в течение 24 часов.',
      diagnosis: 'Лёгкое недомогание, возможно связанное со сменой питания',
      icon: '✅',
      actions: [
        { label: 'Добавить в дневник', variant: 'primary' as const, onClick: () => {} }
      ]
    },
    medium: {
      badge: 'warning' as const,
      label: 'Средний риск',
      title: 'Понаблюдайте',
      description: 'Рекомендуется онлайн-консультация в течение 24 часов для уточнения состояния.',
      diagnosis: 'Воспаление слизистой, требуется осмотр специалиста',
      icon: '⚠️',
      actions: [
        { label: 'Записаться к ветеринару', variant: 'primary' as const, onClick: () => onNavigate('appointments') },
        { label: 'Добавить в дневник', variant: 'secondary' as const, onClick: () => {} }
      ]
    },
    high: {
      badge: 'error' as const,
      label: 'Высокий риск',
      title: 'К ветеринару!',
      description: 'Рекомендуем срочно обратиться в клинику или связаться с дежурным врачом.',
      diagnosis: 'Острый воспалительный процесс, требуется срочное вмешательство',
      icon: '🚨',
      actions: [
        { label: 'Позвонить дежурному', variant: 'primary' as const, onClick: () => {} },
        { label: 'Найти клинику', variant: 'secondary' as const, onClick: () => {} }
      ]
    }
  };

  const config = resultConfig[result];

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
          <span style={{ fontSize: 'var(--text-subhead)' }}>Новый анализ</span>
        </button>
      </div>

      <div className="px-6 space-y-6">
        {/* Result Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">{config.icon}</div>
          <div>
            <StatusBadge variant={config.badge} label={config.label} />
          </div>
          <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
            {config.title}
          </h1>
        </div>

        {/* Description */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <div>
            <p className="text-muted-foreground mb-1" style={{ fontSize: 'var(--text-subhead)' }}>
              Рекомендация
            </p>
            <p className="leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
              {config.description}
            </p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-muted-foreground mb-1" style={{ fontSize: 'var(--text-subhead)' }}>
              Предварительный диагноз
            </p>
            <p className="leading-relaxed" style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-medium)' }}>
              {config.diagnosis}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {config.actions.map((action, idx) => (
            <Button 
              key={idx}
              variant={action.variant} 
              fullWidth 
              size="large"
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </div>

        {/* Info */}
        <div className="bg-primary/5 rounded-xl p-4">
          <p className="text-muted-foreground text-center leading-relaxed" style={{ fontSize: 'var(--text-subhead)' }}>
            Результат сохранён в дневнике здоровья Барсика
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Button } from '../components/Button';

export function Payment({ data, onNavigate }: { 
  data: any;
  onNavigate: (screen: string, data?: any) => void;
}) {
  const [step, setStep] = useState<'payment' | 'success'>('payment');

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center mx-auto">
            <div className="text-5xl">✓</div>
          </div>
          <div>
            <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
              Запись подтверждена
            </h1>
            <p className="text-muted-foreground mt-3 leading-relaxed" style={{ fontSize: 'var(--text-body-l)' }}>
              Вы записаны на 15 февраля в 14:00 к Анне Петровой
            </p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4">
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
              📲 Напоминание придёт за 15 минут до приёма
            </p>
          </div>
          <div className="space-y-3 pt-4">
            <Button 
              variant="secondary" 
              fullWidth 
              size="large"
              onClick={() => {}}
            >
              Добавить в календарь
            </Button>
            <Button 
              variant="primary" 
              fullWidth 
              size="large"
              onClick={() => onNavigate('home')}
            >
              На главную
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-6">
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Оплата
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Summary */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Детали записи
          </h3>
          <div className="space-y-3">
            <SummaryRow label="Врач" value="Анна Петрова" />
            <SummaryRow label="Специализация" value="Терапевт" />
            <SummaryRow label="Дата и время" value="15 февраля, 14:00" />
            <SummaryRow label="Питомец" value="Барсик (кот)" />
            <div className="pt-3 border-t border-border">
              <SummaryRow label="К оплате" value="800 ₽" highlight />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-3">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Способ оплаты
          </label>
          <button className="w-full bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--primary)/10' }}
              >
                💳
              </div>
              <div className="flex-1">
                <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Telegram Payments
                </p>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
                  Безопасная оплата через Telegram
                </p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Terms */}
        <div className="bg-muted/30 rounded-xl p-4">
          <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-caption)' }}>
            Нажимая «Оплатить», вы соглашаетесь с условиями оказания услуг и политикой конфиденциальности
          </p>
        </div>

        {/* Pay Button */}
        <Button 
          variant="primary" 
          fullWidth 
          size="large"
          onClick={() => setStep('success')}
        >
          Оплатить 800 ₽
        </Button>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, highlight = false }: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground" style={{ fontSize: 'var(--text-body)' }}>
        {label}
      </span>
      <span 
        style={{ 
          fontSize: 'var(--text-body)', 
          fontWeight: highlight ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
          color: highlight ? 'var(--primary)' : 'var(--foreground)'
        }}
      >
        {value}
      </span>
    </div>
  );
}

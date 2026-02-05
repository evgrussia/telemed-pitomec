import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/Button';

export function VetDetails({ vet, onNavigate, onBack }: { 
  vet: any; 
  onNavigate: (screen: string, data?: any) => void;
  onBack: () => void;
}) {
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  if (showTimeSlots) {
    return <TimeSlotSelection vet={vet} onNavigate={onNavigate} onBack={() => setShowTimeSlots(false)} />;
  }

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
      </div>

      <div className="px-6 space-y-6">
        {/* Doctor Info */}
        <div className="flex gap-5 items-start">
          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-muted">
            <ImageWithFallback 
              src={vet.photo}
              alt={vet.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}>
              {vet.name}
            </h1>
            <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
              {vet.specialization}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1">
                <span className="text-warning text-lg">⭐</span>
                <span style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {vet.rating}
                </span>
                <span className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
                  ({vet.reviews} отзывов)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Опыт работы" value={vet.experience} icon="🏥" />
          <StatCard label="Цена консультации" value={vet.price} icon="💳" />
        </div>

        {/* About */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-3">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            О враче
          </h3>
          <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
            Специалист по терапии мелких домашних животных. Особый интерес к эндокринологии и гастроэнтерологии. 
            Регулярно повышаю квалификацию, участвую в международных конференциях. 
            В работе придерживаюсь принципа доказательной медицины.
          </p>
        </div>

        {/* Specializations */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-3">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Специализация
          </h3>
          <div className="flex flex-wrap gap-2">
            <Chip label="Кошки" />
            <Chip label="Собаки" />
            <Chip label="Терапия" />
            <Chip label="Диагностика" />
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-3">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Отзывы
          </h3>
          <ReviewCard 
            author="Мария К."
            rating={5}
            date="15 января"
            text="Очень внимательный врач! Барсику поставили точный диагноз, назначили лечение. Через неделю кот уже бегал как обычно. Спасибо!"
          />
          <ReviewCard 
            author="Алексей П."
            rating={5}
            date="8 января"
            text="Профессионал своего дела. Всё объяснила понятно, ответила на все вопросы. Рекомендую."
          />
          <ReviewCard 
            author="Ольга С."
            rating={4}
            date="28 декабря"
            text="Хороший специалист, но консультация затянулась на 40 минут."
          />
        </div>

        {/* Book Button */}
        <div className="sticky bottom-24 left-0 right-0 pt-6">
          <Button 
            variant="primary" 
            fullWidth 
            size="large"
            onClick={() => setShowTimeSlots(true)}
          >
            Выбрать время
          </Button>
        </div>
      </div>
    </div>
  );
}

function TimeSlotSelection({ vet, onNavigate, onBack }: {
  vet: any;
  onNavigate: (screen: string, data?: any) => void;
  onBack: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState('2026-02-15');
  const [selectedTime, setSelectedTime] = useState('14:00');

  const timeSlots = ['10:00', '11:00', '12:00', '14:00', '14:30', '15:00', '16:00', '17:00'];

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
          Выберите время
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Calendar */}
        <div className="space-y-3">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Дата
          </label>
          <input 
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            style={{ fontSize: 'var(--text-body)' }}
          />
        </div>

        {/* Time Slots */}
        <div className="space-y-3">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Время
          </label>
          <div className="grid grid-cols-4 gap-3">
            {timeSlots.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className="py-3 rounded-xl border transition-all active:scale-95"
                style={{
                  borderColor: selectedTime === time ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: selectedTime === time ? 'var(--primary)/10' : 'white',
                  color: selectedTime === time ? 'var(--primary)' : 'var(--foreground)',
                  fontSize: 'var(--text-body)',
                  fontWeight: selectedTime === time ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)'
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Детали записи
          </h3>
          <div className="space-y-3">
            <SummaryRow label="Врач" value={vet.name} />
            <SummaryRow label="Дата" value="15 февраля 2026" />
            <SummaryRow label="Время" value={selectedTime} />
            <SummaryRow label="Питомец" value="Барсик" />
            <div className="pt-3 border-t border-border">
              <SummaryRow label="Стоимость" value="800 ₽" highlight />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <Button 
          variant="primary" 
          fullWidth 
          size="large"
          onClick={() => onNavigate('payment', { vet, date: selectedDate, time: selectedTime })}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-card rounded-xl border border-border p-4 space-y-2">
      <div className="text-2xl">{icon}</div>
      <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
        {label}
      </p>
      <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
        {value}
      </p>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span 
      className="px-3 py-1 rounded-lg"
      style={{ 
        backgroundColor: 'var(--primary)/10', 
        color: 'var(--primary)',
        fontSize: 'var(--text-subhead)',
        fontWeight: 'var(--font-weight-medium)'
      }}
    >
      {label}
    </span>
  );
}

function ReviewCard({ author, rating, date, text }: {
  author: string;
  rating: number;
  date: string;
  text: string;
}) {
  return (
    <div className="bg-card rounded-xl border border-border p-5 space-y-3">
      <div className="flex items-center justify-between">
        <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
          {author}
        </p>
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-warning">⭐</span>
          ))}
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
        {text}
      </p>
      <p className="text-muted-foreground" style={{ fontSize: 'var(--text-caption)' }}>
        {date}
      </p>
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
      <span 
        className="text-muted-foreground"
        style={{ fontSize: 'var(--text-body)' }}
      >
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

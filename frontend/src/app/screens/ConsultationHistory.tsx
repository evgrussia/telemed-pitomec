import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ConsultationHistory({ onNavigate, onBack }: { 
  onNavigate: (screen: string, data?: any) => void;
  onBack: () => void;
}) {
  const consultations = [
    {
      id: 1,
      date: '20.01.2026',
      time: '14:00',
      doctor: {
        name: 'Анна Петрова',
        photo: 'https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDIyMDA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
        specialization: 'Терапевт'
      },
      pet: 'Барсик',
      type: 'Видеоконсультация',
      duration: '25 мин',
      reason: 'Плановый осмотр',
      diagnosis: 'Здоров',
      recommendations: 'Общее состояние хорошее. Вес в норме. Рекомендовано продолжить текущий рацион.',
      prescriptions: [],
      price: '800 ₽',
      rating: 5
    },
    {
      id: 2,
      date: '10.01.2026',
      time: '16:30',
      doctor: {
        name: 'Дмитрий Соколов',
        photo: 'https://images.unsplash.com/photo-1640161415278-a5ac46f82d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyMjAwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        specialization: 'Офтальмолог'
      },
      pet: 'Барсик',
      type: 'Видеоконсультация',
      duration: '30 мин',
      reason: 'Слезотечение',
      diagnosis: 'Конъюнктивит',
      recommendations: 'Промывать глаза 2 раза в день физраствором. Капать капли 3 раза в день. Повторная консультация через неделю.',
      prescriptions: ['Левомицетиновые капли 0.25%', 'Физиологический раствор'],
      price: '1200 ₽',
      rating: 5
    },
    {
      id: 3,
      date: '05.01.2026',
      time: '11:00',
      doctor: {
        name: 'Елена Волкова',
        photo: 'https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDIyMDA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
        specialization: 'Дерматолог'
      },
      pet: 'Барсик',
      type: 'Текстовая консультация',
      duration: 'Чат',
      reason: 'Вопрос о питании',
      diagnosis: null,
      recommendations: 'Обсудили переход на новый корм. Рекомендовано делать это постепенно в течение 7 дней.',
      prescriptions: [],
      price: '400 ₽',
      rating: 4
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
          История консультаций
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Все приёмы и заключения врачей
        </p>
      </div>

      <div className="px-6 space-y-4">
        {consultations.map(consultation => (
          <ConsultationCard 
            key={consultation.id}
            consultation={consultation}
            onClick={() => onNavigate('consultation-details', consultation)}
          />
        ))}
      </div>
    </div>
  );
}

function ConsultationCard({ consultation, onClick }: { 
  consultation: any;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-2xl border border-border p-5 hover:shadow-lg transition-all active:scale-[0.98] text-left space-y-4"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
          <ImageWithFallback 
            src={consultation.doctor.photo}
            alt={consultation.doctor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            {consultation.doctor.name}
          </p>
          <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
            {consultation.doctor.specialization}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
              📅 {consultation.date}
            </p>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
              🕐 {consultation.time}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 pt-2 border-t border-border">
        <DetailRow label="Питомец" value={consultation.pet} />
        <DetailRow label="Тип" value={consultation.type} />
        <DetailRow label="Причина" value={consultation.reason} />
        {consultation.diagnosis && (
          <DetailRow label="Диагноз" value={consultation.diagnosis} highlight />
        )}
      </div>

      {/* Rating */}
      {consultation.rating && (
        <div className="flex items-center gap-1 pt-2">
          <span className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
            Ваша оценка:
          </span>
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={i < consultation.rating ? 'text-warning' : 'text-muted'}
            >
              ⭐
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <span style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)' }}>
          {consultation.price}
        </span>
        <span className="text-primary" style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
          Смотреть заключение →
        </span>
      </div>
    </button>
  );
}

function DetailRow({ label, value, highlight = false }: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground flex-shrink-0" style={{ fontSize: 'var(--text-subhead)' }}>
        {label}:
      </span>
      <span 
        className="text-right"
        style={{ 
          fontSize: 'var(--text-subhead)', 
          fontWeight: highlight ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
          color: highlight ? 'var(--primary)' : 'var(--foreground)'
        }}
      >
        {value}
      </span>
    </div>
  );
}

import { Button } from '../components/Button';

export function PetProfile({ onNavigate, onBack }: { 
  onNavigate: (screen: string) => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-pet-accent/10 to-transparent px-6 pt-8 pb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span style={{ fontSize: 'var(--text-subhead)' }}>Назад</span>
        </button>

        <div className="flex items-center gap-6">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
            style={{ backgroundColor: 'var(--pet-accent)', color: 'white' }}
          >
            🐱
          </div>
          <div className="flex-1">
            <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
              Барсик
            </h1>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
              Кот, 3 года
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)', color: 'var(--success)' }}>
                Здоров
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-6 mt-6">
        {/* Basic Info */}
        <section className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <h3 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Основная информация
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <InfoItem label="Вес" value="4,5 кг" />
            <InfoItem label="Порода" value="Сиамский" />
            <InfoItem label="Возраст" value="3 года" />
            <InfoItem label="Кличка" value="Барсик" />
          </div>
        </section>

        {/* Sections */}
        <section className="space-y-3">
          <SectionButton 
            icon="📋"
            title="Медкарта"
            subtitle="Анализы, УЗИ, осмотры"
            onClick={() => onNavigate('medical-records')}
          />
          <SectionButton 
            icon="💉"
            title="Календарь прививок"
            subtitle="История и напоминания"
            onClick={() => onNavigate('vaccinations')}
          />
          <SectionButton 
            icon="📜"
            title="История консультаций"
            subtitle="12 консультаций"
            onClick={() => onNavigate('consultation-history')}
          />
          <SectionButton 
            icon="🍖"
            title="Рацион и питание"
            subtitle="Корм, режим кормления"
            onClick={() => onNavigate('nutrition')}
          />
        </section>

        {/* Edit Button */}
        <Button variant="secondary" fullWidth onClick={() => {}}>
          Редактировать профиль
        </Button>

        {/* Delete */}
        <button 
          className="w-full py-3 text-center transition-colors"
          style={{ 
            color: 'var(--destructive)',
            fontSize: 'var(--text-body)',
            fontWeight: 'var(--font-weight-medium)'
          }}
          onClick={() => {}}
        >
          Удалить профиль
        </button>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted-foreground mb-1" style={{ fontSize: 'var(--text-subhead)' }}>
        {label}
      </p>
      <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-medium)' }}>
        {value}
      </p>
    </div>
  );
}

function SectionButton({ icon, title, subtitle, onClick }: {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-xl border border-border p-4 hover:shadow-md transition-all active:scale-[0.98] text-left"
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1 min-w-0">
          <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
            {title}
          </p>
          <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
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

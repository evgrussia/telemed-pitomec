import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/Button';

export function Appointments({ onNavigate }: { onNavigate: (screen: string, data?: any) => void }) {
  const [activeTab, setActiveTab] = useState<'catalog' | 'upcoming' | 'past'>('catalog');

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-6">
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Консультации
        </h1>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="flex gap-2 bg-secondary rounded-xl p-1">
          <TabButton 
            active={activeTab === 'catalog'}
            onClick={() => setActiveTab('catalog')}
            label="Врачи"
          />
          <TabButton 
            active={activeTab === 'upcoming'}
            onClick={() => setActiveTab('upcoming')}
            label="Предстоящие"
          />
          <TabButton 
            active={activeTab === 'past'}
            onClick={() => setActiveTab('past')}
            label="Прошедшие"
          />
        </div>
      </div>

      {activeTab === 'catalog' && <VetCatalog onNavigate={onNavigate} />}
      {activeTab === 'upcoming' && <UpcomingAppointments onNavigate={onNavigate} />}
      {activeTab === 'past' && <PastAppointments onNavigate={onNavigate} />}
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

function VetCatalog({ onNavigate }: { onNavigate: (screen: string, data?: any) => void }) {
  const vets = [
    {
      id: 1,
      name: 'Анна Петрова',
      photo: 'https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDIyMDA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      specialization: 'Терапевт',
      experience: '8 лет',
      rating: 4.9,
      reviews: 124,
      price: 'от 800 ₽'
    },
    {
      id: 2,
      name: 'Дмитрий Соколов',
      photo: 'https://images.unsplash.com/photo-1640161415278-a5ac46f82d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyMjAwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      specialization: 'Офтальмолог',
      experience: '12 лет',
      rating: 4.8,
      reviews: 89,
      price: 'от 1200 ₽'
    },
    {
      id: 3,
      name: 'Елена Волкова',
      photo: 'https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDIyMDA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      specialization: 'Дерматолог',
      experience: '6 лет',
      rating: 4.7,
      reviews: 67,
      price: 'от 1000 ₽'
    }
  ];

  return (
    <div className="px-6 space-y-6">
      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <FilterChip label="Все" active />
        <FilterChip label="Кошки" />
        <FilterChip label="Собаки" />
        <FilterChip label="Экзотика" />
      </div>

      {/* Vet List */}
      <div className="space-y-4">
        {vets.map(vet => (
          <VetCard 
            key={vet.id}
            vet={vet}
            onClick={() => onNavigate('vet-details', vet)}
          />
        ))}
      </div>
    </div>
  );
}

function VetCard({ vet, onClick }: { vet: any; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-2xl border border-border p-5 hover:shadow-lg transition-all active:scale-[0.98] text-left"
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
          <ImageWithFallback 
            src={vet.photo}
            alt={vet.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
                {vet.name}
              </p>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
                {vet.specialization} · {vet.experience}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-warning">⭐</span>
                <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                  {vet.rating}
                </span>
                <span className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
                  ({vet.reviews})
                </span>
              </div>
              <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)' }}>
                {vet.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function UpcomingAppointments({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="px-6 space-y-4">
      <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
              15 февраля, 14:00
            </p>
            <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
              Анна Петрова · Терапевт
            </p>
            <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
              Барсик
            </p>
          </div>
          <div 
            className="px-3 py-1 rounded-lg"
            style={{ backgroundColor: 'var(--success)/20', color: 'var(--success)' }}
          >
            <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)' }}>
              Подтверждена
            </span>
          </div>
        </div>
        <div className="flex gap-3 pt-4 border-t border-border">
          <Button 
            variant="primary" 
            fullWidth
            onClick={() => onNavigate('video-call')}
          >
            Войти в звонок
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            Отменить
          </Button>
        </div>
      </div>

      <div className="bg-muted/30 rounded-xl p-4 text-center">
        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
          Напоминание придёт за 15 минут до приёма
        </p>
      </div>
    </div>
  );
}

function PastAppointments({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const appointments = [
    { date: '12 января', doctor: 'Анна Петрова', pet: 'Барсик' },
    { date: '28 декабря 2025', doctor: 'Елена Волкова', pet: 'Барсик' }
  ];

  return (
    <div className="px-6 space-y-3">
      {appointments.map((apt, idx) => (
        <button
          key={idx}
          onClick={() => onNavigate('chat')}
          className="w-full bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all active:scale-[0.98] text-left"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                {apt.date}
              </p>
              <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-subhead)' }}>
                {apt.doctor} · {apt.pet}
              </p>
            </div>
            <Button variant="ghost" onClick={(e) => { e.stopPropagation(); }}>
              Открыть заключение
            </Button>
          </div>
        </button>
      ))}
    </div>
  );
}

function FilterChip({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className="px-4 py-2 rounded-lg border whitespace-nowrap transition-all"
      style={{
        borderColor: active ? 'var(--primary)' : 'var(--border)',
        backgroundColor: active ? 'var(--primary)/10' : 'white',
        color: active ? 'var(--primary)' : 'var(--foreground)',
        fontSize: 'var(--text-subhead)',
        fontWeight: active ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)'
      }}
    >
      {label}
    </button>
  );
}

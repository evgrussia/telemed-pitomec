import { useState } from 'react';
import { Button } from '../components/Button';

export function Onboarding({ onComplete, onSkip }: { 
  onComplete: (petData: any) => void;
  onSkip: () => void;
}) {
  const [step, setStep] = useState(1);
  const [petData, setPetData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    photo: null as string | null
  });

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onComplete(petData);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {step === 1 ? (
          <Step1AddPet 
            petData={petData}
            setPetData={setPetData}
            onNext={handleNext}
            onSkip={onSkip}
          />
        ) : (
          <Step2Reminders 
            onNext={handleNext}
            onSkip={onSkip}
          />
        )}
        
        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          <div 
            className="w-2 h-2 rounded-full transition-all"
            style={{ backgroundColor: step === 1 ? 'var(--primary)' : 'var(--muted)' }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-all"
            style={{ backgroundColor: step === 2 ? 'var(--primary)' : 'var(--muted)' }}
          />
        </div>
      </div>
    </div>
  );
}

function Step1AddPet({ petData, setPetData, onNext, onSkip }: any) {
  const species = ['Кошка', 'Собака', 'Птица', 'Грызун', 'Рептилия', 'Другое'];

  return (
    <div className="bg-card rounded-3xl p-8 border border-border shadow-lg space-y-6">
      <div className="text-center space-y-2">
        <div className="text-5xl mb-4">🐾</div>
        <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Привет!
        </h2>
        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
          Добавьте первого питомца — так мы подстроим сервис под вас
        </p>
      </div>

      <div className="space-y-4">
        {/* Photo Upload */}
        <div className="flex justify-center">
          <label className="cursor-pointer">
            <div 
              className="w-24 h-24 rounded-full border-2 border-dashed flex items-center justify-center text-4xl hover:bg-accent transition-all"
              style={{ borderColor: 'var(--border)' }}
            >
              {petData.photo ? '📸' : '➕'}
            </div>
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Имя питомца
          </label>
          <input 
            type="text"
            placeholder="Например, Барсик"
            value={petData.name}
            onChange={(e) => setPetData({ ...petData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            style={{ fontSize: 'var(--text-body)' }}
          />
        </div>

        {/* Species */}
        <div className="space-y-2">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Вид животного
          </label>
          <div className="grid grid-cols-3 gap-2">
            {species.map(s => (
              <button
                key={s}
                onClick={() => setPetData({ ...petData, species: s })}
                className="px-4 py-2 rounded-lg border transition-all active:scale-95"
                style={{
                  borderColor: petData.species === s ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: petData.species === s ? 'var(--primary)/10' : 'transparent',
                  color: petData.species === s ? 'var(--primary)' : 'var(--foreground)',
                  fontSize: 'var(--text-subhead)',
                  fontWeight: petData.species === s ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)'
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Breed */}
        <div className="space-y-2">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Порода <span className="text-muted-foreground">(необязательно)</span>
          </label>
          <input 
            type="text"
            placeholder="Например, Сиамская"
            value={petData.breed}
            onChange={(e) => setPetData({ ...petData, breed: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            style={{ fontSize: 'var(--text-body)' }}
          />
        </div>

        {/* Age */}
        <div className="space-y-2">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Возраст
          </label>
          <input 
            type="text"
            placeholder="Например, 3 года"
            value={petData.age}
            onChange={(e) => setPetData({ ...petData, age: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            style={{ fontSize: 'var(--text-body)' }}
          />
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <Button 
          variant="primary" 
          fullWidth 
          size="large"
          onClick={onNext}
        >
          Добавить и продолжить
        </Button>
        <button 
          onClick={onSkip}
          className="w-full py-2 text-center text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: 'var(--text-subhead)' }}
        >
          Пропустить
        </button>
      </div>
    </div>
  );
}

function Step2Reminders({ onNext, onSkip }: any) {
  const [reminders, setReminders] = useState({
    vaccinations: false,
    parasites: false,
    medications: false,
    other: false
  });

  const [nextVaccination, setNextVaccination] = useState('');

  return (
    <div className="bg-card rounded-3xl p-8 border border-border shadow-lg space-y-6">
      <div className="text-center space-y-2">
        <div className="text-5xl mb-4">🔔</div>
        <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Не пропустите важное
        </h2>
        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
          Настройте напоминания о процедурах
        </p>
      </div>

      <div className="space-y-4">
        <ReminderToggle 
          label="Прививки"
          icon="💉"
          checked={reminders.vaccinations}
          onChange={(checked) => setReminders({ ...reminders, vaccinations: checked })}
        />
        <ReminderToggle 
          label="Обработка от паразитов"
          icon="🛡️"
          checked={reminders.parasites}
          onChange={(checked) => setReminders({ ...reminders, parasites: checked })}
        />
        <ReminderToggle 
          label="Приём лекарств"
          icon="💊"
          checked={reminders.medications}
          onChange={(checked) => setReminders({ ...reminders, medications: checked })}
        />
        <ReminderToggle 
          label="Другое"
          icon="📌"
          checked={reminders.other}
          onChange={(checked) => setReminders({ ...reminders, other: checked })}
        />

        {reminders.vaccinations && (
          <div className="space-y-2 pl-12 animate-in fade-in duration-300">
            <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
              Дата следующей прививки
            </label>
            <input 
              type="date"
              value={nextVaccination}
              onChange={(e) => setNextVaccination(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              style={{ fontSize: 'var(--text-body)' }}
            />
          </div>
        )}
      </div>

      <div className="space-y-3 pt-4">
        <Button 
          variant="primary" 
          fullWidth 
          size="large"
          onClick={onNext}
        >
          Включить напоминания в Telegram
        </Button>
        <button 
          onClick={onSkip}
          className="w-full py-2 text-center text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: 'var(--text-subhead)' }}
        >
          Настроить позже
        </button>
      </div>
    </div>
  );
}

function ReminderToggle({ label, icon, checked, onChange }: any) {
  return (
    <label className="flex items-center gap-4 p-4 rounded-xl border border-border cursor-pointer hover:bg-accent transition-all">
      <span className="text-2xl">{icon}</span>
      <span className="flex-1" style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-medium)' }}>
        {label}
      </span>
      <input 
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-6 h-6 rounded accent-primary"
      />
    </label>
  );
}

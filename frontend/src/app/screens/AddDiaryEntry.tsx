import { useState } from 'react';
import { Button } from '../components/Button';

export function AddDiaryEntry({ onBack, onSave }: { 
  onBack: () => void;
  onSave: () => void;
}) {
  const [category, setCategory] = useState('weight');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const categories = [
    { id: 'weight', label: 'Вес', icon: '⚖️' },
    { id: 'symptom', label: 'Симптом', icon: '🤒' },
    { id: 'nutrition', label: 'Питание', icon: '🍖' },
    { id: 'medication', label: 'Назначение', icon: '💊' },
    { id: 'vaccination', label: 'Прививка', icon: '💉' },
    { id: 'other', label: 'Другое', icon: '📝' }
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
          Новая запись
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Category Selection */}
        <div className="space-y-3">
          <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            Категория
          </label>
          <div className="grid grid-cols-3 gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all active:scale-95"
                style={{
                  borderColor: category === cat.id ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: category === cat.id ? 'var(--primary)/10' : 'white',
                  color: category === cat.id ? 'var(--primary)' : 'var(--foreground)'
                }}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span style={{ fontSize: 'var(--text-caption)', fontWeight: category === cat.id ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)' }}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Fields based on category */}
        {category === 'weight' && (
          <>
            <div className="space-y-3">
              <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                Вес (кг)
              </label>
              <input 
                type="number"
                step="0.1"
                placeholder="Например, 4.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                style={{ fontSize: 'var(--text-body)' }}
              />
            </div>
            <div className="space-y-3">
              <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                Дата
              </label>
              <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                style={{ fontSize: 'var(--text-body)' }}
              />
            </div>
          </>
        )}

        {category === 'symptom' && (
          <>
            <div className="space-y-3">
              <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                Описание симптома
              </label>
              <textarea 
                placeholder="Опишите симптом..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                style={{ fontSize: 'var(--text-body)', minHeight: '120px' }}
              />
            </div>
            <div className="space-y-3">
              <label style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                Фото <span className="text-muted-foreground">(необязательно)</span>
              </label>
              <label className="cursor-pointer">
                <div className="w-full border-2 border-dashed border-border rounded-xl p-8 hover:bg-accent transition-all flex flex-col items-center gap-3">
                  <div className="text-4xl">📷</div>
                  <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
                    Добавить фото
                  </span>
                </div>
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>
          </>
        )}

        {/* Save Button */}
        <div className="pt-4">
          <Button 
            variant="primary" 
            fullWidth 
            size="large"
            onClick={onSave}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

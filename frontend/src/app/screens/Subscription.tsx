import { Button } from '../components/Button';

export function Subscription({ onBack }: { onBack: () => void }) {
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
          Подписка
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Выберите подходящий тариф
        </p>
      </div>

      <div className="px-6 space-y-6">
        {/* Basic Plan */}
        <PricingCard 
          name="Basic"
          price="299 ₽"
          period="/мес"
          features={[
            'Дневник здоровья',
            'Напоминания о прививках',
            '2 ИИ-диагностики в месяц',
            'Чат с поддержкой'
          ]}
          isCurrent
        />

        {/* Premium Plan */}
        <PricingCard 
          name="Premium"
          price="699 ₽"
          period="/мес"
          features={[
            'Всё из Basic',
            'Безлимит ИИ-диагностики',
            'Скидка 20% на консультации',
            'Приоритетная поддержка',
            'Ранний доступ к новым функциям'
          ]}
          recommended
          isHighlighted
        />

        {/* Info */}
        <div className="bg-muted/30 rounded-xl p-4">
          <p className="text-muted-foreground leading-relaxed text-center" style={{ fontSize: 'var(--text-subhead)' }}>
            Подписка продлевается автоматически. Вы можете отменить её в любой момент.
          </p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, price, period, features, isCurrent = false, recommended = false, isHighlighted = false }: {
  name: string;
  price: string;
  period: string;
  features: string[];
  isCurrent?: boolean;
  recommended?: boolean;
  isHighlighted?: boolean;
}) {
  return (
    <div 
      className={`rounded-2xl p-6 space-y-6 relative ${
        isHighlighted 
          ? 'border-2 shadow-xl' 
          : 'border'
      }`}
      style={{
        backgroundColor: isHighlighted ? 'var(--primary)' : 'white',
        color: isHighlighted ? 'white' : 'var(--foreground)',
        borderColor: isHighlighted ? 'var(--primary)' : 'var(--border)'
      }}
    >
      {/* Badges */}
      <div className="flex gap-2 flex-wrap">
        {isCurrent && (
          <div 
            className="px-3 py-1 rounded-full"
            style={{ backgroundColor: isHighlighted ? 'rgba(255,255,255,0.2)' : 'var(--success)/20' }}
          >
            <span style={{ 
              fontSize: 'var(--text-caption)', 
              fontWeight: 'var(--font-weight-semibold)',
              color: isHighlighted ? 'white' : 'var(--success)'
            }}>
              Текущий тариф
            </span>
          </div>
        )}
        {recommended && (
          <div 
            className="px-3 py-1 rounded-full"
            style={{ backgroundColor: isHighlighted ? 'rgba(255,255,255,0.2)' : 'var(--warning)/20' }}
          >
            <span style={{ 
              fontSize: 'var(--text-caption)', 
              fontWeight: 'var(--font-weight-semibold)',
              color: isHighlighted ? 'white' : 'var(--warning-foreground)'
            }}>
              ⭐ Рекомендуем
            </span>
          </div>
        )}
      </div>

      {/* Title & Price */}
      <div>
        <h3 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-semibold)', lineHeight: '1' }}>
            {price}
          </span>
          <span style={{ fontSize: 'var(--text-body)', opacity: 0.7 }}>
            {period}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <svg 
              className="w-5 h-5 flex-shrink-0 mt-0.5" 
              style={{ color: isHighlighted ? 'white' : 'var(--success)' }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span style={{ fontSize: 'var(--text-body)' }}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {!isCurrent && (
        <Button 
          variant={isHighlighted ? 'secondary' : 'primary'}
          fullWidth 
          size="large"
        >
          Выбрать {name}
        </Button>
      )}
    </div>
  );
}

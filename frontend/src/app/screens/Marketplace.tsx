import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/Button';

export function Marketplace({ onNavigate }: { onNavigate: (screen: string, data?: any) => void }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Всё', icon: '🛒' },
    { id: 'food', label: 'Корма', icon: '🍖' },
    { id: 'medicine', label: 'Лекарства', icon: '💊' },
    { id: 'accessories', label: 'Аксессуары', icon: '🎀' },
    { id: 'toys', label: 'Игрушки', icon: '🎾' }
  ];

  const products = [
    {
      id: 1,
      name: 'Royal Canin для кошек',
      description: 'Сухой корм, 2 кг',
      price: '1890 ₽',
      oldPrice: '2100 ₽',
      image: 'https://images.unsplash.com/photo-1646668949229-f815c28d55f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBmb29kJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzcwMTY2MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 256,
      badge: 'Рекомендует врач',
      category: 'food'
    },
    {
      id: 2,
      name: 'Витамины Beaphar',
      description: 'Для кошек, 180 таблеток',
      price: '890 ₽',
      image: null,
      rating: 4.7,
      reviews: 124,
      badge: null,
      category: 'medicine'
    },
    {
      id: 3,
      name: 'Игрушка-удочка',
      description: 'С перьями, интерактивная',
      price: '450 ₽',
      oldPrice: '650 ₽',
      image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3lzJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzcwMjIwOTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 89,
      badge: 'Хит продаж',
      category: 'toys'
    },
    {
      id: 4,
      name: 'Лоток с высоким бортом',
      description: 'Размер L, 55×40×20 см',
      price: '1290 ₽',
      image: null,
      rating: 4.6,
      reviews: 167,
      badge: null,
      category: 'accessories'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-6">
        <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
          Маркетплейс
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-body)' }}>
          Товары для питомцев с доставкой
        </p>
      </div>

      <div className="px-6 space-y-6">
        {/* Coming Soon Banner */}
        <div 
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #FF9F43 0%, #F1A302 100%)', color: 'white' }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🚀</span>
              <div>
                <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Скоро запуск!
                </p>
                <p style={{ fontSize: 'var(--text-subhead)', opacity: 0.9 }}>
                  Маркетплейс откроется в марте 2026
                </p>
              </div>
            </div>
            <p style={{ fontSize: 'var(--text-body)', opacity: 0.9, marginBottom: '1rem' }}>
              Корма, лекарства и аксессуары — всё для питомцев в одном месте. С доставкой на дом.
            </p>
            <Button variant="secondary" onClick={() => {}}>
              Узнать о запуске
            </Button>
          </div>
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
            style={{ background: 'white', transform: 'translate(30%, -30%)' }}
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border whitespace-nowrap transition-all flex-shrink-0"
              style={{
                borderColor: activeCategory === cat.id ? 'var(--primary)' : 'var(--border)',
                backgroundColor: activeCategory === cat.id ? 'var(--primary)/10' : 'white',
                color: activeCategory === cat.id ? 'var(--primary)' : 'var(--foreground)',
                fontSize: 'var(--text-subhead)',
                fontWeight: activeCategory === cat.id ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)'
              }}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 pt-6">
          <BenefitCard icon="🚚" title="Доставка за 1 день" />
          <BenefitCard icon="💳" title="Оплата картой" />
          <BenefitCard icon="↩️" title="Возврат 14 дней" />
          <BenefitCard icon="🎁" title="Бонусы за покупки" />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onNavigate }: { 
  product: any; 
  onNavigate: (screen: string, data?: any) => void;
}) {
  return (
    <button
      onClick={() => onNavigate('product-details', product)}
      className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all active:scale-[0.98] text-left"
    >
      {/* Image */}
      <div className="aspect-square bg-muted relative">
        {product.image ? (
          <ImageWithFallback 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🛒
          </div>
        )}
        {product.badge && (
          <div 
            className="absolute top-2 left-2 px-2 py-1 rounded-lg text-white"
            style={{ 
              backgroundColor: 'var(--primary)',
              fontSize: 'var(--text-caption)',
              fontWeight: 'var(--font-weight-semibold)'
            }}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 space-y-2">
        <p style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-semibold)', lineHeight: '1.3' }}>
          {product.name}
        </p>
        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-caption)' }}>
          {product.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-warning text-sm">⭐</span>
          <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-medium)' }}>
            {product.rating}
          </span>
          <span className="text-muted-foreground" style={{ fontSize: 'var(--text-caption)' }}>
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            {product.price}
          </span>
          {product.oldPrice && (
            <span 
              className="text-muted-foreground line-through"
              style={{ fontSize: 'var(--text-subhead)' }}
            >
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

function BenefitCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="bg-card rounded-xl border border-border p-4 flex flex-col items-center text-center gap-2">
      <span className="text-2xl">{icon}</span>
      <p style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)', lineHeight: '1.3' }}>
        {title}
      </p>
    </div>
  );
}

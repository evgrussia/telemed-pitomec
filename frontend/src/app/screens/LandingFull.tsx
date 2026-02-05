import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/Button';

export function LandingFull({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Problem Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
              Знакомые проблемы?
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
              Мы понимаем, через что проходят владельцы питомцев
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProblemCard icon="😰" text="Тревога при первых симптомах — что делать?" />
            <ProblemCard icon="⏰" text="Долгие очереди в клиниках и потеря времени" />
            <ProblemCard icon="📄" text="Потерянные справки и забытые прививки" />
            <ProblemCard icon="💸" text="Дорогие осмотры даже при мелких проблемах" />
          </div>
        </div>
      </section>

      {/* Solution - All Features */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
              Решение — всё в одном приложении
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
              Полный спектр ветеринарных услуг в вашем Telegram
            </p>
          </div>

          <div className="space-y-20">
            {/* AI Diagnosis */}
            <FeatureShowcase 
              title="🤖 ИИ-диагностика"
              subtitle="Предварительная оценка за 30 секунд"
              description="Загрузите фото симптома и получите оценку риска: низкий, средний или высокий. ИИ подскажет, нужна ли срочная консультация. Disclaimer: ИИ не заменяет полноценный осмотр врача."
              features={[
                'Анализ за 30 секунд',
                'Оценка уровня риска',
                'Рекомендации по действиям',
                'История всех диагностик'
              ]}
              reverse={false}
            />

            {/* Video Consultations */}
            <FeatureShowcase 
              title="📹 Видеоконсультации 24/7"
              subtitle="Верифицированные ветеринары всегда на связи"
              description="Запишитесь к специалисту в удобное время. Видеозвонок прямо в WebApp, заключение врача придёт в чат. Никаких очередей и стресса для питомца."
              features={[
                'Запись на удобное время',
                'Видеозвонок в приложении',
                'Заключение после приёма',
                'Напоминание за 15 минут'
              ]}
              reverse={true}
            />

            {/* Text Chat */}
            <FeatureShowcase 
              title="💬 Чат с ветеринаром"
              subtitle="Быстрые ответы на короткие вопросы"
              description="Асинхронное общение с врачом для несрочных вопросов. Спросите совет или уточните назначение — врач ответит, когда освободится."
              features={[
                'Текстовый чат с врачом',
                'История переписки',
                'Отправка фото и файлов',
                'Быстрые ответы'
              ]}
              reverse={false}
            />

            {/* Health Diary */}
            <FeatureShowcase 
              title="📊 Дневник здоровья"
              subtitle="Вся медицинская история в одном месте"
              description="Отслеживайте вес, активность, питание и симптомы. Сохраняйте результаты анализов и УЗИ. Смотрите динамику на графиках и делитесь с врачом."
              features={[
                'Вес и параметры',
                'Симптомы и наблюдения',
                'Результаты анализов',
                'Графики и статистика'
              ]}
              reverse={true}
            />

            {/* Reminders */}
            <FeatureShowcase 
              title="🔔 Напоминания"
              subtitle="Никогда не пропускайте важное"
              description="Прививки, глистогонное, обработка от клещей — push-уведомления придут в Telegram. Настройте расписание один раз и забудьте о тревоге."
              features={[
                'Календарь прививок',
                'Напоминания о процедурах',
                'Push в Telegram',
                'Гибкое расписание'
              ]}
              reverse={false}
            />

            {/* Vet Catalog */}
            <FeatureShowcase 
              title="👨‍⚕️ Каталог ветеринаров"
              subtitle="Найдите идеального специалиста"
              description="Фильтруйте по виду животного и специализации. Читайте отзывы реальных клиентов. Офтальмологи, дерматологи, хирурги — для любого питомца."
              features={[
                'Фильтр по специализации',
                'Рейтинги и отзывы',
                'Цены и доступность',
                'Опыт врачей'
              ]}
              reverse={true}
            />

            {/* Pet Profile */}
            <FeatureShowcase 
              title="🐾 Профиль питомца"
              subtitle="Несколько питомцев — один кабинет"
              description="Заводите профили для всех питомцев. Вид, порода, возраст, медкарта, календарь и история консультаций. Всё структурировано и под рукой."
              features={[
                'Несколько питомцев',
                'Медкарта и история',
                'Календарь прививок',
                'Параметры и фото'
              ]}
              reverse={false}
            />

            {/* Exotic Animals */}
            <FeatureShowcase 
              title="🦜 Экзотические животные"
              subtitle="Специалисты для птиц, грызунов, рептилий"
              description="Найти врача для попугая или хамелеона сложно? У нас есть специалисты по экзотическим животным. Птицы, грызуны, рептилии, рыбы — каждому свой эксперт."
              features={[
                'Птицы и попугаи',
                'Грызуны (хомяки, крысы)',
                'Рептилии (ящерицы, черепахи)',
                'Специализированные врачи'
              ]}
              reverse={true}
            />
          </div>

          {/* Future Features */}
          <div className="mt-20 pt-20 border-t border-border">
            <div className="text-center mb-12">
              <h3 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>
                Скоро
              </h3>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body)' }}>
                Развиваем сервис для вашего удобства
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <FutureFeature 
                icon="🛒"
                title="Маркетплейс"
                description="Корма, лекарства, аксессуары с доставкой. Рекомендации врача — сразу в корзину."
              />
              <FutureFeature 
                icon="🗺️"
                title="Поиск клиник"
                description="Карта клиник-партнёров рядом с вами. Рейтинги, отзывы и онлайн-запись."
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
              Для кого это?
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
              Каждый владелец найдёт здесь помощь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PersonaCard 
              emoji="😊"
              title="Тревожная мама"
              description="У вас кошка или собака, и вы волнуетесь при каждом чихе? ИИ-диагностика успокоит и подскажет, что делать."
            />
            <PersonaCard 
              emoji="💼"
              title="Занятой профессионал"
              description="Нет времени на очереди в клинике? Видеоконсультация и чат с врачом — без отрыва от дел."
            />
            <PersonaCard 
              emoji="🦎"
              title="Владелец экзота"
              description="Ваш питомец — игуана или попугай? Найдите специалиста, который разбирается именно в вашем животном."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
              Как это работает?
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
              Четыре простых шага до помощи
            </p>
          </div>
          <div className="space-y-6">
            <StepCard number={1} title="Откройте в Telegram" description="Перейдите по ссылке и добавьте бота" />
            <StepCard number={2} title="Добавьте питомца" description="Имя, вид, возраст — профиль готов за минуту" />
            <StepCard number={3} title="Покажите симптом или запишитесь" description="ИИ-диагностика или видеоконсультация — выбирайте удобное" />
            <StepCard number={4} title="Получите помощь" description="Рекомендации, консультация, заключение — всё сохранится в дневнике" />
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem' }}>
              Тарифы
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-l)' }}>
              Выберите подходящий план
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard 
              name="Basic"
              price="299 ₽/мес"
              features={[
                'Дневник здоровья',
                'Напоминания о прививках',
                '2 ИИ-диагностики в месяц',
                'Чат с поддержкой'
              ]}
              variant="secondary"
            />
            <PricingCard 
              name="Premium"
              price="699 ₽/мес"
              features={[
                'Всё из Basic',
                'Безлимит ИИ-диагностики',
                'Скидка 20% на консультации',
                'Приоритетная поддержка',
                'Ранний доступ к новым функциям'
              ]}
              variant="primary"
              recommended
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--font-weight-semibold)' }}>
            Готовы позаботиться о питомце без стресса?
          </h2>
          <p style={{ fontSize: 'var(--text-body-l)', opacity: 0.9 }}>
            Присоединяйтесь к 5000+ владельцев, которые уже используют Телемед-Питомец
          </p>
          <Button variant="secondary" size="large" onClick={onGetStarted}>
            Перейти в личный кабинет →
          </Button>
          <p style={{ fontSize: 'var(--text-subhead)', opacity: 0.7 }}>
            ⚡ Первая консультация — бесплатно
          </p>
        </div>
      </section>
    </div>
  );
}

function ProblemCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border space-y-3 hover:shadow-lg transition-all">
      <div className="text-4xl">{icon}</div>
      <p style={{ fontSize: 'var(--text-body)', lineHeight: '1.5' }}>{text}</p>
    </div>
  );
}

function FeatureShowcase({ title, subtitle, description, features, reverse }: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  reverse: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`space-y-6 ${reverse ? 'md:order-2' : ''}`}>
        <div>
          <h3 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>
            {title}
          </h3>
          <p className="text-primary" style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            {subtitle}
          </p>
        </div>
        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span style={{ fontSize: 'var(--text-body)' }}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
          <div className="text-6xl">{title.split(' ')[0]}</div>
        </div>
      </div>
    </div>
  );
}

function FutureFeature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border border-dashed space-y-3 opacity-75">
      <div className="text-3xl">{icon}</div>
      <h4 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
        {title}
      </h4>
      <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body)' }}>
        {description}
      </p>
    </div>
  );
}

function PersonaCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-border space-y-4 hover:shadow-lg transition-all">
      <div className="text-5xl">{emoji}</div>
      <h4 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
        {title}
      </h4>
      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
        {description}
      </p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
        style={{ backgroundColor: 'var(--primary)', fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)' }}
      >
        {number}
      </div>
      <div className="flex-1 pt-1">
        <h4 style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>
          {title}
        </h4>
        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function PricingCard({ name, price, features, variant, recommended }: {
  name: string;
  price: string;
  features: string[];
  variant: 'primary' | 'secondary';
  recommended?: boolean;
}) {
  return (
    <div 
      className={`rounded-2xl p-8 space-y-6 relative ${
        variant === 'primary' 
          ? 'border-2 shadow-xl' 
          : 'border'
      }`}
      style={{
        backgroundColor: variant === 'primary' ? 'var(--primary)' : 'white',
        color: variant === 'primary' ? 'white' : 'var(--foreground)',
        borderColor: variant === 'primary' ? 'var(--primary)' : 'var(--border)'
      }}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-warning px-4 py-1 rounded-full">
          <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--warning-foreground)' }}>
            Рекомендуем
          </span>
        </div>
      )}
      <div>
        <h4 style={{ fontSize: 'var(--text-title)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>
          {name}
        </h4>
        <p style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-semibold)' }}>
          {price}
        </p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span style={{ fontSize: 'var(--text-body)' }}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={variant === 'primary' ? 'secondary' : 'primary'} 
        fullWidth 
        size="large"
      >
        Выбрать {name}
      </Button>
    </div>
  );
}

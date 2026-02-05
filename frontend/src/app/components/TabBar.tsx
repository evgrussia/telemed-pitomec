export function TabBar({ 
  activeTab, 
  onTabChange 
}: { 
  activeTab: string; 
  onTabChange: (tab: string) => void;
}) {
  const tabs = [
    { id: 'home', label: 'Главная', icon: '🏠' },
    { id: 'ai-diagnosis', label: 'ИИ-диагноз', icon: '🤖' },
    { id: 'appointments', label: 'Приёмы', icon: '📅' },
    { id: 'diary', label: 'Дневник', icon: '📊' },
    { id: 'profile', label: 'Профиль', icon: '👤' }
  ];

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50"
      style={{ 
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <div className="flex items-center justify-around max-w-2xl mx-auto px-2 py-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all active:scale-95 min-w-[60px]"
            style={{
              color: activeTab === tab.id ? 'var(--primary)' : 'var(--muted-foreground)',
              backgroundColor: activeTab === tab.id ? 'rgba(51, 144, 236, 0.1)' : 'transparent'
            }}
          >
            <span className="text-xl">{tab.icon}</span>
            <span style={{ fontSize: '11px', fontWeight: activeTab === tab.id ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)' }}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

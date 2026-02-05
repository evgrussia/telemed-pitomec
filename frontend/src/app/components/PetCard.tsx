export function PetCard({ 
  name, 
  species, 
  age, 
  status, 
  lastActivity,
  onClick 
}: {
  name: string;
  species: string;
  age: string;
  status: 'success' | 'warning' | 'error';
  lastActivity: string;
  onClick?: () => void;
}) {
  const statusConfig = {
    success: { label: 'Здоров', color: 'var(--success)' },
    warning: { label: 'Наблюдение', color: 'var(--warning)' },
    error: { label: 'Требует внимания', color: 'var(--error)' }
  };

  const emoji = species.toLowerCase().includes('кот') || species.toLowerCase().includes('кошка') 
    ? '🐱' 
    : species.toLowerCase().includes('соб') 
    ? '🐕' 
    : species.toLowerCase().includes('птиц')
    ? '🦜'
    : species.toLowerCase().includes('гры')
    ? '🐹'
    : species.toLowerCase().includes('репт')
    ? '🦎'
    : '🐾';

  return (
    <div 
      className="bg-card rounded-xl border border-border p-5 space-y-4 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
          style={{ backgroundColor: 'var(--pet-accent)', color: 'white' }}
        >
          {emoji}
        </div>
        <div className="flex-1">
          <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            {name}
          </p>
          <p style={{ fontSize: 'var(--text-subhead)', color: 'var(--muted-foreground)' }}>
            {species}, {age}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-2">
          <span 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: statusConfig[status].color }}
          ></span>
          <span style={{ fontSize: 'var(--text-subhead)', fontWeight: 'var(--font-weight-medium)' }}>
            {statusConfig[status].label}
          </span>
        </div>
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--muted-foreground)' }}>
          {lastActivity}
        </p>
      </div>
    </div>
  );
}

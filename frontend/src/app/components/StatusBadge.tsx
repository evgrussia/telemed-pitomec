export function StatusBadge({ variant, label, icon }: { 
  variant: 'success' | 'warning' | 'error' | 'info'; 
  label: string;
  icon?: React.ReactNode;
}) {
  const styles = {
    success: { bg: 'var(--success)', color: 'var(--success-foreground)' },
    warning: { bg: 'var(--warning)', color: 'var(--warning-foreground)' },
    error: { bg: 'var(--error)', color: 'var(--error-foreground)' },
    info: { bg: 'var(--primary)', color: 'var(--primary-foreground)' }
  };
  
  return (
    <span 
      className="px-4 py-2 rounded-lg inline-flex items-center gap-2"
      style={{ 
        backgroundColor: styles[variant].bg,
        color: styles[variant].color,
        fontSize: 'var(--text-subhead)',
        fontWeight: 'var(--font-weight-medium)'
      }}
    >
      {icon || <span className="w-2 h-2 rounded-full bg-current"></span>}
      {label}
    </span>
  );
}

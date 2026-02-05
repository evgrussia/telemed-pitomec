export function Button({ 
  children, 
  variant = 'primary',
  size = 'default',
  onClick,
  className = '',
  fullWidth = false,
  icon
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'default' | 'large' | 'small';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}) {
  const baseStyles = "rounded-xl transition-all active:scale-95 inline-flex items-center justify-center gap-2";
  
  const sizeStyles = {
    small: 'px-4 py-2',
    default: 'px-6 py-3',
    large: 'px-8 py-4'
  };
  
  const variantStyles = {
    primary: 'text-white hover:opacity-90',
    secondary: 'hover:opacity-90 border',
    ghost: 'hover:bg-accent',
    destructive: 'text-white hover:opacity-90'
  };
  
  const getBgColor = () => {
    switch (variant) {
      case 'primary': return 'var(--primary)';
      case 'secondary': return 'var(--secondary)';
      case 'ghost': return 'transparent';
      case 'destructive': return 'var(--destructive)';
      default: return 'var(--primary)';
    }
  };
  
  const getTextColor = () => {
    switch (variant) {
      case 'secondary': return 'var(--secondary-foreground)';
      case 'ghost': return 'var(--primary)';
      default: return undefined;
    }
  };
  
  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      style={{ 
        backgroundColor: getBgColor(),
        color: getTextColor(),
        borderColor: variant === 'secondary' ? 'var(--border)' : undefined,
        minHeight: size === 'large' ? '52px' : '44px',
        fontSize: size === 'large' ? 'var(--text-body-l)' : 'var(--text-body)',
        fontWeight: 'var(--font-weight-medium)'
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

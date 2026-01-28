import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong';
  glow?: 'teal' | 'coral' | 'none';
  edgeGlow?: boolean;
}

export function GlassCard({ 
  children, 
  className = '', 
  variant = 'default',
  glow = 'none',
  edgeGlow = false
}: GlassCardProps) {
  const baseClasses = variant === 'strong' ? 'glass-card-strong' : 'glass-card';
  const glowClasses = glow === 'teal' ? 'neon-glow-teal' : glow === 'coral' ? 'neon-glow-coral' : '';
  const edgeClasses = edgeGlow ? 'edge-glow' : '';
  
  return (
    <div 
      className={`${baseClasses} ${glowClasses} ${edgeClasses} volumetric-shadow transition-smooth hover-lift ${className}`}
    >
      {children}
    </div>
  );
}

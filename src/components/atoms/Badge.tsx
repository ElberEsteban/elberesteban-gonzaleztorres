// src/components/atoms/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

export const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const base = 'inline-block px-3 py-1 text-xs font-semibold rounded-full';
  const variants = {
    default: 'bg-gray-800 text-white',
    outline: 'border border-gray-400 text-gray-600',
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
};
import { motion } from 'framer-motion';

interface AnimatedRingProps {
  percentage: number;
  color?: string;
  size?: number;
  strokeWidth?: number;
  label?: string;
  value?: string;
}

export default function AnimatedRing({ 
  percentage, 
  color = '#10B981', 
  size = 160, 
  strokeWidth = 12,
  label,
  value
}: AnimatedRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2 }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        {value && <span className="text-2xl font-bold text-brand-charcoal">{value}</span>}
        {label && <span className="text-sm text-gray-500">{label}</span>}
      </div>
    </div>
  );
}
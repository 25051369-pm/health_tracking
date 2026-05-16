import { motion } from 'framer-motion';

interface MacroBarProps {
  label: string;
  current: number;
  target: number;
  color: string;
}

export default function MacroBar({ label, current, target, color }: MacroBarProps) {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-500">{current}g / {target}g</span>
      </div>
      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
// src/components/atoms/ProgressBar.tsx
interface ProgressBarProps {
  level: number; // 0 a 100
  label: string;
}

export const ProgressBar = ({ level, label }: ProgressBarProps) => {
  return (
    <div className="w-full mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-black h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};
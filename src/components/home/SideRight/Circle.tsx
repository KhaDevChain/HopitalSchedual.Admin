import React from "react";

interface ProgressCircleProps {
  percentage: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Vòng tròn nền */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="lightgray"
          strokeWidth="8"
        />
        {/* Vòng tròn tiến trình */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="blue"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
      </svg>
      {/* Hiển thị phần trăm */}
      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressCircle;

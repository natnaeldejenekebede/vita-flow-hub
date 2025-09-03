import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
  className?: string;
}

export const RadarChart = ({ data, className = "" }: RadarChartProps) => {
  const chartRef = useRef(null);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'hsl(var(--card))',
        titleColor: 'hsl(var(--foreground))',
        bodyColor: 'hsl(var(--foreground))',
        borderColor: 'hsl(var(--border))',
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          color: 'hsl(var(--border))',
        },
        angleLines: {
          color: 'hsl(var(--border))',
        },
        pointLabels: {
          color: 'hsl(var(--foreground))',
          font: {
            size: 12,
            weight: 500 as const,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 6,
        hoverRadius: 8,
      },
    },
    interaction: {
      intersect: false,
    },
  };

  return (
    <div className={`radar-chart ${className}`}>
      <Radar ref={chartRef} data={data} options={options} />
    </div>
  );
};
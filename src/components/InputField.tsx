import React from 'react';
import { CalculatorState } from '../types';
import { Info } from 'lucide-react';

interface InputFieldProps {
  label: string;
  name: keyof CalculatorState;
  value: number;
  onChange: (name: keyof CalculatorState, value: number) => void;
  type?: 'number' | 'range';
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  tooltip?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'number',
  min = 0,
  max,
  step = 1,
  prefix,
  suffix,
  tooltip,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
          {label}
          {tooltip && (
            <div className="group relative">
              <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-[10px] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {tooltip}
              </div>
            </div>
          )}
        </label>
        {type === 'range' && (
          <span className="text-xs font-mono text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
            {prefix}{value}{suffix}
          </span>
        )}
      </div>
      
      <div className="relative">
        {prefix && type !== 'range' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            {prefix}
          </div>
        )}
        <input
          type={type}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
          className={
            type === 'range'
              ? "w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
              : `w-full bg-white border border-slate-200 rounded-lg py-2.5 ${prefix ? 'pl-7' : 'px-3'} ${suffix ? 'pr-8' : 'px-3'} text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all`
          }
        />
        {suffix && type !== 'range' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};

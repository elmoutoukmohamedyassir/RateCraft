import React from 'react';
import { CalculatorState } from '../types';

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
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Label row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-500)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          {label}
          {tooltip && (
            <span
              style={{ position: 'relative', display: 'inline-flex' }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  border: '1px solid var(--color-ink-700)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: 'var(--color-ink-600)',
                  cursor: 'help',
                  flexShrink: 0,
                }}
              >
                ?
              </span>
              {showTooltip && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    padding: '0.6rem 0.75rem',
                    background: 'var(--color-ink-800)',
                    border: '1px solid var(--color-ink-700)',
                    color: 'var(--color-ink-300)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    lineHeight: 1.5,
                    zIndex: 100,
                    pointerEvents: 'none',
                    textTransform: 'none',
                    letterSpacing: 'normal',
                  }}
                >
                  {tooltip}
                </div>
              )}
            </span>
          )}
        </label>

        {/* Range readout */}
        {type === 'range' && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-brass-400)',
              background: 'rgba(184, 134, 11, 0.1)',
              border: '1px solid rgba(184, 134, 11, 0.2)',
              padding: '0.15rem 0.5rem',
            }}
          >
            {prefix}{value}{suffix}
          </span>
        )}
      </div>

      {/* Input */}
      {type === 'range' ? (
        <div style={{ paddingTop: '0.25rem' }}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
            style={{
              width: '100%',
              height: '3px',
              appearance: 'none',
              background: `linear-gradient(90deg, var(--color-brass-500) ${
                max ? (value / max) * 100 : 0
              }%, var(--color-ink-800) ${max ? (value / max) * 100 : 0}%)`,
              borderRadius: 0,
              cursor: 'pointer',
              outline: 'none',
            }}
          />
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          {prefix && (
            <span
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--color-ink-600)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {prefix}
            </span>
          )}
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
            style={{
              width: '100%',
              background: 'var(--color-ink-900)',
              border: '1px solid var(--color-ink-700)',
              color: 'var(--color-ink-100)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              padding: `0.65rem ${suffix ? '2.5rem' : '0.75rem'} 0.65rem ${prefix ? '1.75rem' : '0.75rem'}`,
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
              borderRadius: 0,
              MozAppearance: 'textfield',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-brass-500)';
              e.currentTarget.style.boxShadow = '0 0 0 2px rgba(184,134,11,0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-ink-700)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          {suffix && (
            <span
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-ink-600)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {suffix}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
import React, { useState } from 'react';
import { CalculatorState } from '../types';

/* ── Types ─────────────────────────────────────────────────────── */
interface InputFieldProps {
  label:    string;
  name:     keyof CalculatorState;
  value:    number;
  onChange: (name: keyof CalculatorState, value: number) => void;
  type?:    'number' | 'range';
  min?:     number;
  max?:     number;
  step?:    number;
  prefix?:  string;
  suffix?:  string;
  tooltip?: string;
}

/* ── InputField ────────────────────────────────────────────────── */
export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type    = 'number',
  min     = 0,
  max,
  step    = 1,
  prefix,
  suffix,
  tooltip,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [focused,     setFocused]     = useState(false);

  // Percentage along the range for the gradient fill
  const fillPct = max ? Math.round((value / max) * 100) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>

      {/* ── Label row ──────────────────────────────────────── */}
      <div
        style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
        }}
      >
        <label
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.66rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color:         'var(--color-ink-400)',
            display:       'flex',
            alignItems:    'center',
            gap:           '0.4rem',
          }}
        >
          {label}

          {/* Tooltip trigger */}
          {tooltip && (
            <span
              style={{ position: 'relative', display: 'inline-flex' }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span
                style={{
                  width:          '14px',
                  height:         '14px',
                  border:         '1px solid var(--color-ink-600)',
                  borderRadius:   '50%',
                  display:        'inline-flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '9px',
                  color:          'var(--color-ink-500)',
                  cursor:         'help',
                }}
              >
                ?
              </span>

              {showTooltip && (
                <div
                  style={{
                    position:      'absolute',
                    bottom:        'calc(100% + 8px)',
                    left:          '50%',
                    transform:     'translateX(-50%)',
                    width:         '210px',
                    padding:       '0.65rem 0.85rem',
                    background:    'var(--color-ink-800)',
                    border:        '1px solid var(--color-ink-700)',
                    color:         'var(--color-ink-200)',
                    fontFamily:    'var(--font-sans)',
                    fontSize:      '0.78rem',
                    fontWeight:    300,
                    lineHeight:    1.55,
                    zIndex:        100,
                    pointerEvents: 'none',
                    // reset mono overrides from parent label
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

        {/* Live readout for range inputs */}
        {type === 'range' && (
          <span
            style={{
              fontFamily:  'var(--font-mono)',
              fontSize:    '0.78rem',
              fontWeight:  500,
              color:       'var(--color-brass-300)',
              background:  'rgba(212, 160, 23, 0.08)',
              border:      '1px solid rgba(212, 160, 23, 0.2)',
              padding:     '0.15rem 0.55rem',
            }}
          >
            {prefix}{value}{suffix}
          </span>
        )}
      </div>

      {/* ── Range slider ───────────────────────────────────── */}
      {type === 'range' && (
        <div style={{ paddingTop: '4px' }}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
            style={{
              width:        '100%',
              height:       '2px',
              appearance:   'none',
              background:   `linear-gradient(
                              90deg,
                              var(--color-brass-500) ${fillPct}%,
                              var(--color-ink-700)   ${fillPct}%
                            )`,
              borderRadius: '1px',
              cursor:       'pointer',
              outline:      'none',
            }}
          />
        </div>
      )}

      {/* ── Number input ───────────────────────────────────── */}
      {type === 'number' && (
        <div style={{ position: 'relative' }}>
          {/* Prefix symbol */}
          {prefix && (
            <span
              style={{
                position:      'absolute',
                left:          '0.8rem',
                top:           '50%',
                transform:     'translateY(-50%)',
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.85rem',
                color:         'var(--color-ink-500)',
                pointerEvents: 'none',
                userSelect:    'none',
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
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              width:       '100%',
              background:  'var(--color-ink-900)',
              border:      `1px solid ${focused ? 'var(--color-brass-500)' : 'var(--color-ink-700)'}`,
              boxShadow:   focused ? '0 0 0 3px rgba(212, 160, 23, 0.12)' : 'none',
              color:       'var(--color-ink-100)',
              fontFamily:  'var(--font-mono)',
              fontSize:    '0.9rem',
              padding:     `0.7rem ${suffix ? '2.5rem' : '0.8rem'} 0.7rem ${prefix ? '1.8rem' : '0.8rem'}`,
              outline:     'none',
              transition:  'border-color 0.2s, box-shadow 0.2s',
              borderRadius: 0,
            }}
          />

          {/* Suffix symbol */}
          {suffix && (
            <span
              style={{
                position:      'absolute',
                right:         '0.8rem',
                top:           '50%',
                transform:     'translateY(-50%)',
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.75rem',
                color:         'var(--color-ink-500)',
                pointerEvents: 'none',
                userSelect:    'none',
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
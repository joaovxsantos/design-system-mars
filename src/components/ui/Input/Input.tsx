'use client'

import { InputHTMLAttributes, forwardRef, ReactNode, useState } from 'react';
import styles from './Input.module.scss';
import { EyeOff, Eye } from 'lucide-react';

type InputSize = 'sm' | 'md' | 'lg';
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size?: InputSize;
  showCharCount?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      success,
      helperText,
      icon,
      iconPosition = 'left',
      size = 'md',
      showCharCount,
      id,
      className,
      type = 'text',
      maxLength,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const resolvedType = isPassword && showPassword ? 'text' : type;
    const currentLength = String(value ?? internalValue ?? '').length;

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <div className={`${styles.inputContainer} ${styles[size]}`}>
          {icon && iconPosition === 'left' && !isPassword && (
            <span className={styles.icon} aria-hidden="true">{icon}</span>
          )}

          <input
            ref={ref}
            id={id}
            type={resolvedType}
            maxLength={maxLength}
            value={value}
            defaultValue={value === undefined ? internalValue : undefined}
            onChange={(e) => {
              if (value === undefined) setInternalValue(e.target.value);
              props.onChange?.(e);
            }}
            className={`
              ${styles.input}
              ${error ? styles.inputError : ''}
              ${success ? styles.inputSuccess : ''}
              ${(icon && iconPosition === 'left' && !isPassword) ? styles.hasIconLeft : ''}
              ${(icon && iconPosition === 'right') || isPassword ? styles.hasIconRight : ''}
              ${className ?? ''}
            `}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              className={`${styles.icon} ${styles.iconRight} ${styles.iconButton}`}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              tabIndex={0}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}

          {!isPassword && icon && iconPosition === 'right' && (
            <span className={`${styles.icon} ${styles.iconRight}`} aria-hidden="true">{icon}</span>
          )}
        </div>

        <div className={styles.footer}>
          <div>
            {error && (
              <span id={`${id}-error`} className={styles.errorMessage}>{error}</span>
            )}
            {!error && helperText && (
              <span id={`${id}-helper`} className={styles.helperText}>{helperText}</span>
            )}
          </div>
          {showCharCount && maxLength && (
            <span className={styles.charCount}>{currentLength}/{maxLength}</span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
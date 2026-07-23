import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, id, className, ...props }, ref) => {
        return (
            <div className={styles.wrapper}>
                {label && (
                    <label htmlFor={id} className={styles.label}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={id}
                    className={`${styles.input} ${error ? styles.inputError : ''} ${className ?? ''}`}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    {...props}
                />
                {error && (
                    <span id={`${id}-error`} className={styles.errorMessage}>
                        {error}
                    </span>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input';
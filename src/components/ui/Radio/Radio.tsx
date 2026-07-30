import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ label, id, className, ...props }, ref) => {
        return (
            <label htmlFor={id} className={`${styles.wrapper} ${className ?? ''}`}>
                <input ref={ref} id={id} type="radio" className={styles.input} {...props} />
                <span className={styles.circle} />
                {label && <span className={styles.label}>{label}</span>}
            </label>
        );
    }
);
Radio.displayName = 'Radio';
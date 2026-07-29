import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Checkbox.module.scss';
import { Check } from 'lucide-react';


interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}


export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, className, id, ...props }, ref) => {
        return (
            <label htmlFor={id} className={`${styles.wrapper} ${className ?? ''}`}>
                <input ref={ref} id={id} type="checkbox" className={styles.input} {...props} />
                <span className={styles.box}>
                    <Check size={12} className={styles.icon} />
                </span>
                {label && <span className={styles.label}>{label}</span>}
            </label>
        )
    }
)

Checkbox.displayName = 'Checkbox';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';



type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: ReactNode;
    isLoading?: boolean;
}

export function Button(
    {
        variant = "primary",
        size = "sm",
        isLoading = false,
        disabled,
        children,
        className,
        ...props
    }: ButtonProps
) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ''} `}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
            {...props}
        >
            {isLoading && <span className={styles.spinner} aria-hidden={true}></span>}
            <span className={isLoading ? styles.hiddenText : undefined}>{children}</span>
        </button>
    )
}
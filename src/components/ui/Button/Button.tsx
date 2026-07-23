import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';



type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
}

export function Button(
    {
        variant = "primary",
        size = "sm",
        children,
        className,
        ...props
    }: ButtonProps
) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ''} `}
            {...props}
        >
            {children}
        </button>
    )
}
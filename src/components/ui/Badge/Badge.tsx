import { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.scss';


type BadgeVariant = 'default' | 'accent' | 'success' | 'danger';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    children: ReactNode;
}

export function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[variant]} ${className ?? ''}`} {...props}>
            {children}
        </span>
    )
}   
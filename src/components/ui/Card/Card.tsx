import { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';



type CardPadding = 'sm' | 'md' | 'lg';
type CardVariant = 'flat' | 'elevated' | 'interactive';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    padding?: CardPadding;
    variant?: CardVariant;
}

export function Card({
    children,
    padding = 'md',
    variant = 'flat',
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={`${styles.card} ${styles[padding]} ${styles[variant]} ${className ?? ''}`}
            tabIndex={variant === 'interactive' ? 0 : undefined}
            role={variant === 'interactive' ? 'button' : undefined}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children }: { children: ReactNode }) {
    return <div className={styles.cardHeader}>{children}</div>;
}

export function CardBody({ children }: { children: ReactNode }) {
    return <div className={styles.cardBody}>{children}</div>;
}

export function CardFooter({ children }: { children: ReactNode }) {
    return <div className={styles.cardFooter}>{children}</div>;
}
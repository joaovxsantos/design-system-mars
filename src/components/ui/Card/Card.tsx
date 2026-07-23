import { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';



interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    padding?: 'sm' | 'md' | 'lg';
}


export function Card(
    {
        children,
        padding = 'md',
        className,
        ...props
    }: CardProps) {

    return (
        <div
            className={`${styles.card} ${styles[padding]} ${className ?? ''}`}
            {...props}
        >
            {children}
        </div>
    )
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
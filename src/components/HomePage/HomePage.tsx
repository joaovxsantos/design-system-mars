import Link from 'next/link';
import { Badge } from '../ui/Badge/Badge';
import styles from './HomePage.module.scss';

const componentEntries = [
    { href: '/components/button', label: 'Button', id: '01' },
    { href: '/components/input', label: 'Input', id: '02' },
    { href: '/components/card', label: 'Card', id: '03' },
    { href: '/components/badge', label: 'Badge', id: '04' },
    { href: '/components/modal', label: 'Modal', id: '05' },
    { href: '/components/select', label: 'Select', id: '06' },
    { href: '/components/checkbox', label: 'Checkbox', id: '07' },
    { href: '/components/radio', label: 'Radio', id: '08' },
    { href: '/components/toast', label: 'Toast', id: '09' },
];

export default function HomePage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <h2 className={styles.title}>Catálogo de Componentes</h2>
                <p className={styles.subtitle}>
                    Uma biblioteca de componentes construída com React, Next.js e TypeScript, documentada como uma ficha de catálogo, focada em performance, acessibilidade e consistência visual.
                </p>
                <div className={styles.heroLinks}>
                    <Link href="/tokens" className={styles.link}>Ver tokens →</Link>
                    <Link href="#components" className={styles.link}>Ver componentes →</Link>
                </div>
            </section>

            <section id="components" className={styles.index}>
                <div className={styles.indexHeader}>
                    <span className={styles.indexTitle}>Componentes</span>
                    <Badge variant="default">{componentEntries.length} itens</Badge>
                </div>

                <ul className={styles.entryList}>
                    {componentEntries.map((entry) => (
                        <li key={entry.href}>
                            <Link href={entry.href} className={styles.entry}>
                                <span className={styles.entryCode}>{entry.id}</span>
                                <span className={styles.entryLabel}>{entry.label}</span>
                                <span className={styles.entryArrow}>→</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className={styles.footer}>
                <span>Feito por João Vitor.</span>
            </footer>
        </div>
    );
}
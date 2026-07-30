import { ThemeToggle } from "../theme/ThemeToggle";
import styles from './Nav.module.scss';
import Link from 'next/link';


export function Nav() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><Link href="/">Design System Mars</Link></h1>
            <ThemeToggle />
        </header>
    )
}
import { ThemeToggle } from "../theme/ThemeToggle";
import styles from './Nav.module.scss';
import Link from 'next/link';
import Image from "next/image";
import marsIcon from '../../app/favicon.ico';


export function Nav() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><Link href="/"><Image src={marsIcon} alt="mars icon"></Image>Design System Mars</Link></h1>
            <ThemeToggle />
        </header>
    )
}
import styles from './HomePage.module.scss';

export function HomePage() {
    return (
        <div className={styles["main-homepage"]}>
            <h1 className={styles.h1}>Construa interface modernas com velocidade e consistência</h1>
            <p className={styles.subtitle}>Um Design System completo em <span className={styles.constrast}>React + Typescript</span>, focando em acessibilidade, performance e esclabilidade.</p>
        </div>
    )
}
import { Button } from '../../../components/ui/Button/Button';
import styles from './button-docs.module.scss';

export default function ButtonDocsPage() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Button</h1>

            <section className={styles.section}>
                <h2>Variantes</h2>
                <div className={styles.row}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                </div>
            </section>

            <section className={styles.section}>
                <h2>Tamanhos</h2>
                <div className={styles.row}>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>
            </section>

            <section className={styles.section}>
                <h2>Estado desabilitado</h2>
                <div className={styles.row}>
                    <Button disabled>Disabled</Button>
                </div>
            </section>
            <section className={styles.section}>
                <h2>Loading</h2>
                <div className={styles.row}>
                    <Button isLoading size='md'>Loading</Button>
                </div>
            </section>
        </main>
    );
}
import { Checkbox } from '@/src/components/Checkbox/Checkbox';
import styles from '../button/button-docs.module.scss';


export default function CheckboxDocs() {
    return (
        <main className={styles.page}>
            <h1 className={styles.h1}>Checkbox</h1>
            <section className={styles.section}>
                <div className={styles.row}>

                    <Checkbox label='Aceite os termos de uso' />
                </div>
                <div className={styles.row}>
                    <Checkbox label='Masculino' />
                    <Checkbox label='Feminino' />
                </div>
            </section>
        </main>
    )
}
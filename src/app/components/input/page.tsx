import { Input } from '@/src/components/ui/Input/Input';
import styles from '../button/button-docs.module.scss';


export default function InputDocsPage() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Input</h1>

            <section>
                <h2>Estados</h2>
                <div className={styles.row} style={{ flexDirection: 'column', alignItems: 'stretch', maxWidth: 320 }}>
                    <Input type='text' id="default" label="Nome" placeholder="Digite seu nome" />
                    <Input id="error" label="E-mail" placeholder="Digite seu e-mail" error="E-mail inválido" />
                    <Input id="disabled" label="Desabilitado" placeholder="Não editável" disabled />
                </div>
            </section>
        </main>
    )
}
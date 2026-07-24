'use client';

import { Mail } from 'lucide-react';
import { Input } from '@/src/components/ui/Input/Input';
import styles from '../button/button-docs.module.scss';

export default function InputDocsPage() {
    return (
        <main className={styles.page}>
            <h1>Input</h1>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <section>
                        <h2>Estados</h2>
                        <div className={styles.rowColumn}>
                            <Input id="default" label="Padrão" placeholder="Digite algo" />
                            <Input id="error" label="Com erro" placeholder="Digite seu e-mail" error="E-mail inválido" />
                            <Input id="success" label="Válido" placeholder="Digite seu e-mail" success helperText="E-mail disponível" />
                            <Input id="disabled" label="Desabilitado" placeholder="Não editável" disabled />
                        </div>
                    </section>
                    <section>
                        <h2>Tamanhos</h2>
                        <div className={styles.rowColumn}>
                            <Input id="sm" size="sm" label="Small" placeholder="Tamanho sm" />
                            <Input id="md" size="md" label="Medium" placeholder="Tamanho md" />
                            <Input id="lg" size="lg" label="Large" placeholder="Tamanho lg" />
                        </div>
                    </section>
                </div>
                <div className={styles.col}>
                    <section>
                        <h2>Com ícone</h2>
                        <div className={styles.rowColumn}>
                            <Input id="icon-left" label="E-mail" icon={<Mail size={16} />} placeholder="seu@email.com" />
                            <Input id="password" label="Senha" type="password" placeholder="••••••••" />
                        </div>
                    </section>
                    <section>
                        <h2>Contador de caracteres</h2>
                        <div className={styles.rowColumn}>
                            <Input id="bio" label="Bio" maxLength={100} showCharCount placeholder="Fale sobre você" />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
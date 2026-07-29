'use client';
import { useState } from 'react';
import { Select } from "@/src/components/ui/Select/Select";
import styles from '../button/button-docs.module.scss';


export default function SelectDocs() {
    const [value, setValue] = useState('');

    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Select</h1>

            <section className={styles.section}>
                <Select
                    id="category"
                    label="Categoria"
                    placeholder="Escolha uma categoria"
                    value={value}
                    onChange={setValue}
                    options={[
                        { value: 'shoes', label: 'Calçados' },
                        { value: 'accessories', label: 'Acessórios' },
                        { value: 'clothing', label: 'Roupas' },
                    ]}
                />
            </section>
        </main>
    );
}
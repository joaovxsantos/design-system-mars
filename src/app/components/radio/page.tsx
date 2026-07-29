'use client'
import { Radio } from '@/src/components/Radio/Radio';
import styles from '../button/button-docs.module.scss';
import { useState } from 'react';
import { RadioGroup } from '@/src/components/Radio/RadioGroup';

export default function RadiosDocs() {
    const [shipping, setShipping] = useState('standard');

    return (
        <main className={styles.page}>
            <section className={styles.section}>
                <div className={styles.row}>
                    <Radio id="terms-yes" name="terms" value="yes" label="Sim" defaultChecked />
                    <Radio id="terms-no" name="termsNo" value="no" label="Não" />
                </div>

                <div className={styles.row}>
                    <RadioGroup
                        name="shipping"
                        label="Forma de entrega"
                        value={shipping}
                        onChange={setShipping}
                        options={[
                            { value: 'standard', label: 'Padrão (5-7 dias)' },
                            { value: 'express', label: 'Expressa (1-2 dias)' },
                        ]}
                    />
                </div>
            </section>
        </main>
    )
}
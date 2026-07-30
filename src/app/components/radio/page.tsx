'use client'
import { Radio } from '@/src/components/ui/Radio/Radio';
import styles from '../button/button-docs.module.scss';
import { useState } from 'react';
import { RadioGroup } from '@/src/components/ui/Radio/RadioGroup';
import { ComponentsPage } from '@/src/components/ComponentsPage/ComponentsPage';

export default function RadiosDocs() {
    const [shipping, setShipping] = useState('standard');

    const allDataSelect = [
        {
            nameSec: 'Radio Opções',
            items: <> <Radio id="terms-charge" name="terms" value="charge" label="Carregador" defaultChecked />
                <Radio id="terms-fone" name="termsFone" value="fone" label="Fone" /></>
        },
        {
            nameSec: 'Radio Entrega',
            items: <><RadioGroup
                name="shipping"
                label="Forma de entrega"
                value={shipping}
                onChange={setShipping}
                options={[
                    { value: 'standard', label: 'Padrão (5-7 dias)' },
                    { value: 'express', label: 'Expressa (1-2 dias)' },
                ]}
            /></>,
            decision: <p>Segue a mesma técnica do Checkbox — input nativo escondido, visual customizado reagindo ao checked via CSS puro. A diferença fica no RadioGroup, que orquestra o valor selecionado entre várias instâncias de Radio compartilhando o mesmo name, delegando a exclusão mútua ao próprio comportamento nativo do input radio em vez de reimplementar isso em JavaScript.</p>
        }
    ]
    return (
        <ComponentsPage title='Checkbox' allData={allDataSelect} />
    )
}
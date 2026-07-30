'use client';
import { useState } from 'react';
import { Select } from "@/src/components/ui/Select/Select";
import styles from '../button/button-docs.module.scss';
import { ComponentsPage } from '@/src/components/ComponentsPage/ComponentsPage';


export default function SelectDocs() {
    const [value, setValue] = useState('');

    const allDataSelect = [{
        nameSec: 'Default Select',
        items: <><Select
            id="category"
            label="Categoria"
            placeholder="Escolha uma categoria"
            value={value}
            onChange={setValue}
            options={[
                { value: 'shoes', label: 'Calçados' },
                { value: 'accessories', label: 'Acessórios' },
                { value: 'clothing', label: 'Roupas' },
            ]} /></>
    }]

    return (
        <ComponentsPage title='Select' allData={allDataSelect} />
    );
}
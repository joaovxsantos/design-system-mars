'use client';

import { ComponentsPage } from "@/src/components/ComponentsPage/ComponentsPage";
import { Button } from "@/src/components/ui/Button/Button";
import { useToast } from "@/src/components/ui/Toast/ToastProvider";


export default function ToastDocs() {

    const { showToast } = useToast();

    const allDataToasts = [
        {
            nameSec: 'Toast Sucesso',
            items: <><Button onClick={() => showToast('Adicionado ao carrinho com sucesso!', 'success')}>Adicionar ao carrinho</Button></>
        }
        , {
            nameSec: 'Toast Erro',
            items: <><Button onClick={() => showToast('Erro ao adicionar ao carrinho', 'error')}>Adicionar ao carrinho</Button></>
        }
    ]

    return <ComponentsPage title="Toast" allData={allDataToasts} />
}
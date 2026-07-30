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
            items: <><Button onClick={() => showToast('Erro ao adicionar ao carrinho', 'error')}>Adicionar ao carrinho</Button></>,
            decision: <p>Usa Context e Portal pra permitir disparar notificação de qualquer componente da app sem prop drilling. Os atributos role="status" e aria-live="polite" anunciam a mensagem pro leitor de tela automaticamente. A borda lateral colorida em vez de fundo sólido mantém a identidade de documento/etiqueta do resto do sistema.</p>
        }
    ]

    return <ComponentsPage title="Toast" allData={allDataToasts} />
}
'use client';

import { Mail } from 'lucide-react';
import { Input } from '@/src/components/ui/Input/Input';
import styles from '../button/button-docs.module.scss';
import { ComponentsPage } from '@/src/components/ComponentsPage/ComponentsPage';

export default function InputDocsPage() {

    const allDataInputs =
        [
            {
                nameSec: 'Estados',
                items: <> <Input id="default" label="Padrão" placeholder="Digite algo" />
                    <Input id="error" label="Com erro" placeholder="Digite seu e-mail" error="E-mail inválido" />
                    <Input id="success" label="Válido" placeholder="Digite seu e-mail" success helperText="E-mail disponível" />
                    <Input id="disabled" label="Desabilitado" placeholder="Não editável" disabled /></>
            },
            {
                nameSec: 'Tamanhos',
                items: <> <Input id="sm" size="sm" label="Small" placeholder="Tamanho sm" />
                    <Input id="md" size="md" label="Medium" placeholder="Tamanho md" />
                    <Input id="lg" size="lg" label="Large" placeholder="Tamanho lg" /></>
            },
            {
                nameSec: 'Com Icone',
                items: <>  <Input id="icon-left" label="E-mail" icon={<Mail size={16} />} placeholder="seu@email.com" />
                    <Input id="password" label="Senha" type="password" placeholder="••••••••" /></>
            },
            {
                nameSec: 'Contador de Caracteres',
                items: <><Input id="bio" label="Bio" maxLength={100} showCharCount placeholder="Fale sobre você" />
                </>,
                decision: <p>Usa forwardRef porque bibliotecas de formulário (react-hook-form) precisam de acesso direto à ref do elemento nativo pra registrar o campo sem re-render. O toggle de senha usa um button real, não um ícone decorativo, garantindo foco por teclado e leitura correta por leitores de tela.</p>
            },

        ]

    return (
        <ComponentsPage title='Input' allData={allDataInputs} />
    );
}
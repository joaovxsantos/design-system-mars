import { ComponentsPage } from '@/src/components/ComponentsPage/ComponentsPage';
import { Button } from '../../../components/ui/Button/Button';
import styles from './button-docs.module.scss';

export default function ButtonDocsPage() {

    const allDataButton = [
        {
            nameSec: 'Variantes',
            items: <><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button><Button variant="danger">Danger</Button></>
        },
        {
            nameSec: 'Tamanhos',
            items: <> <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button></>
        },
        {
            nameSec: 'Estado desabilitado',
            items: <><Button disabled>Disabled</Button></>
        },
        {
            nameSec: 'Loading',
            items: <><Button isLoading size='md'>Loading</Button></>,
            decision: <p>
                Sem prop <code>as</code> polimórfica: decisão de manter tipagem simples em vez de generics condicionais.
                Em casos de "link com cara de botão", a solução é um componente <code>ButtonLink</code> a parte, sendo
                mais explícito e com menos superfície de erro.
            </p>
        },
    ]

    return (
        <ComponentsPage title='Button' allData={allDataButton} />
    );
}
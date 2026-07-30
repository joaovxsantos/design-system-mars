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
            items: <><Button isLoading size='md'>Loading</Button></>
        }
    ]

    return (
        <ComponentsPage title='Button' allData={allDataButton} />
    );
}
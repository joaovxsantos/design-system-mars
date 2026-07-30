import { Card, CardHeader, CardBody, CardFooter } from '@/src/components/ui/Card/Card';
import { Button } from '../../../components/ui/Button/Button';
import styles from '../button/button-docs.module.scss';
import { ComponentsPage } from '@/src/components/ComponentsPage/ComponentsPage';

export default function CardDocsPage() {

    const allDataCard = [{
        nameSec: 'Default Card',
        items: <>            <Card variant="interactive" padding="md">
            <CardHeader>Tênis Runner Pro</CardHeader>
            <CardBody>Leve, respirável, ideal pra corridas de longa distância.</CardBody>
            <CardFooter>
                <Button size="sm">Adicionar ao carrinho</Button>
            </CardFooter>
        </Card></>
    }]

    return (
        <ComponentsPage title='Card' allData={allDataCard} />

    );
}
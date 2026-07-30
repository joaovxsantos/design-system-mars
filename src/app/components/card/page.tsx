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
        </Card></>,
        decision: <p>A variante clicável usa a técnica de stretched link (um Link posicionado em inset: 0 dentro do card) em vez de role="button" numa div. Isso garante navegação nativa por teclado, "abrir em nova aba" e semântica correta — sem precisar simular comportamento de botão na mão. O footer recebe z-index maior que o link esticado, pra ações internas (como um botão de compra) continuarem clicáveis independente do link do card.</p>
    }]

    return (
        <ComponentsPage title='Card' allData={allDataCard} />

    );
}
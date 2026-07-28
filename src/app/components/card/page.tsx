import { Card, CardHeader, CardBody, CardFooter } from '@/src/components/ui/Card/Card';
import { Button } from '../../../components/ui/Button/Button';
import styles from '../button/button-docs.module.scss';

export default function CardDocsPage() {
    return (
        <main className={styles.page}>
            <h1 className={styles.h1}>Card</h1>
            <section>
                <div className={styles.row}>
                    <Card variant="interactive" padding="md">
                        <CardHeader>Tênis Runner Pro</CardHeader>
                        <CardBody>Leve, respirável, ideal pra corridas de longa distância.</CardBody>
                        <CardFooter>
                            <Button size="sm">Adicionar ao carrinho</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    );
}
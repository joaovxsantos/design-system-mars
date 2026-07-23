import { Card, CardHeader, CardBody, CardFooter } from '@/src/components/ui/Card/Card';
import { Button } from '../../../components/ui/Button/Button';
import styles from '../button/button-docs.module.scss';

export default function CardDocsPage() {
    return (
        <main className={styles.page}>
            <h1>Card</h1>

            <section>
                <h2>Básico</h2>
                <div className={styles.row}>
                    <Card>
                        <CardHeader>Título do card</CardHeader>
                        <CardBody>Um texto descritivo qualquer dentro do card.</CardBody>
                        <CardFooter>
                            <Button size="lg">Ação</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    );
}
import { Badge } from "@/src/components/ui/Badge/Badge";
import styles from '../button/button-docs.module.scss';

export default function BadgeDocsPage() {
    return (
        <div className={styles.page}>
            <h1 className={styles.h1}>Badge</h1>
            <section className={styles.section}>
                <h2 className={styles.h2}>Variantes</h2>
                <div className={styles.row}>
                    <Badge>
                        Padrão
                    </Badge>
                    <Badge variant="success">
                        Em estoque
                    </Badge>
                    <Badge variant="accent">
                        Destaque
                    </Badge>
                    <Badge variant="danger">
                        Esgotado
                    </Badge>
                </div>
            </section>
        </div>

    )
}
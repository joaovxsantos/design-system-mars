import { Badge } from "@/src/components/ui/Badge/Badge";
import styles from '../button/button-docs.module.scss';
import { ComponentsPage } from "@/src/components/ComponentsPage/ComponentsPage";

export default function BadgeDocsPage() {
    const allData = [{
        nameSec: 'Variantes',
        items: <> <Badge>
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
            </Badge></>
    }]

    return (
        <ComponentsPage title="Badge" allData={allData} />
    )
}
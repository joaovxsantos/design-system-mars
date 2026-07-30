import { Checkbox } from '@/src/components/ui/Checkbox/Checkbox';
import styles from '../button/button-docs.module.scss';
import { ComponentsPage } from '@/src/components/ComponentsPage/ComponentsPage';


export default function CheckboxDocs() {

    const allDataSelect = [
        {
            nameSec: 'CheckBox Termos',
            items: <><Checkbox label='Aceite os termos de uso' /></>
        },
        {
            nameSec: 'CheckBox Escolha',
            items: <>  <Checkbox label='Masculino' />
                <Checkbox label='Feminino' /></>,
            decision: <p>O input nativo fica escondido (não removido) via opacity: 0 e posicionamento absoluto, mantendo foco por teclado e leitura por leitor de tela intactos. O visual customizado (o quadrado com o check) reage ao estado checked via CSS puro, com o seletor de irmão ~, sem precisar de useState — funciona nativamente até em formulários não controlados.</p>
        }
    ]
    return (
        <ComponentsPage title='Checkbox' allData={allDataSelect} />
    )
}
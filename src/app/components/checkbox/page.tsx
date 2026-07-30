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
                <Checkbox label='Feminino' /></>
        }
    ]
    return (
        <ComponentsPage title='Checkbox' allData={allDataSelect} />
    )
}
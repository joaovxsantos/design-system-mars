import { Radio } from './Radio';
import styles from './Radio.module.scss';

interface RadioGroupProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    label?: string;
}

export function RadioGroup({ name, value, onChange, options, label }: RadioGroupProps) {
    return (
        <div className={styles.group}>
            {label && <span className={styles.groupLabel}>{label}</span>}
            {options.map((option) => (
                <Radio
                    key={option.value}
                    name={name}
                    id={`${name}-${option.value}`}
                    value={option.value}
                    label={option.label}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                />
            ))}
        </div>
    );
}
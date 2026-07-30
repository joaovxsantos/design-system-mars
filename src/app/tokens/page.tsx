import { ComponentsPage } from '@/src/components/ComponentsPage/ComponentsPage';
import styles from './tokens.module.scss';

const colorGroups = [
    {
        name: 'Paper',
        tokens: [
            { name: '--color-paper-50', label: 'paper-50' },
            { name: '--color-paper-100', label: 'paper-100' },
            { name: '--color-paper-200', label: 'paper-200' },
        ],
    },
    {
        name: 'Ink',
        tokens: [
            { name: '--color-ink-900', label: 'ink-900' },
            { name: '--color-ink-700', label: 'ink-700' },
            { name: '--color-ink-500', label: 'ink-500' },
            { name: '--color-ink-300', label: 'ink-300' },
        ],
    },
    {
        name: 'Brass',
        tokens: [
            { name: '--color-brass-600', label: 'brass-600' },
            { name: '--color-brass-500', label: 'brass-500' },
            { name: '--color-brass-400', label: 'brass-400' },
        ],
    },
    {
        name: 'Danger',
        tokens: [
            { name: '--color-danger-600', label: 'danger-600' },
            { name: '--color-danger-500', label: 'danger-500' },
            { name: '--color-danger-400', label: 'danger-400' },
        ],
    },
];

const fontSamples = [
    { family: 'var(--font-display)', label: 'Fraunces — Display' },
    { family: 'var(--font-body)', label: 'Manrope — Body' },
    { family: 'var(--font-mono)', label: 'IBM Plex Mono — Mono' },
];

const spacingTokens = [
    { name: '--space-1', label: 'space-1 (4px)' },
    { name: '--space-2', label: 'space-2 (8px)' },
    { name: '--space-3', label: 'space-3 (16px)' },
    { name: '--space-4', label: 'space-4 (24px)' },
    { name: '--space-5', label: 'space-5 (32px)' },
    { name: '--space-6', label: 'space-6 (48px)' },
];




export default function TokensPage() {

    const allDataTokens = [
        {
            nameSec: 'Cores',
            items: <> {colorGroups.map((group) => (
                <div key={group.name} className={styles.group}>
                    <h3>{group.name}</h3>
                    <div className={styles.swatchRow}>
                        {group.tokens.map((token) => (
                            <div key={token.name} className={styles.swatch}>
                                <div
                                    className={styles.swatchColor}
                                    style={{ backgroundColor: `var(${token.name})` }}
                                />
                                <span className={styles.swatchLabel}>{token.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}</>
        },
        {
            nameSec: 'Tipografia',
            items: <> {fontSamples.map((sample) => (
                <p
                    key={sample.label}
                    className={styles.fontSample}
                    style={{ fontFamily: sample.family }}
                >
                    {sample.label} — Aa Bb Cc 123
                </p>
            ))}</>
        },
        {
            nameSec: 'Espaçamento',
            items: <div className={styles.spacingList}>            {spacingTokens.map((token) => (
                <div key={token.name} className={styles.spacingRow}>
                    <span className={styles.spacingLabel}>{token.label}</span>
                    <div
                        className={styles.spacingBar}
                        style={{ width: `var(${token.name})` }}
                    />
                </div>
            ))}</div>
        }
    ]

    return (
        <ComponentsPage title='Tokens' allData={allDataTokens} column={true} />
    );
}
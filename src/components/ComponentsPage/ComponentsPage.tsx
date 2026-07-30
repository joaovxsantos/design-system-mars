import styles from './Components.module.scss';
import { ReactNode } from 'react';


interface ComponentsPageProps {
    title: string;
    allData: { nameSec: string; items: ReactNode }[];
    column?: boolean;
}

export function ComponentsPage({ title, allData, column }: ComponentsPageProps) {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>
                {title}
            </h1>
            {
                allData.map(({ nameSec, items }, indx) => {
                    return (
                        <div className={styles.content} key={indx}>
                            <section className={styles.section} key={indx}>
                                <h2 className={styles.subtitle}>{nameSec}</h2>
                                <div className={`${styles.row} ${column && styles.column}`}>
                                    {items}
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </main>
    )
}
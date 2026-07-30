import styles from './Components.module.scss';
import { ReactNode } from 'react';
import { ArrowLeft } from "lucide-react"
import { Button } from '../ui/Button/Button';
import Link from 'next/link';


interface ComponentsPageProps {
    title: string;
    allData: { nameSec: string; items: ReactNode }[];
    column?: boolean;
}

export function ComponentsPage({ title, allData, column }: ComponentsPageProps) {
    return (
        <main className={styles.page}>
            <Link href="/">            <Button variant='secondary' className={styles.btnBack}><span><ArrowLeft />Voltar</span></Button>
            </Link>
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
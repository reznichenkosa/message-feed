import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './BaseLayout.module.scss'
const BaseLayout = ({children}) => {
    return (
        <>
            <Sidebar />
            <section className={styles.workArea}>
                <Header />
                <main className={styles.main}>
                    {children}
                </main>
            </section>
        </>
    );
};

export default BaseLayout;
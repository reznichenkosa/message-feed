import React from 'react';
import MessagesList from '../../components/MessagesList/MessagesList';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <section className={styles.home}>
            <MessagesList />
        </section>
    );
};

export default HomePage;
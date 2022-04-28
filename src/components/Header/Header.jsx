import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/img/logo.png';

const Header = () => {

    useEffect(() => {
        document.body.setAttribute('data-mode', 'light')
    }, [])
    return (
        <header className={styles.header}>
            <div className={styles.logo}>IACTIVE PRO</div>
        </header>
    );
};

export default Header;
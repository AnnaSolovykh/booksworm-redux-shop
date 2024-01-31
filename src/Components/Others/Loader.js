import React from 'react';
import styles from './styles.module.css';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loader;
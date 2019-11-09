import React from 'react';
import styles from './styles.module.scss';

export const Facade = ({children}) => {
    return (
        <>
            <section className={styles.facade}>
                <div>
                    { children }
                </div>
            </section>
        </>
    )
};

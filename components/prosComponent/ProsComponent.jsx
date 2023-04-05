import React from 'react';
import styles from './ProsComponent.module.scss'
import Image from "next/image";
const ProsComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lorem ipsum.</h1>
            <div className={styles.left}>
                <Image src={'/video/boy-lesson.jpg'}
                       alt={'Image'}
                       width={500} height={300}
                       className={styles.image}
                />
            </div>
            <div className={styles.right}>

            </div>
        </div>
    );
};

export default ProsComponent;
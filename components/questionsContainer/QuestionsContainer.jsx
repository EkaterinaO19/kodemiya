import React from 'react';
import styles from './QuestionsContainer.module.scss'
import Button from "@/components/button/Button";
import Image from "next/image";

const QuestionsContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <Image src={'/video/hertgirl.jpg'} alt={'Image'}
                       className={styles.girl} height={300} width={300}
                />
                <Image src={'/video/boy-white.jpg'} alt={'Image'}
                       className={styles.boy} height={300} width={300}
                />
            </div>
            <div className={styles.text}>
                <h2>Lorem ipsum.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, qui.</p>
                <Button onClick={console.log('clicked')} size={'small'}>lorem</Button>
            </div>

        </div>
    );
};

export default QuestionsContainer;
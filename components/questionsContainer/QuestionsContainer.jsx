import React from 'react';
import styles from './QuestionsContainer.module.scss'
import Button from "@/components/button/Button";
import Image from "next/image";
import Sticker from "@/components/sticker/Sticker";

const QuestionsContainer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.cards}>
                <Image src={'/video/hertgirl.jpg'} alt={'Image'}
                       className={styles.girl} height={300} width={300}
                />
                <Image src={'/video/boy-white.jpg'} alt={'Image'}
                       className={styles.boy} height={300} width={300}
                />
            </div>
            <div className={styles.text}>
                <h2>Остались Вопросы?</h2>
                <p>Оперативно ответим на любой вопрос и дадим консультацию о наших курсах</p>
                <Button onClick={console.log('clicked')} size={'small'}>Записаться</Button>
            </div>
            <Sticker text={'У нас самые классные ученики'}
                     top={'70%'}
                     right={'7%'}
                     sticker={'/image/victory.png'}
            />
        </section>
    );
};

export default QuestionsContainer;
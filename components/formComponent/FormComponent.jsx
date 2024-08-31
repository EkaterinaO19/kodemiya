import React, {useState} from 'react';
import styles from './FormComponent.module.scss'
import Button from "@/components/button/Button";
import Image from "next/image";
const FormComponent = () => {

    return (
        <section className={styles.container}>
                <h1 className={styles.title}>Бесплатный пробный урок</h1>
                <h2>Мы приглашаем вас на бесплатный пробный урок, чтобы вы могли убедиться во всех преимуществах нашей школы программирования.</h2>
        
                    <div className={styles.buttonGroup}>
                        <Button size={'small'} type={'submit'}>Отправить</Button>
                    </div>
                       <Image src={'/shapes/moon.svg'}
                   alt={'Shape'}
                   width={60}
                   height={60}
                   className={styles.moon}
            />
        </section>
    );
};

export default FormComponent;
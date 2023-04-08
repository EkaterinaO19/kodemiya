import React, {useState} from 'react';
import styles from './FormComponent.module.scss'
import Button from "@/components/button/Button";
import Image from "next/image";
const FormComponent = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [rememberMe, setRememberMe] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted!')

        console.log('name:', name);
        console.log('phone:', phone);
        console.log('Remember Me:', rememberMe);

        setName('')
        setPhone('')
        setRememberMe(true);
    }

    return (
        <section className={styles.container}>
                <h1 className={styles.title}>Бесплатный пробный урок</h1>
                <p>Мы приглашаем вас на бесплатный пробный урок, чтобы вы могли убедиться во всех преимуществах нашей школы программирования.</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <label>
                            <input type={'text'} placeholder={'Ваше Имя'}
                                   className={styles.input}
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            <input type={'phone'} placeholder={'Номер Телефона'}
                                   className={styles.input}
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.buttonGroup}>
                        <label className={styles.customCheckbox}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}

                            />
                            <span> Соглашаюсь с политикой конфиденциальности и даю согласие на обработку персональных данных</span>
                        </label>
                        <Button size={'small'} type={'submit'}>Отправить</Button>
                    </div>
                </form>
            <Image src={'/video/cottonbro.jpg'}
                   alt={'Image'}
                   className={styles.kid} width={300} height={300}
            />
            <Image src={'/video/teacher.jpg'}
                   alt={'Image'}
                   className={styles.teacher} width={200} height={200}
            />
            <Image src={'/video/coding.jpg'}
                   alt={'Image'}
                   className={styles.children} width={200} height={200}
            />
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
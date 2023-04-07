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
        <div className={styles.container}>
                <h1 className={styles.title}>Lorem ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quam?</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <label>
                            <input type={'text'} placeholder={'Lorem'}
                                   className={styles.input}
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            <input type={'phone'} placeholder={'Lorem'}
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
                            <span> Remember Me Remember Me</span>
                        </label>
                        <Button size={'small'} type={'submit'}>lorem</Button>
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
        </div>
    );
};

export default FormComponent;
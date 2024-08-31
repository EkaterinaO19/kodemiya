import React from 'react';
import styles from './CoursesComponent.module.scss'
import CourseCard from "@/components/courseCard/CourseCard";
import Image from "next/image";
const CoursesComponent = () => {
    return (
        <section className={styles.container} id={'courses'}>
            <h1 className={styles.title}>Наши Курсы</h1>
            <h3>Внимание! Есть возможность выбрать курс на английском языке!</h3>
            <Image
                src="/shapes/half.svg"
                height={50} width={50}
                alt={'Figure'}
                className={styles.half}
            />
             <CourseCard
                 main={'SCRATCH'}
                 text={'Курс по созданию сайтов и мультфильмов с использованием Scratch - удивительного блок-ориентированного окружения программирования, разработанного специально для детей. Здесь дети могут создавать анимации, игры и интерактивные проекты, развивая свою логическую мысль и творческие способности.'}
                 price={'от 790 р./ур'}
                 image={'/video/boy-lesson-smile.jpg'}
             />
            <CourseCard
                main={'Язык программирования JAVASCRIPT'}
                text={'Одной из основных программ, которые мы предлагаем, является курс по JavaScript - одному из самых распространенных языков программирования в веб-разработке. Дети наших курсов изучают основы языка, создают интерактивные веб-сайты и приложения, и получают возможность воплотить свои творческие идеи в реальность.'}
                price={'от 790 р./ур.'}
                image={'/video/girl-computer.jpg'}
            />
            <CourseCard
                main={'Язык программирования PYTHON'}
                text={'Курс по Python - мощному и универсальному языку программирования, который открывает двери в множество областей, таких как наука о данных, искусственный интеллект и автоматизация задач. Мы гордимся тем, что наши ученики могут освоить этот важный язык уже в раннем возрасте и готовиться к будущим возможностям.'}
                price={'от 790 р./ур.'}
                image={'/video/kid-coding.jpg'}
            />
            <Image
                src="/shapes/stair.svg"
                height={50} width={50}
                alt={'Figure'}
                className={styles.stair}
            />
            <Image
                src="/shapes/cosmos.svg"
                height={70} width={100}
                alt={'Figure'}
                className={styles.cosmos}
            />
        </section>
    );
};

export default CoursesComponent;


import React from 'react';
import styles from './CoursesComponent.module.scss'
import CourseCard from "@/components/courseCard/CourseCard";
import Image from "next/image";
const CoursesComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lorem ipsum.</h1>
            <Image
                src="/shapes/half.svg"
                height={50} width={50}
                alt={'Figure'}
                className={styles.half}
            />
             <CourseCard
                 main={'Lorem ipsum.'}
                 text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut fuga, fugiat id laboriosam minus qui recusandae repellendus tempore voluptatum.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut fuga, fugiat id laboriosam minus qui recusandae repellendus tempore voluptatum.'}
                 price={'Lorem ipsum dolor sit.'}
                 image={'/video/girl-computer.jpg'}
             />
            <CourseCard
                main={'Lorem ipsum.'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut fuga, fugiat id laboriosam minus qui recusandae repellendus tempore voluptatum.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut fuga, fugiat id laboriosam minus qui recusandae repellendus tempore voluptatum.'}
                price={'Lorem ipsum dolor sit.'}
                image={'/video/girl-computer.jpg'}
            />
            <CourseCard
                main={'Lorem ipsum.'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut fuga, fugiat id laboriosam minus qui recusandae repellendus tempore voluptatum.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut fuga, fugiat id laboriosam minus qui recusandae repellendus tempore voluptatum.'}
                price={'Lorem ipsum dolor sit.'}
                image={'/video/girl-computer.jpg'}
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
        </div>
    );
};

export default CoursesComponent;


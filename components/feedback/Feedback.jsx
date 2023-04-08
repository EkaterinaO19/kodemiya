import React from 'react';
import styles from './Feedback.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import FeedbackCard from "@/feedbackCard/FeedbackCard";

const Feedback = () => {
    return (
        <section className={styles.container} id={'feedback'}>
            <Swiper
                slidesPerView={2}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination]}
                spaceBetween={20}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <FeedbackCard image={'/persons/woman.jpg'}
                                  title={'Елена, бабушка 8-летней ученицы'}
                                  text={'"Преподаватели всегда готовы помочь и ответить на вопросы, и моя внучка оценивает возможность самостоятельно изучать программирование в удобное для нее время"'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard image={'/persons/girl-portrait.jpg'}
                                  title={'Анна, мама 10-летнего ученика'}
                                  text={'"Я так благодарна "Кодемии" за то, что они помогли нашему ребенку развить его навыки программирования. Мой сынуля с нетерпением ждет каждого урока!"'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard image={'/persons/portrait.jpg'}
                                  title={'Олеся, мама 12-летнего ученика.'}
                                  text={'Я была поражена тем, насколько быстро мой сын развил навыки программирования в "Кодемии". Он полюбил Python и научился создавать свои собственные программы."'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard image={'/persons/dad.jpg'}
                                  title={'Михаил, папа 10-летнего ученика'}
                                  text={'"Мы выбрали "Кодемию" для нашего ребенка, и это было лучшее решение! Наш сын полностью погрузился в мир программирования, освоил Scratch и создал свою первую игру. "'}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Feedback;
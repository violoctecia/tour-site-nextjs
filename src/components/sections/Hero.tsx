import styles from '@/styles/blocks/Hero.module.scss';
import Image from 'next/image';
import Form from '@/components/blocks/Form';

export default function Hero() {


    return (
        <>
            <section className={styles.hero} id="hero-form">
                <div className="container">
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/HeroTitle.svg"
                            alt="Жемчужина Кавказа"
                            fill
                            priority
                            className={styles.heroImage}
                        />
                    </div>
                    <div className={styles.text}>
                        <p>ОНЛАЙН-БРОНИРОВАНИЕ БИЛЕТОВ И ЭКСКУРСИЙ</p>
                        <p>РЕЖИМ РАБОТЫ: 8:00-21:00</p>
                    </div>
                </div>
            </section>

            <section className={styles.form} >
                <div className="container">
                    <div className={styles.formWrapper}>
                        <Image
                            src="/images/HeroForm.png"
                            fetchPriority={'high'}
                            alt=""
                            fill
                            priority={true}
                            className={styles.formWrapperImage}
                        />
                        <div className={styles.formInnerWrapper}>
                            <div className={styles.formInnerWrapperText}>
                                <div className={styles.firstText}>
                                    <h1><span>Круизный поезд «Жемчужина Кавказа»</span></h1>
                                    <p>Семидневное путешествие на комфортабельном
                                        поезде, который отправляется из <span>Москвы</span>, и позволяет туристам
                                        из <span>Воронежа</span> и <span>Ростова-на-Дону</span> присоединиться к
                                        путешествию.
                                    </p>
                                </div>
                                <p className={styles.secondText}>
                                    Актуальное расписание, стоимость билетов и бронирование экскурсий онлайн доступны на
                                    нашем сайте и по <a href="tel:+79951447659">телефону</a>.
                                </p>
                            </div>
                            <div className={styles.line}></div>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

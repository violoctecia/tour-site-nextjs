"use client"

import Image from 'next/image';
import { handleScroll } from '@/composables/scrollTo';

export const Footer = () => {
    const nav = [
        {
            value: 'Билеты на поезд',
            id: 'trainTours'
        },
        {
            value:  'Групповые туры',
            id: 'groupTours'
        },
        {
            value: 'Индивидуальные туры',
            id: 'indTours'
        },
        {
            value:  'Частые вопросы',
            id: 'faq'
        },
        {
            value: 'Памятка туристам',
            id: 'guide'
        },
    ];
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <nav>
                        {nav.map((item, idx) => (
                            <button key={idx} onClick={() => handleScroll(item.id)}>{item.value}</button>
                        ))}
                    </nav>
                    <p>Проект Travelventureslab.com</p>
                </div>
                <div className="imageWrapper">
                    <Image
                        src="/images/Footer.svg"
                        alt=""
                        fill
                        priority={false}
                    />
                </div>
                <div className="row end">
                    <p>Официальный партнер РЖД-Тур по продаже билетов на круизный поезд «Жемчужина Кавказа»</p>
                    <div className="links">
                        <a href="/">Политика обработки персональных данных</a>
                        <a href="/">Публичная оферта</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
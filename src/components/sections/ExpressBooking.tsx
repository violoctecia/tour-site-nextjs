'use client';

import Image from 'next/image';
import { handleScroll } from '@/composables/scrollTo';

export const ExpressBooking = () => {
    return (
        <section className="express-booking">
            <div className="container">
                <h2>Экспресс <br/>
                    бронирование</h2>
                <div className="wrapper">
                    <div className="buttons">
                        <h3>забронируйте <br/>
                            тур в whatsapp</h3>
                        <p>Переходите сразу в WhatsApp для экспресс бронирования!</p>
                        <a href="https://wa.me/79951447659" target="_blank" className="button">перейти в whatsapp</a>
                        <button className="button" onClick={() => handleScroll('hero-form')}>Отправить заявку</button>
                    </div>
                    <div className="image">
                        <Image
                            src="/images/ExpressBooking.png"
                            alt=""
                            fill
                            priority={false}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
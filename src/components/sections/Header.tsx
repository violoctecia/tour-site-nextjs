'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { handleScroll } from '@/composables/scrollTo';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handler = (e: any) => e.preventDefault();

        document.addEventListener("contextmenu", handler); // отключает правую кнопку
        document.addEventListener("keydown", (e) => {
            if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
                e.preventDefault(); // запрещает открыть DevTools
            }
        });

        return () => {
            document.removeEventListener("contextmenu", handler);
        };
    }, []);


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


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                isOpen &&
                navRef.current &&
                !navRef.current.contains(target) &&
                burgerRef.current &&
                !burgerRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);



    const scroll = (id: string) => {
        setIsOpen(false);
        handleScroll(id)
    }

    return (
        <header>
            <div className="container">
                <Link href={'/'}>
                    <Image src="/images/HeadLogo.svg"
                           alt=""
                           width="50"
                           height="50" />
                </Link>

                <div className={`nav ${isOpen ? 'open' : ''}`} ref={navRef}>
                    <div className="l">
                        {nav.map((item, idx) => (
                            <button key={idx} onClick={() => scroll(item.id)}>{item.value}</button>
                        ))}
                    </div>
                    <div className="r">
                        <a href="tel:+74951090444" className="button">+7 (495) 10-90-444</a>
                        <button className="button">ОТДЕЛ БРОНИРОВАНИЯ</button>
                    </div>

                </div>

                <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} ref={burgerRef}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447716 2 0 1.55228 0 1Z"
                            fill="#0E916B" />
                        <path
                            d="M0 13C0 12.4477 0.447715 12 1 12H23C23.5523 12 24 12.4477 24 13C24 13.5523 23.5523 14 23 14H1C0.447716 14 0 13.5523 0 13Z"
                            fill="#0E916B" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.7068 0.292786C23.5193 0.105315 23.2649 0 22.9998 0C22.7346 0 22.4803 0.105315 22.2928 0.292786L11.9998 10.5858L1.70679 0.292786C1.51926 0.105315 1.26495 0 0.999786 0C0.734622 0 0.480314 0.105315 0.292786 0.292786C0.105315 0.480314 0 0.734622 0 0.999786C0 1.26495 0.105315 1.51926 0.292786 1.70679L10.5858 11.9998L0.292786 22.2928C0.105315 22.4803 0 22.7346 0 22.9998C0 23.2649 0.105315 23.5193 0.292786 23.7068C0.480314 23.8943 0.734622 23.9996 0.999786 23.9996C1.26495 23.9996 1.51926 23.8943 1.70679 23.7068L11.9998 13.4138L22.2928 23.7068C22.4803 23.8943 22.7346 23.9996 22.9998 23.9996C23.2649 23.9996 23.5193 23.8943 23.7068 23.7068C23.8943 23.5193 23.9996 23.2649 23.9996 22.9998C23.9996 22.7346 23.8943 22.4803 23.7068 22.2928L13.4138 11.9998L23.7068 1.70679C23.8943 1.51926 23.9996 1.26495 23.9996 0.999786C23.9996 0.734622 23.8943 0.480314 23.7068 0.292786Z"
                            fill="#F28619" />
                    </svg>
                </button>
            </div>
        </header>
    );
};
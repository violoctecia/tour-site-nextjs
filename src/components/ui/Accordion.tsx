'use client';

import { useRef, useState, useEffect } from 'react';

type AccordionProps = {
    title: string;
    subtitle?: string;
    isWhite?: boolean;
    children: React.ReactNode;
};

export default function Accordion({ title, subtitle, children, isWhite }: AccordionProps) {
    const [isOpened, setIsOpened] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpened((prev) => !prev);
    };

    useEffect(() => {
        const el = bodyRef.current;
        if (!el) return;

        if (isOpened) {
            el.style.height = el.scrollHeight + 'px';
        } else {
            el.style.height = '0px';
        }
    }, [isOpened]);

    return (
        <div className={`accordion-item${isWhite ? ' white' : ''}`}>
            <button
                aria-expanded={isOpened}
                className="accordion-button"
                onClick={toggleAccordion}>
                <span className="accordion-title">{title}</span>
                {subtitle && (
                    <span className="accordion-subtitle">{subtitle}</span>
                )}
                <span className="accordion-icon">
                    {isOpened ?
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 6.46364L14.1454 0.318191C14.5697 -0.106064 15.2576 -0.106064 15.6818 0.318191C16.1061 0.742446 16.1061 1.4303 15.6818 1.85455L9.53636 8L15.6818 14.1454C16.1061 14.5697 16.1061 15.2576 15.6818 15.6818C15.2576 16.1061 14.5697 16.1061 14.1454 15.6818L8 9.53636L1.85455 15.6818C1.4303 16.1061 0.742446 16.1061 0.318191 15.6818C-0.106064 15.2576 -0.106064 14.5697 0.318191 14.1454L6.46364 8L0.318191 1.85455C-0.106064 1.4303 -0.106064 0.742446 0.318191 0.318191C0.742446 -0.106064 1.4303 -0.106064 1.85455 0.318191L8 6.46364Z"
                                fill={isWhite ? '#EEF5FF' : '#0E916B'} />
                        </svg>
                        :
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 9H19C19.5523 9 20 9.44771 20 10C20 10.5523 19.5523 11 19 11H11V19C11 19.5523 10.5523 20 10 20C9.44771 20 9 19.5523 9 19V11H1C0.447715 11 0 10.5523 0 10C0 9.44771 0.447715 9 1 9H9V1C9 0.447715 9.44771 0 10 0C10.5523 0 11 0.447715 11 1V9Z"
                                fill={isWhite ? '#0E916B' : '#EEF5FF'} />
                        </svg>}
               </span>
            </button>

            <div className="accordion-body" ref={bodyRef}
                 style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}>
                <div className="accordion-body__content">{children}</div>
            </div>
        </div>
    );
}

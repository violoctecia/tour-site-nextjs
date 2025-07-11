'use client'

import Slider from '@/components/blocks/Slider';
import Accordion from '@/components/ui/Accordion';

import { ITourData } from '@/components/sections/ToursSection';
import { handleScroll } from '@/composables/scrollTo';


export const Tour = ({ data, isInd, scrollTo }: { data: ITourData, isInd: boolean, scrollTo: string }) => {
    return (
        <div>
            <div className="info-wrapper">
                <div className="first-info">
                    <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
                    <p className="desc" dangerouslySetInnerHTML={{ __html: data.desc }} />
                    <div className="adv">
                        {data.adv.map((item, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </div>
                    <button className="button" onClick={() => handleScroll(scrollTo)}>ЗАБРОНИРОВАТЬ</button>
                </div>

                <div className="second-info">
                    <Slider images={data.images} />
                    <div className="route-text">
                        <h4>Маршрут</h4>
                        <p dangerouslySetInnerHTML={{ __html: data.route }} />
                    </div>
                    <div className="impression-text">
                        <h4>Основные впечатления</h4>
                        <ul>
                            {data.places.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="accordions-wrapper">
                        <h4>Программа</h4>
                        <div className="accordions">
                            {data.days.map((item, i) => (
                                <Accordion key={i} title={item.title} subtitle={item.subtitle}>
                                    <p className="accordion-text"
                                       dangerouslySetInnerHTML={{ __html: item.text }} />
                                </Accordion>
                            ))}
                        </div>
                    </div>
                    {data?.warning && (
                        <div className="warning">
                            <span className="warning-title">ВНИМАНИЕ!</span>
                            <p dangerouslySetInnerHTML={{ __html: data.warning }} />
                        </div>
                    )}
                </div>
            </div>

            <div className="prices">
                <div className="wrapper">
                    <h3>Стоимость <br />{isInd ? 'индивидуального' : 'группового'} тура</h3>
                    <div className="list no-scrollbar">
                        {data.prices.map((item, i) => (
                            <div key={i} className="block">
                                <h4 dangerouslySetInnerHTML={{ __html: item.name }} />
                                <div className="options">
                                    {item.options.map((option, i) => (
                                        <div className="option" key={i}>
                                            <p className="option-text"
                                               dangerouslySetInnerHTML={{ __html: option.text }} />
                                            <p className="option-type">{option.type}</p>
                                        </div>
                                    ))}
                                </div>
                                <button className="button" onClick={() => handleScroll(scrollTo)}>Забронировать</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="included n">
                <h3>В стоимость тура включено</h3>
                <div className="text">
                    <ul>
                        {data.included.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <p className="second-text">
                    Актуальную стоимость уточняйте в отделе бронирования по телефону <a className="orange"
                                                                                        href="tel:+74951090444">+7 (495)
                    10-90-444</a> или после
                    заполнения <button className="orange" onClick={() => handleScroll(scrollTo)}>формы онлайн-бронирования</button> на сайте
                </p>
            </div>
        </div>
);
};
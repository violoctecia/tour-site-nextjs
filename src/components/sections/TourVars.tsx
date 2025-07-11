'use client';

import { handleScroll } from '@/composables/scrollTo';

export const TourVars = () => {
    const vars = [
        {
            name: 'только поезд',
            options: [
                {
                    name: 'БИЛЕТ НА ПОЕЗД',
                    includes: true,
                },
                {
                    name: 'ЗАВТРАК',
                    includes: true,
                },
                {
                    name: 'ПРОГРАММЫ И ОТДЕЛЬНЫЕ ЭКСКУРСИИ',
                    includes: false,
                },
                {
                    name: 'ГИД',
                    includes: false,
                },
                {
                    name: 'ПИТАНИЕ ПО ПРОГРАММЕ',
                    includes: false,
                },
            ],
            id: 'trainTours',
            price: '<span>от</span> 56 294 р.',
        },
        {
            name: 'Групповые экскурсии<br><span>+ Поезд</span>',
            options: [
                {
                    name: 'БИЛЕТ НА ПОЕЗД',
                    includes: true,
                },
                {
                    name: 'ЗАВТРАК',
                    includes: true,
                },
                {
                    name: 'ПРОГРАММЫ И ОТДЕЛЬНЫЕ ЭКСКУРСИИ НА АВТОБУСАХ',
                    includes: true,
                },
                {
                    name: 'ГИД',
                    includes: true,
                },
                {
                    name: 'ПИТАНИЕ ПО ПРОГРАММЕ',
                    includes: true,
                },
            ],
            id: 'groupTours',
            price: '<span>от</span> 112 703 р.',
        },
        {
            name: 'Индивидуальные экскурсии<br><span>+ Поезд</span>',
            options: [
                {
                    name: 'БИЛЕТ НА ПОЕЗД',
                    includes: true,
                },
                {
                    name: 'ЗАВТРАК',
                    includes: true,
                },
                {
                    name: 'ПРОГРАММЫ И ОТДЕЛЬНЫЕ ЭКСКУРСИИ НА ИНДИВИДУАЛЬНЫХ КОМФОРТАБЕЛЬНЫХ АВТОМОБИЛЯХ ДЛЯ НЕБОЛЬШИХ ГРУПП ДО 4 ЧЕЛОВЕК',
                    includes: true,
                },
                {
                    name: 'ГИД',
                    includes: true,
                },
                {
                    name: 'ПИТАНИЕ ПО ПРОГРАММЕ',
                    includes: true,
                },
            ],
            id: 'indTours',
            price: '<span>от</span> 80 153 р.',
        },
    ];



    return (
        <section className="tourVars">
            <div className="container">
                <h2>Варианты тура</h2>
                <div className="tourVars_list no-scrollbar">
                    {vars.map((item, i) => (
                        <div className="variant" key={i}>
                            <h3 dangerouslySetInnerHTML={{ __html: item.name }} />
                            <div className="variant_options">
                                {item.options.map((option, i) => (
                                    <div key={i} className={`variant_option${option.includes ? ' active' : ''}`}>
                                        <p>{option.name}</p>
                                        <p>{option.includes ? '+' : '-'}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="variant_bottom">
                                <p dangerouslySetInnerHTML={{ __html: item.price }} />
                                <button className="button" onClick={() => handleScroll(item.id)}>подробнее →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};
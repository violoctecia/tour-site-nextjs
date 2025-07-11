export const TrainBlock = () => {
    const list = [
        'Ежедневные завтраки;',
        'Проезд по маршруту следования в вагоне выбранной категории (КУПЕ / СВ / ЛЮКС);',
        'Предоставление комплектов постельных принадлежностей;',
        'Смена постельного белья и предоставление санитарно- гигиенических наборов в зависимости от выбранного класса вагона.',
    ];

    const vars = [
        {
            name: 'ИЗ МОСКВЫ - 11:00',
            options: [
                {
                    name: '12',
                    right: 'МАЙ',
                },
                {
                    name: '13 / 21 / 29',
                    right: 'ИЮНЬ',
                },
                {
                    name: '7 / 15 / 23',
                    right: 'ИЮЛЬ',
                },
                {
                    name: '8 / 16',
                    right: 'АВГУСТ',
                },
                {
                    name: '1 / 9 / 17 / 25',
                    right: 'СЕНТЯБРЬ',
                },
            ],
            price: '<span>от</span> 69 705 р.',
        },
        {
            name: 'ИЗ ВОРОНЕЖА - 18:37',
            options: [
                {
                    name: '12',
                    right: 'МАЙ',
                },
                {
                    name: '13 / 21 / 29',
                    right: 'ИЮНЬ',
                },
                {
                    name: '7 / 15 / 23',
                    right: 'ИЮЛЬ',
                },
                {
                    name: '8 / 16',
                    right: 'АВГУСТ',
                },
                {
                    name: '1 / 9 / 17 / 25',
                    right: 'СЕНТЯБРЬ',
                },
            ],
            price: '<span>от</span> 69 073 р.',
        },
        {
            name: 'ИЗ РОСтОВА-НА-ДОНУ - 04:39 (утро)',
            options: [
                {
                    name: '13',
                    right: 'МАЙ',
                },
                {
                    name: '14 / 22 / 30',
                    right: 'ИЮНЬ',
                },
                {
                    name: '8 / 16 / 24',
                    right: 'ИЮЛЬ',
                },
                {
                    name: '9 / 17',
                    right: 'АВГУСТ',
                },
                {
                    name: '2 / 10 / 18 / 26',
                    right: 'СЕНТЯБРЬ',
                },
            ],
            price: '<span>от</span> 62 488 р.',
        },
    ];
    return (
        <section className="train" id="trainTours">
            <div className="container">
                <h2>Расписание <br />круизного <br />поезда</h2>

                <div className="tourVars_list no-scrollbar">
                    {vars.map((item, i) => (
                        <div className="variant" key={i}>
                            <h3 dangerouslySetInnerHTML={{ __html: item.name }} />
                            <div className="variant_options">
                                {item.options.map((option, i) => (
                                    <div key={i} className='variant_option'>
                                        <p>{option.name}</p>
                                        <p>{option.right}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="variant_bottom">
                                <p dangerouslySetInnerHTML={{ __html: item.price }} />
                                <button className='button'>купить  билет</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="included">
                    <h3>В стоимость билета включено</h3>
                    <div className="text">
                        <ul>
                            {list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text1">Стоимость билета <span className="b">специализированных вагонов-купе для маломобильных:</span>
                        </p>
                        <p className="price"><span>от</span> 11 708 <span>до</span> 24 566 <span>р./чел.</span></p>
                        <p className="text2">Актуальную стоимость и наличие мест уточняйте в отделе броинрования: +7
                            (495) 10-90-444</p>
                    </div>
                    <p className="second-text">
                        К билету на круизном поезде вы можете добавить групповые или индивидуальные экскурсии. Изучите
                        их на <span>сайте</span> либо <span> получите консультацию</span>!
                    </p>
                </div>
            </div>
        </section>
    );
};



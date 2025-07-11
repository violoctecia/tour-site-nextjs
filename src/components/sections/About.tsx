import Image from 'next/image';

export const About = () => {
    const compound = [
        'Рестораны',
        'Бар',
        'СПА <br> <span>с инфракрасной сауной</span>',
        'Душ',
    ];
    const types = [
        'Люкс',
        'СВ',
        'Купе',
        'Купе для маломобильных',
    ];
    return (
        <section className="about">
            <div className="container">
                <h2>О ПОЕЗДЕ</h2>


                <div className="inner_container">
                    <picture>
                        <source
                            media="(max-width: 700px)"
                            srcSet="/images/About-mobile.svg"
                        />
                        <Image
                            src="/images/About.svg"
                            alt="Жемчужина Кавказа"
                            fill
                            priority={false}
                            loading="lazy"
                        />
                    </picture>

                    <div className="about_text x">
                        <p>В состав включены:</p>
                        <ul>
                            {compound.map((item, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="about_text y">
                        <p>Типы вагонов:</p>
                        <ul>
                            {types.map((item, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="about_h3">
                    <h3>Особенности поезда</h3>
                    <p>Все вагоны оборудованы системами кондиционирования, биотуалетами, душами, а также розетками для
                        зарядки гаджетов. В пути следования вы можете приобрести полотенца для душа <span>за дополнительную
                        плату</span>, а также воспользоваться фенами.</p>
                </div>

                <div className="route">
                    <h3>
                        <span>Маршрут</span>
                        <span> следования</span>
                    </h3>
                    <div className="table no-scrollbar">
                        <table>
                            <tbody>
                            <tr>
                                <td>МОСКВА</td>
                                <td>/</td>
                                <td>ВОРОНЕЖ</td>
                                <td>/</td>
                                <td className='nw'>РОСТОВ-НА-ДОНУ</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>МАЙКОП</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>ВЛАДИКАВКАЗ</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>ГРОЗНЫЙ</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ДЕРБЕНТ</td>
                                <td>/</td>
                                <td>МАХАЧКАЛА — НАЛЬЧИК — РОСТОВ-на-ДОНУ</td>
                                <td>/</td>
                                <td>ВОРОНЕЖ · МОСКВА</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};
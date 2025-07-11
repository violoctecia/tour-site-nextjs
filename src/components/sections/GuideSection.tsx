import Accordion from '@/components/ui/Accordion';

export const GuideSection = () => {
    const items = [
        {
            groupName: 'Общая информация',
            accordions: [
                { 'title': 'Документы с собой' },
                { 'title': 'Время' },
                { 'title': 'Медицина' },
                { 'title': 'Правила поведения и особенности региона' },
                { 'title': 'Условия организации групповых программ' },
                { 'title': 'Телефон и интернет' },
                { 'title': 'Деньги' },
                { 'title': 'Климат и погода' },
                { 'title': 'Необходимо взять с собой' },
            ],
        },
        {
            groupName: 'Кабардино-Балкарская республика',
            accordions: [
                { 'title': 'Рекомендуемый список вещей' },
                { 'title': 'Турист обязан' },
                { 'title': 'Правила поведения в пассажирском транспорте' },
                { 'title': 'Запрещается' }
            ],
        },
        {
            groupName: 'Чеченская республика',
            accordions: [
                { 'title': 'Общение в Чеченской республике' },
                { 'title': 'Транспорт' },
                { 'title': 'Посещение мечети' },
                { 'title': 'Как одеваться в Чеченской республике' },
                { 'title': ' Курение и алкоголь' }
            ],
        },
    ];


    return (
        <section className="guide-section" id="guide">
            <div className="container">
                <h2>Памятка</h2>
                <p className="subtitle">Для туристов, путешествующих по Кавказу</p>
                <div className="list">
                    {items.map((item, idx) => (
                        <div className="item" key={idx}>
                            <p className="group-name">
                                <span>(0{idx + 1})</span> <br />
                                {item.groupName}
                            </p>
                            <div className="accordions">
                                {item.accordions.map((item, idx) => (
                                    <Accordion key={idx} title={item.title} isWhite>
                                        <p>...</p>
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
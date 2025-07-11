import Accordion from '@/components/ui/Accordion';

export const FAQ = () => {
    const accordions = [
        { 'title': 'Какое питание есть в поезде?' },
        { 'title': 'Как обустроен вагон-СПА?' },
        { 'title': 'Разрешен ли проезд с животными?' },
        { 'title': 'Могу ли я постирать вещи во время поездки?' },
        { 'title': 'Надо ли брать наличные с собой?' },
        { 'title': 'ВНИМАНИЕ!' },
    ];

    return (
        <section className="faq" id="faq">
            <div className="container">
                <h2>Частые вопросы</h2>
                <div className="accordions">
                    {accordions.map((item, i) => (
                        <Accordion key={i} title={item.title} isWhite>
                            <p>-</p>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};
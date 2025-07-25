import Form from '@/components/blocks/Form'

type Props = {
    id: string;
};

export const ReservationSection = ({ id }: Props) => {
    return (
        <section className="reservation" id={id}>
            <div className="container">
                <h2>Онлайн <br />бронирование</h2>
                <div className="wrapper">
                    <div className="text">
                        <p className="title">Забронируйте экскурсию прямо сейчас, заполнив заявку онлайн!</p>
                        <p className="info">Вы можете забронировать билет на поезд или тур у оператора или заполнить форму онлайн-бронирования. <br/><span>Отдел бронирования: <a
                            href="tel:+79951447659">+7 (995) 144-76-59</a></span></p>
                    </div>
                    <Form/>
                </div>
            </div>
        </section>
    );
};
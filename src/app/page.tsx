import Hero from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TourVars } from '@/components/sections/TourVars';
import { TrainBlock } from '@/components/sections/TrainBlock';
import { ToursSection } from '@/components/sections/ToursSection';

import data1 from '@/data/SevernayaOsetiya.json';
import data2 from '@/data/Ingushetiya.json';
import data3 from '@/data/IndSevernayaOsetiya.json';
import data4 from '@/data/IndIngushetiya.json';
import { ReservationSection } from '@/components/sections/ReservationSection';
import { OtherTours } from '@/components/sections/OtherTours';
import { GuideSection } from '@/components/sections/GuideSection';
import { FAQ } from '@/components/sections/FAQ';
import { OnlyClient } from '@/components/sections/OnlyClient';


export default function Home() {

    const groupTours = {
        title: 'Групповые <br />экскурсии',
        descBold: 'ВЫБЕРИТЕ ОДИН ИЗ КОМПЛЕКСНЫХ ТУРОВ <br /> <span>БИЛЕТ НА ПОЕЗД И ЭКСКУРСИИ ПО ВСЕМ ГОРОДАМ</span>',
        descThin: 'Вы можете оформить полную программу <span>по всем городам маршрута</span> <br> или приобрести экскурсии по отдельным городам',
        data: [
            data1,
            data2,
        ],
    };

    const indTours = {
        title: 'Индивидуальные <br />экскурсии',
        descBold: 'Предлагаем вам уникальные экскурсионные маршруты с посещением мест, скрытых от массового туризма. Индивидуальное сопровождение на комфортабельном автомобиле с опытными местными гидами позволит вам глубже погрузиться в атмосферу региона и открыть его с неожиданных ракурсов.',
        descThin: 'Формат для групп от 1 до 4 человек.',
        data: [
            data3,
            data4,
        ],
    };

    return (
        <main>
            <Hero />
            <About />
            <TourVars />
            <TrainBlock />
            <ToursSection title={groupTours.title}
                          descBold={groupTours.descBold}
                          isInd={false}
                          scrollTo="form1"
                          descThin={groupTours.descThin}
                          data={groupTours.data}
                          id="groupTours" />

            <ReservationSection id="form1" />

            <ToursSection title={indTours.title}
                          isInd
                          scrollTo="form2"
                          descBold={indTours.descBold}
                          descThin={indTours.descThin}
                          data={indTours.data}
                          id="indTours" />

            <ReservationSection id="form2" />

            <OtherTours />

            <ReservationSection id="form3" />
            {/*<OnlyClient />*/}
            <GuideSection />
            <FAQ />
        </main>

    );
}


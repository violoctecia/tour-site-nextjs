import Link from 'next/link';
import '@/styles/pages/journal.scss';
import Image from 'next/image';

export const metadata = {
    title: 'Журнал Жемчужина Кавказа. Туры в Дагестан | Кавказ 2025',
    description: 'Официальный сайт ЖЕМЧУЖИНА КАВКАЗА: официальные цены, актуальное расписание и скидки. Все туры на Кавказ 2025 - 2026. Северная Осетия, Чечня, Ингушетия, Владикавказ, Эльбрус, Домбай, Архыз, Кисловодск, Минеральные воды.\n',
    robots: 'index, follow',
    openGraph: {
        title: 'Журнал Жемчужина Кавказа. Туры в Дагестан | Кавказ 2025',
        description: 'Официальный сайт ЖЕМЧУЖИНА КАВКАЗА: официальные цены, актуальное расписание и скидки. Все туры на Кавказ 2025 - 2026. Северная Осетия, Чечня, Ингушетия, Владикавказ, Эльбрус, Домбай, Архыз, Кисловодск, Минеральные воды.\n',
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function JournalPage() {

    const links = [
        {
            title: 'Волшебный Кавказ: <br/>круиз на колесах Жемчужина Кавказа',
            desc: 'Круизный поезд «Жемчужина Кавказа» — это уникальное путешествие в регионы с удивительной природой, богатейшим культурным наследием и людьми с широкой душой. Жители Дагестана, Владикавказа, Чеченской Республики, Северной Осетии ...',
            img: '/images/article1.png',
            url: '/journal/volshebnyy-kavkaz',
        },
        {
            title: 'Золотые горы Кавказа:  вам есть что посмотреть',
            desc: 'Кавказский климат по-настоящему располагает к отдыху — мягкий, без резких температурных скачков, он делает путешествия комфортными практически в любое время года. Летом здесь не знойно, а зимой нет лютых морозов. Особенно ...',
            img: '/images/article2.png',
            url: '/journal/zolotye-gory-kavkaza',
        },
        {
            title: 'Попробовать и навсегда влюбиться в Кавказ',
            desc: 'Кавказ — это край, где каждый день отпуска превращается в яркое приключение. Любите активный отдых? Вам подойдут трекинговые маршруты к водопадам, прогулки по древним заброшенным аулам, горные дороги с головокружительными серпантинами ...',
            img: '/images/article3.png',
            url: '/journal/vlyubitsya-v-kavkaz',
        },
    ];

    return (
        <main className="journal-page">
            <div className="container">
                <h1>журнал <br />
                    жемчужина кавказа</h1>
                <p className="subtitle">главная страница / журнал</p>
                <div className="links">
                    {links.map((item, index) => (
                        <Link href={item.url} key={index}>
                            <div className="image">
                                <Image
                                    src={item.img}
                                    sizes="(min-width: 1000px) 412px, 100vw"
                                    alt=""
                                    fill
                                    priority={false}
                                    loading="lazy"
                                />
                            </div>
                            <h2 dangerouslySetInnerHTML={{__html: item.title}}/>
                            <p dangerouslySetInnerHTML={{__html: item.desc}}/>
                        </Link>
                    ))}
                </div>
            </div>
        </main>

    );
}


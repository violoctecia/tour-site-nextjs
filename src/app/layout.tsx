import '@/styles/globals.scss';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';

export const metadata = {
    title: 'Жемчужина Кавказа',
    description: 'Семидневное путешествие на комфортабельном круизном поезде «Жемчужина Кавказа». Отправление из Москвы, возможна посадка в Воронеже и Ростове-на-Дону. Групповые и индивидуальные экскурсии.',
    keywords: 'Жемчужина Кавказа, круизный поезд, туры на поезде, путешествие по Кавказу, экскурсии, туризм, Москва, Воронеж, Ростов-на-Дону',
    robots: 'index, follow',
    openGraph: {
        title: 'Жемчужина Кавказа — круизный поезд',
        description: 'Путешествие на комфортабельном поезде с экскурсиями и остановками в живописных местах Кавказа.',
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="ru">
        <head><link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" /></head>
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}

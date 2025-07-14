import '@/styles/globals.scss';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="ru">
        <head>
            <title>Жемчужина Кавказа</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description"
                  content="Семидневное путешествие на комфортабельном круизном поезде «Жемчужина Кавказа». Отправление из Москвы, возможна посадка в Воронеже и Ростове-на-Дону. Групповые и индивидуальные экскурсии." />
            <meta name="keywords"
                  content="Жемчужина Кавказа, круизный поезд, туры на поезде, путешествие по Кавказу, экскурсии, туризм, Москва, Воронеж, Ростов-на-Дону" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Жемчужина Кавказа — круизный поезд" />
            <meta property="og:description"
                  content="Путешествие на комфортабельном поезде с экскурсиями и остановками в живописных местах Кавказа." />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="ru_RU" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        </head>
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}

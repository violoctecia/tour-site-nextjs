import '@/styles/globals.scss';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="ru">
        <head>
            <title>Жемчужина Кавказа</title>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
            <meta name="robots" content="noindex, nofollow" />
        </head>
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}

import { notFound } from 'next/navigation';
import "@/styles/pages/article.scss"
import Image from 'next/image';

type tParams = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: tParams }) {
    const { slug } = await params;

    let article
    try {
        article = (await import(`@/data/articles/${slug}.json`)).default;

        return {
            title: article.meta.title,
            description: article.meta.description,
            openGraph: {
                title: article.meta.title,
                description: article.meta.description,
                type: 'article',
                locale: 'ru_RU'
            },
            robots: 'index, follow',
        };
    } catch {
        return notFound();
    }
}

export default async function ArticlePage({ params }: { params: tParams }) {
    const { slug } = await params;

    let article
    try {
        article = (await import(`@/data/articles/${slug}.json`)).default;
    } catch (error) {
        return notFound();
    }

    return (
        <main className="article-page">
            <article className="container">
                <h1 dangerouslySetInnerHTML={{__html: article.title}} />
                <p className="subtitle">главная страница / журнал</p>
                <div className="content">
                    {article.content.map((item: any, i: any) => (
                        <div className="content__block" key={i}>
                           <div className="image">
                               <Image
                                   src={item.img}
                                   sizes="(min-width: 1000px) 1079px, 100vw"
                                   alt=""
                                   fill
                                   priority={false}
                                   loading="lazy"
                               />
                           </div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                    ))}
                </div>
            </article>
        </main>
    );
}

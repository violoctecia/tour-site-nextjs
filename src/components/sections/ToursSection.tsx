import { Tour } from '@/components/blocks/Tour';

 type PriceOption = {
    text: string;
    type: string;
};

 type PriceGroup = {
    name: string;
    options: PriceOption[];
};

 type Day = {
    title: string;
    subtitle: string;
    text: string;
};

export interface ITourData {
    title: string;
    desc: string;
    adv: string[];
    route: string;
    places: string[];
    days: Day[];
    prices: PriceGroup[];
    included: string[];
    warning?: string;
    images: string[];
};

type Props = {
    title: string;
    descBold: string;
    descThin: string;
    isInd: boolean;
    data: ITourData[];
    id?: string;
    scrollTo: string;
}

export const ToursSection = ({ title, isInd, descBold, descThin, data, id, scrollTo }: Props) => {

    return (
        <section className="group-excursions" id={id}>
            <div className="container">
                <h2 dangerouslySetInnerHTML={{__html: title}}/>
                <div className="text-wrapper">
                    <p className="choose" dangerouslySetInnerHTML={{__html: descBold}}/>
                    <p className="text" dangerouslySetInnerHTML={{__html: descThin}}/>
                </div>

                <div className="tours">
                    {data.map((item, i) => (
                        <Tour key={i} data={item} isInd={isInd} scrollTo={scrollTo} />
                    ))}
                </div>

            </div>
        </section>
    );
};
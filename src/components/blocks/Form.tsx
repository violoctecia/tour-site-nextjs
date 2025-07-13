// 'use client';


import styles from '@/styles/blocks/Hero.module.scss';
import { InputMask } from '@react-input/mask';

export default function ParentForm() {


    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value, type, checked } = e.target;
    //
    //     setForm((prev) => ({
    //         ...prev,
    //         [name]: type === 'checkbox' ? checked : value
    //     }));
    // };

    return (
        <form
            name="lead"
            method="POST"
            data-netlify="true"
        >
            <input type="hidden" name="lead-form" value="lead" />

            <div className={styles.inputs}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Как вас зовут?"
                    autoComplete="name"
                    required

                />



                <div className={styles.checkboxWrapper}>
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        required

                    />
                    <label htmlFor="checkbox">
                        Я даю согласие на обработку персональных данных
                    </label>
                </div>
            </div>
            <button className="button" type="submit">Отправить заявку</button>
        </form>
    );
}

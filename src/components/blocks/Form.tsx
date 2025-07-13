'use client';

import React, { useId, useState } from 'react';
import styles from '@/styles/blocks/Hero.module.scss';
import { InputMask } from '@react-input/mask';

export default function ParentForm() {
    const formId = useId();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        checkbox: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);


        fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // @ts-ignore
            body: new URLSearchParams(formData).toString()
        })
            .then(() => alert('success'))
            .catch(error => alert(error));
    };


    return (
        <form name="lead" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="lead-form" value="lead" />

            <div className={styles.inputs}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Как вас зовут?"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                />

                <InputMask
                    mask="+7 (___) ___-__-__"
                    replacement={{ _: /\d/ }}
                    value={form.phone}
                    name="phone"
                    onChange={handleChange}
                    required
                    placeholder="+7 (999) 999-99-99"
                />

                <div className={styles.checkboxWrapper}>
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        required
                        checked={form.checkbox}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkbox" onClick={e => e.preventDefault()}>
                        Я даю согласие на обработку персональных данных
                    </label>
                </div>
            </div>
            <button className="button" type="submit">Отправить заявку</button>
        </form>
    );
}

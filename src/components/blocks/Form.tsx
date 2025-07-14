'use client';

import React, { useState } from 'react';
import styles from '@/styles/blocks/Hero.module.scss';
import { InputMask } from '@react-input/mask';

export default function ParentForm() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        checkbox: false
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'phone') {
            setError(null);
        }
    };

    const isPhoneValid = (phone: string) => {
        return !phone.includes('_') && phone.length === 18;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isPhoneValid(form.phone)) {
            setError('Пожалуйста, полностью заполните номер телефона.');
            setSuccess(false);
            return;
        }

        // @ts-ignore
        const formData = new FormData(event.target);

        fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // @ts-ignore
            body: new URLSearchParams(formData).toString()
        })
            .then(() => {
                setSuccess(true);
                setError(null);
                setForm({
                    name: '',
                    phone: '',
                    checkbox: false
                });
            })
            .catch(() => {
                setError('Произошла ошибка при отправке формы. Попробуйте ещё раз.');
                setSuccess(false);
            });
    };

    return (
        <form name="lead" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="lead" />

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
                    autoComplete="tel"
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

            {error && (
                <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
            )}

            {success && (
                <p style={{ color: 'green', marginTop: '10px' }}>
                    Заявка успешно отправлена!
                </p>
            )}
        </form>
    );
}

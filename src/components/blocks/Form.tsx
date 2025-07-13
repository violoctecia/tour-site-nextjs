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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
        >
            <input type="hidden" name="form-name" value="contact" />

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

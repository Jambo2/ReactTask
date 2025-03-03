
import React, { useState } from 'react';
import axios from 'axios';

import './Auth.css'

const Auth = () => {
    const [formType, setFormType] = useState('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            if (formType === 'login') {
                const response = await axios.post('http://localhost:7000/auth/login', {
                    email,
                    password,
                });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('email', response.data.email);
                setMessage('Успешный вход!');
            } else {
                const response = await axios.post('http://localhost:7000/auth/registration', {
                    email,
                    password,
                    name,
                });
                setMessage(response.data.message || 'Регистрация завершена!');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Ошибка');
        }
    };

    return (
    <div className='block'>
        <div className="container">
            <h1>{formType === 'login' ? 'Авторизация' : 'Регистрация'}</h1>
            <form onSubmit={handleSubmit}>
                {formType === 'register' && (
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{formType === 'login' ? 'Войти' : 'Зарегистрироваться'}</button>
            </form>
            <p onClick={() => setFormType(formType === 'login' ? 'register' : 'login')}>
                {formType === 'login' ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
            </p>
            {message && <p>{message}</p>}
        </div>
    </div>
    );
};

export default Auth;

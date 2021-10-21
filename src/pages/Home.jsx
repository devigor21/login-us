import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Home.css';

export default function Home() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const validLogin = useSelector(({ login }) => login);
  const validPassword = useSelector(({ password }) => password);

  const handleValid = () => {
    login === validLogin && password === validPassword
      ? setDisabled(false)
      : setDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'SET_USER',
      payload: {
        login: login,
        password: password,
        loggedIn: true,
      },
    });
  };

  useEffect(() => {
    handleValid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login, password]);

  return (
    <div className="login">
      <form className="login-form">
        <h1>Введите логин и пароль</h1>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <button
          type="submit"
          disabled={isDisabled}
          onClick={handleSubmit}
          className="submit-btn"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

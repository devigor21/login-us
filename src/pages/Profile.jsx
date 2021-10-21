import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Profile() {
  const curentUser = useSelector(({ user }) => user.login);
  const loggedIn = useSelector(({ user }) => user.loggedIn);

  if (!loggedIn) {
    return <Redirect to="/not-auth" />;
  }

  return <h1>Добро пожаловать, {curentUser}</h1>;
}

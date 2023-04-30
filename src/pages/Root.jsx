import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Logo from '../assets/crown.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setUser, noUser } from '../features/user/user.slice';

export default function Root() {
  const dispatch = useDispatch();
  const { checkingUser } = useSelector((state) => state.user);

  const localToken = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    if (localToken) {
      getMe();
    } else {
      dispatch(noUser());
    }
  }, []);

  async function getMe() {
    try {
      const me = await axios.get('http://localhost:4000/user/profile', {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      });

      if (me.status !== 200) {
        return dispatch(noUser());
      } else {
        dispatch(
          setUser({
            token: localToken,
            username: me.data.profile.userName,
            checkingUser: false,
          })
        );
      }
    } catch (error) {
      dispatch(noUser());
    }
  }

  let markup;
  if (checkingUser) {
    markup = (
      <>
        <span
          style={{
            margin: 'auto',
            marginTop: '25%',
            marginLeft: '50%',
            display: 'block',
          }}>
          <img src={Logo} className='logo' alt='Logo' />
        </span>
      </>
    );
  } else {
    markup = (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  return <div className='root-component'>{markup}</div>;
}

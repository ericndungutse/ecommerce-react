import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/crown.svg';
import './header.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../features/user/user.slice';

export default function Header() {
  const { username } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(logOutUser());
    localStorage.removeItem('token');
  };
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={Logo} className='logo' alt='Logo' />
      </Link>

      <div className='options'>
        <NavLink className='option' to='/shop'>
          SHOP
        </NavLink>
        <NavLink className='option' to='/contact'>
          CONTACT
        </NavLink>

        {!username ? (
          <NavLink className='option' to='/signin'>
            SIGNIN
          </NavLink>
        ) : (
          <Link className='option' onClick={handleOnclick}>
            SIGNOUT
          </Link>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import axios from 'axios';
import './signin.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomBtn from '../custom-button/CustomBtn';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, noUser, logOutUser } from '../../features/user/user.slice';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setMsg] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/user/login', {
        email,
        password,
      });

      if (res.status === 200) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        console.log(res.data);
        dispatch(
          setUser({
            token: res.data.token,
            username: res.data.user.userName,
            checkingUser: false,
          })
        );
        navigate('/');
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
      setMsg(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      {errMsg && (
        <span
          style={{
            backgroundColor: '#FF0000',
            color: 'white',
            display: 'block',
            padding: '10px',
            margin: '20px 0',
            textAlign: 'center',
          }}>
          {errMsg}
        </span>
      )}

      <form action='' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          label='Email'
          onChange={handleOnChange}
          name='email'
          value={email}
        />

        <FormInput
          type='password'
          label='Password'
          onChange={handleOnChange}
          name='password'
          value={password}
        />

        <CustomBtn type='submit'>Submit Form</CustomBtn>
      </form>
    </div>
  );
}

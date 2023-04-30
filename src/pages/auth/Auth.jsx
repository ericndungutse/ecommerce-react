import Signin from '../../components/sign-in/Signin';
import './auth.styles.scss';

export default function Auth() {
  return (
    <>
      <div className='sign-in-and-sign-up'>
        <Signin />
        {/* <SignUp /> */}
      </div>
    </>
  );
}

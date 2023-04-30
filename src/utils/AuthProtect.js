import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AuthProtect({ children }) {
  const { signedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (signedIn) {
      navigate('/');
    }
  }, [navigate]);

  return children;
}

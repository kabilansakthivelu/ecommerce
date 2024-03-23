import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase";
import Login from '../pages/Login';

const withAuthentication = (wrappedComponent) => {
  const UpdatedComponent = () => {
    const [user] = useAuthState(auth);
    return user ? <wrappedComponent /> : <Login />;
  }
  return UpdatedComponent;
}

export default withAuthentication;
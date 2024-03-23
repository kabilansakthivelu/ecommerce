import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase";
import Login from '../pages/Login';

const withAuthentication = (WrappedComponent) => {
  const UpdatedComponent = () => {
    const [user] = useAuthState(auth);
    if (!user) {
      return <Login />;
    }
    return <WrappedComponent />;
  }
  return UpdatedComponent;
}

export default withAuthentication;
import { Link } from 'react-router-dom'
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h3 className="container--heading">Login</h3>
      <p className="container--sub-heading">Welcome back to ECOMMERCE</p>
      <p className="container-message">The next gen business marketplace</p>
      <form>
        <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        </div>
        <button>Login</button>
        <hr />
        <p>Don't have an account? <Link to="/register">SIGN UP</Link></p>
      </form>
    </div>
    );
};

export default Login;

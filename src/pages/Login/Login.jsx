import { Link } from 'react-router-dom'
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h3 className="container--heading">Login</h3>
      <p className="container--sub-heading">Welcome back to ECOMMERCE</p>
      <p className="container--message">The next gen business marketplace</p>
      <form>
        <div className="container--formField">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter" className="container--formField__input"/>
        </div>
      <div className="container--formField">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter" className="container--formField__input"/>
        </div>
        <button className="container--button">LOGIN</button>
        <hr />
        <p className="container--navigation">Don't have an Account? <Link to="/register">SIGN UP</Link></p>
      </form>
    </div>
    );
};

export default Login;

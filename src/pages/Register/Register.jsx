import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container">
      <h3 className="container--heading">Create your account</h3>
      <form>
        <div className="container--formField">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter" className="container--formField__input"/>
          </div>
        <div className="container--formField">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter" className="container--formField__input"/>
        </div>
      <div className="container--formField">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter" className="container--formField__input"/>
        </div>
        <button className="container--button">CREATE ACCOUNT</button>
        <hr />
        <p className="container--navigation">Have an Account? <Link to="/login">LOGIN</Link></p>
      </form>
    </div>
    );
};

export default Register;

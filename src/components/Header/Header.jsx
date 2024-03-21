import { CiSearch , CiShoppingCart} from "react-icons/ci";
import { HEADER_TABS } from "./constants";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="userInfo--section">
        <span>Help</span>
        <span>Orders & Returns</span>
        <span>Hi, John </span>
      </div>
      <div className="general--section">
      <h3 className="logo">ECOMMERCE</h3>
      <ul className="menu--tabs">
        {HEADER_TABS.map((tab) => {
          const { id, name } = tab;
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <div className="header--icons">
      <CiSearch />
      <CiShoppingCart />
        </div>
        </div>
    </header>
  );
};

export default Header;

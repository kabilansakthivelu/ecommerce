import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { auth } from "../../firebase";
import { HEADER_TABS } from "./constants";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const renderMenuList = () => {
    return HEADER_TABS.map((tab) => {
      const { id, name } = tab;
      return <li key={id}>{name}</li>;
    });
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
    if (isMobileView) {
      setShowMenuOverlay(false);
    }
  };

  const renderLogoutButton = () => {
    if(user) {
    return (
      <button className="logout--button" onClick={handleLogout}>
        Logout
      </button>
    );
    }
    return;
  };

  const renderMobileContent = () => {
    return (
      <header className="mobile-header">
        <GiHamburgerMenu onClick={() => setShowMenuOverlay(true)} />
        <h3 className="mobile-logo">ECOMMERCE</h3>
      </header>
    );
  };

  const renderDesktopContent = () => {
    return (
      <header className="header">
        <div className="userInfo--section">
          <span>Help</span>
          <span>Orders & Returns</span>
          {user && <span>Hi, John </span>}
          {renderLogoutButton()}
        </div>
        <div className="general--section">
          <h3 className="logo">ECOMMERCE</h3>
          <ul className="menu--tabs">{renderMenuList()}</ul>
          <div className="header--icons">
            <CiSearch />
            <CiShoppingCart />
          </div>
        </div>
      </header>
    );
  };

  const renderMenuOverlay = () => {
    return (
      <section className="menu-overlay">
        <CgClose onClick={() => setShowMenuOverlay(false)} />
        {user && <p className="mobile-profile">Hi, John </p>}
        <ul className="mobile-menu--tabs">{renderMenuList()}</ul>
        {renderLogoutButton()}
      </section>
    );
  };

  return (
    <section>
      {isMobileView ? renderMobileContent() : renderDesktopContent()}
      {showMenuOverlay && renderMenuOverlay()}
    </section>
  );
};

export default Header;

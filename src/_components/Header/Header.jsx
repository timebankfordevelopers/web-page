import React from "react";
import Logo from '../../assets/logo/logo.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={Logo} className="header__logo-box__logo" alt="logo" />
        <div className="header__logo-box__company">Share your time</div>
      </div>
      <div className="header__welcome-box"></div>
    </div>
  );
};


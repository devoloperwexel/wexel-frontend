"use client";

import Link from "next/link";
import { useState } from "react";

const Header = ({ handleOpen, handleRemove, openClass, addClass }: any) => {
  const [scroll, setScroll] = useState(0);
  const [isSearchToggled, setSearchToggled] = useState(false);
  const [isLanguageToggled, setLanguageToggled] = useState(false);
  const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
  const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);

  return (
    <header
      className={`${
        scroll ? "header sticky-bar stick" : "header sticky-bar"
      } ${addClass}`}
    >
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <img alt="Ecom" src="/images/logo.svg" />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/signin">Services</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>

                  <li>
                    <Link href="/">Company</Link>
                  </li>
                </ul>
              </nav>

              <div
                className={`burger-icon burger-icon-white ${
                  openClass && "burger-close"
                }`}
                onClick={() => {
                  handleOpen();
                  handleRemove();
                }}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>

            <div className="header-right">
              <div
                className="d-inline-block box-dropdown-cart"
                onClick={toggleLanguageTrueFalse}
              >
                <span className="font-lg icon-list icon-account">
                  <span className="font-lg color-grey-900 arrow-down">EN</span>
                </span>
                <div
                  className={
                    isLanguageToggled
                      ? "dropdown-account dropdown-open"
                      : "dropdown-account"
                  }
                >
                  <ul>
                    <li>
                      <Link className="font-md" href="#">
                        <img src="assets/imgs/template/icons/en.png" />
                        English
                      </Link>
                    </li>
                    <li>
                      <Link className="font-md" href="#">
                        <img src="assets/imgs/template/icons/fr.png" />
                        German
                      </Link>
                    </li>
                    <li>
                      <Link className="font-md" href="#">
                        <img src="assets/imgs/template/icons/cn.png" />
                        French
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-none d-sm-inline-block">
                <Link className="btn btn-brand-1 hover-up" href="register">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

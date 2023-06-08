import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import tag from "/public/images/icon/btn/tag.png";
import logo from "/public/images/logo.webp";

const Header = () => {
  const [open, setOpen] = useState("");
  const [windowHeight, setWindowHeight] = useState(0);
  const [show, setShow] = useState(false);

  const handleOpen = (e) => {
    if (open !== e.target.text) {
      setOpen(e.target.text);
    } else {
      setOpen("");
    }
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      id="gotoTop"
      className={`header ${
        windowHeight > 50 && "menu-fixed animated fadeInDown"
      }`}
    >
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-xl p-0 align-items-center">
            <Link href="/" className="site-logo site-title">
              <Image height={256} width={256} src={logo} alt="logo" />
              <span className="logo-icon">
                <i className="flaticon-fire"></i>
              </span>
            </Link>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              onClick={() => setShow(!show)}
            >
              <span className="menu-toggle"></span>
            </button>
            <div className={`collapse navbar-collapse ${show && "show"}`}>
              <ul className="navbar-nav main-menu ms-auto">
                <li
                  className={`menu_has_children ${
                    open === "Home" ? "open" : ""
                  }`}
                >
                  <Link href="/#" onClick={(e) => handleOpen(e)}>
                    Home
                  </Link>
                </li>
                <li
                  className={`menu_has_children ${
                    open === "Contest" ? "open" : ""
                  }`}
                >
                  <Link href="/mint" onClick={(e) => handleOpen(e)}>
                    Buy
                  </Link>
                </li>
                <li>
                  <Link href="/winner" onClick={() => setShow(false)}>
                    Winners
                  </Link>
                </li>
                <li
                  className={`menu_has_children ${
                    open === "pages" ? "open" : ""
                  }`}
                >
                  <Link href="#0" onClick={(e) => handleOpen(e)}>
                    pages
                  </Link>
                  <ul className="sub-menu">
                    {[
                      ["Affiliate Page", "/affiliate"],
                      ["How it works", "/how-work"],
                      ["User Panel", "/user"],
                      ["FAQ Page", "/faq"],
                      ["404 Page", "/404"],
                    ].map(([itm, url], i) => (
                      <li key={i}>
                        <Link href={url} onClick={() => setShow(false)}>
                          {itm}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setShow(false)}>
                    contact
                  </Link>
                </li>
              </ul>
              <div className="nav-right">
                <Link href="/contest" className="cmn-btn style--three btn--sm">
                  <Image src={tag} alt="icon" className="me-1" /> Buy Tickets
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

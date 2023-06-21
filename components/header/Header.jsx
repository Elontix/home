import { Link as Links } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import logo from "/public/images/logo.webp";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState("");
  const [windowHeight, setWindowHeight] = useState(100);
  const [show, setShow] = useState(false);
  console.log(router.pathname !== "/");

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
      // setWindowHeight(height);
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

  const items = [
    <li key={0}>
      <Links
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Home
      </Links>
    </li>,
    <li key={9}>
      <Links
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        About
      </Links>
    </li>,
    <li key={1}>
      <Links
        activeClass="active"
        to="roadmap"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Roadmap
      </Links>
    </li>,
    <li key={2}>
      <Links
        activeClass="active"
        to="token"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Tokenomics
      </Links>
    </li>,
    <li key={3}>
      <Links
        activeClass="active"
        to="team"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Team
      </Links>
    </li>,
    <li
      key={4}
      className={`menu_has_children ${open === "Home" ? "open" : ""}`}
    >
      <Link href="/#" onClick={(e) => handleOpen(e)}>
        Papers
      </Link>
      <ul className="sub-menu">
        {[
          ["White Paper", "https://whitepaper.elontix.io/"],
          ["KYC", "/"],
        ].map(([itm, url], i) => (
          <li key={i}>
            <Link target="_blank" href={url} onClick={() => setShow(false)}>
              {itm}
            </Link>
          </li>
        ))}
      </ul>
    </li>,
  ];

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
              <Image height={212} width={212} src={logo} alt="logo" />
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
                {router.pathname === "/" ? (
                  [...items]
                ) : (
                  <li>
                    <Link href="/" onClick={(e) => handleOpen(e)}>
                      Home
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/winner" onClick={() => setShow(false)}>
                    Winners
                  </Link>
                </li>
              </ul>

              <div className="nav-right">
                <Link
                  href="/mint"
                  // data-bs-toggle="modal"
                  // data-bs-target="#loginModal"
                  className="cmn-btn"
                >
                  Join Presale
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

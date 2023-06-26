import { Link as Links } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import logo from "/public/images/logo.webp";
import { useRouter } from "next/router";
import { FaDiscord, FaMedium, FaTelegram, FaTwitter } from "react-icons/fa";
import { colors } from "../../theme/color";
import PS from "/public/images/ps_l.png";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState("");
  const [windowHeight, setWindowHeight] = useState(100);
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

    <li key={10}>
      <Links
        activeClass="active"
        to="utils"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Utilites
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
        Docs
      </Link>
      <ul className="sub-menu">
        {[
          ["White Paper", "https://whitepaper.elontix.io/"],
          [
            "KYC",
            "https://verified.assuredefi.com/projects?recordId=recCBLklWKzl9SAWS",
          ],
          [
            "Audit",
            "https://github.com/CFG-NINJA/audits/blob/9ce4b97c0c78532ae115bb16dc93f31b6b0df0ea/20230622_CFGNINJA_ElonTix_ELONTIX_Audit.pdf",
          ],
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
              </ul>

              <div className="nav-right">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem 0",
                  }}
                >
                  <div
                    style={{
                      maxHeight: "50px",
                      width: "160px",
                      margin: "auto",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1rem 0",
                      position: "relative",
                      boxShadow: `0px 0px 4px ${colors.baseColor}`,
                      borderRadius: "40rem",
                    }}
                    className="pinksale_butt"
                  >
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-10%",
                        right: "20%",
                        background: colors.baseColor,
                        color: colors.bgOne,
                        fontWeight: "bold",
                        padding: ".1rem .25rem",
                        borderRadius: "1rem",
                        fontSize: "0.55rem",
                      }}
                    >
                      Coming Soon
                    </span>
                    <Image
                      style={{
                        objectFit: "contain",
                        padding: "1rem",
                        maxWidth: "100%",
                      }}
                      src={PS}
                      alt="ps"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              columnGap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
              padding: 0,
              padding: "1rem",
              borderBottomLeftRadius: "1rem",
              background: colors.bgOne,
            }}
            className=" socials_custom"
          >
            <Link
              target={"_blank"}
              className="soc_hover"
              href="https://t.me/elontix"
            >
              <FaTelegram size={32} />
            </Link>
            <Link
              target={"_blank"}
              className="soc_hover"
              href="https://twitter.com/TixElon"
            >
              <FaTwitter size={32} />
            </Link>
            <Link
              target={"_blank"}
              className="soc_hover"
              href="https://whitepaper.elontix.io/"
            >
              <FaMedium size={32} />
            </Link>
            <Link
              target={"_blank"}
              className="soc_hover"
              href="https://twitter.com/TixElon"
            >
              <FaDiscord size={32} />
            </Link>
            <Link
              target={"_blank"}
              className="soc_hover"
              href="https://t.me/elontix"
            >
              <FaTelegram size={32} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

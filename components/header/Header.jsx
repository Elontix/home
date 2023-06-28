import { Link as Links } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import logo from "/public/images/logo.webp";
import { useRouter } from "next/router";
import { FaDiscord, FaMedium, FaTelegram, FaTwitter } from "react-icons/fa";
import { colors } from "../../theme/color";

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
    <li
      key={4}
      className={`menu_has_children ${open === "Home" ? "open" : ""}`}
    >
      <Link href="/#" onClick={(e) => handleOpen(e)}>
        NFTs
      </Link>
      <ul className="sub-menu">
        {[
          ["Mint", "/mint"],
          ["Collection", "/collection"],
          ["Winners", "/winner"],
        ].map(([itm, url], i) => (
          <li key={i}>
            <Link href={url} onClick={() => setShow(false)}>
              {itm}
            </Link>
          </li>
        ))}
      </ul>
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
      } `}
    >
      <div
        className="header__bottom"
        style={{
          background: colors.bgOne,
          boxShadow: `0px 0px 4px ${colors.bgTwo}`,
        }}
      >
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

              <Link href="/mint" className="pl-2">
                <button class="cmn-btn" style={{ borderRadius: "40rem" }}>
                  MINT TICKETS
                </button>
              </Link>
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
              boxShadow: `0px 0px 4px ${colors.baseColor}`,
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

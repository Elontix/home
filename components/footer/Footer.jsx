import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaDiscord,
  FaMedium,
} from "react-icons/fa";
import round_shape_2 from "/public/images/elements/round-shape-2.png";
import store_btn_1 from "/public/images/icon/store-btn/1.png";
import store_btn_2 from "/public/images/icon/store-btn/2.png";
import elon from "/public/images/elon.png";
import { colors } from "../../theme/color";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="bg-shape--top">
        <Image src={round_shape_2} alt="image" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscribe-area">
              <div className="left">
                <span className="subtitle">Subscribe to Elontix</span>
                <h3 className="title">To Get Exclusive Benefits</h3>
              </div>
              <div className="right">
                <form className="subscribe-form">
                  <input
                    type="email"
                    name="subscribe_email"
                    id="subscribe_email"
                    placeholder="Enter Your Email"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: "3rem" }}>
        <div className="row">
          <div className="col-lg-4">
            <Image style={{ maxWidth: "360px" }} src={elon} alt="elon" />
          </div>
          <div
            className="col-lg-8"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              rowGap: "2rem",
            }}
          >
            <ul className="short-links justify-content-lg-end justify-content-center">
              <li>
                <Link style={{ color: colors.baseColor }} href="/#">
                  ElonTix
                </Link>
              </li>
              <li>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Partners
                </Link>
              </li>
              <li>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Tokenomics
                </Link>
              </li>
            </ul>

            <div
              style={{ columnGap: "1rem" }}
              className="social-links justify-content-lg-end justify-content-center"
            >
              <Link href="/#">
                <FaTelegram size={32} />
              </Link>
              <Link href="/#">
                <FaTwitter size={32} />
              </Link>
              <Link href="/#">
                <FaDiscord size={32} />
              </Link>
              <Link href="/#">
                <FaInstagram size={32} />
              </Link>
              <Link href="/#">
                <FaReddit size={32} />
              </Link>
              <Link href="/#">
                <FaMedium size={32} />
              </Link>
            </div>

            <div className="pb-5 social-links justify-content-lg-end justify-content-center">
              <p className="copy-right-text text-lg-start text-center mb-lg-0 mb-3">
                Copyright © 2023.All Rights Reserved By{" "}
                <Link style={{ color: colors.baseColor }} href="/">
                  Elontix
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

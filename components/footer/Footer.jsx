import Link from "next/link";
import Image from "next/image";

import {
  FaTwitter,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaDiscord,
  FaMedium,
} from "react-icons/fa";

import elon from "/public/images/logo.webp";
import round_shape_2 from "/public/images/elements/round-shape-2.png";

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
      <div className="container" style={{ padding: "3rem 0" }}>
        <div className="pt-120 row">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
            className="col-lg-4"
          >
            <Image
              className="footer_img"
              style={{
                margin: 0,
                maxWidth: "360px",
              }}
              src={elon}
              alt="elon"
            />
          </div>
          <div
            className="col-lg-4"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "2rem",
            }}
          >
            <div className="row">
              <ul
                className="short-links justify-content-lg-end justify-content-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Link style={{ color: colors.baseColor }} href="/#">
                  ElonTix
                </Link>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Partners
                </Link>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Whitepaper
                </Link>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Roadmap
                </Link>
                <Link style={{ color: colors.baseColor }} href="/#">
                  Tokenomics
                </Link>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
              rowGap: "2rem",
            }}
            className="col-4"
          >
            <div className="social-links justify-content-center">
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

              <p className="py-4 copy-right-text text-lg-start text-center mb-lg-0 mb-3">
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

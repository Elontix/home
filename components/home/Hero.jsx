import Link from "next/link";
import Image from "next/image";

import e from "/public/images/elements/hero-2-star.png";
import elon from "/public/images/elon.png";
import elon_bg from "/public/images/elon_bg.png";
import hero_2_e4 from "/public/images/elements/hero-2-e4.png";
import hero_2_e3 from "/public/images/elements/hero-2-e3.png";
import hero_4_obj from "/public/images/elements/hero-4-obj.png";
import hero_4_circle from "/public/images/elements/hero-4-circle.png";
import ticket from "/public/images/crypto/tickets.gif";
import _bg from "/public/images/life.png";

import VedioModal from "../vedioModal/VedioModal";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { colors } from "../../theme/color";

import { motion } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VedioModal
        link="https://www.youtube.com/embed/d6xn5uflUjg"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section style={{ paddingBottom: 0 }} className="hero style--three">
        <div
          style={{
            transform: "scale(-1,1)",
            opacity: 0.07,
            right: "5%",
            top: "7%",
          }}
          className="hero__circle"
        >
          <Image
            style={{
              height: "720px",
              width: "100%",
            }}
            src={elon_bg}
            alt="image"
          />
        </div>

        <div
          style={{
            opacity: 0.07,
            left: "5%",
            top: "7%",
          }}
          className="hero__circle"
        >
          <Image
            style={{
              height: "720px",
              width: "100%",
            }}
            src={elon_bg}
            alt="image"
          />
        </div>
        <div className="hero__circle">
          <Image src={hero_4_circle} alt="image" />
        </div>
        <div className="hero__obj">
          <Image style={{ opacity: 0.33 }} src={hero_4_obj} alt="image" />
        </div>
        <div
          style={{
            top: "550px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          className="hero__obj"
        >
          <Image style={{ marginTop: "400px" }} src={hero_2_e4} alt="image" />
          <Image src={hero_2_e3} alt="image" />
          <Image style={{ marginTop: "300px" }} src={hero_2_e3} alt="image" />
          <Image style={{ marginTop: "-100px" }} src={hero_2_e3} alt="image" />
        </div>

        <div
          style={{
            top: "200px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            columnGap: "4rem",
            alignItems: "center",
          }}
          className="hero__obj"
        >
          <Image style={{ marginTop: "400px" }} src={e} alt="image" />
          <Image style={{ marginTop: "-400px" }} src={e} alt="image" />
          <Image style={{ marginTop: "100px" }} src={e} alt="image" />
          <Image style={{ marginTop: "500px" }} src={e} alt="image" />
          <Image style={{ marginTop: "-300px" }} src={e} alt="image" />
          <Image style={{ marginTop: "-200px" }} src={e} alt="image" />
          <Image style={{ marginTop: "-500px" }} src={e} alt="image" />
          <Image style={{ marginTop: "600px" }} src={e} alt="image" />
        </div>

        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              marginBottom: "1rem",
            }}
          >
            <Image
              style={{
                position: "absolute",
                top: "-170px",
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                maxWidth: "380px",
              }}
              src={ticket}
              alt="image"
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div style={{ display: "flex", justifyContent: "center" }}>
                {[
                  "Y",
                  "o",
                  "u",
                  "r",
                  "\u00A0",
                  "L",
                  "i",
                  "f",
                  "e",
                  "\u00A0",
                  "t",
                  "i",
                  "m",
                  "e",
                  "\u00A0",
                  "M",
                  "e",
                  "m",
                  "e",
                  "\u00A0",
                  "T",
                  "i",
                  "c",
                  "k",
                  "e",
                  "t",
                ].map((s, i) => (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    key={i}
                  >
                    <h3 className={i > 14 ? "tag" : ""}> {s}</h3>
                  </motion.div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="main_txt_under gd_text">
                  WIN{" "}
                  <span>
                    {["B", "N", "B", "s"].map((b, k) => (
                      <motion.div
                        style={{
                          display: "inline-block",
                        }}
                        key={k}
                        initial={{
                          sacle: 0,
                          textShadow: `0px 0px 4px rgba(255, 255, 255, 1)`,
                        }}
                        animate={{
                          scale: 1,
                          textShadow: `0px 0px 32px rgba(255, 255, 255, .1)`,
                        }}
                        transition={{
                          type: "keyframes",
                          stiffness: 860,
                          damping: 60,
                          delay: k * 0.1,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        className="main_txt_under gd_text"
                      >
                        {b}
                      </motion.div>
                    ))}
                  </span>
                  {"\u00A0"}
                  EVERY WEEK FOR
                  {"\u00A0"}
                  <span>
                    {["L", "I", "F", "E"].map((b, k) => (
                      <motion.div
                        style={{
                          display: "inline-block",
                        }}
                        key={k}
                        initial={{
                          sacle: 0,
                          rotate: 0,
                          textShadow: `0px 0px 4px rgba(255, 255, 255, .8)`,
                        }}
                        animate={{
                          scale: 1,
                          textShadow: `0px 0px 16px rgba(255, 255, 255, .2)`,
                        }}
                        transition={{
                          type: "keyframes",
                          stiffness: 860,
                          damping: 60,
                          delay: k * 0.1,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        className="main_txt_under gd_text"
                      >
                        {b}
                      </motion.div>
                    ))}
                  </span>
                </div>
              </div>
              <p style={{ color: "white" }} className="main_txt_under_sub">
                {`World's`} #1 Decentralized{" "}
                <span>
                  <p
                    className="main_txt_under_sub tag"
                    style={{
                      textShadow: `2px 2px 5px ${colors.baseColorTwo}`,
                    }}
                  >
                    Meme lottery
                  </p>{" "}
                </span>{" "}
                platform.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "2rem",
                }}
              >
                <Link href="/contest" class="btn_x draw-border">
                  Participate Now
                </Link>
                <Link href="/contest" class="btn_y secondary">
                  Participate Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2rem",
            }}
          >
            <Image src={elon} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

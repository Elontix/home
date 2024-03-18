import Link from "next/link";
import Image from "next/image";
import Dex from "/public/dex.png";

import PS from "/public/images/ps_l.png";

import e from "/public/images/elements/hero-2-star.png";
import elon from "/public/images/elon.webp";
import elon_bg from "/public/images/elon_bg.png";
import hero_2_e4 from "/public/images/elements/hero-2-e4.png";
import hero_2_e3 from "/public/images/elements/hero-2-e3.png";
import hero_4_obj from "/public/images/elements/hero-4-obj.png";
import hero_4_circle from "/public/images/elements/hero-4-circle.png";
import ticket from "/public/images/ticket.gif";

import VedioModal from "../vedioModal/VedioModal";

import { useState } from "react";

import { motion } from "framer-motion";
import { colors } from "../../theme/color";
import { DEX } from "../../data/dex";

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
          <Image
            className="hero__obj_h"
            style={{ marginTop: "400px" }}
            src={hero_2_e4}
            alt="image"
          />
          <Image src={hero_2_e3} alt="image" />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "300px" }}
            src={hero_2_e3}
            alt="image"
          />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "-100px" }}
            src={hero_2_e3}
            alt="image"
          />
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
          <Image
            className="hero__obj_h"
            style={{ marginTop: "400px" }}
            src={e}
            alt="image"
          />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "-400px" }}
            src={e}
            alt="image"
          />
          <Image style={{ marginTop: "100px" }} src={e} alt="image" />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "500px" }}
            src={e}
            alt="image"
          />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "-300px" }}
            src={e}
            alt="image"
          />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "-200px" }}
            src={e}
            alt="image"
          />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "-500px" }}
            src={e}
            alt="image"
          />
          <Image
            className="hero__obj_h"
            style={{ marginTop: "600px" }}
            src={e}
            alt="image"
          />
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
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
              }}
              className="hero_img_ticket"
              src={ticket}
              alt="image"
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                style={{
                  color: "white",
                  marginTop: "1rem",
                  marginBottom: ".5rem",
                }}
                className="main_txt_under_sub"
              >
                {`World's`} #1{" "}
                <span>
                  <div className="main_txt_under_sub tag ">
                    {[
                      "S",
                      "O",
                      "L",
                      "A",
                      "N",
                      "A",
                      "\u00A0",
                      "N",
                      "F",
                      "T",
                    ].map((b, k) => (
                      <motion.div
                        style={{
                          display: "inline-block",
                          fontWeight: "bolder",
                        }}
                        key={k}
                        initial={{
                          scale: 1.5,
                          y: 3,
                        }}
                        animate={{
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: k * 0.1,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      >
                        {b}
                      </motion.div>
                    ))}
                  </div>{" "}
                </span>{" "}
                Raffle platform
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="main_txt_under gd_text mb-3">
                  WIN{" "}
                  <span>
                    {["E", "T", "H", "s"].map((b, k) => (
                      <motion.div
                        style={{
                          display: "inline-block",
                        }}
                        key={k}
                        initial={{
                          textShadow: `0px 0px 4px rgba(255, 255, 255, 1)`,
                        }}
                        animate={{
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
                  EVERY DAY FOR
                  {"\u00A0"}
                  <span>
                    {["L", "I", "F", "E"].map((b, k) => (
                      <motion.div
                        style={{
                          display: "inline-block",
                        }}
                        key={k}
                        initial={{
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

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {[
                    "B",
                    "u",
                    "y",
                    "\u00A0",
                    "1",
                    "\u00A0",
                    "$",
                    "E",
                    "T",
                    "I",
                    "X",
                    "\u00A0",
                    "n",
                    "o",
                    "w",
                    "\u00A0",
                    "&",
                    "\u00A0",
                    "w",
                    "i",
                    "n",
                    "\u00A0",
                    "u",
                    "p",
                    "t",
                    "o",
                    "\u00A0",
                    "1",
                    "\u00A0",
                    "E",
                    "T",
                    "H",
                    "\u00A0",
                    "p",
                    "e",
                    "r",
                    "\u00A0",
                    "w",
                    "e",
                    "e",
                    "k",
                  ].map((s, i) => (
                    <h3
                      key={i}
                      className={
                        (i > 3 && i < 12) || (i > 26 && i < 32)
                          ? "tag mint_txt"
                          : "mint_txt"
                      }
                    >
                      {" "}
                      {s}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            className="btn_grp"
            href={DEX}
            // target={"_blank"}
            style={{
              display: "flex",
              maxWidth: "230px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                margin: "2rem auto auto auto",
                borderRadius: "2rem",
                cursor: "pointer",
              }}
              className="pinksale_butt"
            >
              <Image
                src={Dex}
                style={{
                  padding: "1rem",
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  bottom: "-5px",
                  right: "0px",
                  position: "absolute",
                  background: "#A2FF86",
                  color: colors.bgOne,
                  display: "flex",
                  justifySelf: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  zIndex: 4,
                  padding: "0 1rem",
                  borderRadius: ".2rem",
                  fontSize: "0.66rem",
                }}
              >
                LIVE NOW
              </span>
            </div>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 0",
          }}
        ></div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image className="px-5" src={elon} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

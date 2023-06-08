import Link from "next/link";
import Image from "next/image";

import e from "/public/images/elements/hero-2-star.png";
import elon from "/public/images/elon.png";
import hero_2_e4 from "/public/images/elements/hero-2-e4.png";
import hero_2_e3 from "/public/images/elements/hero-2-e3.png";

import VedioModal from "../vedioModal/VedioModal";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

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
        {/* <div className="hero__circle">
          <Image src={hero_4_circle} alt="image" />
        </div> */}
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

        <div className="container pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  rowGap: "2rem",
                }}
              >
                <div className="">Try Your Luck!</div>
                <h2 className="">Win Your Dream Car</h2>
                <p>
                  Don&#39;t miss your chance.Will you be our next lucky winner?
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "2rem",
                  }}
                >
                  <Link href="/contest" className="cmn-btn">
                    Participate Now
                  </Link>
                  <button className="video-btn" onClick={() => setIsOpen(true)}>
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src={elon} alt="image" />
        </div>
      </section>
    </>
  );
};

export default Hero;

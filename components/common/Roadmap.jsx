import Image from "next/image";
import { useState } from "react";

import roadmapData from "../../data/roadmap";
import { colors } from "../../theme/color";
import RoadMapCard from "../cards/RoadmapCard";
import elon from "/public/images/roadmap.png";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(roadmapData);
  return (
    <section className="latest-winner-section position-relative pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center"></div>
          </div>
        </div>
        <div className="row">
          <div className="row mb-none-30">
            <div className="col-lg-4 mb-30">
              <div
                style={{ background: "none" }}
                className="number-check-wrapper"
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image style={{ maxWidth: "80%" }} src={elon} alt="elon" />
                </div>
                <div className="neu_grad">
                  <h2 className="tag">Our roadmap</h2>
                  <h6 style={{ lineHeight: "1.4" }}>
                    Clear goals, great planning, flawless execution.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mb-30">
              {roadmap.map((road, index) => (
                <RoadMapCard key={index} index={index} roadmap={road} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

import Image from "next/image";
import { useState } from "react";

import roadmapData from "../../data/roadmap";
import RoadMapCard from "../cards/RoadmapCard";
import elon from "/public/images/roadmap.webp";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(roadmapData);
  return (
    <section className="latest-winner-section position-relative pt-120">
      <div className="container">
        <div className="row justify-content-center"></div>
        <div className="col-lg-8"></div>
        <div
          className="row
        "
        >
          <div className="row p-0 m-0">
            <div className="col-lg-4 ">
              <div
                style={{ background: "none" }}
                className="number-check-wrapper"
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    className="neu_grad_img"
                    style={{ maxWidth: "80%" }}
                    src={elon}
                    alt="elon"
                  />
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

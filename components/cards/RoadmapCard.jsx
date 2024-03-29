import { colors } from "../../theme/color";
import {
  MdOutlineDoneOutline,
  MdOutlinePending,
  MdOutlineWatchLater,
} from "react-icons/md";

const RoadmapCard = ({ roadmap, index }) => {
  const { title, works, status, done } = roadmap;
  function bgReturn(s) {
    if (s === "IN_PROGRESS") return "#ffb200";
    if (s === "DONE") return "#1B9C85";
    if (s === "LATER") return "#DDE6ED";
  }

  function iconReturs(s) {
    if (s === "IN_PROGRESS")
      return <MdOutlinePending size={64} color={"#F79327"} />;
    if (s === "DONE")
      return <MdOutlineDoneOutline size={64} color={"#98D8AA"} />;
    if (s === "LATER")
      return <MdOutlineWatchLater size={64} color={"#EEEEEE"} />;
  }

  return (
    <div
      style={{
        borderRadius: "1rem",
        background: colors.bgOne,
        boxShadow: `2px 2px 5px ${colors.baseColorTwo}, -2px -2px 5px ${colors.baseColor}`,
      }}
      className="winner-card mb-30"
    >
      <div className="winner-card__content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "1rem",
            padding: "1rem 1rem",
          }}
          className="content-top"
        >
          {/* {iconReturs(status)} */}
          <h3>
            Phase {index + 1}
            {"\u00A0"}-{"\u00A0"}
            <span>
              <h3 className="tag">{title}</h3>
            </span>
          </h3>
        </div>
        <div className="content-bottom">
          {works.map((s, i) => (
            <div
              style={{
                display: "flex",
                rowGap: "1rem",

                columnGap: "1rem",
              }}
              key={i}
            >
              <div
                className="roadmap_card_text"
                style={{
                  boxShadow: `3px 3px 6px ${colors.baseColorTwo}, -3px -3px 6px black`,
                  border: `1px solid black`,
                  padding: ".5rem",
                  margin: ".2rem",
                  background:
                    done !== null && done > i ? "#1B9C85" : bgReturn(status),
                  borderRadius: ".3rem",
                  color: colors.bgOne,
                }}
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;

import { colors } from "../../theme/color";
import TickColor from "./TickColor";

export default function ChartText(props) {
  return (
    <div
      className="tokenomics_card_text"
      style={{
        width: "100%",
        background: colors.baseColorTwo,
        borderRadius: ".5rem",
        padding: ".5rem",
        color: "#ffffff",
        display: "flex",
        columnGap: ".5rem",
        alignItems: "center",
      }}
    >
      <TickColor bg={props.bg} /> <div>{props.text}</div>
    </div>
  );
}

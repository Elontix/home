import Image from "next/image";
import { useEffect, useState } from "react";
import { colors } from "../../theme/color";

const ContestCard = ({ itm }) => {
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  function typeColor(type) {
    if (type === "DIAMOND") return "#b9f2ff";
    if (type === "GOLD") return "#FFD700";
    if (type === "SILVER") return "#C0C0C0";
    if (type === "BRONZE") return " #CD7F32";
  }

  useEffect(() => {
    nftIdentifier();
  }, []);

  function nftIdentifier() {
    let stripedToken = itm.id;
    // diamond
    if (stripedToken < 5000) {
      setPrice(0.2);
      setType("DIAMOND");
    }
    // gold
    if (stripedToken > 5000 && stripedToken < 20000) {
      setPrice(0.1);
      setType("GOLD");
    }
    // silver
    if (stripedToken > 20000 && stripedToken < 50000) {
      setPrice(0.05);
      setType("SILVER");
    }
    // bronze
    if (stripedToken > 50000) {
      setPrice(0.03);
      setType("BRONZE");
    }
  }

  return (
    <div
      style={{
        borderRadius: "1rem",
        boxShadow: `0px 0px 4px ${colors.baseColor}`,
      }}
    >
      <div
        style={{
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem",
          boxShadow: `0px 0px 4px ${colors.baseColor}`,
          padding: 0,
          margin: 0,
          background: typeColor(type),
          borderBottom: `16px solid ${colors.bgOne}`,
        }}
      >
        <Image
          loader={() => itm.img}
          width={856}
          height={428}
          src={itm.img}
          alt={itm.title}
          className="contest_img"
        />
      </div>
      <div
        style={{
          background: typeColor(type),
          borderBottomRightRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          padding: "1rem 0",
        }}
      >
        <h3
          style={{ color: colors.bgOne, fontWeight: "bold" }}
          className="contest-card__name px-4"
        >
          {itm.title}
        </h3>
        <p
          style={{ lineHeight: 1, textAlign: "left", color: colors.bgOne }}
          className="tag mb-2 mt-1 px-4"
        >
          ${itm.ticket_price}
        </p>
        <div
          style={{
            borderTop: `16px solid ${colors.bgOne}`,
          }}
        ></div>
        <div
          style={{
            background: colors.bgOne,
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "1rem auto 0 auto",
          }}
        >
          <h4 style={{ color: colors.baseColor }}>{price.toFixed(2)}BNB</h4>
          <h4 style={{ color: typeColor(type) }}>{type}</h4>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;

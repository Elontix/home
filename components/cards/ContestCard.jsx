import Image from "next/image";
import { useEffect, useState } from "react";
import { colors } from "../../theme/color";

const ContestCard = ({ id, address }) => {
  return (
    <div
      style={{
        borderRadius: "1rem",
      }}
    >
      <div
        style={{
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem",
          padding: 0,
          margin: 0,
          background: colors.bgOne,
        }}
      >
        <Image
          loader={() => nft.image}
          width={856}
          height={428}
          src={nft.image}
          alt={nft.title}
          className="contest_img"
        />
      </div>
      <div
        style={{
          borderBottomRightRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          padding: "1rem 0",
          backgroundImage: `linear-gradient(to bottom, #27374d, #2b3a50, #2f3c53, #333f56, #374259)`,
        }}
      >
        <h2
          style={{ color: typeColor(type), fontWeight: "bold" }}
          className="contest-card__name px-4"
        >
          {nft.name}
        </h2>
        <div
          style={{
            borderTop: `16px solid ${typeColor(type)}`,
          }}
        ></div>
        <div
          style={{
            padding: "0 1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "1rem auto 0 auto",
          }}
        >
          <h4 style={{ color: colors.baseColor }}>Ticket Type</h4>
          <h4 style={{ color: typeColor(type) }}>{type}</h4>
        </div>

        <div
          style={{
            padding: "0 1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h4 style={{ color: colors.baseColor }}>Price</h4>
          <h4 style={{ color: typeColor(type) }}>{price.toFixed(2)}BNB</h4>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;

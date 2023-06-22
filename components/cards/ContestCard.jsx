import Image from "next/image";
import { useEffect, useState } from "react";
import { bscTestnet } from "viem/chains";
import { useContractRead } from "wagmi";
import { MintAPi } from "../../pages/api/mint/mint";
import { colors } from "../../theme/color";

const ContestCard = ({ id, address }) => {
  const {
    data: tokenUriData,
    error: tokenUriError,
    isError: tokenUriIsError,
    isSuccess: tokenUriIsSuccess,
  } = useContractRead({
    address: MintAPi.getAddress(false),
    abi: MintAPi.getMintAbi(false),
    args: [id],
    functionName: "tokenURI",
    chainId: bscTestnet.chainId,
    account: address,
  });

  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [nft, setNFT] = useState({});

  async function getMetaData() {
    if (tokenUriIsSuccess) {
      const f = await (await fetch(tokenUriData)).json();
      console.log(f);
      setNFT({
        ...f,
      });
    }
  }

  function typeColor(type) {
    if (type === "DIAMOND") return "#b9f2ff";
    if (type === "GOLD") return "#FFD700";
    if (type === "SILVER") return "#C0C0C0";
    if (type === "BRONZE") return " #CD7F32";
  }

  function nftIdentifier() {
    let stripedToken = id;
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

  useEffect(() => {
    nftIdentifier();
    getMetaData();
  }, []);

  return (
    <div
      style={{
        borderRadius: "1rem",
        boxShadow: `0px 0px 4px ${typeColor(type)}`,
      }}
    >
      <div
        style={{
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem",
          boxShadow: `0px 0px 4px ${typeColor(type)}`,
          padding: 0,
          margin: 0,
          background: colors.bgOne,
          borderBottom: `16px solid ${typeColor(type)}`,
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

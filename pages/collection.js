import { useEffect, useState } from "react";

import Mintbar from "../components/common/MintBar";
import ContestCard from "../components/cards/ContestCard";
import { colors } from "../theme/color";

const Collection = () => {
	const isConnected = true;
	return (
		<>
			<div className="" style={{ minHeight: "25vh" }}></div>
			<div className="container" style={{ paddingBottom: "5rem" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						columnGap: "2rem",
						alignItems: "center",
					}}
				>
				</div>
			</div>
		</>
	);
};

export default Collection;
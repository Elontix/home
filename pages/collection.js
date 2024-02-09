import Image from "next/image";

import DIAMOND from '../public/tickets/diamond.png'
import GOLD from '../public/tickets/gold.png'
import SILVER from '../public/tickets/silver.png'

const images = [
	{ img: GOLD, text: "Gold (5001 - 20000)" },
	{ img: SILVER, text: "Silver (20001 - 50000)" },
]

const Collection = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: "10rem",
				paddingBottom: "4rem"
			}}>
			<h1>NFT's</h1>
			<div className="container m-6">
				<div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
					<div>
						<Image src={DIAMOND} />
						<h4 style={{ textAlign: 'center', marginTop: "1rem" }}>Diamond (1-5000)</h4>
					</div>
				</div>
				<div className="row">
					{images.map((i, k) =>
						<div key={k} className="col-12 col-lg-6 my-4">
							<Image src={i.img} />
							<h4 style={{ textAlign: 'center', marginTop: "1rem" }}>{i.text}</h4>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Collection;
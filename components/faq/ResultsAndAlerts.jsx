const ResultsAndAlerts = () => {
  return (
    <div className="accordion cmn-accordion" id="faqAcc-four">
      <div className="card">
        <div className="card-header" id="h-8">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            Is the platform secure and trustworthy?
          </button>
        </div>
        <div
          id="collapse8"
          className="collapse"
          aria-labelledby="h-8"
          data-bs-parent="#faqAcc-four"
        >
          <div className="card-body">
            <p>
              {`ElonTix leverages the security and immutability of the blockchain,
              making them inherently secure and transparent. However, it's
              essential to conduct your own research and due diligence before
              participating.`}
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="h-3">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            What are the advantages of using a ERC404 NFT lottery
            platform?
          </button>
        </div>
        <div
          id="collapse3"
          className="collapse"
          aria-labelledby="h-3"
          data-bs-parent="#faqAcc-one"
        >
          <div className="card-body">
            <p>
              ElonTix is a NFT lottery platform that provide transparency and
              fairness as all transactions and draws are recorded on the
              blockchain, ensuring integrity. Additionally, NFTs add uniqueness
              and value to the lottery, making it more exciting for
              participants. Instant payouts, community involvement, and secure
              escrow are other benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsAndAlerts;

const Tickets = () => {
  return (
    <div className="accordion cmn-accordion" id="faqAcc-one">
      <div className="card">
        <div className="card-header" id="h-1">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            What is ElonTix?
          </button>
        </div>
        <div
          id="collapse1"
          className="collapse show"
          aria-labelledby="h-1"
          data-bs-parent="#faqAcc-one"
        >
          <div className="card-body">
            <p>
              ElonTix is a blockchain-based NFT lottery platform that utilizes
              blockchain technology and non-fungible tokens (NFTs) to conduct
              lotteries. It combines the transparency, security, and
              immutability of the blockchain with the uniqueness and scarcity of
              NFTs to create a fair and exciting lottery experience.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="h-2">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            How does ElonTix Platform work?
          </button>
        </div>
        <div
          id="collapse2"
          className="collapse"
          aria-labelledby="h-2"
          data-bs-parent="#faqAcc-one"
        >
          <div className="card-body">
            <p>
              ElonTix allows users to purchase tickets using various
              cryptocurrencies. Each ticket corresponds to a specific NFT. At
              the conclusion of the lottery, a random drawing takes place on the
              blockchain to determine the winning ticket/NFT. Winners receive
              the prize associated with the NFT they hold.
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
            What are the advantages of using a blockchain-based NFT lottery
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

export default Tickets;

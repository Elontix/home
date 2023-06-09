const Banking = () => {
  return (
    <div className="accordion cmn-accordion" id="faqAcc-two">
      <div className="card">
        <div className="card-header" id="headingOne">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            How can I participate in the lottery?
          </button>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#faqAcc-two"
        >
          <div className="card-body">
            <p>
              To participate, you need to buy ElonTix NFTs with preferred
              payment methods. Each ticket represents a chance to win various
              lottery prizes on the platform
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Can I purchase multiple tickets?
          </button>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#faqAcc-two"
        >
          <div className="card-body">
            <p>
              Yes, you can purchase multiple tickets based on the available
              options and your desired level of participation. The more tickets
              you acquire, the higher your chances of winning the lottery.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="h-5">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            Are there any fees or costs associated with participating in the
            lottery?
          </button>
        </div>
        <div
          id="collapse5"
          className="collapse"
          aria-labelledby="h-5"
          data-bs-parent="#faqAcc-three"
        >
          <div className="card-body">
            <p>
              There is only a ticket purchase fees or transaction fees
              associated with participating in the lottery. These fees cover the
              operational costs of the platform and ensure its sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;

const Winning = () => {
  return (
    <div className="accordion cmn-accordion" id="faqAcc-three">
      <div className="card">
        <div className="card-header" id="h-4">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="true"
            aria-controls="collapse4"
          >
            What happens if I win?
          </button>
        </div>
        <div
          id="collapse4"
          className="collapse show"
          aria-labelledby="h-4"
          data-bs-parent="#faqAcc-three"
        >
          <div className="card-body">
            <p>
              If you win, you will receive the prize associated with the
              contest/Lottery to your DEX wallet.
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

export default Winning;

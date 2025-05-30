function FootNote() {
  return (
    <section className="p-6 text-[10px] lg:text-xs text-primary-text-g font-grotesk ">
      <div className="mx-auto flex flex-col gap-2 text-justify lg:w-[80%]">
        <p>
          <sup>1</sup> At SMSGC, over 98% of withdrawals are processed instantly
          (under 1 minute). Once your funds leave our custody, it's up to your
          chosen payment provider to process the funds and credit your account.
        </p>
        <p>
          <sup>2</sup> "Most precise" refers to Exness's less than 1% slippage
          rate noted in data collected between 2024-09-06 to 2024-09-12 and
          2025-01-24 to 2025-01-29, for Gold Spot, on Exness Standard account vs
          similar accounts in 3 other brokers.
        </p>
        <p>
          <sup>3</sup> Spreads may fluctuate and widen due to factors including
          market volatility, news releases, economic events, when markets open
          or close, and the type of instruments being traded.
        </p>

        <div className="widthborder-0 border-b border-[#141d221f] mt-2 lg:mt-4 xl:mt-12"></div>
      </div>
    </section>
  );
}
export default FootNote;

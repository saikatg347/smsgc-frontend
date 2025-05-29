const leftFeatures = [
  {
    icon: "Withdrawals",
    title: "Instant withdrawals",
    text: "Deposits and withdrawals approved in seconds.",
  },
  {
    icon: "Spreads",
    title: "Unmatched spreads",
    text: "Trade with spreads that remain tight and stable, even during market news.",
  },
  {
    icon: "Support",
    title: "24/7 live support",
    text: "Get answers in minutes via phone, live chat or email, in 14 languages.",
  },
];

const rightFeatures = [
  {
    icon: "Swaps",
    title: "Swap-free trading",
    text: "Hold overnight positions for free on most popular assets. T&Cs apply.",
  },
  {
    icon: "Execution speed",
    title: "More speed, less slippage",
    text: "Trade with the most precise execution² in the market.",
  },
  {
    icon: "Account security",
    title: "Best-in-class security",
    text: "Trade knowing your funds are kept safe in separate client accounts, with ironclad data protection.",
  },
];

function FeaturesBanner() {
  return (
    <section className="bg-[#070e20] text-secondary-text px-6 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-secondary-text font-poppins text-2xl md:text-4xl font-medium">
            Thrive in the gold, oil, indices and <br /> crypto markets
          </h1>
          <p className="text-secondary-text-g font-grotesk text-base md:text-lg mt-4">
            Trading conditions can make or break a strategy. that's why you need
            the best
          </p>
        </div>

        <div className="feature-grid ">
          <div className="feature-area-left  flex flex-col items-center justify-between gap-5 p-4">
            {leftFeatures.map((item, ind) => (
              <div key={ind} className="flex flex-col justify-center items-center text-center text-white gap-2">
                <span className="bg-[#6C8595] rounded-2xl px-2 py-1 leading-4 font-grotesk text-xs mb-3">
                  {item.icon}
                </span>
                <h3 className="font-poppins text-xl">{item.title}</h3>
                <p className="font-grotesk text-secondary-text-g text-sm md:text-base xl:max-w-[370px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="feature-area-middle flex items-center justify-center p-16 md:p-0">
            <img src='./assets/images/phone.jpg' className="w-[270px] h-auto lg:w-[400px] object-cover" />
          </div>

          <div className="feature-area-right  flex flex-col items-center justify-between gap-5 p-4">
            {rightFeatures.map((item, ind) => (
              <div key={ind} className="flex flex-col justify-center items-center text-center text-white gap-2">
                <span className="bg-[#6C8595] rounded-2xl px-2 py-1 leading-4 font-grotesk text-xs mb-3">
                  {item.icon}
                </span>
                <h3 className="font-poppins text-xl">{item.title}</h3>
                <p className="font-grotesk text-secondary-text-g text-sm md:text-base xl:max-w-[370px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeaturesBanner;

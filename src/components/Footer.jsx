const footerLinks = [
  {
    title: "Accounts",
    links: [
      "Standard accounts",
      "Professional accounts",
      "Demo trading account",
      "Social Trading accounts",
    ],
  },

  {
    title: "Conditions",
    links: [
      "Deposits and withdrawals",
      "Fees",
      "Client protection",
      "Order execution",
    ],
  },
  {
    title: "Markets",
    links: [
      "Forex CFD",
      "Commodities CFD",
      "Stocks CFD",
      "Indices CFD",
      "Crypto CFD",
    ],
  },
  {
    title: "Platforms",
    links: [
      "MetaTrader 5",
      "MetaTrader 4",
      "SMSGC Trade app",
      "MetaTrader 5 mobile",
      "MetaTrader 4 mobile",
      "SMSGC Terminal",
      "MetaTrader WebTerminal",
    ],
  },

  {
    title: "Resources",
    links: [
      "Analytical tools",
      "Economic calendar",
      "Trading calculator",
      "Currency converter",
      "Tick history",
      "VPS hosting",
      "SMSGC Insights",
    ],
  },

  {
    title: "About",
    links: [
      "About us",
      "Why SMSGC",
      "SMSGC reviews",
      "Contact us",
      "Help Center",
      "SMSGC in the media",
      "SMSGC in the community",
      "SMSGC Team Pro",
      "Blog",
    ],
  },

  {
    title: "Corporate",
    links: ["Regulation", "Legal documents", "Compensation fund"],
  },
  {
    title: "Solutions",
    links: ["Premier Program", "Social Trading"],
  },
];

function Footer() {
  return (
    <footer className="p-6 sm:p-12">
      <div className="mx-auto lg:w-[85%] flex flex-col gap-8">
        <h3 className="text-3xl font-semibold font-poppins text-primary-text">
          SMSGC
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h6 className="font-semibold text-sm lg:text-base font-poppins text-primary-text mb-2">
                {section.title}
              </h6>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="text-xs lg:text-sm text-primary-text-g font-grotesk hover:underline cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <img src="./assets/images/facebook.svg" className="w-10" />
          <img src="./assets/images/twitter.svg" className="w-10" />
          <img src="./assets/images/instagram.svg" className="w-10" />
          <img src="./assets/images/linkedin.svg" className="w-10" />
          <img src="./assets/images/youtube.svg" className="w-10" />
        </div>

        <div className="space-y-3 text-primary-text-g text-xs lg:text-sm text-pretty">
          <p>
            SMSGC (SC) Ltd ​is a Securities Dealer registered in Seychelles
            with registration number 8423606-1 and authorised by the Financial
            Services Authority (FSA) with licence number SD025. SMSGC (SC) Ltd
            is also authorized as an Over-The-Counter Derivatives Provider (ODP)
            by the Financial Sector Conduct Authority (FSCA) in South Africa.
            The registered office of SMSGC (SC) Ltd is at 9A CT House, 2nd
            floor, Providence, Mahe, Seychelles.
          </p>
          <p>
            SMSGC B.V. is a Securities Intermediary registered in Curaçao with
            registration number 148698(0) and authorised by the Central Bank of
            Curaçao and Sint Maarten (CBCS) with licence number 0003LSI. The
            registered office of SMSGC B.V. is at Emancipatie Boulevard Dominico
            F. “Don” Martina 31, Curaçao.
          </p>
          <p>
            SMSGC (VG) Ltd is authorised by the Financial Services Commission
            (FSC) in BVI with registration number 2032226 and investment
            business licence number SIBA/L/20/1133. The registered office of
            SMSGC (VG) Ltd is at Trinity Chambers, P.O. Box 4301, Road Town,
            Tortola, BVI.
          </p>

          <p>
            The entities above are duly authorized to operate under the SMSGC
            brand and trademarks.
          </p>

          <p>
            Risk Warning: Our services relate to complex derivative products
            which are traded outside an exchange. These products come with a
            high risk of losing money rapidly due to leverage and thus are not
            appropriate for all investors. Under no circumstances shall SMSGC
            have any liability to any person or entity for any loss or damage in
            whole or part caused by, resulting from, or relating to any
            investing activity. Learn more.
          </p>

          <p>
            The entities above do not offer services to residents of certain
            jurisdictions including the USA, Canada, Iran, North Korea, Europe,
            the United Kingdom, Russia, Belarus and others.
          </p>

          <p>
            The information on this website does not constitute investment
            advice or a recommendation or a solicitation to engage in any
            investment activity.
          </p>

          <p>
            Any interaction with this website constitutes an individual and
            voluntary operation on the part of the person accessing it. This
            website and its content should not be understood as an invitation
            for the contracting and/or acquisition of SMSGC' financial services
            and products.
          </p>

          <p>
            The information on this website may only be copied with the express
            written permission of SMSGC.
          </p>

          <p>
            SMSGC complies with the Payment Card Industry Data Security Standard
            (PCI DSS) to ensure your security and privacy. We conduct regular
            vulnerability scans and penetration tests in accordance with the PCI
            DSS requirements for our business model.
          </p>
        </div>

        <div className="widthborder-0 border-b border-[#141d221f]"></div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 sm:gap-0">
          <div className="flex flex-col sm:flex-row text-primary-text text-xs md:text-sm gap-4">
            <a href="#" className="underline">Risk Disclosure</a>
            <a href="#" className="underline">Preventing Money Laundering</a>
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">PAIA Manual</a>
          </div>

          <p className="text-primary-text-g">© 2025 SMSGC</p>
        </div>

        <img src="./assets/images/pci-dss.svg" className="w-32 h-full object-cover" />
      </div>
    </footer>
  );
}
export default Footer;

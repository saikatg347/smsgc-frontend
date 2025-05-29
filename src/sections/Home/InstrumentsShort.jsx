import Button from "../../components/Button";
import TableRow from "../../components/TableRow";

const rowData = [
  {
    ins: {
      img: "./assets/images/XAUUSD.png",
      title: "XAUUSD",
      text: "Gold vs US Dollar",
    },
    lev: "Customizable",
    avg: "11.2",
    swap: "Available",
    link: "Metals >",
  },
  {
    ins: {
      img: "./assets/images/USOIL.png",
      title: "USOIL",
      text: "Crude Oil",
    },
    lev: "1:200",
    avg: "1.2",
    swap: "Available",
    link: "Energies >",
  },
  {
    ins: {
      img: "./assets/images/EURUSD.png",
      title: "EURUSD",
      text: "Euro vs US Dollar",
    },
    lev: "Customizable",
    avg: "0.6",
    swap: "Available",
    link: "Currencies >",
  },
  {
    ins: {
      img: "./assets/images/US30.png",
      title: "US30",
      text: "US Wall Street 30 Index",
    },
    lev: "1:400",
    avg: "1.8",
    swap: "Available",
    link: "Indices >",
  },
  {
    ins: {
      img: "./assets/images/AAPL.png",
      title: "AAPL",
      text: "Apple Inc.",
    },
    lev: "1:20",
    avg: "0.6",
    swap: "Swap applied",
    link: "Stocks >",
  },
];

function InstrumentsShort() {
  return (
    <section className="bg-[#070e20] text-secondary-text px-6 py-16">
      <div className="container mx-auto flex items-center justify-center flex-col gap-8">
        <div className="text-center">
          <h1 className="font-poppins text-secondary-text text-2xl lg:text-4xl">
            Trade assets from global markets
          </h1>
          <p className="font-grotesk text-secondary-text-g lg:text-lg">
            Capitalize on every opportunity with the world’s most popular
            assets.
          </p>
        </div>

        <div className="w-[90%]">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 font-semibold text-sm p-3 border-b border-gray-700 text-secondary-text-g">
            <div className="">Instrument</div>
            <div className="">Leverage</div>
            <div className="hidden md:block ">Avg. spread³, pips</div>
            <div className="hidden md:block ">Swap-free</div>
            <div className=" "></div>
          </div>

          {rowData.map((item, ind) => (
            <TableRow
              key={ind}
              ins={item.ins}
              lev={item.lev}
              avg={item.avg}
              swap={item.swap}
              link={item.link}
            />
          ))}
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-6">
          <Button
            href="#"
            text="Register"
            styles="bg-[#FFDE02] min-h-12 min-w-[200px] text-primary-text"
          />
          <Button
            href="#"
            text="Try free demo"
            styles="bg-[#6c859529] min-h-12 min-w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}
export default InstrumentsShort;

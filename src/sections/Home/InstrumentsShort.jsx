import Button from "../../components/Button";

function InstrumentsShort() {
  return (
    <section className="bg-[#070e20] text-secondary-text px-6 py-16">
      <div className="container mx-auto flex items-center justify-center flex-col gap-8">
        <div className="text-center">
          <h1 className="font-poppins text-secondary-text text-2xl lg:text-4xl">Trade assets from global markets</h1>
          <p className="font-grotesk text-secondary-text-g lg:text-lg">
            Capitalize on every opportunity with the world’s most popular
            assets.
          </p>
        </div>

        <div></div>

        <div className="flex items-center flex-col sm:flex-row gap-6">
          <Button
            href="#"
            text="Register"
            styles="bg-[#FFDE02] min-h-12 min-w-[100px] text-primary-text"
          />
          <Button
            href="#"
            text="Try free demo"
            styles="bg-[#6c859529] min-h-12 min-w-[100px]"
          />
        </div>
      </div>
    </section>
  );
}
export default InstrumentsShort;

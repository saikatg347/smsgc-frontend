import Button from "../../components/Button";

function HeaderMain() {
  return (
    <section className="mt-16 lg:mt-28">
      <div className="relative w-full h-96 md:h-auto md:aspect-[16/7] md:max-h-[500px]">
        <img
          src="./assets/images/home-podcast.jpg"
          alt="Example"
          className="absolute inset-0 w-full h-full object-right md:object-cover"
        />

        <div className="absolute inset-0 md:left-16 flex items-center justify-start ">
          <div className="text-left text-secondary-text p-8 max-w-xl w-full h-full flex flex-col justify-between sm:justify-center gap-8">
            <div className="">
              <h1 className="font-poppins text-3xl md:text-4xl xl:text-5xl font-semibold mb-4">
                Born to Trade podcast
              </h1>
              <p className="font-grotest xl:text-lg mb-4">
                Get inside the minds of real traders with untold stories, bold
                conversations, and practical insights.
              </p>
            </div>

            <div className="sm:block flex justify-center">
              <Button
                href="#"
                text="Listen now"
                styles="bg-[#FFDE02] min-h-12 max-w-[140px] text-primary-text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeaderMain;

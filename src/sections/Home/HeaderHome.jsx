import HeroVideoImage from "../../assets/images/hero-video-image.jpg";
import HeroVideo from "../../assets/images/hero-video.webm";
import Button from "../../components/Button";
import UsersGroup from "../../assets/images/users-group.svg";
import License from "../../assets/images/license.svg";
import CustomSupport from "../../assets/images/custom-support.svg";
import Certificate from "../../assets/images/certificate.svg";

const features = [
  {
    img: UsersGroup,
    text: "1 million+ active traders",
  },
  {
    img: License,
    text: "Multiple regulatory licenses",
  },
  {
    img: CustomSupport,
    text: "24/7 customer support",
  },
  {
    img: Certificate,
    text: "PCI DSS certified",
  },
];

function HeaderHome() {
  return (
    <section className="pt-20 text-primary-text">
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={HeroVideoImage}
          className="block lg:hidden w-full h-full object-cover absolute inset-0"
          alt="Hero Fallback"
        />

        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hidden lg:block w-full h-full object-contain absolute inset-0"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-8 w-[70%] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-medium">
            Upgrade the way <br /> you trade
          </h1>
          <p className="text-lg md:text-xl font-poppins">
            Trade with the world’s largest retail broker and benefit from
            <br /> better-than-market conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="#"
              text="Register"
              styles="bg-[#FFDE02] min-h-12 min-w-[100px]"
            />
            <Button
              href="#"
              text="Try free demo"
              styles="bg-[#6c859514] min-h-12 min-w-[100px]"
            />
          </div>
        </div>
      </div>

        <div className="w-full md:w-[85%] px-6 py-6 lg:py-10 mx-auto grid sm:place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-[#141d221f]">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={item.img} alt={item.text} />
              <p className="font-grotesk md:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
}
export default HeaderHome;

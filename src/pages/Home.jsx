import HeaderHome from "../sections/Home/HeaderHome";
import FeaturesBanner from "../sections/Home/FeaturesBanner";
import InstrumentsShort from "../sections/Home/InstrumentsShort";
import FeatureIconTextLeft from "../sections/Home/FeatureIconTextLeft";
import FeatureIconTextRight from "../sections/Home/FeatureIconTextRight";
import HeaderMain from "../sections/Home/HeaderMain";
import NewsCarousel from "../sections/Home/NewsCarousel";
import CtaBanner from "../sections/Home/CtaBanner";
import FootNote from "../sections/Home/FootNote";

const fITLeftData = {
  icon: "./assets/images/opportunity.svg",
  img: "./assets/images/trading-apps.jpg",
  title: "Seize every opportunity",
  text: "Trade online anytime, anywhere. On web, mobile and desktop.",
  links: ["MetaTrader 5 >", "SMSGC Terminal >", "SMSGC Trade app >"],
};

const fITRightData = {
  icon: "./assets/images/security.svg",
  img: "./assets/images/protection.jpg",
  title: "Your security is our priority",
  text: "TFrom secure payments to negative balance protection, you are covered from every angle.",
  links: ["Client protection >", "Why SMSGC >"],
};

function Home() {
  return (
    <main>
      <HeaderHome />
      <FeaturesBanner />
      <InstrumentsShort />

      <FeatureIconTextLeft
        icon={fITLeftData.icon}
        img={fITLeftData.img}
        title={fITLeftData.title}
        text={fITLeftData.text}
        links={fITLeftData.links}
      />

      <FeatureIconTextRight
        icon={fITRightData.icon}
        img={fITRightData.img}
        title={fITRightData.title}
        text={fITRightData.text}
        links={fITRightData.links}
      />

      <HeaderMain />
      <NewsCarousel />
      <CtaBanner />
      <FootNote />
    </main>
  );
}
export default Home;

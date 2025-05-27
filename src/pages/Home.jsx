import HeaderHome from '../sections/Home/HeaderHome'
import FeaturesBanner from '../sections/Home/FeaturesBanner'
import InstrumentsShort from '../sections/Home/InstrumentsShort'
import FeatureIconText from '../sections/Home/FeatureIconText'
import HeaderMain from '../sections/Home/HeaderMain'
import NewsCarousel from '../sections/Home/NewsCarousel'
import CtaBanner from '../sections/Home/CtaBanner'
import FootNote from '../sections/Home/FootNote'

function Home() {
  return (
    <main>
      <HeaderHome />
      <FeaturesBanner />
      <InstrumentsShort />
      <FeatureIconText />
      <HeaderMain />
      <NewsCarousel />
      <CtaBanner />
      <FootNote />
    </main>
  )
}
export default Home
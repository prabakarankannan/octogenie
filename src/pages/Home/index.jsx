import Banner from "./Banner";
import Banner2 from "./Banner2";
import Blog from "./Blog";
import CompanySlider from "./CompanySlider";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Services from "./Services";
import SubBanner from "./SubBanner";
import Team from "./Team";

const Home = () => {
    return (
      <>
      <Banner />
      <Services />
      <SubBanner />
      <CompanySlider />
      <Team />
      <FAQ />
      <Banner2 />
      <Blog />
      <Contact />
      </>
    )
  };
  
  export default Home;
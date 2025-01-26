import CarouselIntro from "@/components/CarouselIntro";
import Header from "@/components/Header";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import Intro from "@/components/home/Intro";
import News from "@/components/home/News";
import ParallaxEffect from "@/components/home/ParallaxEffect";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselIntro />

      <Intro />
      <Team />
      <Services />
      <News />
      <ParallaxEffect />
      <ContactUs />
      <Footer />
    </>
  );
}

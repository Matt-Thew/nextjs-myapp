import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import ContactUs from "@/components/Home/ContactUs";
import Footer from "@/components/Home/Footer";
import Intro from "@/components/Home/Intro";
import BlogSection from "@/components/Home/News";
import ParallaxEffect from "@/components/Home/ParallaxEffect";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Intro />
      <Team />
      <Services />
      <BlogSection />
      <ParallaxEffect />
      <ContactUs />
      <Footer />
    </>
  );
}

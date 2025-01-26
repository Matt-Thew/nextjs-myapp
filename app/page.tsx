import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import Intro from "@/components/home/Intro";
import BlogSection from "@/components/home/News";
import ParallaxEffect from "@/components/home/ParallaxEffect";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";

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

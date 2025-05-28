import CarouselIntro from "@/components/CarouselIntro";
import Header from "@/components/Header";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import Intro from "@/components/home/Intro";
import News from "@/components/home/News";
import ParallaxEffect from "@/components/home/ParallaxEffect";
import Services from "@/components/home/Services";
import MyTeam from "@/components/home/MyTeam";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="mt-400 bg-white px-8 py-8 rounded-2xl shadow-lg border border-gray-200 text-center w-auto h-auto">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Website Under Maintenance
        </h1>
        <p className="text-lg text-black">
          We’ll be back soon. Sorry for the inconvenience.
        </p>
      </div>
    </div>
  );
  return (
    <>
      <Header />
      <CarouselIntro />

      <Intro />
      <MyTeam />
      <Services />
      <News />
      <ParallaxEffect />
      <ContactUs />
      <Footer />
    </>
  );
}

import Carousel from "@/components/carousel";
import Header from "@/components/Header";
import Intro from "@/components/Home/Intro";
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
    </>
  );
}

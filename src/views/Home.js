import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Resume from "../components/Resume";
import ConnectWithMe from "../components/ConnectWithMe";
const BackgroundImage = () => {
  return (
    <div class="container-fluid mt-4" data-aos="fade-down">
      <img
        class="card-img-top"
        src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/background.png"
      />
    </div>
  );
};
const IntroCard = () => {
  return (
    <div class="container" data-aos="fade-left">
      <p style={{ fontSize: "25px" }}>
        <span class="font-weight-bold" style={{ fontSize: "30px" }}>
          {" "}
          Mohanraj Venkatachalam - Act For Fact{" "}
        </span>
        <br />
        B.E., Electronics and Communication Engineering
        <br />
        Application Developer & Youtuber
        <br />
      </p>
      <hr class="my-4"></hr>
      <h4 class="font-weight-bold text-center" style={{ fontSize: "30px" }}>
        Gallery
      </h4>
      <div data-aos="fade-right">
      <Carousel />
      </div>
      <div style={{ textAlign: "center" }}></div>
    </div>
  );
};
export default function Home() {
  return (
    <div>
      <title>Mohanraj Portfolio - Home</title>
      <Header />
      <BackgroundImage />
      <Resume/>
      <IntroCard />
      <ConnectWithMe />
      <Footer />
    </div>
  );
}

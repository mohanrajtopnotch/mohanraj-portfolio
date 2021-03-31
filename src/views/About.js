import React from "react";
import ConnectWithMe from "../components/ConnectWithMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
const BackgroundImage = () => {
  return (
    <div class="container-fluid mt-4" data-aos="zoom-out-right">
      <a href="https://www.youtube.com/channel/UC6S6OF80J21TUlGdL6bATJg">
        <img
          class="card-img-top"
          src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image.png"
        />
      </a>
    </div>
  );
};
function Resume() {
  return (
    <div data-aos="flip-left">
      <hr class="my-4"></hr>
      <div style={{ textAlign: "center" }}>
        <h4 class="font-weight-bold" style={{ fontSize: "30px" }}>
          Click to Download My Resume
        </h4>
        <a class="btn-floating btn btn-primary" href="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/Mohanraj_Venkatachalam_Resume.pdf" style={{color:'white'}}>Resume</a>
      </div>
    </div>
  );
}
const Intro = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h4
      data-aos="fade-left"
        class="font-weight-bold"
        style={{ fontSize: "30px", textAlign: "center" }}
      >
        About Me
      </h4>
      <hr class="my-4"></hr>
      <p class="font-weight-bold" style={{ fontSize: "30px" }}  data-aos="fade-right">
        {" "}
        Mohanraj Venkatachalam - Act For Fact{" "}
      </p>

      <p style={{ fontSize: "25px" }}  data-aos="fade-right">
        B.E., ECE
        <br />
        Application Developer & Youtuber
        <br />
        Hi I'm a good and dynamic person. I'm a Fresher with Innovative Mind..
        I'm searching new things every day which is Improving me,i belive karma
        its boomerang. I would like to work with a progressive organization and
        seeking a challenging career which nourishes my passion to excel, by
        grabbing the opportunities to learn new technologies..
        <br />I have Good Communication skills and also i have experience in
        HTML , CSS , BOOTSTRAP , JS , REACT ,REACTNATIVE. I was interested in
        MERN STACK , APP & WEB development
      </p>
    </div>
  );
};
const Education = () => {
  return (
    <div data-aos="fade-left">
      <p
       
        class="font-weight-bold"
        style={{ fontSize: "30px", textAlign: "center" }}
      >
        {" "}
        Education{" "}
      </p>
      <div class="container-fluid row">
        <div class="col-md-12">
          <p style={{ fontSize: "25px", textAlign: "left" }}>
            <strong>B.E., Electronics and Communication Engineering</strong>
            <br />
            Kongunadu college of Engineering & Technology,Thottiam
            <br />
            2017-2021 <br />
            CGPA: 7.751 UPTO (6THSEM)
          </p>
        </div>
        <br />
        <div class="col-md-12">
          <p style={{ fontSize: "25px", textAlign: "left" }}>
            <strong>HSC - TAMILNADU STATE BOARD</strong>
            <br />
            SRV Boys HSC Rasipuram
            <br />
            2017 <br />
            85.5 %
          </p>
        </div>
        <br />
        <div class="col-md-12">
          <p style={{ fontSize: "25px", textAlign: "left" }}>
            <strong>SSLC - TAMILNADU STATE BOARD</strong>
            <br />
            Rainbow Matriculation School , Puduchatram
            <br />
            2015 <br />
            87.7 %
          </p>
        </div>
      </div>
    </div>
  );
};
export default function About() {
  return (
    <div>
      <title>Mohanraj Portfolio - About</title>
      <Header />
      <div class="container my-4">
        <Intro />
        <hr class="my-4"></hr>
        <Education />
        <hr class="my-4"></hr>
        <BackgroundImage />
        <Resume/>
        <ConnectWithMe />
      </div>
      <Footer />
    </div>
  );
}

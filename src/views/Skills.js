import React from "react";
import ConnectWithMe from "../components/ConnectWithMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
const BackgroundImage = () => {
  return (
    <div class="container-fluid mt-4 my-4" data-aos="zoom-out-left">
      <img
        style={{ height: "380px", width: "100%" }}
        class="card-img-top"
        src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/background1.png"
      />
    </div>
  );
};
const Accolades = () => {
  return (
    <div>
      <p
        class="font-weight-bold mt-1"
        style={{ fontSize: "30px", textAlign: "center" }}
        data-aos="fade-left"
      >
        Accolades{" "}
      </p>
      <div
        class="my-4"
        style={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        data-aos="fade-right"
      >
        <div class="container row">
          <div class="col-md-12 p-1">
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 10,
                elevation: 10,
                fontSize: "20px",
              }}
            >
              1. One of the Volunteer in “Pearlpet Helping Hands”Organisation
              <br />
              2. Won 1stprize in Paper presentation conducted by SRM UNIVERSITY,
              about “face detection and recognition System” Chennai (2020)
              <br />
              3. We won 1stprize in “RESISTHOR” hackathon intra college event
              held on March,2020 at Trichy
              <br />
              4. Got Reward as “Best Student” by ISTE, at PSGInstitute of
              technology,Coimbatore,onStudent convection chapter award event
              (2020)
              <br />
              5. Participated in “Residential Research Internship Programme 19”
              on the domain of ”IoT Appliancations” conducted by sona college of
              technology (2019)
              <br />
              6. Participated in “Mega Marathon” conducted by Rotary Club,
              Rasipuram (2019)
              <br />
              7. Done “Value added course” on the domain of ”PCB Design”
              conducted by Kongunaducollege of engineering and technology (2018)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SkillsBox = () => {
  return (
    <div>
      <p
      data-aos="fade-left"
        class="font-weight-bold mt-1"
        style={{ fontSize: "30px", textAlign: "center" }}
      >
        Skills{" "}
      </p>
      <div
        class="my-4"
        style={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div class="container row">
          <div class="col-md-12 p-1">
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 10,
                elevation: 10,
              }}
              data-aos="fade-right"
            >
              + HTML
            </div>
          </div>
          <div class="col-md-12 p-1">
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 10,
                elevation: 10,
              }}
              data-aos="fade-left"
            >
              + CSS
            </div>
          </div>

          <div class="col-md-12 p-1">
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 10,
                elevation: 10,
              }}
              data-aos="fade-right"
            >
              + REACT
            </div>
          </div>
          <div class="col-md-12 p-1">
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 10,
                elevation: 10,
              }}
              data-aos="fade-left"
            >
              + REACT NATIVE
            </div>
          </div>
          <div class="col-md-12 p-1">
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 10,
                elevation: 10,
              }}
              data-aos="fade-right"
            >
              + JS
            </div>
          </div>
          <div class="col-md-12 p-1">
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 10,
                elevation: 10,
              }}
              data-aos="fade-left"
            >
              + CORE JAVA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Skills() {
  return (
    <div>
      <title>Mohanraj Portfolio - Skills</title>
      <Header />
      <SkillsBox />
      <hr class="my-4"></hr>
      <BackgroundImage />
      <hr class="my-4"></hr>
      <Accolades />
      <ConnectWithMe />
      <Footer />
    </div>
  );
}

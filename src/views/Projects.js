/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ConnectWithMe from "../components/ConnectWithMe";
const EmbedProject1 = () => {
  return (
    <div class="container-fluid mt-4">
      <a href="https://www.linkedin.com/posts/mohanraj-venkatachalam-47b600189_javascript-js-reactjs-activity-6735604323105038336-D4na">
        <img
          class="card-img-top"
          style={{ height: "400px" }}
          src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/projectDemo.PNG"
        />
      </a>
    </div>
  );
};
const EmbedProject2 = () => {
  return (
    <div class="container-fluid mt-4">
      <a href="https://www.linkedin.com/posts/mohanraj-venkatachalam-47b600189_reactjs-nodejs-mernstack-activity-6729818793012539392-JPZI">
        <img
          class="card-img-top"
          style={{ height: "400px" }}
          src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/projectDemo1.PNG"
        />
      </a>
    </div>
  );
};
const EmbedProject3 = () => {
  return (
    <div class="container-fluid mt-4">
      <a href="https://www.linkedin.com/posts/mohanraj-venkatachalam-47b600189_js-react-developer-activity-6722380818272129024-830x">
        <img
          style={{ width: "350px", height: "400px" }}
          class="card-img-top"
          src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/projectDemo2.PNG"
        />
      </a>
    </div>
  );
};
const Training = () => {
  return (
    <div class="container-fluid mt-4">
      <a href="https://www.linkedin.com/posts/mohanraj-venkatachalam-47b600189_technology-arduino-mentoring-activity-6604444219333537792-eRWu">
        <img
          style={{ height: "300px", width: "300px" }}
          class="card-img-top"
          src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/training.PNG"
        />
      </a>
    </div>
  );
};
const ProjectsCardList = () => {
  return (
    <div>
      <hr class="my-4"></hr>
      <p
        class="font-weight-bold mt-1"
        style={{ fontSize: "30px", textAlign: "center" }}
        data-aos="fade-left"
      >
        Ongoing Project{" "}
      </p>
      <hr class="my-4"></hr>
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
                padding: 30,
                elevation: 10,
                fontSize: "20px",
              }}
              data-aos="fade-right"
            >
              <strong>KNCETians Alumni Connect App</strong> [ REACT NATIVE ]
              <br />
              In this Mobile Application which is used for building a
              connectivity between Alumni and the college.
              <br />
              <strong>Tools: </strong> VS Code , MongoDb Cloud , Postman
              <br />
              <strong>Role: </strong> Team Head & Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProjectsSampleCardList = () => {
  return (
    <div>
      <hr class="my-4"></hr>
      <p
        class="font-weight-bold mt-1"
        style={{ fontSize: "30px", textAlign: "center" }}
        data-aos="fade-left"
      >
        Project Samples{" "}
      </p>
      <hr class="my-4"></hr>
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
            <strong style={{ margin: '10  px'}}>
              KNCETians Alumni Connect App
            </strong>{" "}
            [ REACT NATIVE ]
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 30,
                elevation: 10,
                fontSize: "20px",
              }}
              data-aos="fade-right"
            >
              <div style={{display: 'flex' , flexDirection:'row'}}>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/kncetians%201.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/kncetians%202.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/kncetians%203.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/kncetians%204.jpg"
                />
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
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
            <strong style={{ margin: '10  px'}}>
              COUNTRY HEN
            </strong>{" "}
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 30,
                elevation: 10,
                fontSize: "20px",
              }}
              data-aos="fade-right"
            >
              <div style={{display: 'flex' , flexDirection:'row', alignItems: 'normal'}}>
              <div style={{padding:'10px'}}>
                <img
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/1.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/3.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/2.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/4.jpg"
                />
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
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
            <strong style={{ margin: '10  px'}}>
             VIMARZA
            </strong>{" "}
           
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 30,
                elevation: 10,
                fontSize: "20px",
                textAlign:'center'
              }}
              data-aos="fade-right"
            >
              <div style={{display: 'flex' , flexDirection:'column'}}>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/vim%201.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/vim%202.jpg"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/vim%203.jpg"
                />
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
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
            <strong style={{ margin: '10  px'}}>
             QUIZ PORTAL
            </strong>{" "}
           
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 30,
                elevation: 10,
                fontSize: "20px",
                textAlign:'center'
              }}
              data-aos="fade-right"
            >
              <div style={{display: 'flex' , flexDirection:'column'}}>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/quiz%201.png"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/quiz%202.png"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/quiz%203.png"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/quiz%204.png"
                />
              </div>
              <div style={{padding:'10px'}}>
                <img
                  style={{ width: "50%", height: "50%" }}
                  class="card-img-top"
                  src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/quiz%205.png"
                />
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
const Internships = () => {
  return (
    <div class="container-fluid mt-4">
      <a
        style={{ textDecoration: "none" }}
        href="https://www.linkedin.com/posts/mohanraj-venkatachalam-47b600189_javascript-reactjs-js-activity-6739477654187085824-R78w"
      >
        <p>
          WEB DEVELOPMENT INTERN - Detoin Solutions Private Limited <br />
          Duration : 28-10-2020 to 31-11-2020 <br />
          I Worked as an intern on Front End Developer using React Js ,
          Bootstrap and also I learn basics of React Native , Git , Heroku..
          <br />
        </p>
      </a>
    </div>
  );
};
const InternshipsCard = () => {
  return (
    <div>
      <hr class="my-4"></hr>
      <h4
        class="font-weight-bold"
        style={{ fontSize: "30px", textAlign: "center" }}
        data-aos="fade-left"
      >
        Internship
      </h4>
      <hr class="my-4"></hr>
      <div
        class="row container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 5,
          margin: 5,
        }}
      >
        <div
          class="col-md-5"
          style={{
            boxShadow: "5px 10px #ebf5ee",
            padding: "2%",
            border: "2px solid blue",
            borderRadius: 10,
            elevation: 10,
            textAlign: "center",
            margin: 10,
          }}
          data-aos="fade-right"
        >
          <h3>Frontend End Developer</h3>
          <Internships />
        </div>
      </div>
    </div>
  );
};
const TrainingCard = () => {
  return (
    <div>
      <hr class="my-4"></hr>
      <h4
        class="font-weight-bold"
        style={{ fontSize: "30px", textAlign: "center" }}
        data-aos="fade-left"
      >
        Mentor
      </h4>
      <hr class="my-4"></hr>
      <div
        class="row container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 5,
          margin: 5,
        }}
      >
        <div
          class="col-md-5"
          style={{
            boxShadow: "5px 10px #ebf5ee",
            width: "100%",
            padding: "1%",
            border: "2px solid blue",
            borderRadius: 10,
            elevation: 10,
            textAlign: "center",
            margin: 10,
            height: "500px",
          }}
          data-aos="fade-right"
        >
          <h3>VAC </h3>
          <Training />
        </div>
      </div>
    </div>
  );
};
const ProjectsCard = () => {
  return (
    <div>
      <hr class="my-4"></hr>
      <h4
        class="font-weight-bold"
        style={{ fontSize: "30px", textAlign: "center" }}
        data-aos="fade-left"
      >
        Project Demo Videos
      </h4>
      <hr class="my-4"></hr>
      <div
        class="row container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 5,
          margin: 5,
        }}
      >
        <div
          class="col-md-5"
          style={{
            boxShadow: "5px 10px #ebf5ee",
            width: "100%",
            padding: "1%",
            border: "2px solid blue",
            borderRadius: 10,
            elevation: 10,
            textAlign: "center",
            margin: 10,
            height: "500px",
          }}
          data-aos="fade-right"
        >
          <h3>QUIZ APP USING MERN</h3>
          <EmbedProject1 />
        </div>
        <div
          class="col-md-5"
          style={{
            boxShadow: "5px 10px #ebf5ee",
            width: "100%",
            padding: "1%",
            border: "2px solid blue",
            borderRadius: 10,
            elevation: 10,
            textAlign: "center",
            margin: 10,
            height: "500px",
          }}
          data-aos="fade-left"
        >
          <h3>CRUD APP USING MERN</h3>
          <EmbedProject2 />
        </div>
        <div
          class="col-md-5"
          style={{
            boxShadow: "5px 10px #ebf5ee",
            width: "100%",
            padding: "1%",
            border: "2px solid blue",
            borderRadius: 10,
            elevation: 10,
            textAlign: "center",
            margin: 10,
            height: "500px",
          }}
          data-aos="fade-up"
        >
          <h3>COUNTRY HEN USING REACT NATIVE</h3>
          <EmbedProject3 />
        </div>
      </div>
    </div>
  );
};
export default function Projects() {
  return (
    <div>
      <Header />
      <title>Mohanraj Portfolio - Projects</title>
      {/* <ProjectsSampleCardList /> */}
      <ProjectsCardList />
      <InternshipsCard />
      <ProjectsCard />
      <TrainingCard />
      <ConnectWithMe />
      <Footer />
    </div>
  );
}

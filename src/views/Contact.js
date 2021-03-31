import React from "react";
import ConnectWithMe from "../components/ConnectWithMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
const AddressMap = () => {
  return (
    <div className="google-map-code" style={{ padding: 10 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d9668.53419339804!2d78.25639652265524!3d11.367336106455282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d11.3673501!2d78.25597979999999!4m3!3m2!1d11.3673501!2d78.25597979999999!5e0!3m2!1sen!2sin!4v1609607183373!5m2!1sen!2sin"
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
const ContactDetails = () => {
  return (
    <div style={{ textAlign: "left" }} data-aos="fade-down">
      <h4
        class="font-weight-bold"
        style={{ fontSize: "30px", textAlign: "center" }}
      >
        Contact Details
      </h4>
      <div
        class="container row"
        style={{ fontSize: "20px", padding: 10, marginLeft: 10 }}
      >
        <div class="col-12">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span style={{ marginLeft: "10px" }}>mohanragvengi@gmail.com</span>
        </div>
        <div class="col-12">
          <i class="fa fa-phone" aria-hidden="true"></i>{" "}
          <span style={{ marginLeft: "9px" }}>7094893998</span>
        </div>
        <div class="col-12">
          <i class="fa fa-address-card-o" aria-hidden="true"></i>
          <span style={{ marginLeft: "7px" }}>
            11/129 BankarerThottam , Belukurichi , Namakkal - 637402
          </span>
        </div>
      </div>
    </div>
  );
};
export default function contact() {
  return (
    <div>
      <title>Mohanraj Portfolio - Contact</title>
      <Header />
      <AddressMap />
      <hr class="my-4"></hr>
      <ContactDetails />
      <Resume/>
      <ConnectWithMe />
      <Footer />
    </div>
  );
}

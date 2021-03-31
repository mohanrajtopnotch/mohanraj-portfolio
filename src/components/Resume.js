import React from "react";

export default function Resume() {
  return (
    <div data-aos="fade-right">
      <hr class="my-4"></hr>
      <div style={{ textAlign: "center" }}>
        <h4 class="font-weight-bold" style={{ fontSize: "30px" }}>
          Click to Download My Resume
        </h4>
        <a class="btn-floating btn btn-primary" href="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/Mohanraj_Venkatachalam_Resume.pdf" style={{color:'white'}}>Resume</a>
      </div>
      <hr class="my-4"></hr>
    </div>
  );
}

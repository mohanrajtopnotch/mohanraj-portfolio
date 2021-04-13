/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from '../components/Header'
function CountryHen() {
  return (
    <>
    <Header/>
    <h3 style={{textAlign:'center',padding:'3px'}}>Work Samples</h3>
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
            <strong style={{ margin: "10  px" }}>COUNTRY HEN</strong>{" "}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "normal",
                }}
              >
                <div style={{ padding: "10px" }}>
                  <img
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/1.jpg"
                  />
                </div>
                <div style={{ padding: "10px" }}>
                  <img
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/3.jpg"
                  />
                </div>
                <div style={{ padding: "10px" }}>
                  <img
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/2.jpg"
                  />
                </div>
                <div style={{ padding: "10px" }}>
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
    </>
  );
}

export default CountryHen;

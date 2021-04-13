/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from '../components/Header'
function Vimarza() {
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
            <strong style={{ margin: "10  px" }}>VIMARZA</strong>{" "}
            <div
              style={{
                boxShadow: "5px 10px #ebf5ee",
                width: "100%",
                border: "2px solid blue",
                borderRadius: 10,
                padding: 30,
                elevation: 10,
                fontSize: "20px",
                textAlign: "center",
              }}
              data-aos="fade-right"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "10px" }}>
                  <img
                    style={{ width: "50%", height: "50%" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/vim%201.jpg"
                  />
                </div>
                <div style={{ padding: "10px" }}>
                  <img
                    style={{ width: "50%", height: "50%" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/vim%202.jpg"
                  />
                </div>
                <div style={{ padding: "10px" }}>
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
    </>
  );
}

export default Vimarza;

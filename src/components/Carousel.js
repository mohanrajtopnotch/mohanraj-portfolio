import React from "react";
export default function Carousel() {
  return (
    <div class="container my-4">
      <div style={{ padding: 10, textAlign: "center" }}>
        <div class="controls-top" style={{ padding: 5 }}>
          <a
            class="btn-floating btn btn-primary"
            style={styles.buttonStyle}
            href="#multi-item-example"
            data-slide="prev"
          >
            <i class="fa fa-chevron-left"></i> Previous
          </a>
          <a
            class="btn-floating btn btn-primary"
            style={styles.buttonStyle}
            href="#multi-item-example"
            data-slide="next"
          >
            Next <i class="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div
        id="multi-item-example"
        class="carousel slide carousel-multi-item"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#multi-item-example"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
          <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image1.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image2.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image3.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image4.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image5.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image6.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image7.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image8.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    style={{ height: "380px" }}
                    class="card-img-top"
                    src="https://raw.githubusercontent.com/MohanrajVenkatachalamKncet/portfolio-images/main/image9.jpg"
                  />
                  {/* <div class="card-body">
                    <h4 class="card-title text-center">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a class="btn btn-primary">Button</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  buttonStyle: {
    marginLeft: 10,
    marginRight: 10,
    width: "100px",
  },
};

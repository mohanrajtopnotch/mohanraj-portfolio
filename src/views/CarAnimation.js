import React from 'react'
import '../css/CarAnimation.css'
const CarAnimation = () => {
    return (
        <div>
      <h1 style={{textAlign: "center"}}>CAR ANIMATION</h1>
      <div className="wrapper">
        <div className="display-container">
          <div className="background-view">
            <div className="background-wrapper">
              <div className="cloud-wrapper">
                <div style={{display: "flex"}}>
                  <div className="cloud1"></div>
                  <div className="cloud2"></div>
                  <div className="cloud3"></div>
                </div>
              </div>
              <div className="cloud-wrapper">
                <div style={{display: "flex"}}>
                  <div className="cloud1"></div>
                  <div className="cloud2"></div>
                  <div className="cloud3"></div>
                </div>
              </div>
              <div className="cloud-wrapper">
                <div style={{display: "flex"}}>
                  <div className="cloud1"></div>
                  <div className="cloud2"></div>
                  <div className="cloud3"></div>
                </div>
              </div>
              <div className="sun-wrapper">
                <div className="sun"></div>
              </div>
            </div>
            <div className="car">
              <div style={{display: "flex", padding: "10px"}}>
                <div className="car-window"></div>
                <div className="car-window"></div>
                <div className="car-window"></div>
                <div className="car-window"></div>
                <div className="car-door"></div>
                <div className="car-line"></div>
                <div className="car-back-wheel"></div>
                <div className="car-front-wheel"></div>
                <div className="car-back-wheel-dot"></div>
                <div className="car-front-wheel-dot"></div>
              </div>
            </div>
          </div>
          <div className="road-wrapper">
            <div className="road">
              <div className="road-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CarAnimation

import React from "react";
import "./claim.css"; // Ensure you have this CSS file
import "../../../src/App.css";
export const Claims = () => {
  return (
    <div>
      <div className="claims-container">
        <div className="position-relative">
          <div className="twoColumGrid text-start">
            <div>
              <h1>Your Protection, Our Priority</h1>
              <p>
                At BlueCross, we are committed to standing by you and your
                family during life’s most challenging times. Our claims process
                is designed to be fast, simple, and hassle-free, ensuring you
                receive your benefits with care and efficiency. We collect only
                the necessary information, so you can focus on what matters
                most.
              </p>

              <div className="twoColumGrid">
                <div>
                  <h3>Our Approach</h3>
                  <p>
                    We guide you through the claims process with empathy and
                    expertise, ensuring a smooth and transparent experience.
                  </p>
                </div>
                <div>
                  <h3>Our Claim Process</h3>
                  <p>
                    We keep our claims process simple just the essentials, with
                    timely updates to keep you informed every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="cont">
              <div className="circleOuter"></div>
              <div className="circle"></div>
              <div className="center-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi_XwU4YTaz2mBzM9u8AJqpS6dOh-fqEDcgcKEET5Z7cPb2PED-YbSv4e_8f5YO8-eso&usqp=CAU"
                  alt="Handshake"
                />
              </div>

              {/* Icons positioned around the circle */}
              <div className="icon" style={{ top: "5%", left: "43%" }}>
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
                  alt="Handshake"
                /> */}{" "}
                <i className="bi bi-person-fill"></i>
              </div>
              <div className="icon" style={{ top: "25%", left: "90%" }}>
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828727.png"
                  alt="Wallet"
                /> */}
                <i class="bi bi-clock-history"></i>
              </div>
              <div className="icon" style={{ bottom: "-4%", left: "45%" }}>
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                  alt="Car"
                /> */}
                <i class="bi bi-check-circle-fill"></i>
              </div>
              <div className="icon" style={{ top: "25%", left: "-2%" }}>
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
                  alt="Location"
                /> */}
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div className="icon" style={{ bottom: "25%", left: "74%" }}>
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
                  alt="Insurance"
                /> */}
                <i class="bi bi-clipboard-check-fill"></i>
              </div>
              <div className="icon" style={{ bottom: "25%", left: "14%" }}>
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
                  alt="Support"
                /> */}
                <i class="bi bi-people-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

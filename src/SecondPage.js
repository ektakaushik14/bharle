import React from "react";
import "./SecondPage.css";
import B from "./images/b.png";
export default function SecondPage() {
  return (
    <div className="SecondPage" id="about">
      <div className="SecondPage-container">
        <div>
          <h4>About us</h4>
          <h5>
            FormBharlo.com is worlds first form filling platform, that keeps
            everything so easy, with free expert assistance and guidance we
            deliver best experience with no complexity and casuality. Our
            experts update latest form at the very earliest pace and reminding
            notification that we provide will take care that you don't miss any
            form.
          </h5>
          <button>
            <a href="#book">Explore</a>{" "}
          </button>
          <div>
            <div>
              <div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/2947/2947998.png" />
                </div>
                <div>
                  <h6>100%</h6>
                  <h5>Safe Securly</h5>
                </div>
              </div>
              <div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" />
                </div>
                <div>
                  <h6>100%</h6>
                  <h5>Authenticated</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={B} />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import landingImage from "./landingImage.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./Landing.css";
import A from "./images/a.png";
import B from "./images/b.png";
import Nav from "./Nav";
import SecondPage from "./SecondPage";
import Form from "./Form";
import Book from "./Book";
export default function Landing() {
  const navigate = useNavigate();
  const location = useLocation();

  const handlebook = () => {
    navigate("book");
  };

  useEffect(() => {
    const bookElement = document.getElementById("book");
    console.log(location, ">>>>");
    if (location?.state?.activeTab === bookElement) {
      bookElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="land" id="home">
      <div className="landing">
        <div className="landing-container">
          <div>
            <h4>
              Easiest way to fill forms. Filling forms at your finger tip.{" "}
            </h4>
            <h5>
              With Meeting Scheduling - We are here to assist you for free Don't
              Hesitate book your slot know.
            </h5>
            <div className="landingDropDown">
              <img
                src="https://cdn-icons-png.flaticon.com/512/808/808598.png"
                alt=""
              />
              <select name="paperType" id="paperType" className="paperType">
                <option selected disabled value="">
                  Select Paper
                </option>
                <option value="">Jee Mains</option>
                <option value="">Neet</option>
              </select>
              <button>
                <a href="#book">Connect</a>
              </button>
            </div>
          </div>
          <div className="imageContainer">
            <div>
              <img src={A} />
            </div>
          </div>
        </div>
      </div>

      <SecondPage />
      <Book />
      <Form />
    </div>
  );
}

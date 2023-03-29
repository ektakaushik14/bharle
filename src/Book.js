import React, { useEffect, useState } from "react";
import "./Book.css";
import TestImg2 from "./testimg2.jpg";
import { useForm, ValidationError } from "@formspree/react";

// book appointment

export default function Book() {
  const [state, handleSubmit] = useForm("mrgvlvkj");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  if (state.succeeded && !isFormSubmitted) {
    window.alert("Form submitted successfully");
    setIsFormSubmitted(true);
  }
  return (
    <div className="book" id="book">
      <img className="formBG3" src={TestImg2} alt="" />
      <div className="book_container">
        <img
          className="formBg"
          src="https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolor-4116932_960_720.png"
          alt=""
        />
        <div className="form-text">
          <h1>Book Appointment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            fugit.
          </p>
        </div>
        <div className="main-form">
          <form
            id="my-form"
            onSubmit={handleSubmit}
            style={{ flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div>
                <div>
                  <span>Full Name</span>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Write your name here..."
                    required
                  />
                </div>
                <div>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Write your email here..."
                    required
                  />
                </div>
                <div>
                  <span>Select Paper</span>
                  <select name="paper" id="paper" required>
                    <option value="">Select</option>
                    <option value="Jee Mains">Jee Mains</option>
                    <option value="Neet">Neet</option>
                  </select>
                </div>
                <div>
                  <span>Interested in Colleges</span>
                  <select name="college" id="college" required>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div>
                <div>
                  <span>College Name</span>
                  <input
                    type="text"
                    name="collegename"
                    id="collegename"
                    placeholder="Write college interested in..."
                    required
                  />
                </div>
                <div>
                  <span>Date</span>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="date"
                    required
                  />
                </div>
                <div>
                  <span>Time</span>
                  <input
                    type="text"
                    name="time"
                    id="time"
                    placeholder="Time"
                    required
                  />
                </div>
                <div>
                  <span>Mobile Number</span>
                  <input
                    maxlength="10"
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Write your number here..."
                    required
                  />
                </div>
              </div>
            </div>
            <div id="submit" className="submit">
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

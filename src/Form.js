import React, { useEffect, useState } from "react";
import { inputName } from "./constants/inputs";
import "./Form.css";
import FormImage from "./images/c.jpg";
import DatePicker from "react-datepicker";
import { useForm, ValidationError } from "@formspree/react";
import "react-datepicker/dist/react-datepicker.css";
import TestImg from "./testimg.jpg";
export default function Form() {
  const [selectDate, setSelectDate] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xbjekeab");
  if (state.succeeded && !isFormSubmitted) {
    window.alert("Form sumitted successfully");
    setIsFormSubmitted(true);
  }


  // get in touch 

  return (
    <div className="form" id="contact">
      <img className="formBG2" src={TestImg} alt="" />
      <div className="form-container">
        <div className="form-left">
          <h3>Get In Touch</h3>
          <h4>We are here for you. How can i help?</h4>
          <form onSubmit={handleSubmit}>
            {inputName.map((input) => (
              <div>
                <div>{input}</div>
                <input name={input}></input>
              </div>
            ))}
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
        <div className="form-right">
          <div>
            <img src={FormImage} />
          </div>
          <div>
            <div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149060.png"
                  alt=""
                />
              </div>
              <div>Address 1701, WTT , Sector 16, Noida Uttar Pradesh</div>
            </div>
            <div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687004.png"
                  alt=""
                />
              </div>
              <div>+91 87008 23327</div>
            </div>
            <div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                  alt=""
                />
              </div>
              <div>contact@formbharlo.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

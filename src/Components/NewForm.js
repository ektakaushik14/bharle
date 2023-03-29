import React from "react";

export default function NewForm() {
  return (
    <div>
      <body class="fill-bg">
        <section class="login-wrapper register">
          <div class="inner">
            <div class="regiter-inner">
              <div class="login-logo">
                <a href="https://doctorsquery.com/">
                  <img
                    src="https://doctorsquery.com/static/images/logo/doctorsquerylogo.png"
                    class="img-responsive"
                    alt=""
                  />
                </a>
              </div>
              <div class="head-block">
                <h1>Apply Now</h1>
              </div>
              <div class="cnt-block">
                <form
                  method="POST"
                  class="form-outer"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div class="col-sm-6 clearfix">
                      <input
                        name="countrycode"
                        type="text"
                        placeholder="+91"
                        class="country-code"
                        required
                      />
                      <input
                        id="phone"
                        name="mobile"
                        type="tel"
                        placeholder="1234567890"
                        class="phone-no"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        name="street"
                        class="find-state"
                        type="text"
                        placeholder="Street"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        name="city"
                        id="city"
                        type="text"
                        placeholder="City"
                        value=""
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        name="state"
                        id="status"
                        type="text"
                        placeholder="State"
                        value=""
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        name="country"
                        id="country"
                        type="text"
                        placeholder="Country"
                        value=""
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        name="zip"
                        type="text"
                        placeholder="Zip Code"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Father's Name"
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <select
                        class="custom_select"
                        name="universities"
                        required
                      >
                        <option value="">Select University</option>
                        <option value="Crimea Federal University">
                          CRIMEA FEDERAL UNIVERSITY
                        </option>
                        <option value="Kazan Federal University">
                          KAZAN FEDERAL UNIVERSITY
                        </option>
                        <option value="Far Eastern Federal University">
                          FAR EASTERN FEDERAL UNIVERSITY
                        </option>
                        <option value="Kazan State Medical University">
                          KAZAN STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Lobachevsky State Medical University">
                          LOBACHEVSKY STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Kabardino Balkarian State Medical University">
                          KABARDINO BALKARIAN STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="North Ossetian State Medical University">
                          NORTH OSSETIAN STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Bashkir State Medical University">
                          BASHKIR STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Kuban State Medical University">
                          KUBAN STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Northern State Medical University">
                          NORTHERN STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Altai State Medical University">
                          ALTAI STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Ulyanovsk State Medical University">
                          ULYANOVSK STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="People's Friendship University">
                          PEOPLE'S FRIENDSHIP UNIVERSITY
                        </option>
                        <option value="Kursk State Medical University">
                          KURSK STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Orenburg State Medical University">
                          ORENBURG STATE MEDICAL UNIVERSITY
                        </option>
                        <option value="Immanuel Kant Baltic Federal University">
                          IMMANUEL KANT BALTIC FEDERAL UNIVERSITY
                        </option>
                        <option value="North-Caucasus Federal University">
                          NORTH-CAUCASUS FEDERAL UNIVERSITY
                        </option>
                        <option value="North Eastern Federal University">
                          NORTH EASTERN FEDERAL UNIVERSITY
                        </option>
                        <option value="Northern (Arctic) Federal University">
                          NORTHERN (ARCTIC) FEDERAL UNIVERSITY
                        </option>
                        <option value="Siberian Federal University">
                          SIBERIAN FEDERAL UNIVERSITY
                        </option>
                        <option value="Southern Federal University">
                          SOUTHERN FEDERAL UNIVERSITY
                        </option>
                        <option value="Ural Federal University">
                          URAL FEDERAL UNIVERSITY
                        </option>
                        <option value="Siberian State Medical University">
                          SIBERIAN STATE MEDICAL UNIVERSITY
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <select class="custom_select" name="source" required>
                        <option value="">How did you hear about us?</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Youtube">Youtube</option>
                        <option value="Hordings and Banners">
                          Hordings and Banners
                        </option>
                        <option value="Friends or Relatives">
                          Friends or Relatives
                        </option>
                        <option value="Other Internet Platforms">
                          Other Internet Platforms
                        </option>
                        <option value="Other Offline Platforms">
                          Other Offline Platforms
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-6">
                      <div class="col-left">
                        <h2>Catagory</h2>
                        <ul class="select-opt clearfix">
                          <li>
                            <input
                              id="a-option"
                              name="catagory"
                              type="radio"
                              value="General"
                            />
                            <label for="a-option">General</label>
                            <div class="check"></div>
                          </li>
                          <li>
                            <input
                              id="b-option"
                              name="catagory"
                              type="radio"
                              value="SC/BC"
                            />
                            <label for="b-option">SC/BC</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                          <li>
                            <input
                              id="c-option"
                              name="catagory"
                              type="radio"
                              value="Other"
                            />
                            <label for="c-option">Other</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 clearfix">
                      <div class="col-left">
                        <h2>Gender</h2>
                        <ul class="select-opt clearfix">
                          <li>
                            <input
                              id="f-option"
                              name="gender"
                              type="radio"
                              value="Male"
                            />
                            <label for="f-option">Male</label>
                            <div class="check"></div>
                          </li>
                          <li>
                            <input
                              id="s-option"
                              name="gender"
                              type="radio"
                              value="Female"
                            />
                            <label for="s-option">Female</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6 clearfix">
                      <div class="col-left">
                        <h2>Do you have Passport ?</h2>
                        <ul class="select-opt clearfix">
                          <li>
                            <input
                              id="y-option"
                              name="passport"
                              type="radio"
                              value="Yes"
                            />
                            <label for="y-option">Yes</label>
                            <div class="check"></div>
                          </li>
                          <li>
                            <input
                              id="n-option"
                              name="passport"
                              type="radio"
                              value="No"
                            />
                            <label for="n-option">No</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="col-left">
                        <h2>NEET Qualified ?</h2>
                        <ul class="select-opt clearfix">
                          <li>
                            <input
                              id="z-option"
                              name="neet"
                              type="radio"
                              value="Yes"
                            />
                            <label for="z-option">Yes</label>
                            <div class="check"></div>
                          </li>
                          <li>
                            <input
                              id="o-option"
                              name="neet"
                              type="radio"
                              value="No"
                            />
                            <label for="o-option">No</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <label for="exampleInputFile">10th Marksheet</label>
                      <input
                        type="file"
                        id="exampleInputFile"
                        name="fileToUpload10th"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label for="exampleInputFile">12th Marksheet</label>
                      <input
                        type="file"
                        id="exampleInputFile"
                        name="fileToUpload12th"
                      />
                    </div>
                  </div>
                  <div class="button-outer">
                    <button class="btn" name="submit">
                      Get Started Now <span class="icon-more-icon"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const countries = [
  { country: "Select Country", code: "" },
  { country: "United States of America", code: "+1" },
  { country: "United Kingdom", code: "+44" },
  { country: "India", code: "+91" },
  { country: "Australia", code: "+61" },
  { country: "Germany", code: "+49" },
];

export const Contact = () => {
  const form = useRef();

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm("service_movjewa", "template_zl1pjes", form.current, {
        publicKey: "sGxQCDoD_FkSeFglU",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          resetForm();
        },
        (error) => {
          toast.error(error.text || "Failed to send email");
        }
      );
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            from_name: "",
            countryName: "",
            dialingCode: "",
            mobile_number: "",
            email: "",
            message: "",
            contactByEmail: false,
          }}
          validationSchema={Yup.object({
            from_name: Yup.string()
              .min(3, "Name must be at least 3 characters")
              .required("Name is required"),
            countryName: Yup.string()
              .required("Country is required")
              .notOneOf(["Select Country"], "Country is required"),
            dialingCode: Yup.string().required("Dialing code is required"),
            mobile_number: Yup.string()
              .required("Phone number is required")
              .matches(/^[0-9]+$/, "Must be only digits")
              .min(6, "Must be at least 6 digits")
              .max(15, "Must be 15 digits or less"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            message: Yup.string()
              .min(10, "Message must be at least 10 characters")
              .max(1000, "Message cannot exceed 500 characters")
              .required("Message is required"),
            contactByEmail: Yup.boolean()
              .oneOf([true], "You must agree to be contacted")
              .required("You must agree to be contacted"),
          })}
          onSubmit={sendEmail}
        >
          {({ setFieldValue, values, errors, touched }) => (
            <div className="contactContainer">
              <div className="contactCont">
                <div className="contactBg">
                  <h2 className="lifePara text-center">Get in touch!</h2>
                  <Form className="row" name="contactForm" ref={form}>
                    <div className="formInputsCont">
                      <div className="form-group my-2">
                        <Field
                          name="from_name"
                          type="text"
                          placeholder="Full name"
                          className={`form-control ${
                            touched.from_name && errors.from_name
                              ? "error-input"
                              : ""
                          }`}
                        />
                        {touched.from_name && errors.from_name && (
                          <div className="error-message">
                            {errors.from_name}
                          </div>
                        )}
                      </div>
                      <div className="form-group my-2">
                        <Field
                          as="select"
                          name="countryName"
                          className={`form-control ${
                            touched.countryName && errors.countryName
                              ? "error-input"
                              : ""
                          }`}
                          onChange={(e) => {
                            const selectedCountry = e.target.value;
                            const selectedCountryObj = countries.find(
                              (c) => c.country === selectedCountry
                            );
                            setFieldValue("countryName", selectedCountry);
                            setFieldValue(
                              "dialingCode",
                              selectedCountryObj?.code || ""
                            );
                          }}
                        >
                          {countries.map((country, index) => (
                            <option key={index} value={country.country}>
                              {country.country}
                            </option>
                          ))}
                        </Field>
                        {touched.countryName && errors.countryName && (
                          <div className="error-message">
                            {errors.countryName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="formInputsCont">
                      <div className="form-group my-2">
                        <div className="dial row">
                          <div className="col-4">
                            <Field
                              name="dialingCode"
                              value={values.dialingCode}
                              className={`form-control phone ${
                                touched.dialingCode && errors.dialingCode
                                  ? "error-input"
                                  : ""
                              }`}
                              placeholder="+__"
                              readOnly
                            />
                          </div>
                          <div className="col-8 ps-0">
                            <Field
                              type="tel"
                              name="mobile_number"
                              placeholder="Phone number"
                              className={`form-control ${
                                touched.mobile_number && errors.mobile_number
                                  ? "error-input"
                                  : ""
                              }`}
                              onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                  e.preventDefault();
                                }
                              }}
                            />
                            {touched.mobile_number && errors.mobile_number && (
                              <div className="error-message">
                                {errors.mobile_number}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group my-2">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className={`form-control ${
                            touched.email && errors.email ? "error-input" : ""
                          }`}
                        />
                        {touched.email && errors.email && (
                          <div className="error-message">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12 form-group my-2">
                      <Field
                        as="textarea"
                        rows="5"
                        name="message"
                        className={`form-control ${
                          touched.message && errors.message ? "error-input" : ""
                        }`}
                        placeholder="Type your message here..."
                      />
                      {touched.message && errors.message && (
                        <div className="error-message">{errors.message}</div>
                      )}
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="formCheckbox">
                        <div className="d-flex items-center gap-2">
                          <Field
                            type="checkbox"
                            name="contactByEmail"
                            className={`form-check-input ${
                              touched.contactByEmail && errors.contactByEmail
                                ? "error-input"
                                : ""
                            }`}
                          />
                          <label className="form-check-label fw-bold font18">
                            I agree to be contacted
                          </label>
                        </div>
                        {touched.contactByEmail && errors.contactByEmail && (
                          <div className="error-message">
                            {errors.contactByEmail}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="my-2 d-flex justify-content-center align-items-center">
                      <button className="btnSubmit" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>

                <div className="officeDetails">
                  <div className="box">
                    <p className="m-0 font18">Find our office at</p>
                    <p className="m-0 fw-bold font26">
                      <i className="bi bi-geo-alt-fill "></i> BLUE CROSS LIMITED
                    </p>
                    <p className="m-0 font26">
                      99, White Lion Street, London, United Kingdom N1 9PF
                    </p>
                  </div>
                  <div className="box mt-5">
                    <p className="m-0 font18 font26">
                      Reach out and give us a call
                    </p>
                    <p className="m-0 fw-bold font26">
                      <i className="bi bi-telephone-fill "></i> +44 207 916 8676
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="m-0 font18 font26">Write us</p>
                    <p className="m-0 fw-bold font26">
                      <i className="bi bi-envelope-fill"></i>{" "}
                      info@bluecross.co.uk
                    </p>
                  </div>
                </div>
              </div>

              <section>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.5232573555375!2d-0.10975280000000001!3d51.533069100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b43b3fa1e97%3A0x6d3d8fccff563585!2s70%20White%20Lion%20St%2C%20London%20N1%209PP%2C%20UK!5e1!3m2!1sen!2sin!4v1739276510754!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </section>
              <section className="text-center mt-5">
                <p className="listenPara">WE LISTEN TO YOU</p>
                <p className="lifePara pt-0">Resolution Of Grievances</p>
                <div className="query">
                  <div className="imageQuery">
                    <img
                      src="/src/assets/undraw_mail_fzk2__1_-removebg-preview.png"
                      width="263"
                      height="246"
                      alt="Mail illustration"
                    />
                  </div>
                  <div className="textt">
                    <h3>Query Resolution</h3>
                    <p>
                      If you have got an opinion, we want to hear from you. In
                      addition, the reach out and give us a call should reflect.
                      Give us a call or email us at
                      <strong className="ps-2">
                        support@bluecross.com
                      </strong>{" "}
                      <br /> and we will respond to you in 24 to 48 hours.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </Formik>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

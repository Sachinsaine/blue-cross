import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const countrys = [
  { country: "United States of America" },
  { country: "United Kingdom" },
  { country: "India" },
  { country: "Australia" },
  { country: "Germany" },
];

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_movjewa", "template_zl1pjes", form.current, {
        publicKey: "sGxQCDoD_FkSeFglU",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
        },
        (error) => {
          toast.error(error);
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
            dailingCode: "",
            mobile_number: "",
            email: "",
            message: "",
            contactByEmail: "",
          }}
          validationSchema={Yup.object({
            from_name: Yup.string()
              .required("Name is required")
              .min(3, "Name must be at least 3 characters"),
            countryName: Yup.string()
              .required("Country is required")
              .oneOf(
                ["United Kingdom", "United States of America"],
                "Invalid country"
              ),
            dailingCode: Yup.string().required("Dialing code is required"),
            mobile_number: Yup.string()
              .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
              .required("Mobile number is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            message: Yup.string()
              .required("Message is required")
              .min(10, "Message must be at least 10 characters")
              .max(500, "Message cannot exceed 500 characters"),
            contactByEmail: Yup.boolean()
              .oneOf([true], "You must agree to be contacted")
              .required("You must agree to be contacted"),
          })}
          onSubmit={(values) => {
            alert(
              `Dialing Code: ${values.dialingCode}, Phone: ${values.phoneNumber}`
            );
          }}
        >
          <div className="contactContainer">
            <div className="contactCont">
              <div className="contactBg">
                <h2 className="lifePara text-center">Get in touch!</h2>
                <Form
                  className="row"
                  name="contactForm"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="formInputsCont">
                    <div className="form-group my-2">
                      <Field
                        type="text"
                        name="from_name"
                        placeholder="Full name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="from_name"
                        className="text-danger fw-bold text-sm"
                        component="div"
                      />
                    </div>
                    <div className="form-group my-2">
                      <Field
                        as="select"
                        name="countryName"
                        className="form-control"
                      >
                        <option value="Select Country">Select Country</option>
                        {countrys.map(({ data, country }) => (
                          <option key={data} value={data}>
                            {country}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="countryName"
                        className="text-danger fw-bold text-sm"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="formInputsCont">
                    <div className=" form-group my-2">
                      <div className="dial row">
                        <div className="col-4">
                          <Field
                            placeholder="+00"
                            id="dailingCode"
                            name="dailingCode"
                            readOnly
                            className="form-control phone"
                          />
                        </div>
                        <div className="col-8 ps-0">
                          <Field
                            type="text"
                            placeholder="Phone number"
                            className="form-control"
                            name="mobile_number"
                          />
                        </div>

                        <ErrorMessage
                          name="mobile_number"
                          className="text-danger fw-bold text-sm"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="form-group my-2">
                      <Field
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        className="text-danger fw-bold text-sm"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 form-group my-2">
                    <Field
                      as="textarea"
                      rows="5"
                      name="message"
                      className="form-control"
                      placeholder="Type your message here..."
                    />
                    <ErrorMessage
                      name="message"
                      className="text-danger fw-bold text-sm"
                      component="div"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <div id="formCheckbox">
                      <input
                        type="checkbox"
                        name="contactByEmail"
                        className="form-check-input "
                      />
                      <label className="form-check-label fw-bold font18">
                        I agree to be contacted
                      </label>
                    </div>
                  </div>
                  <div className=" my-2 d-flex justify-content-center align-items-center">
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
                    <i className="bi bi-geo-alt-fill "></i> POST ASSURANCE
                    BROKERS LIMITED
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
                    info@postassurancebrokers.co.uk
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
              ></iframe>
            </section>
            <section className="text-center mt-5">
              <p className="listenPara">WE LISTEN TO YOU</p>
              <p className="lifePara pt-0">Resolution Of Grievances</p>
              <div className="query">
                <div className="imageQuery">
                  <img
                    src="https://content.ageasfederal.com/blob/query_c890463b3e.svg"
                    width="263"
                    height="246"
                  />
                </div>
                <div className="textt">
                  <h3>Query Resolution</h3>
                  <p>
                    if you have got an opinion, we want to hear from you In
                    addition, the reach out and give us a call should reflect
                    Give us a call
                    <strong>
                      support@postassurancebrokers.com
                    </strong> <br /> and we will respond to you in 24 to 48
                    hours
                  </p>
                </div>
              </div>
            </section>
          </div>
        </Formik>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

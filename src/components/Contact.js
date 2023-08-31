// import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import sanityClient from "../client";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => {
  return value.trim().length > 5 && value.includes("@");
};
export default function Contact() {
  const [contactDetails, setDetails] = useState(null);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetmessage,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (nameIsValid && messageIsValid && emailIsValid) {
    formIsValid = true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nameIsValid && messageIsValid && emailIsValid) {
      const formData = new FormData();
      formData.append("name", nameValue);
      formData.append("email", emailValue);
      formData.append("message", messageValue);

      // Send form data to the server
      try {
        const response = await fetch("contact.php", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          if (data.status === "success") {
            MySwal.fire({
              icon: "success",
              title: "Success",
              text: data.message,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
        } else {
          // Show error message to the user
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Form submission failed",
          });
        }
      } catch (error) {
        console.error("Form submission failed", error);
      }
      resetemail();
      resetname();
      resetmessage();
    } else {
      return;
    }
    // Perform form validation if needed

    // Send form data to the server
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contacts"] {
               heading,
               subheading,
               ptext,
               ctext,
               phone,
               email,
               address,
               facebook,
               instagram,
               twitter,
               pinterest,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`
      )
      .then((data) => setDetails(data))
      .catch(console.error);
  }, []);
  return (
    contactDetails &&
    contactDetails.map((details, index) => (
      <div key={index}>
        <section
          className="breadcrumb-area overlay-dark-2 bg-3"
          style={{ backgroundImage: `url(${details.mainImage.asset.url})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-text text-center">
                  <h2>{details.heading}</h2>
                  <p>{details.subheading}</p>
                  <div className="breadcrumb-bar">
                    <ul className="breadcrumb">
                      <li>
                        <Link to="/">{details.ptext}</Link>
                      </li>
                      <li>{details.ctext}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="google-map-area" style={{ marginTop: "70px" }}>
          {/* Google Map Area Start */}
          <div className="google-map-area w-100">
            <iframe
              title="mao"
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.995897552329!2d18.374831415407343!3d40.05319248559249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134414618186d813%3A0x88441cf80da37c48!2sVico%20dei%20Cirioli%2C%2073037%20Poggiardo%20LE%2C%20Italy!5e0!3m2!1sen!2sng!4v1680744740058!5m2!1sen!2sng"
            />
          </div>
          {/* Google Map Area Start */}
        </div>
        <section className="contact-form-area pt-90">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4 className="contact-title">Contact Info</h4>
                <div className="contact-text">
                  <p>
                    <span className="c-icon">
                      <FaPhoneAlt />
                    </span>
                    <span className="c-text">{details.phone}</span>
                  </p>
                  <p>
                    <span className="c-icon">
                      <FaEnvelope />
                    </span>
                    <span className="c-text">{details.email}</span>
                  </p>
                  <p>
                    <span className="c-icon">
                      <FaMapMarkerAlt />
                    </span>
                    <span className="c-text">{details.address}</span>
                  </p>
                </div>
                <h4 className="contact-title">Social Media</h4>
                <div className="link-social">
                  <Socials
                    facebook={details.facebook}
                    instagram={details.instagram}
                    twitter={details.twitter}
                    pinterest={details.pinterest}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <h4 className="contact-title">Send Your Message</h4>
                <form id="contact-form" method="post" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="Name">Name</label>
                      <input
                        value={nameValue}
                        type="text"
                        name="name"
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                      />
                      {nameError && (
                        <p className="error-text">Name cannot be empty</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={emailChangeHandler}
                        value={emailValue}
                        onBlur={emailBlurHandler}
                      />
                      {emailError && (
                        <p className="error-text">Enter a valid email!</p>
                      )}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        value={messageValue}
                        onChange={messageChangeHandler}
                        onBlur={messageBlurHandler}
                      />
                      {messageError && (
                        <p className="error-text">Message cannot be empty</p>
                      )}
                      <button
                        type="submit"
                        className="default-btn"
                        disabled={!formIsValid}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </section>
      </div>
    ))
  );
}

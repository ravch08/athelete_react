import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

const NewsLetter = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log("Form Submitted: ", data);
    reset();
  };

  return (
    <section id="newsletter">
      <div className="container">
        <div className="newsletter-wrapper">
          <h2>
            SIGN UP <br /> & GET 10% OFF.
          </h2>

          <form className="newletter-submit" onSubmit={handleSubmit(submitForm)}>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required!",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid Email format!",
                },
              })}
            />
            <button type="submit" className="btn btn-white">
              SUBMIT
            </button>
            <p className="form-error">{errors?.email?.message}</p>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

import React, { useState } from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", form);
      alert("Message Sent!");
    }
  };

  return (
    <section className="bg-white w-full min-h-screen relative">
      <Navbar />

      <div className="w-full h-full flex flex-col items-center pt-[2vw]">
        {/* TITLE */}
        <h1 className="text-[20vw] font-extrabold uppercase leading-none text-center lg:text-left">
          <span className="bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text font-switzer2">
            Contact
          </span>
        </h1>

        {/* LOWER SECTION */}
        <div className="w-full max-w-[90%] mx-auto flex justify-between items-start p-4 pt-[5vw]">
          {/* LEFT SIDE IMAGE */}
          <div className="flex flex-col justify-between w-[50%] space-y-[2vw]">
            <div className="">
              <h2 className="text-[8vw] text-orange-500 font-wix2 leading-0  ">
                "
              </h2>
            </div>

            <div className=" text-[2vw] text-black font-wix2   ">
              <p>
                Got an idea in mind? Let’s connect and explore how I can bring
                it to life.
              </p>
            </div>

            <div className="flex justify-start items-center space-x-2">
              <img
                src="./images/pfp.jpeg"
                alt="pfp"
                className="w-[8vw] md:w-[5vw] rounded-full object-cover"
              />

              <div className="font-wix2 font-light">
                
              <p>Shahzaib Anwar</p>
              <p>Creative Developer</p>
              </div>
            </div>
          </div>

          {/* <img
            src="./images/pfp.jpeg"
            alt="pfp"
            className="w-[25vw] md:w-[10vw] rounded-full object-cover"
          /> */}

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-[55vw] md:w-[35vw] flex flex-col gap-[4vw] md:gap-[1.5vw] font-switzer"
          >
            {/* NAME */}
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={form.name}
                onChange={handleChange}
                className={`w-full bg-transparent outline-none border-b-1 border-b-gray-400 
                  ${
                    errors.name
                      ? "border-red-500"
                      : "border-transparent focus:border-orange-500"
                  }
                  text-[4vw] md:text-[1.2vw] pb-[1.5vw] md:pb-[0.5vw]
                  placeholder-gray-500 transition-all duration-300`}
              />

              {errors.name && (
                <p className="text-red-500 text-[3vw] md:text-[0.9vw] mt-[1vw]">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={form.email}
                onChange={handleChange}
                className={`w-full bg-transparent outline-none border-b-1 border-b-gray-400 
                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-transparent focus:border-orange-500"
                  }
                  text-[4vw] md:text-[1.2vw] pb-[1.5vw] md:pb-[0.5vw]
                  placeholder-gray-500 transition-all duration-300`}
              />

              {errors.email && (
                <p className="text-red-500 text-[3vw] md:text-[0.9vw] mt-[1vw]">
                  {errors.email}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col w-full">
              <textarea
                type="text-area"
                name="message"
                placeholder="Your Message*"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className={`w-full bg-transparent outline-none border-b-1 border-b-gray-400   
                  ${
                    errors.message
                      ? "border-red-500"
                      : "border-transparent focus:border-orange-500"
                  }
                  text-[4vw] md:text-[1.2vw] pb-[1.5vw] md:pb-[0.5vw]
                  placeholder-gray-500 transition-all duration-300`}
              />

              {errors.message && (
                <p className="text-red-500 text-[3vw] md:text-[0.9vw] mt-[1vw]">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold
              text-[4vw] md:text-[1.2vw] px-[5vw] md:px-[2vw] py-[2vw] md:py-[0.8vw]
              rounded-md w-fit transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Contact;

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending data to an API or server
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="m-10 p-6  bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#4B3993] text-center mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg text-[#674e8e] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-[#4B3993] bg-opacity-20 placeholder:text-black border-[2px] border-zinc-500 text-black text-opacity-70 rounded-xl p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg text-[#674e8e] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-[#4B3993] bg-opacity-20 placeholder:text-black border-[2px] border-zinc-500 text-black text-opacity-70 rounded-xl p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg text-[#674e8e] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="6"
              className="bg-[#4B3993] bg-opacity-20 placeholder:text-black border-[2px] border-zinc-500 text-black text-opacity-70 rounded-xl p-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="p-3 mt-4 bg-gradient-to-br from-[#C5BBDF] to-[#c08ed8]/40 text-black rounded-xl shadow-md"
          >
            Send Message
          </button>
        </form>
        <p className="text-lg text-center mt-6">
          We look forward to hearing from you! Our team will get back to you as
          soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

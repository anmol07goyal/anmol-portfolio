"use client";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://formspree.io/f/xwkgbnpk", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data, "anshu"))
      .catch((error) => console.error(error));

    // Reset form fields to initial values
    setName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");

    // Contact form submitted
    setSubmitted(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 10000); // 10000 ms = 10 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [submitted]);

  return (
    <div className="p-4">
      <Form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          {/* Name and Phone */}
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="tel"
              pattern={"[0-9]{10}"}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">
            Email <span className="text-lg text-red-500">*</span>
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Message */}
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
            Message <span className="text-lg text-red-500">*</span>
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="11"
            placeholder="Type your message here... "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <Button
          variant="primary"
          type="submit"
          className="w-full p-4 text-gray-100 mt-4 bg-[#0e7490]"
        >
          Submit
        </Button>
      </Form>
      {submitted && (
        <p className="pt-4 text-green-600 text-md">
          Thank you for your message! We will get back to you as soon as
          possible.
        </p>
      )}
    </div>
  );
};

export default ContactForm;

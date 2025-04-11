import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { sendContactForm } from "@/lib/sendContactForm";
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    msg: "",
  };

  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await sendContactForm(values);
      if (response.ok) {
        toast.success("Message sent successfully!");
        setValues(initialValues);
      } else {
        const result = await response.json();
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="contact"
      className="mt-30 mb-20 w-11/12 max-w-[500px] mx-auto scroll-mt-25"
    >
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-center text-3xl mb-5 text-orange-400">Contact Me</h1>

        <input
          required
          type="text"
          placeholder="Name"
          className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-orange-400"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-400"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <textarea
          required
          name="msg"
          placeholder="Message"
          className="border-2 border-gray-300 p-2 rounded-md h-50 focus:outline-none focus:border-orange-400"
          value={values.msg}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`h-10 flex justify-center items-center gap-2 bg-orange-400 py-2 rounded-md hover:bg-orange-500 cursor-pointer text-white font-medium ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <BeatLoader size={12} color="#fff" />
          ) : (
            <>
              Send <SendIcon />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default Contact;

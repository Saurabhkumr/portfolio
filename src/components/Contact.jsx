import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <>
      <div className=" mt-30 mb-20 w-11/12 max-w-[500px] mx-auto">
        <div className="flex flex-col gap-5 w-full ">
          <h1 className="text-center text-2xl">Contact Me</h1>
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-orange-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-400"
          />
          <textarea
            name="msg"
            placeholder="Message"
            className="border-2 border-gray-300 p-2 rounded-md h-50 focus:outline-none focus:border-orange-400"
          />
          <button className="bg-orange-400 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
            Send
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;

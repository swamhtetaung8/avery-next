import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const ContactLinks = () => {
  return (
    <section className=" my-10 py-20 lg:px-40" name="contact-links">
      <h1 className="main-heading text-center ">My Socials</h1>
      <div className=" mt-10 space-y-5 lg:w-[30%] md:w-[50%] w-[80%] mx-auto">
        <a
          href="https://www.facebook.com/nowevegotourownvibe"
          target={"_blank"}
          className="block group">
          <div className="border px-4 py-3 rounded-full border-black flex justify-between items-center group-hover:bg-black group-hover:text-white transition-all duration-500">
            <p>Facebook</p>
            <BsFacebook size={25} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/nowevegotourownvibe"
          target={"_blank"}
          className="block group">
          <div className="border px-4 py-3 rounded-full border-black flex justify-between items-center group-hover:bg-black group-hover:text-white transition-all duration-500">
            <p>Instagram</p>
            <BsInstagram size={25} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactLinks;

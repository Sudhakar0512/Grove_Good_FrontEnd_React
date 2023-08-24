import React from "react";

import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

const iconS =
  "text-secondary hover:text-primary transition duration-200 ease-in-out cursor-pointer h-5 w-5";

export const ProductItemShare = () => {
  return (
    <div className="flex space-x-6 px-3 ">
      <textarea placeholder=" Feedback for Farmers" className="border-solid border-2 border-sky-500" name="" id="" cols="50" rows="5"></textarea>
    </div>
  );
};

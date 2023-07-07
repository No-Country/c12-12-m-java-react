import React from "react";

function AboutUs() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">About Us</h3>
      <ul className="text-sm flex flex-col gap-3 cursor-pointer">
        <li className="hover:underline underline-offset-8 transition">
          About Us
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Contacts
        </li>
        <li className="hover:underline underline-offset-8 transition">News</li>
        <li className="hover:underline underline-offset-8 transition">Jobs</li>
      </ul>
    </div>
  );
}

export default AboutUs;

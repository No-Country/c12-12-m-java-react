import React from "react";

function Customers() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">Customers</h3>
      <ul className="text-sm flex flex-col gap-3">
        <li className="hover:underline underline-offset-8 transition">
          <a href="/size-guide" className="hover:text-gray-400">
            Size Guide
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/faq" className="hover:text-gray-400">
            FAQ
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/shipping-method" className="hover:text-gray-400">
            Shipping Method
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/gift-card" className="hover:text-gray-400">
            Gift Card
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/returns-and-exchanges" className="hover:text-gray-400">
            Returns & Exchanges
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Customers;

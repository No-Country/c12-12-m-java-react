import React from "react";

function Customers() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">Customers</h3>
      <ul className="text-sm flex flex-col gap-3 cursor-pointer">
        <li className="hover:underline underline-offset-8 transition">
          Payment
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Personal Data Policy
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Promotions
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Gift Vouchers
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Affiliate Program
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Rules for using promo codes
        </li>
      </ul>
    </div>
  );
}

export default Customers;

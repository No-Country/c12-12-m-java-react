function AboutUs() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">VivaVintage</h3>
      <ul className="text-sm flex flex-col gap-3 cursor-pointer">
        <a
          href="#about"
          className="hover:underline underline-offset-8 transition"
        >
          About Us
        </a>
        <a
          href="#whyUs"
          className="hover:underline underline-offset-8 transition"
        >
          Why VivaVintage
        </a>
        <li className="hover:underline underline-offset-8 transition">
          Our Stores
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Work With Us
        </li>
        <li className="hover:underline underline-offset-8 transition">
          Terms & Conditions
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;

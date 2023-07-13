
function AboutUs() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">About Us</h3>
      <ul className="text-sm flex flex-col gap-3 cursor-pointer">
        <a href="#about" className="hover:underline underline-offset-8 transition">
          About Us
        </a>
        <li className="hover:underline underline-offset-8 transition">
          Contacts
        </li>
        <a href="#whyUs" className="hover:underline underline-offset-8 transition">Why VivaVintage</a>
        <li className="hover:underline underline-offset-8 transition">Jobs</li>
      </ul>
    </div>
  );
}

export default AboutUs;

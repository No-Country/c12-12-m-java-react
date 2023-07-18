import Carrousel from "../components/Carrousel/Carrousel";
import Intro from "../components/Intro/Intro";
import { useSelector } from "react-redux";

function HomePage() {
  const storeData = useSelector((state) => state);
  return (
    <>
      <div className="p-[5%] bg-[#f2f2f2]">
        <div>
          <h1 className="text-5xl md:text-8xl text-center mb-[3%]">
            Bienvenido a VivaVintage
          </h1>
          <p className="text-base md:text-3xl text-center">
            The real old-fashion is not in the movies, but here
          </p>
        </div>
      </div>
      <Carrousel />
      <Intro />
    </>
  );
}

export default HomePage;

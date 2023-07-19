import Carrousel from "../components/Carrousel/Carrousel";
import Intro from "../components/Intro/Intro";


function HomePage() {
  
  return (
    <>
      <div className="p-[5%] bg-[#f2f2f2]">
        <div>
          <h1 className="text-5xl md:text-8xl text-center mb-[3%]">
            Bienvenido a VivaVintage
          </h1>
          <p className="text-base md:text-3xl text-center">
          La verdadera moda antigua no está en las películas, sino aquí
          </p>
        </div>
      </div>
      <Carrousel />
      <Intro />
    </>
  );
}

export default HomePage;

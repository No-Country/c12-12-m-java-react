import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import { useSelector } from "react-redux";

function HomePage() {
  const storeData = useSelector((state) => state);
  console.log("store", storeData);
  return (
    <>
      <div style={{ padding: "5%", backgroundColor: "#f2f2f2" }}>
        <div>
          <h1
            style={{
              fontSize: "96px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Bienvenido a VivaVintage
          </h1>
          <p style={{ fontSize: "30px", textAlign: "center" }}>
            The real old-fashion is not in the movies, but here
          </p>
        </div>
      </div>
      <Carrousel />
      <Intro />
      <Footer />
    </>
  );
}

export default HomePage;

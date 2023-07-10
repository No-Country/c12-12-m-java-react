//import Card from "../components/Card/Card";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <div style={{ padding: "5%" }}>
		<Carrousel/>
		<div style={{padding: "5% 12%"}}>
			<h1 style={{ fontSize: "30px" }}>
          Bienvenido a nuestro e-commerce de ropa vintage!
        </h1>
		</div>
        
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

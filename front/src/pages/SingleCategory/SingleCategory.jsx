import "./SingleCategory.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
import Loading from "../../components/Loading";
import ProductCard from "../../components/Card/Card";
import RadioBtn from "../../components/RadioBtn";
import { capitalizeFirstLetter } from "../../utils/constants";

const SingleCategory = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(() => {
    const storedGender = localStorage.getItem("gender");
    return storedGender ? storedGender : "all";
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cat } = useParams();
  let selectedCategory;
  const formattedName = capitalizeFirstLetter(cat);

  if (cat === "pantalones") {
    selectedCategory = "pants";
  } else if (cat === "camisas-remeras") {
    selectedCategory = "shirts";
  } else if (cat === "sombreros") {
    selectedCategory = "hats";
  } else if (cat === "camperas") {
    selectedCategory = "jackets";
  } else if (cat === "accesorios") {
    selectedCategory = "accesories";
  } else if (cat === "calzados") {
    selectedCategory = "shoes";
  }

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setGender(selectedGenre);
  };

  useEffect(() => {
    getCategoryProduct();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const filtered = productData.filter((product) => {
      if (gender === "all") {
        // Mostrar todos los productos sin importar el género
        return product.category === selectedCategory;
      } else {
        // Filtrar por género seleccionado
        return (
          product.category === selectedCategory && product.clothing === gender
        );
      }
    });

    setFilteredProducts(filtered);
  }, [productData, selectedCategory, gender]);

  useEffect(() => {
    localStorage.setItem("gender", gender);
  }, [gender]);

  const getCategoryProduct = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        //`https://apimocha.com/vivavintage/products`
        `http://localhost:8080/product`
      );

      setIsLoading(false);
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loading = isLoading ? (
    <Container
      maxWidth="xl"
      style={{
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        paddingLeft: 10,
        paddingBottom: 20,
      }}
    >
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </Container>
  ) : (
    ""
  );
  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          paddingTop: "90px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-12">
            <h2
              className="display-5 text-center"
              style={{ marginBottom: "2%" }}
            >
              {formattedName}
            </h2>
            <hr />
          </div>
        </div>
        <RadioBtn onChange={handleGenreChange} gender={gender} />
        {loading}
        <Container
          maxWidth="xl"
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBottom: 20,
            marginBottom: 30,
            width: "100%",
          }}
        >
          {filteredProducts.map((prod) => (
            <ProductCard prod={prod} cat={cat} key={prod.id} />
          ))}
        </Container>
      </Container>
    </>
  );
};

export default SingleCategory;

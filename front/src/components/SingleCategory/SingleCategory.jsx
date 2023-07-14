import "./SingleCategory.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from "@mui/material";
import Loading from "../Loading";
import ProductCard from "../Card/Card";
import { capitalizeFirstLetter } from "../../utils/constants";

const SingleCategory = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(() => {
    const storedGender = localStorage.getItem('gender');
    return storedGender ? storedGender : 'all';
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
    localStorage.setItem('gender', gender);
  }, [gender]);

  const getCategoryProduct = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `https://apimocha.com/vivavintage/products`
      );

      setIsLoading(false);
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const RadioBtn = () => (
    <FormControl style={{ marginLeft: "5%" }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Genero</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={gender}
        name="row-radio-buttons-group"
        onChange={handleGenreChange}
        style={{ flexDirection: "row" }}
      >
        <FormControlLabel value="woman" control={<Radio />} label="Mujer" />
        <FormControlLabel value="man" control={<Radio />} label="Hombre" />
        <FormControlLabel value="all" control={<Radio />} label="Todos" />
      </RadioGroup>
    </FormControl>
  );

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
        <RadioBtn />
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

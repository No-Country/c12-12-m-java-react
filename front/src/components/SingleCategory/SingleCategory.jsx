import "./SingleCategory.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
//import { Box, Button, MenuItem, FormControl, Select } from '@mui/material'
import Loading from '../Loading';
//import { BiFilterAlt } from 'react-icons/bi';
import ProductCard from "../Card/Card";
import {capitalizeFirstLetter} from '../../utils/constants';


const SingleCategory = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [filterOption, setFilterOption] = useState('All')
  // const [title, setTitle] = useState('All')
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

  useEffect(() => {
    getCategoryProduct();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const filtrado = productData.filter(
      (product) => product.category === selectedCategory
    );
    setFilteredProducts(filtrado);
    //eslint-disable-next-line
  }, [productData, cat]);

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

  // const handleChange = (e) => {
  //     setFilterOption(e.target.value.split(" ").join("").toLowerCase())
  //     setTitle(e.target.value)
  // }
  // // pricelowtohigh
  // // pricehightolow
  // // highrated
  // // lowrated

  // const getData = async () => {
  //     setIsLoading(true)
  //     const filter = filterOption.toLowerCase()
  //     const { data } = await axios.post(`${process.env.REACT_APP_PRODUCT_TYPE_CATEGORY_}`, { userType: cat, userCategory: filter })
  //     setProductData(data)
  //     setIsLoading(false)
  // }
  // useEffect(() => {
  //     getData()
  // }, [filterOption])

  const loading = isLoading ? (
      <Container maxWidth='xl' style={{ marginTop: 10, display: "flex", justifyContent: "center", flexWrap: "wrap", paddingLeft: 10, paddingBottom: 20 }}>
          <Loading /><Loading /><Loading /><Loading />
          <Loading /><Loading /><Loading /><Loading />
      </Container >
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
        <div className="row" style={{marginBottom: "20px"}}>
          <div className="col-12">
            <h2 className="display-5 text-center" style={{marginBottom: '2%'}}>{formattedName}</h2>
            <hr />
          </div>
        </div>
        {/* < Box sx={{ minWidth: 140 }}>
                    <FormControl sx={{ width: 140 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, width: "80vw" }}>
                            <Button endIcon={<BiFilterAlt />}>Filters</Button>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={title}
                                sx={{ width: 200 }}
                                onChange={(e) => handleChange(e)}
                            >
                                {productFilter.map(prod => (
                                    <MenuItem key={prod} value={prod}>{prod}</MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </FormControl>
                </Box> */}
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
            // <Link to={`/${cat}/${prod.id}`} key={prod.id} className="link">
              <ProductCard prod={prod} cat={cat} key={prod.id}/>
            // </Link>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default SingleCategory;


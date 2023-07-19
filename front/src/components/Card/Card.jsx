import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  Rating,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import "./Card.scss";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { capitalizeFirstLetter } from "../../utils/constants";

export default function ProductCard({ prod, cat }) {
  const name = capitalizeFirstLetter(prod.name);
  const rating = Math.floor(Math.random() * 5) + 1;
  const dispatch = useDispatch();
  const addProduct = (prod) => {
    dispatch(addCart(prod));
  };

  return (
    <Card className="main_card">
      <Link to={`/${cat}/${prod.id}`} key={prod.id} className="link">
        <CardActionArea className="card_action">
          <Box className="cart_box">
            <img
              alt={prod.name}
              src={prod.image}
              loading="lazy"
              className="cart_img"
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center" }}
              id="title"
            >
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h6" color="primary" id="price">
          ${prod.price}
        </Typography>
        <Typography>
          <Rating precision={0.5} name="read-only" value={rating} readOnly />
        </Typography>
      </CardActions>
      <Button onClick={() => addProduct(prod)}>Add to cart</Button>
    </Card>
  );
}

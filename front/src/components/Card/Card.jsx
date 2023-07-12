import { Card, CardActionArea, CardActions, Rating, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {capitalizeFirstLetter} from '../../utils/constants';
import './Card.scss';


export default function ProductCard({ prod }) {
    const name = capitalizeFirstLetter(prod.name);
    const rating = Math.floor(Math.random() * 5) + 1;
    return (
        <Card className="main_card">
            <CardActionArea className="card_action">
                <Box className="cart_box">
                    <img alt={prod.name} src={prod.image} loading='lazy' className="cart_img" />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ textAlign: "center" }} id='title'>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
                <Typography variant="h6" color="primary" id="price">
                    ${prod.price}
                </Typography>
                <Typography >
                    <Rating precision={0.5} name="read-only" value={rating} readOnly />
                </Typography>
            </CardActions>
        </Card >
    );
}
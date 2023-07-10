import { Card, CardActionArea, CardActions, Rating, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './Card.scss';

// let prod = {
//     name: 'Campera de jean',
//     image: 'https://www.eldon.com.ar/media/catalog/product/cache/2318891599dd6b7da7fbbfb553d20c24/2/5/25012023-25012023-25feb_eldon_kobe_605_copia.jpg',
//     price: "20.000",
//     rating: 3,

// }


export default function ProductCard({ prod }) {
    return (
        <Card className="main_card">
            <CardActionArea className="card_action">
                <Box className="cart_box">
                    <img alt={prod.name} src={prod.image} loading='lazy' className="cart_img" />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ textAlign: "center" }} id='title'>
                        {prod.name.length > 20 ? prod.name.slice(0, 20) + '...' : prod.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
                <Typography variant="h6" color="primary" id="price">
                    ${prod.price}
                </Typography>
                <Typography >
                    <Rating precision={0.5} name="read-only" value={prod.rating} readOnly />
                </Typography>
            </CardActions>
        </Card >
    );
}
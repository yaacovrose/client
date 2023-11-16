import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Remove } from '@mui/icons-material';
import { Card, CardActionArea, CardMedia, CardContent, Typography, IconButton, Stack, Box } from '@mui/material';
import { findProductById } from '../functions';
import Product from '../interface';

function Cart() {

    const cart = useAppSelector(state => state.cart.products)

    const dispatch = useAppDispatch();

    return (
        <Stack>
            {cart.map((product: CartProduct, index: number) => {
                return <Box key={index} >

                    <Typography gutterBottom variant="h5" component="div">
                        {product?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product?.description}
                    </Typography>

                </Box>
            })}
        </Stack>
    )
}

export default Cart


return (
    <div>
        {cart.map((obj, index) => {
            const product = findProductById(obj.productId);
            const quantity = obj.quantity

            return (
                <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia component="img" height="140" alt="green iguana" src={product!.image} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product?.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product?.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="add">
                        <AddIcon />
                    </IconButton>
                    <IconButton aria-label="remove">
                        <Remove />
                    </IconButton>
                    <Typography>
                        {quantity}
                    </Typography>
                </Card>
            );
        })}
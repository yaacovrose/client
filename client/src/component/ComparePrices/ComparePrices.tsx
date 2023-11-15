import { Link } from 'react-router-dom';
import'./comparePrices.css'
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import Product from '../interface';


export default function ComparePrices(){

    const product1: string = useAppSelector((state) => state.compare.productId1)
    const product2: string = useAppSelector((state) => state.compare.productId2)
    
    const allData: Product[] = useAppSelector((state) => state.products);


    return(
        <Stack>
            <Typography variant='h3'>Compare Prices</Typography>
            
        </Stack>
    )
}
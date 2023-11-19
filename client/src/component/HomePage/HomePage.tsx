import HomeCategories from './HomeCategories/HomeCategories';
import TopCategoryAndProduct from './TopCategory/TopCategory';
import { Stack } from "@mui/material";


export default function HomePage(){
    
    return(
        <Stack spacing={0} sx={{display: "flex"}}>
            <HomeCategories />
            <TopCategoryAndProduct/>
        </Stack>
    )
}
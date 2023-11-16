import "./homepage.css"
import HomeCategories from './HomeCategories/HomeCategories';
import TopCategoryAndProduct from './TopCategory/TopCategory';
import { Stack } from "@mui/material";


export default function HomePage(){
    
    return(
        <Stack spacing={2} sx={{display: "flex", flexDirection: "row"}}>
            <HomeCategories/>
            <TopCategoryAndProduct/>
        </Stack>
    )
}
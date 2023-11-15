import { connectToData } from '../functions';
import "./homepage.css"
import Header from '../Heder/Heder';
import HomeCategories from './HomeCategories/HomeCategories';
import TopCategoryAndProduct from './TopCategory/TopCategory';
import { Stack } from '@mui/system';





export default function HomePage(){

    connectToData()
    return(
        <Stack sx={{justifyContent: "center", alignItems: "center"}}>
            <Header/>
            <HomeCategories/>
            <TopCategoryAndProduct/>
        </Stack>
    )
}
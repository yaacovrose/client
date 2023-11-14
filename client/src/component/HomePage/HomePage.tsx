import "./homepage.css"
import Header from '../Heder/Heder';
import HomeCategories from './HomeCategories/HomeCategories';
import TopCategoryAndProduct from './TopCategory/TopCategory';



export default function HomePage(){

    return(
        <div>
            <Header/>
            <HomeCategories/>
            <TopCategoryAndProduct/>
            
        </div>
    )
}
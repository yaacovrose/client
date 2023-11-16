import "./homepage.css"
import HomeCategories from './HomeCategories/HomeCategories';
import TopCategoryAndProduct from './TopCategory/TopCategory';


export default function HomePage(){
    
    return(
        <div>
            <HomeCategories/>
            <TopCategoryAndProduct/>
        </div>
    )
}
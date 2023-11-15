import { connectToData } from '../functions';
import "./homepage.css"
import Header from '../Header/Header';
import HomeCategories from './HomeCategories/HomeCategories';
import TopCategoryAndProduct from './TopCategory/TopCategory';


export default function HomePage(){
    
    connectToData()
    return(
        <div>
            <HomeCategories/>
            <TopCategoryAndProduct/>
        </div>
    )
}
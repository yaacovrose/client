import { Link } from 'react-router-dom';
import { connectToData } from '../functions';
import "./homepage.css"
import Heder from '../Heder/Heder';
import HomeCategories from './HomeCategories/HomeCategories';


export default function HomePage(){

    connectToData()
    //   const data = useAppSelector((state) => state.products);
    return(
        <div>
            <Heder/>
            <HomeCategories/>
            
        </div>
    )
}
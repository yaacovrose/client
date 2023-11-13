import { useAppSelector } from "../../../app/hooks";
import Product from "../../interface";

export default function TopCategoryAndProduct() {
  
    const data = useAppSelector((state) => state.products);
    
    return( 
    <div>

    </div>)
}

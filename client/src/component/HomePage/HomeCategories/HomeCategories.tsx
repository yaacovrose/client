import { Link,useNavigate } from "react-router-dom";
import "./homeCategories.css";
import { useAppSelector } from "../../../app/hooks";
import Product from "../../interface";

export default function HomeCategories() {
  const data = useAppSelector((state) => state.products);

  const uniqueProductsByCategory:Product[] = [];

  const uniqueCategories = new Set();
  data.products.forEach((product) => {
    if (!uniqueCategories.has(product.category)) {
      uniqueCategories.add(product.category);
      uniqueProductsByCategory.push(product);
    }
  });
  const Navigate = useNavigate();
  
  const handleClick = (cat:string) => {
    Navigate(`/categories/${cat}`);
  };

  return (
    <div id="category">
      {uniqueProductsByCategory.map((obj) => (
        <div onClick={()=>handleClick(obj.category)} key={obj.id} className="card">
          {obj.category}
        </div>
      ))}
    </div>
  );
}

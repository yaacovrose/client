
import Paper from "@mui/material/Paper";



interface CategoryCardProps {
  size: number;
  category: string;
  url: string;
  onClick: (category: string) => void;
}


const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, url, size }) => {
  console.log(url);
  
  return (
    <Paper
      elevation={3}
      style={{
        width: size !== 0 ? "50px" : "160px",
        height: size !== 0 ? "50px" : "160px",
        borderRadius: "50%",
        margin: 16,
        textAlign: "center",
        cursor: "pointer",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      onClick={() => onClick(category)}
    ></Paper>
  );
};



export default CategoryCard;
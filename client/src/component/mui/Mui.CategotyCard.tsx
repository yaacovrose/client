
import Paper from "@mui/material/Paper";



interface CategoryCardProps {
    category: string;
    url: string;
    onClick: (category: string) => void;
  }
  

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, url }) => {
  console.log(url);
  
    return (
      <Paper
        elevation={3}
        style={{
          width: "160px",
          height: "160px",
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

import Paper from "@mui/material/Paper";



interface CategoryCardProps {
    category: string;
    onClick: (category: string) => void;
  }
  

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
    return (
      <Paper
        elevation={3}
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          margin: "16px",
          textAlign: "center",
          cursor: "pointer",
          backgroundImage:
            "url(https://ksp.co.il/m_action_libs/img/topCategory/6.png?v=2029)",
          backgroundSize: "cover",
        }}
        onClick={() => onClick(category)}
      ></Paper>
    );
  };

  
  
  export default CategoryCard;
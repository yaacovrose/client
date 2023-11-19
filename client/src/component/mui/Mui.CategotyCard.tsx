import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

const CategoryCardPaper = styled(Paper)(({ theme }) => ({
  margin: 16,
  marginBottom:'5px',
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.2)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
}));

interface CategoryCardProps {
  size: number;
  category: string;
  url: string | number;
  onClick: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, url, size }) => {
  return (
    <CategoryCardPaper
      elevation={3}
      style={{
        width: size !== 0 ? "60px" : "160px",
        height: size !== 0 ? "60px" : "160px",
        borderRadius: "50%",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => onClick(category)}
    ></CategoryCardPaper>
  );
};

export default CategoryCard;

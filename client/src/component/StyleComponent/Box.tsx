import { Box } from "@mui/material";
import { styled } from "@mui/system";

const NewCategoryCard = styled(Box)({
    margin: 16,
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    textAlign: "center",
    cursor: "pointer",
    backgroundImage:
        "url(https://ksp.co.il/m_action_libs/img/topCategory/6.png?v=2029)",
    backgroundSize: "cover"
});

export default NewCategoryCard;
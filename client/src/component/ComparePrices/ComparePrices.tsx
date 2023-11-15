import'./comparePrices.css'
import { useAppSelector } from '../../app/hooks';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function ComparePrices(){
    const navigate = useNavigate();

const id1 = localStorage.getItem('compare1')
const id2 = localStorage.getItem('compare2')

const data = useAppSelector((state)=> state.products)

const product1 = data.products.find((p) => p.id == id1);
const product2 = data.products.find((p) => p.id == id2);

const ok = () =>{
    localStorage.removeItem('compare1')
    localStorage.removeItem('compare2')
    navigate(`/categories/${product1?.category}`);
}

    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea >
                    <CardMedia
                      component="img"
                      height="140"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product1?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product1?.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea >
                    <CardMedia
                      component="img"
                      height="140"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product2?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product2?.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
<button onClick={ok}>OK</button>
        </div>
    )
}
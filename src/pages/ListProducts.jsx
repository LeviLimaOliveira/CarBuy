import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const ListProducts = () => {
  let [carros, setCarros] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/carros")
      .then((response) => response.json())
      .then((data) => setCarros(data));
  });
  return (
    <>
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      {carros.map((carro, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Carro"
            height="140"
            image={carro.Fotos[0]} // Usando a primeira foto como imagem do carro
          />
          <CardContent key={index}>
            <Typography gutterBottom variant="h5" component="div">
              {carro.Marca} {carro.Modelo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ano: {carro.Ano}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">R$ {carro.Preço}</Button>
            <Button size="small">{carro.Visualizacoes} Visualizações</Button>
          </CardActions>
        </Card>
      ))}
         </Container>
    </React.Fragment>
    </>
  );
};

export default ListProducts;
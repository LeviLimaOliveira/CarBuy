import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const ListProducts = () => {
  let [carros, setCarros] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/carros")
      .then((response) => response.json())
      .then((data) => setCarros(data));
  }, []); // Adicionando array vazio para que o useEffect seja executado apenas uma vez
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <Grid container spacing={3}>
          {carros.map((carro, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Carro"
                  height="140"
                  image={carro.Fotos[0]} // Usando a primeira foto como imagem do carro
                />
                <CardContent>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ListProducts;

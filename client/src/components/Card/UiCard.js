import React from 'react';
import { Card, CardMedia, Typography, Paper, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function UiCard(props) {
  return (
    <Box width="100%" height="100%" position={'relative'}>
      <Paper elevation={4}>
        <Card>
        {props.sousCategorie === 'Brands' && (
        <CardMedia
            component="img"
            style={{ width: '100%', height: '100%', maxWidth: '100%' }} // Adjust the maxWidth property
            image={`http://localhost:8000/${props.imageUrl}`}
            />)}
          {props.sousCategorie !== 'Brands' && (
            <>
            <CardMedia
            component="img"
            style={{ width: '100%', height: '100%', maxWidth: '100%' }} // Adjust the maxWidth property
            image={`http://localhost:8000/${props.imageUrl}`}
            />
              <Typography mt={1} minHeight={{xs:'80px',sm:'60px'}} ml={0.5} variant="p" fontSize={{xs:'13px',sm:'12px'}} component="div" fontWeight="bold">
                {props.title}
              </Typography>
              <Typography ml={0.5} mt={0.5} mb={0.5} variant="p" fontSize="17px" fontWeight="bold" component="p">
                {props.price}$
              </Typography>
              <Box display="flex" >
            <Link to={`/view/${props.category}/${props.sousCategorie}/${props.id}`} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
              <Button
                color="primary"
                variant="contained"
                size="small"
                sx={{
                  width: '100%',
                  p:1,
                  fontFamily:'cursive',
                  fontWeight:'bold'
                }}
              >
                Quick View
              </Button>
            </Link>
            </Box>
            </>
          )}
        </Card>
      </Paper>
    </Box>
  );
}

export default UiCard;

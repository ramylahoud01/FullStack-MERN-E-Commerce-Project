import React from 'react'
import { useLoaderData } from 'react-router-dom'
import UiCard from '../Card/UiCard';
import { Grid ,Typography} from '@mui/material';
function SousCategory() {
    const datas = useLoaderData();
    const data = datas.data
  return (
    <> 
    <Typography paddingBottom={'90px'} paddingTop={'90px'} fontWeight={'bold'} variant="h4" component="h4" textAlign="center" fontStyle='italic' >
      {data[0].sousCategorie} -
    </Typography>
    <Grid container  rowSpacing={5} columnSpacing={4}  paddingLeft={'10px'} paddingRight={'10px'} paddingBottom={'20px'}>
    {data.map(item =>
        <Grid item xs={6} sm={4} md={3} key={item._id}>
        <UiCard sousCategorie={item.sousCategorie} category={item.category} id={item._id} title={item.title} content={item.content} imageUrl={item.imageUrl} price={item.price} />
        </Grid>
        )}
    </Grid>
    </>
  )
}

export default SousCategory
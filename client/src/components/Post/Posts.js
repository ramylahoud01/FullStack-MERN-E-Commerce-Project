import React, { useState,useRef } from 'react';
import { Stack, Typography, Button, TextField, MenuItem ,ToggleButtonGroup,ToggleButton} from '@mui/material';
import { useNavigate , useRouteLoaderData } from 'react-router-dom';
import { getIdofUser } from '../util/auth';

function Posts() {
  const id = getIdofUser()
  console.log(id)
  const token = useRouteLoaderData('root')
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [price, setPrice] = useState('');
  const [sousCategorie,setsousCategorie]=useState('')
  const [values,setValues]=useState([])
  const [onSale,setonSale]=useState("")
  const fileInputRef = useRef(null);
  const navigate = useNavigate ();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(sousCategorie)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('productImage', productImage);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('sousCategorie', sousCategorie);
    formData.append('onSale', onSale);
    formData.append('values', values);
    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers:{
        "Authorization":"Bearer "+token
      },
      body: formData,
    });
    setCategory('')
    setTitle('')
    setContent('')
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setPrice('')
    setsousCategorie('')
    setonSale("")
    setValues('')
    navigate('/post')
  };
  const changeHandler= (event,updatedFormat) =>{
    setValues(updatedFormat)
}

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'40px 0px'}}>
      <Stack
        spacing={1.5}
        sx={{borderRadius: '5px',border: '1.5px solid #318CE7 ',p:4}}>
        <Typography color='#318CE7' textAlign={'center'} fontWeight={'700'} fontSize={'22px'}>
          New Post:
        </Typography>
        <Stack direction={'row'}>
          <TextField sx={{width:{xs:'180px',sm:'240px' }}} name='title' label='Title' variant='standard' size='medium' color='primary' type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
        </Stack>
        <Stack direction={'row'}>
          <TextField sx={{width:{xs:'180px',sm:'240px' }}} name='content' label='Content' variant='standard' size='medium' type='text' color='primary' value={content} onChange={(event) => setContent(event.target.value)} />
        </Stack>
        <Stack direction={'row'}>
          <TextField sx={{width:{xs:'180px',sm:'240px' }}} name='productImage' label='Image' variant='standard' size='medium' type='file' color='primary' inputRef={fileInputRef} onChange={(event) => setProductImage(event.target.files[0])}/>
        </Stack>
        <Stack direction={'row'}>
          <TextField sx={{width:{xs:'180px',sm:'240px' }}} name='price' label='Price' variant='standard' size='medium' type='number' color='primary' value={price} onChange={(event) => setPrice(event.target.value)}/>
        </Stack>
        <Stack direction={'row'}>
          <TextField type='number' variant='standard' size='medium' value={onSale}  color='primary' name='onSale' label='onSale' sx={{width:{xs:'180px',sm:'240px' }}} onChange={(event)=>setonSale(event.target.value)}/>
        </Stack>
        <Stack direction={'row'}>
          <TextField label='Category' name='category' select fullWidth size='small' color='primary' value={category} onChange={(event) => setCategory(event.target.value)}>
            <MenuItem value='shoes'>Shoes</MenuItem>
            <MenuItem value='clothing'>Clothing</MenuItem>
            <MenuItem value='accessories'>Accessories</MenuItem>
            <MenuItem value='fitness'>Fitness</MenuItem>
            <MenuItem value='newArrival'>New Arrival</MenuItem>
            <MenuItem value="pages">Brands</MenuItem>
            <MenuItem value="summer">Summer</MenuItem>
          </TextField>
        </Stack>
        {category ==='summer' && <>
        <Stack direction={'row'}>
          <TextField label='Sous-Category' name='sousCategory' select fullWidth size='small' color='primary' value={sousCategorie} onChange={(event) => setsousCategorie(event.target.value)}>
            <MenuItem value='collection'>new Collection</MenuItem>
          </TextField>
        </Stack>
        <Stack direction={'row'}>
        <Stack>
          <div style={{marginBottom:"10px"}}>
            <Typography variant='span' color={'gray'} fontStyle={'italic'} fontWeight={'bold'}>Size :</Typography>
          </div>
          <div>
          <ToggleButtonGroup onChange={changeHandler} value={values} name='values' >
            <ToggleButton value={"xs"}>XS</ToggleButton>
            <ToggleButton value={"s"}>S</ToggleButton>
            <ToggleButton value={"m"}>M</ToggleButton>
            <ToggleButton value={"l"}>L</ToggleButton>
            <ToggleButton value={"xl"}>XL</ToggleButton>
            <ToggleButton value={"xxl"}>XXL</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Stack>
        </Stack>
        </>
        }
        {category ==='shoes' && 
        <>
        <Stack direction={'row'}>
          <TextField label='Sous-Category' name='sousCategory' select fullWidth size='small' color='primary' value={sousCategorie} onChange={(event) => setsousCategorie(event.target.value)}>
            <MenuItem value='FootballShoes'>Football Shoes</MenuItem>
            <MenuItem value='RunningShoes'>Running Shoes</MenuItem>
            <MenuItem value='HickingShoes'>Hicking Shoes</MenuItem>
            <MenuItem value='TrainingShoes'>Training Shoes</MenuItem>
          </TextField>
        </Stack>
        <Stack direction={'row'}>
        <Stack>
          <div style={{marginBottom:"10px"}}>
            <Typography variant='span' color={'gray'} fontStyle={'italic'} fontWeight={'bold'}>Size :</Typography>
          </div>
          <div>
          <ToggleButtonGroup onChange={changeHandler} value={values} name='values' >
            <ToggleButton value={"38"}>38 Eu</ToggleButton>
            <ToggleButton value={"39"}>39 Eu</ToggleButton>
            <ToggleButton value={"40"}>40 Eu</ToggleButton>
            <ToggleButton value={"41"}>41 Eu</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div>
          <ToggleButtonGroup onChange={changeHandler} value={values} >
            <ToggleButton value={"42"}>42 Eu</ToggleButton>
            <ToggleButton value={"43"}>43 Eu</ToggleButton>
            <ToggleButton value={"44"}>44 Eu</ToggleButton>
            <ToggleButton value={"45"}>45 Eu</ToggleButton>
          </ToggleButtonGroup>
          </div>
        </Stack>
    </Stack>
    </>
        }

        {category ==='clothing' && 
        <>
        <Stack direction={'row'}>
          <TextField label='Sous-Category' name='sousCategory' select fullWidth size='small' color='primary' value={sousCategorie} onChange={(event) => setsousCategorie(event.target.value)} >
            <MenuItem value='GymClothing'>Gym Clothing</MenuItem>
            <MenuItem value='RunningClothing'>Running Clothing</MenuItem>
            <MenuItem value='HickingClothing'>Hicking Clothing</MenuItem>
            <MenuItem value='TrainingClothing'>Training Clothing</MenuItem>
          </TextField>
        </Stack>
        <Stack direction={'row'}>
        <Stack>
          <div style={{marginBottom:"10px"}}>
            <Typography variant='span' color={'gray'} fontStyle={'italic'} fontWeight={'bold'}>Size :</Typography>
          </div>
          <div>
          <ToggleButtonGroup onChange={changeHandler} value={values} name='values' >
            <ToggleButton value={"xs"}>XS</ToggleButton>
            <ToggleButton value={"s"}>S</ToggleButton>
            <ToggleButton value={"m"}>M</ToggleButton>
            <ToggleButton value={"l"}>L</ToggleButton>
            <ToggleButton value={"xl"}>XL</ToggleButton>
            <ToggleButton value={"xxl"}>XXL</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Stack>
    </Stack>
        </>}

        {category ==='accessories' && <Stack direction={'row'}>
          <TextField label='Sous-Category' name='sousCategory' select fullWidth size='small' color='primary' value={sousCategorie} onChange={(event) => setsousCategorie(event.target.value)}>
            <MenuItem value='FootballAccessories'>Football Accessories</MenuItem>
            <MenuItem value='RunningAccessories'>Running Accessories</MenuItem>
            <MenuItem value='HickingAccessories'>Hicking Accessories</MenuItem>
            <MenuItem value='TrainingAccessories'>Training Accessories</MenuItem>
          </TextField>
        </Stack>}
         {category ==='pages' && <Stack direction={'row'}>
          <TextField label='Sous-Category' name='sousCategory' select fullWidth size='small' color='primary' value={sousCategorie} onChange={(event) => setsousCategorie(event.target.value)}>
            <MenuItem value='Brands'>Our Brands</MenuItem>
          </TextField>
        </Stack>}

        {category ==='fitness' && <Stack direction={'row'}>
          <TextField label='Sous-Category' name='sousCategory' select fullWidth size='small' color='primary' value={sousCategorie} onChange={(event) => setsousCategorie(event.target.value)}>
            <MenuItem value='FitnessEquipments'>Fitness Equipments</MenuItem>
            <MenuItem value='FitnessMachines'>Fitness Machines</MenuItem>
            <MenuItem value='Weight&Dumbbells'>Weight & Dumbbells</MenuItem>
          </TextField>
        </Stack>}
        {category ==='newArrival' && 
        <>
        <Stack direction={'row'}>
          <TextField label='Sous-Category' name='sousCategory' select fullWidth size='small' color='primary' value={sousCategorie} onChange={(event) => setsousCategorie(event.target.value)}>
            <MenuItem value='Collection'>Collection</MenuItem>
          </TextField>
        </Stack>
        <Stack direction={'row'}>
        <Stack>
          <div style={{marginBottom:"10px"}}>
            <Typography variant='span' color={'gray'} fontStyle={'italic'} fontWeight={'bold'}>Size :</Typography>
          </div>
          <div>
          <ToggleButtonGroup onChange={changeHandler} value={values} name='values' >
            <ToggleButton value={"xs"}>XS</ToggleButton>
            <ToggleButton value={"s"}>S</ToggleButton>
            <ToggleButton value={"m"}>M</ToggleButton>
            <ToggleButton value={"l"}>L</ToggleButton>
            <ToggleButton value={"xl"}>XL</ToggleButton>
            <ToggleButton value={"xxl"}>XXL</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Stack>
    </Stack>
        </>}
        
        <Stack>
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default Posts;

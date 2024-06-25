import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addProduct } from '../../redux/inventorySlice';
import { Product } from '../../types/interface.product';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useStyles from './form.component.styles';

const FormAddProduct: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  // const [products, setNewProduct] = useState([]);

  //add product handler method
  const addItem = (event: any) => {
    event.preventDefault();
    // console.log(event.target.name.value);
    const formData = event.target;
    const newProduct: Product = {
      id: null,
      name: formData.name.value,
      price: formData.price.value,
      quantity: formData.quantity.value,
    };
    // console.log(newProduct);

    // // add a new product inside products array
    // setNewProduct([...products, newProduct]);
    // console.log(products);

    dispatch(addProduct(newProduct));
  };

  return (
    <div>
      <form className={classes.form} onSubmit={addItem}>
        <Stack spacing={2}>
          <Typography variant='h6' component='div'>
            Ürün Adı:
          </Typography>
          <TextField
            size='small'
            id='outlined-search'
            label='Ürünün adını giriniz'
            name='name'
            type='search'
          />
          <Typography variant='h6' component='div'>
            Fiyat:
          </Typography>
          <TextField
            size='small'
            id='outlined-search'
            label='₺ olarak giriniz'
            name='price'
            type='text'
          />
          <Typography variant='h6' component='div'>
            Stok Adedi:
          </Typography>
          <TextField
            size='small'
            id='outlined-search'
            label='Stok adedi giriniz'
            name='quantity'
            type='number'
          />
          <Button
            size='small'
            color='primary'
            variant='contained'
            type='submit'
          >
            Üürünü Stoklara Ekle
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default FormAddProduct;

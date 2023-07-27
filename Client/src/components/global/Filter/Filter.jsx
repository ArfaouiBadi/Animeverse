
import { styled } from "styled-components"

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const names = [
  'One Piece',
  'Hunter X Hunter',
  'Dragon Ball Z',
  'Naruto',
  'Death Note',
  'My Dress Up Darling',
  'Swort Art Online',
  'Jujtsu Kaisen',
  'Fairy Tail',
  'Boku No Hero Academia',
];

const Container = styled.div`
    
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-top: 3px #121D31 solid;
    border-bottom: 1px white solid;
`
const Text=styled.h3`

color: #121D31;
font-weight: 500;
padding: 25px;
flex: 1;
`
const Wrapper=styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;  
  
`
const Filter = () => {
    const [Brand, setBrand] = useState([]);
    const handleChangeBrand = (event) => {
      const {
        target: { value },
      } = event;
      setBrand(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    


    const [Size, setSize] = useState('');
    const [Sort, setSort] = useState('');

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };


    return (
      <div>
        <Container>
        <Grid container display="flex" justifyContent="space-between">
        <Wrapper><Text>Filter Products :</Text>
        <FormControl sx={{ m: "auto", width: 100,scale:"calc(0.8)" }} >
          <InputLabel id="demo-multiple-checkbox-label" sx={{fontFamily: 'Josefin Sans'}}>BRAND</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={Brand}
            onChange={handleChangeBrand}
            input={<OutlinedInput label="Brand" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            sx={{fontFamily: 'Josefin Sans'}}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} >
                <Checkbox checked={Brand.indexOf(name) > -1} />
                <ListItemText primary={name} sx={{marginLeft:5,color:"#121D31",fontFamily: 'Josefin Sans'}}/>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: "auto", minWidth: 80 ,scale:"calc(0.8)"}}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{fontFamily: 'Josefin Sans'}}>SIZE</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Size}
          onChange={handleChangeSize}
          autoWidth
          label="Size"
          sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}
        >
          
          <MenuItem value={""} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>None</MenuItem>
          
          <MenuItem value={"XS"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>XS</MenuItem>
          <MenuItem value={"S"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>S</MenuItem>
          <MenuItem value={"M"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>M</MenuItem>
          <MenuItem value={"L"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>L</MenuItem>
          <MenuItem value={"XL"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>XL</MenuItem>
          <MenuItem value={"XXL"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>XXL</MenuItem>
        </Select>
      </FormControl></Wrapper>
        
      <Wrapper>
      <Text>Sort Products :</Text>
      <FormControl sx={{ m: "auto", minWidth: 80,scale:"calc(0.8)" }}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{fontFamily: 'Josefin Sans'}}>SORT</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Sort}
          onChange={handleChangeSort}
          autoWidth
          label="Sort"
          sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}
        >
          
          <MenuItem value={""} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>All</MenuItem>
          
          <MenuItem value={"XS"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>PRICE LOW</MenuItem>
          <MenuItem value={"S"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>PRICE HIGH</MenuItem>
          <MenuItem value={"M"} sx={{color:"#121D31",fontFamily: 'Josefin Sans'}}>BEST SELLER</MenuItem>
          
        </Select>
      </FormControl>
      </Wrapper>
      
        </Grid>
        </Container>
      </div>
    );
}

export default Filter

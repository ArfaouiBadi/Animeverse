
import { styled } from "styled-components"

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useContext, useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { mobile } from "../../responsive";
import StoreContext from "../../../hooks/storeContext";
import {  useTheme } from "@mui/material/styles";


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
  'Hunter x Hunter',
  'Dragon Ball Z',
  'Naruto',
  'Death Note',
  'My Dress-Up Darling',
  'Swort Art Online',
  'Jujutsu Kaisen',
  'Fairy Tail',
  'My Hero Academia',
  'Bungou Stray Dogs',
  'Tokyo Ghoul',
];

const Container = styled.div`
    
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color:${(props) => props.theme.palette.background.main};
    border-top: 3px #121D31 solid;
    border-bottom: 1px white solid;
`
const Text=styled.h3`

color: #121D31;
font-weight: 500;
padding: 25px;
flex: 1;
${mobile({ display: "none" })}
`
const Wrapper=styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;  
  
`
const Filter = () => {
    const {Brand,setBrand,Size,setSize,Sort,setSort}=useContext(StoreContext)
  
    const handleChangeBrand = (event) => {
      const {
        target: { value },
      } = event;
      setBrand(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const theme = useTheme();

  
    return (
      <div>
        <Container theme={theme}>
        <Grid container display="flex" justifyContent="space-between">
        <Wrapper><Text style={{color:theme.palette.primary.main}}>Filter Products :</Text>
        <FormControl sx={{ m: "auto", width: 100,scale:"calc(0.8)" }} >
          <InputLabel id="demo-multiple-checkbox-label" sx={{fontFamily: 'Josefin Sans',color:theme.palette.primary.main}}>Series</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={Brand}
            onChange={handleChangeBrand}
            input={<OutlinedInput label="Series" />}
            renderValue={(selected) => selected.join(',')}
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
          
          <MenuItem value={"All"} sx={{color:theme.palette.primary.main,fontFamily: 'Josefin Sans'}}>All</MenuItem>
          
          <MenuItem value={"XS"} sx={{color:theme.palette.primary.main,fontFamily: 'Josefin Sans'}}>XS</MenuItem>
          <MenuItem value={"S"} sx={{color:theme.palette.primary.main,fontFamily: 'Josefin Sans'}}>S</MenuItem>
          <MenuItem value={"M"} sx={{color:theme.palette.primary.main,fontFamily: 'Josefin Sans'}}>M</MenuItem>
          <MenuItem value={"L"} sx={{color:theme.palette.primary.main,fontFamily: 'Josefin Sans'}}>L</MenuItem>
          <MenuItem value={"XL"} sx={{color:theme.palette.primary.main,fontFamily: 'Josefin Sans'}}>XL</MenuItem>
          <MenuItem value={"XXL"} sx={{color:theme.palette.primary.main,fontFamily: 'Josefin Sans'}}>XXL</MenuItem>
        </Select>
      </FormControl></Wrapper>
        
      <Wrapper>
      <Text style={{color:theme.palette.primary.main}}>Sort Products :</Text>
      <FormControl sx={{ m: "auto", minWidth: 80,scale:"calc(0.8)" }}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{fontFamily: 'Josefin Sans'}}>SORT</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Sort}
          onChange={handleChangeSort}
          autoWidth
          label="Sort"
          sx={{color:theme.palette.text.primary,fontFamily: 'Josefin Sans'}}
        >
          
          <MenuItem value={"All"} sx={{color:theme.palette.text.primary,fontFamily: 'Josefin Sans'}}>All</MenuItem>
          <MenuItem value={"ASC"} sx={{color:theme.palette.text.primary,fontFamily: 'Josefin Sans'}}>PRICE LOW</MenuItem>
          <MenuItem value={"DESC"} sx={{color:theme.palette.text.primary,fontFamily: 'Josefin Sans'}}>PRICE HIGH</MenuItem>
          
          
        </Select>
      </FormControl>
      </Wrapper>
      
        </Grid>
        </Container>
      </div>
    );
}

export default Filter

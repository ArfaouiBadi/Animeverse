import { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import './product.css'


const product = () => {
    const [products,setProducts]=userState([])
    const [catagories,setCatagories]=userState([])
    const [subCatagories,setSubCatagories]=userState([])
    const {data,loading,error}=useFetch('/products')
    useEffect(()=>{
        data && console.log(data)
    },[data])
  return (
    <></>
  )
}

export default product

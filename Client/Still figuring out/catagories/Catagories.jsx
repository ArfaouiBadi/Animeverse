import { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import './catagories.css'


const Catagories = () => {
    
    const [catagories,setCatagories]=userState([])
    
    const {data,loading,error}=useFetch('/catagories')
    useEffect(()=>{
        data && console.log(data)
    },[data])
  return (
    <></>
  )
}

export default Catagories

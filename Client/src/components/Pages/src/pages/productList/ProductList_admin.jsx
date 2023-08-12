import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../../requestMethods";

export default function ProductList() {
  
  const [products,setData]=useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("api/products");
        setData(res.data);
      } catch {}
    };
    
    getProducts();
  }, [products]);
  const handleDelete = async (id) => {
    
    try{await userRequest.delete("api/products/"+id);
    
  }catch{
      
    }
    
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        style={{color:"black"}}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
        
      />
    </div>
  );
}

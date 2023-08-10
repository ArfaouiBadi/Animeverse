import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../../requestMethods";
import { Alert } from "@mui/material";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("user");
        setData(res.data);
      } catch {}
    };
    getUsers();
  }, []);


  const handleDelete = async (id) => {
    
    try{await userRequest.delete("user/"+id);
    
  }catch{
      
    }
    
  };
 
  const columns = [
    
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "address",
      headerName: "Address",
      width: 120,
    },
    {
      field: "userName",
      headerName: "Username",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        
        return (
          <>
            <Link to={"/admin/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

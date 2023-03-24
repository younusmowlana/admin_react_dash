import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {  useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../../Redux/apiCalls";

export default function UserList() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);


  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);


  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
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
      {user ? 
      <DataGrid
          rows={user}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          getRowId={(row) => row._id}
          checkboxSelection
      /> : <h1>No data</h1>
}
    </div>
  );
}

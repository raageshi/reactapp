import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
export default function Dashboard() {
const [rows,setRows] = useState([]);
  useEffect(()=>{
    axios({
      method: "POST",
      url: "http://localhost:8090/raki/getData",
      headers: {"Content-Type": "application/json; charset=UTF-8",
        "x-access-key": "",
        "x-access-token": '',
      },
    })
    .then(res => {
      if(res.data){
        setRows(res.data);
      }
    })
    .catch(err => {
      console.log("error in request", err);
    });
  },[])

const columns = [
  { field: 'name', headerName: 'Name', width: 90 },
  {
    field: 'mail',
    headerName: 'Mail',
    width: 150,
    editable: false,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    width: 150,
    editable: false,
  },
  {
    field: 'ip',
    headerName: 'IP',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'location',
    headerName: 'Location',
    description: 'User Ip location',
    sortable: false,
    width: 160,
  },
  {
    field: 'visited',
    headerName: 'Last Visited',
    description: 'Last Visited',
    sortable: false,
    width: 160,
  },
  {
    field: 'address',
    headerName: 'Address',
    description: 'Address of the user',
    sortable: false,
    width: 160,
  },
];


    return (
        <div>
          <Box>
         <TextField id="standard-basic" label="Standard" variant="standard" />
         <DataGrid sx = {{height:'380px' , width:'fix-content'}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
          </Box>
        </div>
      );
    }
 
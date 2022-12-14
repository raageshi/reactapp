import { Box, TextField } from '@mui/material';
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
export default function Dashboard() {

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
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
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', ip: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', ip: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', ip: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', ip: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', ip: null },
  { id: 6, lastName: 'Melisandre', firstName: null, ip: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', ip: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', ip: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', ip: 65 },
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
 
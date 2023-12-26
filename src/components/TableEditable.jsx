import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import { ToastContainer } from 'react-toastify';
import { successToast } from '../components/utils/toastUtils';
import { Typography } from "@mui/material";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

// eslint-disable-next-line
function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
        ...oldRows,
        {
          id,
          name: '',
          registration_number: '',
          attendance: '',
        },
      ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

const TableEditable = ({ myData, myColumns }) => {
  // console.log(myData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(true)
  const [rows, setRows] = React.useState(myData);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };
  
  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);

    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const currentTime = new Date().toLocaleTimeString();
    const updatedRow = { ...newRow, isNew: false, time: currentTime};
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    setSubmitted(false)
    return updatedRow;
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleGetAllData = async () => {
    setLoading(true)
    // Access the current rows data
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(rows);
    successToast("Results Submitted")
    setLoading(false)
    setSubmitted(true)
  };

  const columns = [
    ...myColumns,
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
        sx={{
            display: "flex", gap: 2,
            flexDirection: "column",
            pb: "20px",
            width: '100%',
            '& .actions': {
            color: 'text.secondary',
            },
            '& .textPrimary': {
            color: 'text.primary',
            },
        }}
    >
        <ToastContainer />
        
        {
            rows ? (
              <>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slots={{
                    // toolbar: EditToolbar,
                    }}
                    slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
                />
                <LoadingButton 
                  variant="contained" 
                  type="submit"
                  onClick={handleGetAllData} 
                  loading={loading}
                  loadingPosition="start"
                  disabled={submitted}
                  sx={{ mt: 3, mb: 2, width: "15%" }}
                  >
                  {loading ? 'Submitting...' : 'Submit Record'}
                </LoadingButton>
              </>
            ) : (
                <Typography variant="h5">No records available. Set a new record by making a query search</Typography>
            )
        }
    </Box>
  );
}

export default TableEditable
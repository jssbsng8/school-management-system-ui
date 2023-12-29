import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { IconButton, Tooltip } from "@mui/material";
import { FiEye, FiTrash, FiDownload } from "react-icons/fi";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const Table = ({
  data,
  fields,
  numberOfRows,
  enableTopToolBar,
  enableBottomToolBar,
  enablePagination,
  enableRowSelection,
  enableColumnFilters,
  enableEditing,
  enableDeleteButton,
  enableColumnDragging,
  showPreview,
  routeLink,
}) => {
  const columns = useMemo(() => fields, [fields]);

  const [tableData, setTableData] = useState(() => data);

  const handleDeleteRow = useCallback(
    (row) => {
      if (!window.confirm("Are you sure you want to delete")) {
        return;
      }
      data.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData, data]
  );

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("table-export.pdf");
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={tableData.slice(0, numberOfRows)}
      getRowId={(row) => row.id}
      enableEditing={enableEditing}
      enableColumnDragging={enableColumnDragging}
      enableColumnOrdering
      enableRowSelection={enableRowSelection}
      enableColumnFilters={enableColumnFilters}
      enablePagination={enablePagination}
      enableBottomToolbar={enableBottomToolBar}
      enableTopToolbar={enableTopToolBar}
      renderRowActions={({ row }) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {enableDeleteButton && (
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <FiTrash />
              </IconButton>
            </Tooltip>
          )}
          {showPreview && routeLink && (
            <Tooltip arrow placement="right" title="View">
              <Link to={`/${routeLink}/${row.id}`}>
                <IconButton>
                  <FiEye />
                </IconButton>
              </Link>
            </Tooltip>
          )}
        </Box>
      )}
      renderTopToolbarCustomActions={({ table }) => (
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button
            variant="outlined"
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FiDownload />}
          >
            Export Page
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FiDownload />}
          >
            Export pdf
          </Button>
        </Box>
      )}
      muiTableBodyRowProps={{ hover: false }}
      muiTablePaperProps={{
        sx: {
          padding: "20px",
          borderRadius: "15px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
        },
      }}
      muiTableContainerProps={{
        sx: { borderRadius: "15px" },
      }}
      muiTableHeadCellProps={{
        sx: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      }}
      muiTableHeadProps={{
        sx: {
          "& tr th": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
          },
        },
      }}
      muiTableBodyProps={{
        sx: {
          "& tr td": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
          },
        },
      }}
    />
  );
};

export default Table;

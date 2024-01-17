import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

interface FetchedData {
  id: number;
  title: string;
  body: string;
}

const DataTable = () => {
  const [data, setData] = useState<FetchedData[]>([]);

  const [error, setError] = useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 400,
      renderCell: (params: GridRenderCellParams) => (
        <div style={{ whiteSpace: "pre-line" }}>{params.value}</div>
      ),
    },
    {
      field: "body",
      headerName: "Description",
      width: 500,
      renderCell: (params: GridRenderCellParams) => (
        <div style={{ whiteSpace: "pre-line" }}>{params.value}</div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setData(response.data);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error in Fetchin data...</p>;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;

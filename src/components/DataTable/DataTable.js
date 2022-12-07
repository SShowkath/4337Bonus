import React from 'react'
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns
    
}) => {
    
    return (

        <div style={{ height: '90vh', overflow: "auto" }}>
            <div style={{ display: 'flex', height: '90vh', overflow:"auto" }}>
                <div style={{ flexGrow: 1 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                        toolbar: {
                          showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                        },
                      }}
                />
                </div>
            </div>
        </div>


    );
};

export default DataTable
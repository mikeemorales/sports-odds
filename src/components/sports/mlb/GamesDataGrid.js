import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'matchUp',
        headerName: 'Match Ups',
        width: 200
    },
    {
        field: 'runLine',
        headerName: 'Run Line',
        type: 'number',
        width: 100,
        editable: false,
    },
    {
        field: 'overUnder',
        headerName: 'Over / Under',
        type: 'number',
        width: 100,
        editable: false,
    },
    {
        field: 'moneyLine',
        headerName: 'Money Line',
        type: 'number',
        width: 100,
        editable: false,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },
    { id: 2, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },
    { id: 3, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },
    { id: 4, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },
    { id: 5, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },

];

const GamesDataGrid = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
            />
        </Box>
    );
}

export default GamesDataGrid
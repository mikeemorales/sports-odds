import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const GamesDataGrid = ({ onRowSelected }) => {
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
    ];

    const odds = {
        runLine: {
            opening: {
                points: '-1.5',
                odd: '+135'
            },
            curr: {
                points: '-1.5',
                odd: '+105'
            }
        },
        overUnder: {
            opening: {
                points: 'o7.5',
                odd: '-105'
            },
            curr: {
                points: 'u6.5',
                odd: '-105'
            }
        },
        moneyLine: {
            opening: {
                odd: '+135'
            },
            curr: {
                odd: '-225'
            }
        }
    }

    const rows = [
        {
            id: 1,
            matchUp: 'Dodgers vs. Giants',
            runLine: `${odds.runLine.curr.points} / ${odds.runLine.curr.points}`,
            overUnder: `${odds.overUnder.curr.points} / ${odds.overUnder.curr.points}`,
            moneyLine: `${odds.moneyLine.curr.odd} / ${odds.moneyLine.curr.odd}`
        },
        { id: 2, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },
        { id: 3, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },
        { id: 4, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },
        { id: 5, matchUp: 'Dodgers vs. Giants', runLine: 100, overUnder: 100, moneyLine: 100 },

    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onRowSelected={(e) => onRowSelected(e.data)}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                pageSizeOptions={[20]}
                checkboxSelection
                sx={{ color: 'white' }}
            />
        </Box>
    );
}

export default GamesDataGrid
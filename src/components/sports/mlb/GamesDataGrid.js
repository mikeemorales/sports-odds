import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../../theme/App.css'
import {alpha, gridClasses, styled} from "@mui/material";
import axios from "axios";

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

const GamesDataGrid = ({ onRowSelected }) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9001/api/odds')
            .then(response => {
                setApiData(response.data); // Assuming your API returns an array of events
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const convertToAmericanOdds = (price) => {
            if (price > 2) {
                return Math.round((price - 1) * 100)
            } else if (price < 2) {
                return Math.round(-100 / price - 1)
            } else {
                return 0
            }
        }

    const columns = [
        {
            field: 'matchUp',
            headerName: 'Match Ups',
            flex: 0.5,
        },
        {
            field: 'runLine',
            headerName: 'Run Line',
            type: 'number',
            flex: 1,
            editable: false,
        },
        {
            field: 'overUnder',
            headerName: 'Over / Under',
            type: 'number',
            flex: 1,
            editable: false,
        },
        {
            field: 'moneyLine',
            headerName: 'Money Line',
            type: 'number',
            flex: 1,
            editable: false,
        },
    ];

    const rows = apiData.map(event => ({
        id: event.id,
        matchUp: `${event.away_team} vs ${event.home_team}`,
        runLine: `-`,
        overUnder: `-`,
        moneyLine: `${event.bookmakers[2]?.markets[0]?.outcomes.find(outcome => outcome.name === event.away_team)?.price} / ${event.bookmakers[2]?.markets[0]?.outcomes.find(outcome => outcome.name === event.home_team)?.price}`
    }))

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <StripedDataGrid
                rows={rows}
                columns={columns}
                onRowSelected={(e) => onRowSelected(e.data)}
                rowHeight={50}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                pageSizeOptions={[20]}
                sx={{ color: 'white', border: 'none' }}
                getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even': 'odd'}
            />
        </Box>
    );
}

export default GamesDataGrid
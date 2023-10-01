import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import '../../theme/App.css'
import axios from "axios";
import {useApiData} from "./ApiDataProvider";

const GamesDataGrid = () => {
    const { apiData, setNewApiData } = useApiData()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9001/api/odds');
                const newData = response.data;

                // Check if the fetched data is different from the current data
                if (JSON.stringify(newData) !== JSON.stringify(apiData)) {
                    setNewApiData(newData)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };
        fetchData();
    }, [apiData, setNewApiData])

    const columns = [
        {
            field: 'matchUp',
            headerName: 'Match Ups',
            flex: 1.5,
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

    const rows = apiData.map(event => {
        const awaySpread = `${event.bookmakers[0]?.markets[1]?.outcomes.find(outcome => outcome.name === event.away_team)?.point}`
        const homeSpread = `${event.bookmakers[0]?.markets[1]?.outcomes.find(outcome => outcome.name === event.home_team)?.point}`
        const awayMoneyLine = `${event.bookmakers[2]?.markets[0]?.outcomes.find(outcome => outcome.name === event.away_team)?.price}`
        const homeMoneyLine = `${event.bookmakers[2]?.markets[0]?.outcomes.find(outcome => outcome.name === event.home_team)?.price}`

        const awayMoneyLineConversion = (awayMoneyLine > 2.00)
            ? Math.round((awayMoneyLine - 1) * 100)
            : Math.round(-100 / (awayMoneyLine - 1))

        const homeMoneyLineConversion = (homeMoneyLine > 2.00)
            ? Math.round((homeMoneyLine - 1) * 100)
            : Math.round(-100 / (homeMoneyLine - 1))

        return {
            id: event.id,
            matchUp: `${event.away_team} @ ${event.home_team}`,
            runLine: `${awaySpread} / ${homeSpread}`,
            overUnder: `-`,
            moneyLine: `${awayMoneyLineConversion} / ${homeMoneyLineConversion}`
        };
    });

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
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
            />
        </Box>
    );
}

export default GamesDataGrid
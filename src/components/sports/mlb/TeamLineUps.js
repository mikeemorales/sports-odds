import React from 'react'
import {Grid} from "@mui/material";
import '../../theme/App.css'
import Typography from "@mui/material/Typography";

const homeTeam = [
    'PITCHER',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
]

const awayTeam = [
    'PITCHER',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
]

const playerPositions = [
    'P',
    'C',
    'DH',
    '1B',
    '2B',
    '3B',
    'LF',
    'CF',
    'RF'
]

const PlayerLineUps = () => {
    return (
        <Grid sx={{ display: 'flex', textAlign: 'center' }}>
            <Grid item xs={5}>
                <Typography>Home</Typography>
                <ul>
                    {homeTeam.map((player, index) => (
                        <li key={index}>
                            {player === 'PITCHER' ? (<strong>{player}</strong>) : player}
                        </li>
                    ))}
                </ul>
            </Grid>

            <Grid item xs={2}>
                <Typography>vs.</Typography>
                <ul>
                    {playerPositions.map((position, index) => (
                        <li key={index}>
                            {position === 'P' ? (<strong>{position}</strong>) : position}
                        </li>
                    ))}
                </ul>
            </Grid>

            <Grid item xs={5}>
                <Typography>Away</Typography>
                <ul>
                    {awayTeam.map((player, index) => (
                        <li key={index}>
                            {player === 'PITCHER' ? (<strong>{player}</strong>) : player}
                        </li>
                    ))}
                </ul>
            </Grid>
        </Grid>
    )
}

export default PlayerLineUps
import React from 'react'
import {Grid} from "@mui/material";

const PlayerLineUps = () => {
    return (
        <Grid sx={{ display: 'flex', textAlign: 'center' }}>
            <Grid item xs={5}>
                <ul>
                    <li>PLAYER 1</li>
                    <li>PLAYER 2</li>
                    <li>PLAYER 3</li>
                </ul>
            </Grid>
            {/*PLAYER POSITION*/}
            <Grid item xs={2}>
                <ul>
                    <li>P</li>
                    <li>C</li>
                    <li>DH</li>
                </ul>
            </Grid>
            {/*HOME*/}
            <Grid item xs={5}>
                <ul>
                    <li>PLAYER 1</li>
                    <li>PLAYER 2</li>
                    <li>PLAYER 3</li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default PlayerLineUps
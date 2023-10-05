import React from 'react'
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import PlayerLineUps from "./TeamLineUps";

const FullOdds = () => {
    // if (!selectedRow) {
    //     return (
    //         <>
    //             <Grid item xs={10} sx={{ borderBottom: '1px solid white', mt: 5 }}>
    //                 ODDS
    //             </Grid>
    //             <Grid item xs={2} sx={{ borderBottom: '1px solid white', mt: 5 }}>
    //                 LINE UPS
    //             </Grid>
    //             <Grid item xs={10}>
    //                 <Box sx={{ display: 'flex' }}>
    //                     <Grid item xs={2}>
    //                         OPENING
    //                     </Grid>
    //                     <Grid item xs={2}>
    //                         CURRENT
    //                     </Grid>
    //                     <Grid item xs={2}>
    //                         vs.
    //                     </Grid>
    //                     <Grid item xs={2}>
    //                         CURRENT
    //                     </Grid>
    //                     <Grid item xs={2}>
    //                         OPENING
    //                     </Grid>
    //                 </Box>
    //             </Grid>
    //             <Grid item xs={2}>
    //                 LINE UP PLAYERS
    //             </Grid>
    //         </>
    //     )
    // }

    return (
        <Grid container>
            <Grid item xs={8} sx={{ borderBottom: '1px solid white', mt: 5, mb: 2 }}>
                <Typography>ODDS</Typography>
            </Grid>
            <Grid item xs={4} sx={{ borderBottom: '1px solid white', mt: 5, mb: 2 }}>
                LINE UPS
            </Grid>
            <Grid container>
                <Grid item xs={8} sx={{ display: 'flex', textAlign: 'center' }}>
                    <Grid item xs={2}>
                        <Typography sx={{ fontSize: 12, mb: 3 }}>
                            OPENING
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            +7 / -7
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            o16 / u16
                        </Typography>
                        <Typography>
                            +210 / -190
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{ fontSize: 12, mb: 3 }}>
                            CURRENT
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            +5.5 / -5.5
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            o15 / u15
                        </Typography>
                        <Typography>
                            +220 / - 210
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{ fontSize: 12, mb: 3 }}>AWAY VS. HOME</Typography>
                        <Typography sx={{ mb: 3 }}>Run Line</Typography>
                        <Typography sx={{ mb: 3 }}>Over/Under</Typography>
                        <Typography>ML</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{ fontSize: 12, mb: 3 }}>
                            CURRENT
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            +5.5 / -5.5
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            o15 / u15
                        </Typography>
                        <Typography>
                            +220 / - 210
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{ fontSize: 12, mb: 3 }}>
                            OPENING
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            +7 / -7
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            o16 / u16
                        </Typography>
                        <Typography>
                            +210 / -190
                        </Typography>
                    </Grid>
                </Grid>
                <PlayerLineUps/>
            </Grid>
        </Grid>
    )
}

export default FullOdds
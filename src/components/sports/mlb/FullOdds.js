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
                ODDS
            </Grid>
            <Grid item xs={4} sx={{ borderBottom: '1px solid white', mt: 5, mb: 2 }}>
                LINE UPS
            </Grid>
            <Grid container>
                <Grid item xs={8} sx={{ display: 'flex' }}>
                    <Grid item xs={2}>
                        OPENING
                        <Typography>
                            OPENING LINE
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        CURRENT
                        <Typography>
                            CURRENT LINE
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        vs.
                        <Typography>Run Line</Typography>
                        <Typography>Over/Under</Typography>
                        <Typography>ML</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        CURRENT
                        <Typography>
                            CURRENT LINE
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        OPENING
                        <Typography>
                            OPENING LINE
                        </Typography>
                    </Grid>
                </Grid>
                <PlayerLineUps/>
            </Grid>
        </Grid>
    )
}

export default FullOdds
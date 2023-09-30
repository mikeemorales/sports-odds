import React from 'react'
import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import GamesDataGrid from "./GamesDataGrid";
import Typography from "@mui/material/Typography";
import ApiData from "../../ApiData";

const MLBFullDataLayout = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, width: '100%', mt: 5, color: 'white' }}>
                <Grid container rowSpacing={1}>
                    {/*ROW 1*/}
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                        <Grid item xs={3}>
                            AWAY TEAM
                            <Typography>
                                TEST
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            AWAY LOGO - vs HOME LOGO
                        </Grid>
                        <Grid item xs={3}>
                            HOME TEAM
                            <Typography>
                                TEST
                            </Typography>
                        </Grid>
                    </Box>
                    {/*ROW 2*/}
                    <Grid item xs={10} sx={{ borderBottom: '1px solid white', mt: 5 }}>
                        ODDS
                    </Grid>
                    <Grid item xs={2} sx={{ borderBottom: '1px solid white', mt: 5 }}>
                        LINE UPS
                    </Grid>
                    <Grid item xs={10}>
                        <Box sx={{ display: 'flex' }}>
                            <Grid item xs={2}>
                                OPENING
                            </Grid>
                            <Grid item xs={2}>
                                CURRENT
                            </Grid>
                            <Grid item xs={2}>
                                vs.
                            </Grid>
                            <Grid item xs={2}>
                                CURRENT
                            </Grid>
                            <Grid item xs={2}>
                                OPENING
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        LINE UP PLAYERS
                    </Grid>
                    {/*ROW 3*/}
                    <Grid item xs={12} sx={{ borderBottom: '1px solid white', mt: 5 }}>Games</Grid>
                    <Grid item xs={12}>
                        <GamesDataGrid/>
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                    {/*    <ApiData/>*/}
                    {/*</Grid>*/}
                </Grid>
            </Box>
        </Container>
    )
}

export default MLBFullDataLayout

import React, { useState } from 'react'
import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import GamesDataGrid from "./GamesDataGrid";
import SelectedGamesBigData from "./SelectedRowData";

const MLBFullDataLayout = () => {
    const [selectedRow, setSelectedRow] = useState(null);

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {/*ROW 1*/}
                    <Grid item xs={3}>
                        AWAY TEAM
                    </Grid>
                    <Grid item xs={6}>
                        AWAY LOGO - vs HOME LOGO
                    </Grid>
                    <Grid item xs={3}>
                        HOME TEAM
                    </Grid>
                    {/*ROW 2*/}
                    <Grid item xs={10}>
                        <Box sx={{ display: 'flex' }}>
                            {/*<Grid item xs={2}>*/}
                            {/*    OPENING*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={2}>*/}
                            {/*    CURRENT*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={2}>*/}
                            {/*    vs.*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={2}>*/}
                            {/*    CURRENT*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={2}>*/}
                            {/*    OPENING*/}
                            {/*</Grid>*/}
                            <SelectedGamesBigData selectedRow={selectedRow}/>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        LINE UPS
                    </Grid>
                    {/*ROW 3*/}
                    <Grid item xs={12}>
                        <GamesDataGrid onRowSelected={(rowData) => setSelectedRow(rowData)}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default MLBFullDataLayout

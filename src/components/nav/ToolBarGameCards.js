import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ToolBarGameCards = () => {
    return (
        <Card sx={{ maxWidth: 125, maxHeight: 75, mt: 1, mb: 1 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    GAME ONE - LIVE
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ToolBarGameCards
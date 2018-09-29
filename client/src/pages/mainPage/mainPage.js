import React from 'react';
import FrontPageCard from "../../components/frontPageCard"
import Grid from "@material-ui/core/Grid"
import AppBar from "../../components/AppBar"


const MyComponent = () => (
    <div>
           <AppBar />
        <Grid container spacing={24}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
                <FrontPageCard />
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>

    </div>
);
export default MyComponent;
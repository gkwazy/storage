import React from 'react';
import FrontPageCard from "../../components/frontPageCard"
import Grid from "@material-ui/core/Grid"


const MyComponent = () => (
    <div>
        <Grid container spacing={24}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={24}>
                <FrontPageCard />
            </Grid>

        </Grid>

    </div>
);
export default MyComponent;
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import API from "../utils/API";

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

function MediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>

            <CardMedia
                className={classes.media}
                image="../pic/warehouse.jpg"
                title="storage area"
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    Welcome
          </Typography>
                <Typography component="p">
                    To checkout a item or add to your stock please click the STORE HOUSE link
                    or to add a new item and print a label click the ADD link below
          </Typography>
            </CardContent>

            <CardActions>

                <Button variant="contained" color="primary" component={Link} to="/itemPage">
                    STORE HOUSE
        </Button>
                <Button variant="contained" color="primary" component={Link} to="/formPage">
                    ADD
        </Button>
            </CardActions>
        </Card>


    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
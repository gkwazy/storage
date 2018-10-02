import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import PrintButton from '../components/printButton'


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
    console.log(props);
    let PN = "/singleItemPage/" + props.PN;
    return (
        <Card className={classes.card}>
            <CardActionArea
                onClick={props.loadSearch}>

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" variant="display2"            >
                        {props.Category}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <PrintButton />
        </Card>


    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
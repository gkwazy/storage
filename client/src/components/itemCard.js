import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

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
    return (
        <Card className={classes.card}>
            <CardActionArea id= {props.PN}>
                <CardMedia
                    className={classes.PN}
                    // image={props.picture}
                    // id= {props.PN}
                    title={props.Description}
                />
                        
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2" >
                        {props.Category}
                    </Typography>
                    <Typography component="p">
                        ID: {props.PN}
                    </Typography>
                    <Typography component="p">
                        Description: {props.Description}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>


    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import dymoPrint from './dymo';
let testingTitle = "1";
let Cat = "2";
let Numb = "3";
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function ContainedButtons(props) {
    const { classes } = props;
    return (
        <div>
            <div id="printersDiv">
                <label for="printersSelect">Printer:</label><br />
                <select id="printersSelect"></select>
            </div>
            <div>
                <Button variant="contained" className={props.button} {...props}>

                </Button>
            </div>
        </div>
    );
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
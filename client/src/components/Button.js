import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function ContainedButtons(props) {
    // const { classes } = props;
    return (
        <div>
            <Button variant="contained" color="default" className={props.button} {...props}>
                {props.name}
            </Button>
        </div>
    );
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
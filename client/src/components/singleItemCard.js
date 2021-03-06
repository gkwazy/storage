import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import API from '../utils/API'
import TextField from '@material-ui/core/TextField';
import Button from "./Button";
import { Link } from 'react-router-dom';
import UpLoad from "./upLoad"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class FilledTextFields extends React.Component {


    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="on">

                <TextField
                    required
                    id="ProductNumber"
                    label="Product Number"
                    value={this.props.PN}
                    className={classes.textField}
                    onChange={this.handleChange('PN')}
                    margin="normal"
                    variant="outlined"

                />
                <TextField
                    required
                    id="ProductName"
                    label="Product Name"
                    value={this.props.ProductName}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('productName')}
                />
                <TextField
                    required
                    id="Cost"
                    label="Cost"
                    value={this.props.Cost}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('cost')}
                />
                <TextField
                    required
                    id="Quantity"
                    label="Quantity"
                    value={this.props.Quantity}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('quantity')}
                />
                <TextField
                    id="Supplier"
                    label="Supplier"
                    value={this.props.Supplier}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('supplier')}
                />
                <TextField
                    id="Category"
                    label="Category"
                    value={this.props.Category}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('category')}
                />
                <TextField
                    id="MinQuantity"
                    label="minQuantity"
                    value={this.props.MinQuantity}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('minQuantity')}
                /><TextField
                    id="Location"
                    label="Location Lat"
                    value={this.props.Lat}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('location')}
                />
                <TextField
                    id="Location"
                    label="Location Long"
                    value={this.props.Lon}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('location')}
                />
                <TextField
                    required
                    id="Description"
                    label="Description"
                    fullWidth
                    multiline
                    rows="4"
                    value={this.props.Description}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('description')}
                />
                <input
                    style={{ display: 'none' }}
                    type='file'
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput} />
                <Button
                    onClick={this.buttonClick}
                    name='Update'
                />
                <Button size="small" color="white" component={Link} to="/itemPage"
                    name='Back'>
                </Button>

            </form >
        );
    }
}

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);

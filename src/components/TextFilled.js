import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import API from '../utils/API'
import TextField from '@material-ui/core/TextField';
import Button from "./Button";
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

    state = {
        productNumber: '',
        productName: '',
        cost: '',
        quantity: '',
        supplier: '',
        category: '',
        minQuantity: '',
        location: '',
        description: ''
    };

    handleChange = name => event => {
        console.log("name: " + name);
        console.log("state1: " + JSON.stringify(this.state))
        console.log("event: " + event.target.value)
        this.setState({
            [name]: event.target.value,

        },
            () => console.log("state1: " + JSON.stringify(this.state))
        );
    };

    buttonClick = () => {
        console.log("starting to send items")
        API.saveItem({
            productNumber: this.state.productNumber,
            productName: this.state.productName,
            cost: this.state.cost,
            quantity: this.state.quantity,
            supplier: this.state.supplier,
            category: this.state.category,
            minQuantity: this.state.minQuantity,
            location: this.state.location,
            description: this.state.description
        })
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="on">

                <TextField
                    required
                    id="ProductNumber"
                    label="Product Number"
                    placeholder="#"
                    className={classes.textField}
                    onChange={this.handleChange('productNumber')}
                    margin="normal"
                    variant="filled"

                />
                <TextField
                    required
                    id="ProductName"
                    label="Product Name"
                    placeholder="Name"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('productName')}
                />
                <TextField
                    required
                    id="Cost"
                    label="Cost"
                    placeholder="$"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('cost')}
                />
                <TextField
                    required
                    id="Quantity"
                    label="Quantity"
                    placeholder="#"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('quantity')}
                />
                <TextField
                    id="Supplier"
                    label="Supplier"
                    placeholder="Name"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('supplier')}
                />
                <TextField
                    id="Category"
                    label="Category"
                    placeholder="Name"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('category')}
                />
                <TextField
                    id="MinQuantity"
                    label="minQuantity"
                    placeholder="#"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('minQuantity')}
                /><TextField
                    id="Location"
                    label="Location"
                    placeholder="#"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('location')}
                />
                <TextField
                    required
                    id="Description"
                    label="Description"
                    fullWidth
                    multiline
                    rows="4"
                    placeholder="Description"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={this.handleChange('description')}
                />
                <UpLoad>
                    Load Picture
                </UpLoad>
                <Button
                    onClick={this.buttonClick}

                >
                    Submit
                </Button>

            </form>
        );
    }
}

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);

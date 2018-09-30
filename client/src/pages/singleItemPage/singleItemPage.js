import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import API from '../../utils/API'
import TextField from '@material-ui/core/TextField';
import Button from "../../components/Button";
import UpLoad from "../../components/upLoad"
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom'

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


class outlinedTextFields extends React.Component {

    state = {
        PN: 'qwerty',
        Name: '',
        Cost: '1',
        Quantity: '1',
        Supplier: '',
        Category: '',
        MinQuantity: '',
        lat: '',
        long: '',
        Description: 'first'

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

    addProduct = () => {
        const { product } = this.state;
        console.log("this is " + product)

    }

    buttonClick = () => {
        console.log("starting to send items")

        const product = this.state;
        console.log("this is " + product.PN)
        fetch(`http://localhost:4000/products/add?PN=${product.PN}&Cost=${product.Cost}&Description=${product.Description}&Quantity=${product.Quantity}
        &MinQuantity=${product.MinQuantity}&Supplier=${product.Supplier}&Category=${product.Category}&Lat=${product.Lat}&Lon=${product.Lon}
        `)
            .then(this.getProducts)
            .catch(err => console.error(err))
    };

    remoteItem = () => {
        console.log("removed!!!")
    }
    render() {
        console.log(JSON.stringify(this.props.classes))
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <form className={classes.container} noValidate autoComplete="on">
                    <Button
                        onClick={this.remoteItem}
                        name='Delete'
                        color="secondary" />

                    <Button
                        onClick={this.buttonClick}
                        color="#2a3eb1"
                        name='Update'
                    />
                    <Button
                        color="primary"
                        component={Link} to="/itemPage"
                        name='Back'>
                    </Button>
                    <TextField
                        required
                        id="PN"
                        label="Product Number"
                        value={this.state.PN}
                        className={classes.textField}
                        fullWidth
                        onChange={this.handleChange('PN')}
                        margin="normal"
                        variant="outlined"

                    />
                    <TextField
                        required
                        id="Cost"
                        label="Cost"
                        value={this.state.Cost}
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('Cost')}
                    />
                    <TextField
                        required
                        id="Quantity"
                        label="Quantity"
                        value={this.state.Quantity}
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('Quantity')}
                    />
                    <TextField
                        id="Supplier"
                        label="Supplier"
                        value={this.state.Supplier}
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('Supplier')}
                    />
                    <TextField
                        id="Category"
                        label="Category"
                        value={this.state.Category}
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('Category')}
                    />
                    <TextField
                        id="MinQuantity"
                        label="MinQuantity"
                        value={this.state.MinQuantity}
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('MinQuantity')}
                    /><TextField
                        required
                        id="Description"
                        label="Description"
                        fullWidth
                        multiline
                        rows="4"
                        value={this.state.Description}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('Description')}
                    />
                </form >
            </Card>
        );
    }
}

outlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(outlinedTextFields);

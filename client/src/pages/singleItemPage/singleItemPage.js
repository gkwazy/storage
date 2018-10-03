import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import API from '../../utils/API'

let itemNumberWanted;

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
        PN: itemNumberWanted,
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

    componentDidMount() {
        this.getURL()
        API.getSingleItem(itemNumberWanted).then(res =>
            this.setState({
                PN: res.PN,
                Name: res.Name,
                Cost: res.Cost,
                Quantity: res.Quantity,
                Supplier: res.Supplier,
                Category: res.Category,
                MinQuantity: res.MinQuantity,
                lat: res.lat,
                long: res.long,
                Description: res.Description
            })
        )
    }

    getURL = () => {

        let res = (this.props.location.pathname).split("/");
        itemNumberWanted = res[res.length - 1]
        console.log("number " + itemNumberWanted)


        // for (i = this.props.location.pathname.length; i < 0; i--) {
        //     if (this.props.location.pathname[i] != "/") {
        //         itemNumberWanted.push(this.props.location.pathname[i])
        //     } else {
        //         itemNumberWanted = reverse(itemNumberWanted)
        //         i = 0;
        //     }
        // };

    }

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

        const { classes } = this.props;
        console.log(JSON.stringify(this.props.location.pathname));

        return (
            <div>

                <Card className={classes.card}>
                    <form className={classes.container} noValidate autoComplete="on">

                        <Grid
                            item spacing={8}>
                            <Button
                                onClick={this.remoteItem}
                                name='Delete'
                                color="secondary"
                                variant="contained" >
                                Delete
                        </Button>
                            {"  "}
                            <Button
                                onClick={this.buttonClick}
                                variant="contained"
                                color="primary"
                                name='Update'>
                                Update
                        </Button>
                            {"  "}
                            <Button

                                component={Link} to="/itemPage"
                                name='Back'
                                variant="contained">
                                Back
                        </Button>

                        </Grid>

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
                </Card >
            </div>
        );
    }
}

outlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(outlinedTextFields);

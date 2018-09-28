import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import API from '../../utils/API'
import TextField from '@material-ui/core/TextField';
import Button from "../../components/Button";
import UpLoad from "../../components/upLoad"
import Card from '@material-ui/core/Card';

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
        PN: 'qwerty',
        Name: '',
        Cost: '1',
        Quantity: '1',
        Supplier: '',
        Category: '',
        MinQuantity: '',
        location: '',
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
        // fetch(`http://localhost:4000/products/add?PN=${product.PN}&Cost=${product.Cost}&Description=${product.Description}&Quantity=${product.Quantity}`)
        // // .then(this.getProducts)
        // .catch(err => console.error(err))
    }

    buttonClick = () => {
        console.log("starting to send items")
        // API.saveItem({
        //     PN: this.state.PN,
        //     Name: this.state.Name,
        //     Cost: this.state.Cost,
        //     Quantity: this.state.Quantity,
        //     Supplier: this.state.Supplier,
        //     Category: this.state.Category,
        //     MinQuantity: this.state.MinQuantity,
        //     location: this.state.location,
        //     Description: this.state.Description,
        //     picture: this.picture
        // })
        const product = this.state;
        console.log("this is " + product.PN)
        fetch(`http://localhost:4000/products/add?PN=${product.PN}&Cost=${product.Cost}&Description=${product.Description}&Quantity=${product.Quantity}
        &MinQuantity=${product.MinQuantity}&Supplier=${product.Supplier}&Category=${product.Category}&Lat=${product.Lat}&Lon=${product.Lon}
        `)
            .then(this.getProducts)
            .catch(err => console.error(err))
    };

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    showPosition = (position) => {
        console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
    };
    geoFindMe = () => {
        var output = document.getElementById("out");

        if (!navigator.geolocation) {
            // output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("Latitude is " + latitude + "Longitude is " + longitude)

            // output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

            var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

            // output.appendChild(img);
        }

        function error() {
            // output.innerHTML = "Unable to retrieve your location";
        }

        // output.innerHTML = "<p>Locating…</p>";

        navigator.geolocation.getCurrentPosition(success, error);
    }
    render() {
        console.log(JSON.stringify(this.props.classes))
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <form className={classes.container} noValidate autoComplete="on">

                    <TextField
                        required
                        id="PN"
                        label="Product Number"
                        placeholder="#"
                        className={classes.textField}
                        onChange={this.handleChange('PN')}
                        margin="normal"
                        variant="filled"

                    />
                    <TextField
                        required
                        id="Name"
                        label="Product Name"
                        placeholder="Name"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('Name')}
                    />
                    <TextField
                        required
                        id="Cost"
                        label="Cost"
                        placeholder="$"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('Cost')}
                    />
                    <TextField
                        required
                        id="Quantity"
                        label="Quantity"
                        placeholder="#"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('Quantity')}
                    />
                    <TextField
                        id="Supplier"
                        label="Supplier"
                        placeholder="Name"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('Supplier')}
                    />
                    <TextField
                        id="Category"
                        label="Category"
                        placeholder="Name"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('Category')}
                    />
                    <TextField
                        id="MinQuantity"
                        label="MinQuantity"
                        placeholder="#"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('MinQuantity')}
                    /><TextField
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
                        onChange={this.handleChange('Description')}
                    />
                    <Button
                        onClick={this.geoFindMe}
                        name='Load Location' />
                    <Button
                        onClick={this.buttonClick}
                        name='Submit'
                    />

                </form >
            </Card>
        );
    }
}

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);

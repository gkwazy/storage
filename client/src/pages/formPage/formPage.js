import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
// import UpLoad from "../../components/upLoad"
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
        PN: 'itworkssssss',
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



    buttonClick = () => {
        const product = this.state;
        if (product.PN === '' || product.Cost === '' || product.Name === '' || product.Quantity === "" || product.Description === '') {
            alert("Please fill in reaquired fields mark with * before submiting")
        } else {
            console.log("this is " + product.PN)
            fetch(`http://localhost:4000/products/add?PN=${product.PN}&Cost=${product.Cost}&Description=${product.Description}&Quantity=${product.Quantity}
        &MinQuantity=${product.MinQuantity}&Supplier=${product.Supplier}&Category=${product.Category}&Lat=${product.Lat}&Lon=${product.Lon}
        `)
                .then(this.getProducts)
                .catch(err => console.error(err))
        }
    };

    geoFindMe = () => {


        if (!navigator.geolocation) {
            // output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("Latitude is " + latitude + "Longitude is " + longitude)
            this.setState({
                lat: latitude,
                long: longitude
            })
        }

        function error() {
            // output.innerHTML = "Unable to retrieve your location";
        }

        // output.innerHTML = "<p>Locating…</p>";

        navigator.geolocation.getCurrentPosition(success.bind(this), error);
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
                        fullWidth
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
                        fullWidth
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
                        fullWidth
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
                        fullWidth
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('Quantity')}
                    />
                    <TextField
                        id="Supplier"
                        label="Supplier"
                        placeholder="Name"
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('Supplier')}
                    />
                    <TextField
                        id="Category"
                        label="Category"
                        placeholder="Name"
                        className={classes.textField}
                        fullWidth
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
                        fullWidth
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
                        name='Load Location'
                        variant="contained"
                        color="primary">
                        Load Loacation
                        </Button>
                    <Button
                        onClick={this.buttonClick}
                        name='Submit'
                        variant="contained">
                        Submit
                    </Button>

                </form >
            </Card>
        );
    }
}

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);

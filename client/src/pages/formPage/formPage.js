import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import API from '../../utils/API'
import TextField from '@material-ui/core/TextField';
import Button from "../../components/Button";
// import UpLoad from "../../components/upLoad"
import Card from '@material-ui/core/Card';
import AppBar from "../../components/AppBar";


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
        Quantity: 1,
        Supplier: 'place',
        Category: 'stuff',
        MinQuantity: 2,
        location: '',
        Description: 'first',
        picture: ''
        
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        },
            () => console.log("state1: " + JSON.stringify(this.state))
        );
    };


    buttonClick = () => {
  
          API.addItem({
            PN: this.state.PN,
            Cost: this.state.Cost,
            Description: this.state.Description,
            Quantity: this.state.Quantity,
            MinQuantity: this.state.MinQuantity,
            Supplier: this.state.Supplier,
            Category: this.state.Category,
            Name: this.state.Name
          })
            .then(console.log("SUCCESS"))
            .catch(err => console.log(err));

    };

    fileSelectedHandler = event => {
        console.log(event.target.files[0])
        this.setState({
            picture: event.target.files[0]

        },
            () => console.log("state3: " + JSON.stringify(this.state.picture))
        );
    };

    render() {


        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                  <AppBar/>
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
                <input
                    style={{ display: 'none' }}
                    type='file'
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput} />
                <Button
                    onClick={() => this.fileInput.click()}
                    name='Up Load Image' />
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

import React, { Component } from 'react';
import ItemCard from "../../components/itemCard"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid"
import Input from '@material-ui/core/Input';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import item from "../../itemTest.json";

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

class ItemPage extends React.Component {

    state = {

        products: [],
        itemCards: '',
        item


    };

    componentDidMount() {
        this.getProducts()

    }

    getProducts = _ => {
        fetch('http://localhost:4001/products')
            .then(response => response.json())
            .then(response => this.setState({ products: response.data }))
            .then(console.log(this.state.products))
            .catch(err => console.error(err))


    }

    loadSearch = (e) => {
        if (e.keyCode == 13) {
            this.setState({
                itemCards: (
                    < div >
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item xs={12}>
                                </Grid>
                                {this.state.item.map(item =>
                                    <Grid item s>
                                        <ItemCard
                                            PN={item.PN}
                                            Name={item.Name}
                                            cost={item.cost}
                                            Quantity={item.Quantity}
                                            Supplier={item.Supplier}
                                            Category={item.Category}
                                            minQuantity={item.minQuantity}
                                            lat={item.lat}
                                            lon={item.lon}
                                            Description={item.Description}
                                        />
                                    </Grid>
                                )}

                            </Grid>
                        </Grid>
                    </div >
                )
            })
        }
    }
    render() {
        console.log(JSON.stringify(this.props))
        const { classes } = this.props;
        return (
            <div>


                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Card className={classes.card}>

                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" variant="title"            >
                                Enter the Item Number or the Name of the item
                    </Typography>

                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <Input
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        onKeyDown={this.loadSearch}
                                    />
                                </div>
                                <div>
                                    {this.state.itemCards}
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>

            </div>

        );
    }
}
ItemPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ItemPage);
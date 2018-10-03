import React from 'react';
import ItemCard from "../../components/itemCard"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid"
import Input from '@material-ui/core/Input';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CategoryCard from "../../components/categoryCard";
import item from "../../itemTest.json";
import API from "../../utils/API"
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
        category: '',
        query: [],
        objCards: '',
        item,
        needInstructions: ''

    };

    categorySearch = () => {

        if (this.state.category === '') {
            this.setState({
                needInstructions: "category",
                objCards: (
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
                                        <CategoryCard
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
                                            loadSearch={this.loadSearch.bind(this, item.Category)}

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


    componentDidMount() {
        this.getProducts()
        this.categorySearch()
    }

    //   getProducts = _ => {  fetch('http://localhost:4001/api/get')
    getProducts = _ => {
        fetch('http://www.stockandtrack.com/api/get')
            .then(response => response.json())
            .then(response => this.setState({ products: response }))
            .catch(err => console.error(err))
    }

    loadSearch = (itemCategory) => {
        console.log(itemCategory)
        API.GrabItemByCategory(itemCategory).then(
            this.setState({
                category: itemCategory,
                needInstructions: "items",
                objCards: (
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
            }))
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography className={classes.title} color="textSecondary" variant="title"            >
                    Your list of {this.state.needInstructions}.
                    </Typography>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Card className={classes.card}>

                        <CardContent>
                            <div className={classes.search}>
                                <div>
                                    {this.state.objCards}
                                </div>
                            </div>
                        </CardContent>
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
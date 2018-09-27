import React, { Component } from 'react';
import ItemCard from "../../components/itemCard"
import Grid from "@material-ui/core/Grid"
// import item from "../../itemTest.json";



class ItemPage extends Component {

    state = {

        products: []

    };

    componentDidMount() {
        this.getProducts()

    }

    getProducts = _ => {
        fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(response => this.setState({ products: response.data }))
        .then(console.log(this.state.products))
        .catch(err => console.error(err))


    }

    render() {
        // console.log(this.state.item[0].productName)
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                    </Grid>
                    {this.state.products.map(item =>
                        <Grid item s>
                            <ItemCard
                                PN={item.PN}
                                Name={item.Name}
                                Cost={item.cost}
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

            </div>
        );
    }
}
export default ItemPage;
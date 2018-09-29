import React, { Component } from 'react';
import ItemCard from "../../components/itemCard"
import Grid from "@material-ui/core/Grid"
import AppBar from "../../components/AppBar"
// import item from "../../itemTest.json";



class ItemPage extends Component {

    state = {

        products: [],
        query: []

    };

    componentDidMount() {
        this.getProducts()

      }
    
    //   getProducts = _ => {  fetch('http://localhost:4001/products')
       getProducts = _ => {  fetch('www.stockandtrack.com/products')
    //    .then(response => response.json())
    .then(response => response.text())
    .then(text => console.log(text))
    //    .then(response => this.setState({ products: response.data }))
      .catch(err => console.error(err))
    }

    search = (e) => {
        console.log(e)
    }

    render() {
        // console.log(this.state.item[0].productName)
        return (
            <div>
                 <AppBar query = {this.search.bind(this, "IT WORKS")}/>
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
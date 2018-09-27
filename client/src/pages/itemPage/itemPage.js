import React, { Component } from 'react';
import ItemCard from "../../components/itemCard"
import Grid from "@material-ui/core/Grid"
import item from "../../itemTest.json";



class ItemPage extends Component {

    state = {
        item
    };

    render() {
        console.log(this.state.item[0].productName)
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                    </Grid>
                    {this.state.item.map(item =>
                        <Grid item s>
                            <ItemCard
                                PN={item.productNumber}
                                ProductName={item.productName}
                                Cost={item.cost}
                                Quantity={item.quantity}
                                Supplier={item.supplier}
                                Category={item.category}
                                MinQuantity={item.minQuantity}
                                Location={item.location}
                                Description={item.description}
                            />
                        </Grid>
                    )}

                </Grid>

            </div>
        );
    }
}
export default ItemPage;
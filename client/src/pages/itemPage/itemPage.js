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
                                productNumber={item.productNumber}
                                productName={item.productName}
                                cost={item.cost}
                                quantity={item.quantity}
                                supplier={item.supplier}
                                category={item.category}
                                minQuantity={item.minQuantity}
                                location={item.location}
                                description={item.description}
                                picture={item.picture}
                            />
                            </Grid>
                        )}
                    
                </Grid>

            </div>
        );
    }
}
export default ItemPage;
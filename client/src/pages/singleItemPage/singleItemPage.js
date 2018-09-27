import React, { Component } from 'react';
import SingleItemCard from "../../components/singleItemCard"
import Grid from "@material-ui/core/Grid"
import item from "../../itemTest.json";



class SingleItemPage extends Component {

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
                     <Grid item s justify='center'>
                            <SingleItemCard
                                productNumber={item.productNumber}
                                productName={item.productName}
                                cost={item.cost}
                                quantity={item.quantity}
                                supplier={item.supplier}
                                category={item.category}
                                minQuantity={item.minQuantity}
                                location={item.location}
                                description={item.description}

                            />
                            </Grid>
                        )}
                    
                </Grid>

            </div>
        );
    }
}
export default SingleItemPage;
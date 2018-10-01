import axios from "axios";

// This is where we are needing to add the route to the back end. or you can
//change the fucntion in src/components/TextFilled line 56 to match where it
//needs to send. 
export default {
    saveItem: function (query) {
        return console.log("Item was saved" + JSON.stringify(query));
    },

    addProduct: function (state) {
        console.log("SHIT WORKS")
        // const { product } = this.state;
        console.log(this.state)
        // fetch(`http://localhost:4000/products/add?PN=${this.state.productNumber}&Cost=${this.state.cost}&Description=${this.state.description}&Quantity=${this.state.quantity}`)
        // .then(this.getProducts)
        // .catch(err => console.error(err))
    }
};

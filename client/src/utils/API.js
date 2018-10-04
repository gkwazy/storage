import axios from "axios";

// This is where we are needing to add the route to the back end. or you can
//change the fucntion in src/components/TextFilled line 56 to match where it
//needs to send. 
export default {
    addItem: function (itemData) {
        // return axios.post('http://localhost:4001/api/post', itemData)
        return axios.post('http://www.stockandtrack.com/api/post', itemData)
    },
    getItemByCategory: function (category) {
        let wantedSearch = 'http://www.stockandtrack.com/api/category/' + category;
        return axios.get(wantedSearch, category)
    },
    getSingleItem: function (itemNumber) {
        let wantedSearch = 'http://www.stockandtrack.com/api/' + itemNumber;
        return axios.get(wantedSearch, itemNumber)
    },
    getCategoryList: function () {
        let wantedSearch = ('http://www.stockandtrack.com/api/get')
        return axios.get(wantedSearch)
    },
    itemDelete: function (itemNumber) {
        let wantedSearch = ('http://www.stockandtrack.com/api/delete/' + itemNumber)
        return axios.delete(wantedSearch);
    }
};

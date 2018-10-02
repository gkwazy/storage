import axios from "axios";

// This is where we are needing to add the route to the back end. or you can
//change the fucntion in src/components/TextFilled line 56 to match where it
//needs to send. 
export default {
    addItem: function (itemData) {
        // return axios.post('http://localhost:4001/api/post', itemData)
        return axios.post('http://stockandtrack.com/api/post', itemData)

    }
 };

import axios from "axios";

// This is where we are needing to add the route to the back end. or you can
//change the fucntion in src/components/TextFilled line 56 to match where it
//needs to send. 
export default {
    saveItem: function (query) {
        return console.log("Item was saved" + JSON.stringify(query));
    }
};

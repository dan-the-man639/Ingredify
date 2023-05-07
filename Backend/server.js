import express from 'express';
const app = express();
import bodyParser from "body-parser";
import {checkCondition, queryIngredients, userProfile} from "./subfunctions/main.js";
import {fetchDuplicate} from "./subfunctions/mongo-database.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/endpoint', async function (req, res) {
    const data = req.body;
    const action = req.body.action;
    const condition = req.body.condition;
    const ingredients = req.body.ingredients;
    let username = req.body.username;
    const conditionArray = req.body.conditionArray;
    const consumed = req.body.consumed;
    console.log('Received data:', data);

    let response = "No action received.";
    switch (action) {
        // Input condition and ingredients
        case "condition":
            response = await checkCondition(condition, ingredients);
            break;
        // Input array of ingredients to be described
        case "ingredient":
            response = await queryIngredients(ingredients);
            break;
        case "getProfile":
            response = await fetchDuplicate("username", username.toLowerCase().trim(), "users");
            break;
        case "writeProfile":
            response = await userProfile(username, conditionArray, consumed);
            break;
    }

    res.send(response);
});

app.listen(3001, function() {
    console.log('Server listening at http://127.0.0.1:3001/api/endpoint');
});

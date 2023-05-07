import express from 'express';
const app = express();
import bodyParser from "body-parser";
import {checkCondition, queryIngredients} from "./subfunctions/main.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/endpoint', async function (req, res) {
    const data = req.body;
    const action = req.body.action;
    const condition = req.body.condition;
    const ingredients = req.body.ingredients;
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
    }

    res.send(response);
});

app.listen(3001, function() {
    console.log('Server listening at http://127.0.0.1:3001/api/endpoint');
});

// Change these to your MongoDB database
const mongoDatabase = "apollo";
const mongoDataSource = "Methacks";
const mongoWriteEndPoint = "https://us-east-1.aws.data.mongodb-api.com/app/data-htydr/endpoint/data/v1/action/insertOne";
const mongoReadEndPoint = "https://us-east-1.aws.data.mongodb-api.com/app/data-htydr/endpoint/data/v1/action/find";
const mongoUpdateEndPoint = "https://us-east-1.aws.data.mongodb-api.com/app/data-htydr/endpoint/data/v1/action/updateOne";


import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const mongo_key = process.env.MONGO_API_KEY;

// writes the information to MongoDB
export async function writeMongo(condition, permitted, unpermitted, mongoCollection, ingredient, health, filler, taste, colour, description) {
    let data = JSON.stringify({
        "collection": mongoCollection,
        "database": mongoDatabase,
        "dataSource": mongoDataSource,
        "document": {
            condition: condition,
            permitted: permitted,
            unpermitted: unpermitted,
            ingredient: ingredient,
            health: health,
            filler: filler,
            taste: taste,
            colour: colour,
            description: description,
        }
    });

    let config = {
        method: 'post',
        url: mongoWriteEndPoint,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': mongo_key,
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            console.log("wrote to Mongo")
            return JSON.stringify(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

// fetches information from database
export async function fetchDuplicate(filterName, filterValue, mongoCollection) {
    console.log("Filter name: " + filterName);
    console.log("Filter value: " + filterValue);
    console.log("Mongo collection: " + mongoCollection);
    var data = JSON.stringify({
        "collection": mongoCollection,
        "database": mongoDatabase,
        "dataSource": mongoDataSource,
        "filter": {[filterName]: filterValue},
        "limit": 5
    });

    var config = {
        method: 'post',
        url: mongoReadEndPoint,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': mongo_key,
        },
        data: data
    };
    const res = await axios(config);
    // return JSON.stringify(res.data);
    return res.data;
}

export async function updateMongo(filterName, filterValue, updateName, updateValue, mongoCollection) {
    var data = JSON.stringify({
        "collection": mongoCollection,
        "database": mongoDatabase,
        "dataSource": mongoDataSource,
        "filter": {[filterName]: filterValue},
        "update": {
            "$set": {
                [updateName]: updateValue
            }
        }
    });

    var config = {
        method: 'post',
        url: mongoUpdateEndPoint,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': mongo_key,
        },
        data: data
    };
    // const res = await axios(config);
    // // return JSON.stringify(res.data);
    // return res.data;
    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            console.log("Updated Mongo")
            return JSON.stringify(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}
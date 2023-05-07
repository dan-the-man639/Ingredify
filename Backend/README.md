# Set up
```
npm install

npm start
```

For Docker
https://nodejs.org/en/docs/guides/nodejs-docker-webapp
https://buddy.works/guides/how-dockerize-node-application
```
docker build . -t <your username>/node-web-app

docker run -p 3001:3001 -d <your username>/node-web-app
```

```
docker ps

docker kill <container id>
```

# API Doucmentation
POST Requests
`http://127.0.0.1:3001/api/endpoint`

## Actions
/condition

Returns `true` if condition allows for consumption of ingredients on list.
Returns `false` if any of the ingredients aren't permitted.

### Request body data in raw JSON
```
{
    "action": "condition",
    "condition": "diabetes",
    "ingredients": ["water", "coconut oil"]
}
```

### Response
```
{
    "canConsume": true
}
```

/ingredient

Returns information on the ingredients.
### Request body data in raw JSON
```
{
    "action": "ingredient",
    "ingredients": ["water", "coconut oil"]
}
```

### Response
```
[
    {
        "ingredient": "water",
        "health": true,
        "filler": true,
        "taste": false,
        "summary": "The ingredient water in food is used for many purposes, such as to prepare food and as a preservative. Water is used to make many other products, such as water-based shampoo, but it is not a good choice for people with skin conditions. It is also used to make certain types of toothpaste and toothpastes, such that they are not too sticky. When the ingredients are mixed together, the mixture is often referred to as a \"water-based\" or \"watery\" toothpaste."
    },
    {
        "ingredient": "coconut oil",
        "health": true,
        "filler": false,
        "taste": false,
        "summary": "Coconut oil is used in the food industry as an ingredient in baking, sautéing, frying, and other cooking techniques. It is also used in the cosmetic industry. Coconut oil is a solid fat that is derived from the coconut palm. It is made by pressing the oil from the meat of the coconut. Coconut oil is a very popular ingredient in the food industry. It is used in many different types of foods. Coconut oil is also used in the cosmetic industry. It is usedThe ingredient coconut oil in food is used for cooking. I was eating breakfast while I was waiting for my friend. Is it okay to eat breakfast at this hour? I will be eating out. I am going to eat out. I am going to eat dinner out. I will be eating out. I will be eating out. I will eat out for dinner. I will eat out for dinner. I willThe ingredient coconut oil in food is used for frying, and also is a primary ingredient in non-dairy creamers. It is also a common ingredient in commercially produced granola, a popular breakfast and snack food. The versatility of coconut oil is evident in its use in baked goods, confections, and desserts."
    }
]
```

/getProfile

Returns the user profile with their information.
### Request body data in raw JSON
```
{
    "action": "getProfile",
    "username": "John Doe"
}
```

### Response
```
{
    "documents": [
        {
            "_id": "6457333d53b8984ac06f4b1c",
            "username": "john doe",
            "conditionArray": [
                "Halal",
                "Vegan"
            ],
            "consumed": {
                "food": "cola",
                "date": "2023-05-07T05:03:11Z"
            }
        }
    ]
}
```

/writeProfile

Returns the profile and information it wrote to the database.
### Request body data in raw JSON
```
{
    "action": "writeProfile",
    "username": "John Doe",
    "conditionArray": ["Halal", "Vegan"],
    "consumed": {
        "food": "cola",
        "date": "2023-05-07T05:03:11Z"
    }
}
```

### Response
```
{
    "username": "john doe",
    "conditionArray": [
        "Halal",
        "Vegan"
    ],
    "consumed": {
        "food": "cola",
        "date": "2023-05-07T05:03:11Z"
    }
}
```

/getFact

Returns a random fact from a predefined array.
### Request body data in raw JSON
```
{
    "action": "getFact"
}
```

### Response
```
{
    "fact": "The paleo diet emphasizes eating whole, unprocessed foods and avoiding grains, legumes, and dairy."
}
```

## Unused
https://dev.to/bjhaid_93/deploy-a-node-js-express-mongodb-api-to-azure-app-service-via-visual-studio-code-58ln
https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?pivots=development-environment-azure-portal&tabs=linux

https://axios-http.com/docs/post_example
https://docs.cohere.com/reference/rerank-1
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

# Calling API
POST Request
`http://127.0.0.1:3001/api/endpoint`

Example body data in raw JSON
```
{
    "action": "ingredient",
    "condition": "diabetes",
    "ingredients": ["water", "coconut oil"]
}
```

## Unused
https://dev.to/bjhaid_93/deploy-a-node-js-express-mongodb-api-to-azure-app-service-via-visual-studio-code-58ln
https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?pivots=development-environment-azure-portal&tabs=linux
# Set up
```
npm install

npm start
```

For Docker
```
docker build . -t <your username>/node-web-app

docker run -p 3002:3001 -d <your username>/node-web-app
```

# Calling API
POST Request
`http://127.0.0.1:3002/api/endpoint`

Example body data in raw JSON
```
{
    "action": "ingredient",
    "condition": "diabetes",
    "ingredients": ["water", "coconut oil"]
}
```
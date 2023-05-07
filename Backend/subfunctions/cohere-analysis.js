import cohere from "cohere-ai";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const cohere_key = process.env.COHERE_API_KEY;
cohere.init(cohere_key);
import healthJson from "../examples/health-examples.json" assert { type: "json"};
const healthExamples = JSON.parse(JSON.stringify(healthJson))
import fillerJson from "../examples/filler-examples.json" assert { type: "json"};
const fillerExamples = JSON.parse(JSON.stringify(fillerJson));
import tasteJson from "../examples/taste-examples.json" assert { type: "json"};
const tasteExamples = JSON.parse(JSON.stringify(tasteJson));

export async function cohereGenerateDescription(ingredient) {
    const response = await cohere.generate({
        prompt: "The ingredient " + ingredient + " in food is used for",
        max_tokens: 100
    });
    return response.body.generations[0].text.replace(/\s+/g,' ').trim();
}

export async function cohereSummarize(input) {
    const response = await cohere.summarize({
        text: input,
    });
    // console.log(response);
    return response.body.summary;
}

export async function cohereClassifyPurpose(purpose, ingredientDescription) {
    let sampleData;
    switch (purpose){
        case "health":
            sampleData = healthExamples;
            break;
        case "filler":
            sampleData = fillerExamples;
            break;
        case "taste":
            sampleData = tasteExamples;
            break;
        // case "colour":
        //     sampleData = colourExamples;
        //     break;
        default:
            sampleData = healthExamples;
            break;
    }
    ingredientDescription = [ingredientDescription];
    const classification = await cohere.classify({
        inputs: ingredientDescription,
        examples: sampleData,
    });
    return classification.body.classifications[0];
}

export async function cohereRerank(query, documents) {
    const {data} = await axios.post('https://api.cohere.ai/v1/rerank', {
        "return_documents": true,
        "model": "rerank-english-v2.0",
        "query": query,
        "documents": documents,
        "top_n": 3
    }, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'authorization': 'Bearer ' + cohere_key
        }
    })
    // console.log(data);
    return data;
}